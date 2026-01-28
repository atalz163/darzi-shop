from django.db import models


class ClothingType(models.Model):
    """
    Types of clothing we offer (Shirt/Kameez, Pants/Shalwar)
    """
    name = models.CharField(max_length=100)
    name_dari = models.CharField(max_length=100)
    name_pashto = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Clothing Type'
        verbose_name_plural = 'Clothing Types'
    
    def __str__(self):
        return self.name

class DesignOption(models.Model):
    """
    Design options for clothing (sleeve styles, collars, etc.)
    """
    CATEGORY_CHOICES = [
        ('sleeve', 'Sleeve Style'),
        ('collar', 'Collar Type'),
        ('pocket', 'Pocket Style'),
    ]
    
    clothing_type = models.ForeignKey(
        ClothingType, 
        on_delete=models.CASCADE, 
        related_name='design_options'
    )
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    name = models.CharField(max_length=100)
    name_dari = models.CharField(max_length=100)
    image = models.ImageField(upload_to='design_options/', blank=True, null=True)
    additional_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['category', 'name']
        verbose_name = 'Design Option'
        verbose_name_plural = 'Design Options'
    
    def __str__(self):
        return f"{self.category}: {self.name}"


class DesignPortfolio(models.Model):
    """
    Portfolio/Gallery designs shown on the Designs page
    """
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