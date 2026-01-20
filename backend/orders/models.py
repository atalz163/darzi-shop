from django.db import models
from django.contrib.auth.models import User


class Order(models.Model):
    """
    Main order model - represents a customer's tailoring order
    """
    
    # Order identification
    order_number = models.CharField(max_length=20, unique=True, editable=False)
    
    # Optional user relationship (for logged-in customers)
    user = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True,
        related_name='orders'
    )
    
    # Customer contact information (for guest orders)
    customer_name = models.CharField(max_length=255)
    customer_phone = models.CharField(max_length=20)
    customer_email = models.EmailField(blank=True, null=True)
    
    # Shipping address
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    
    # Special instructions
    delivery_notes = models.TextField(blank=True, null=True)
    fabric_notes = models.TextField(blank=True, null=True)
    
    # Order details
    quantity = models.IntegerField(default=1)
    
    # Pricing (we'll add this later when we have pricing logic)
    base_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    
    # Order status
    STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('confirmed', 'Confirmed'),
        ('in_progress', 'In Progress'),
        ('ready', 'Ready for Shipping'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    
    # Dates
    order_date = models.DateTimeField(auto_now_add=True)
    estimated_delivery = models.DateField(null=True, blank=True)
    shipped_at = models.DateTimeField(null=True, blank=True)
    delivered_at = models.DateTimeField(null=True, blank=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']  # Newest orders first
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
    
    def __str__(self):
        return f"{self.order_number} - {self.customer_name}"
    
    def save(self, *args, **kwargs):
        """
        Override save to auto-generate order number
        """
        if not self.order_number:
            # Generate order number: TS-2025-00001
            import datetime
            year = datetime.datetime.now().year
            
            # Get last order number for this year
            last_order = Order.objects.filter(
                order_number__startswith=f'TS-{year}-'
            ).order_by('-order_number').first()
            
            if last_order:
                last_number = int(last_order.order_number.split('-')[-1])
                new_number = last_number + 1
            else:
                new_number = 1
            
            self.order_number = f'TS-{year}-{str(new_number).zfill(5)}'
        
        super().save(*args, **kwargs)




class OrderMeasurement(models.Model):  # Remove "Model" from name
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='measurements')
    # Don't use primary_key=True for OneToOneField, Django handles this automatically
    
    qad = models.DecimalField(max_digits=5, decimal_places=2)
    shana = models.DecimalField(max_digits=5, decimal_places=2)  
    asteen = models.DecimalField(max_digits=5, decimal_places=2)  
    yakhan = models.DecimalField(max_digits=5, decimal_places=2)  
    chaati = models.DecimalField(max_digits=5, decimal_places=2)  
    baghal = models.DecimalField(max_digits=5, decimal_places=2)  
    daman = models.DecimalField(max_digits=5, decimal_places=2)  
    qad_shalwar = models.DecimalField(max_digits=5, decimal_places=2)  
    pacha = models.DecimalField(max_digits=5, decimal_places=2)  
    measurement_unit = models.CharField(max_length=10, default='cm')  
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Measurements for {self.order.order_number}"  
    

class OrderDesign(models.Model):
    SLEEVE_CHOICES = [  
        ('simple', 'Simple'),
        ('open', 'Open'),
        ('qandahari', 'Qandahari')
    ]
    
    COLLAR_CHOICES = [  
        ('circle', 'Circle Collar'),
        ('shirt', 'Shirt Collar'),
        ('indian', 'Indian Collar'),
        ('qasami', 'Qasami Collar')
    ]
    
    SKIRT_CHOICES = [ 
        ('circle', 'Circle'),
        ('square', 'Square')
    ]
    
    PANTS_CHOICES = [  
        ('normal', 'Normal'),
        ('wide', 'Wide'),
        ('narrow', 'Narrow')
    ]
    
    FABRIC_COLORS = [
        ('white', 'White'),
        ('beige', 'Beige'),
        ('black', 'Black'),
        ('gray', 'Gray'),
        ('navy_blue', 'Navy Blue'),
        ('cream', 'Cream'),
        ('sky_blue', 'Sky Blue'),
        ('charcoal', 'Charcoal'),
    ]
    
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='design')
    sleeve_style = models.CharField(max_length=20, choices=SLEEVE_CHOICES)  
    collar_type = models.CharField(max_length=20, choices=COLLAR_CHOICES)  
    has_front_pocket = models.BooleanField(default=False)  
    has_side_pockets = models.BooleanField(default=False) 
    skirt_style = models.CharField(max_length=20, choices=SKIRT_CHOICES)  
    pants_style = models.CharField(max_length=20, choices=PANTS_CHOICES)  
    has_pants_pocket = models.BooleanField(default=False)  
    fabric_color = models.CharField(max_length=20, choices=FABRIC_COLORS)  
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Design for {self.order.order_number}"

class OrderStatusHistory(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='status_history')
    old_status = models.CharField(max_length=20, blank=True, null=True)  
    new_status = models.CharField(max_length=20)  
    changed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  
    notes = models.TextField(blank=True, null=True) 
    changed_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-changed_at']
        verbose_name = 'Status History'
        verbose_name_plural = 'Status Histories'
    
    def __str__(self):
        return f"{self.order.order_number}: {self.old_status} → {self.new_status}"

class DesignPortfolio(models.Model):
    title = models.CharField(max_length=255)  
    title_dari = models.CharField(max_length=255)  
    description = models.TextField(blank=True, null=True) 
    image = models.ImageField(upload_to='portfolio/') 
    is_featured = models.BooleanField(default=False)  
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['display_order', '-created_at']
        verbose_name = 'Design Portfolio'
        verbose_name_plural = 'Design Portfolio'
    
    def __str__(self):
        return self.title
    

class ClothingType(models.Model):
    name = models.CharField(max_length=100)
    name_dari = models.CharField(max_length=100)
    name_pashto = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
class DesignOption(models.Model):
    CATEGORY_CHOICES = [
        ('sleeve', 'Sleeve Style'),
        ('collar', 'Collar Type'),
        ('pocket', 'Pocket Style'),
    ]
    
    clothing_type = models.ForeignKey(ClothingType, on_delete=models.CASCADE, related_name='design_options')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    name = models.CharField(max_length=100)
    name_dari = models.CharField(max_length=100)
    image = models.ImageField(upload_to='design_options/', blank=True, null=True)
    additional_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['category', 'name']
    
    def __str__(self):
        return f"{self.category}: {self.name}"