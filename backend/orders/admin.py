from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Order, OrderMeasurement, OrderDesign, OrderStatusHistory


# Inline for OrderMeasurement (shows within Order detail page)
class OrderMeasurementInline(admin.StackedInline):
    model = OrderMeasurement
    extra = 0  # Don't show extra empty forms
    can_delete = False


# Inline for OrderDesign
class OrderDesignInline(admin.StackedInline):
    model = OrderDesign
    extra = 0
    can_delete = False


# Inline for OrderStatusHistory
class OrderStatusHistoryInline(admin.TabularInline):
    model = OrderStatusHistory
    extra = 0
    readonly_fields = ('old_status', 'new_status', 'changed_by', 'changed_at')
    can_delete = False


# Main Order Admin
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_number', 'customer_name', 'customer_phone', 'status', 'order_date', 'quantity')
    list_filter = ('status', 'order_date')
    search_fields = ('order_number', 'customer_name', 'customer_phone', 'customer_email')
    readonly_fields = ('order_number', 'order_date', 'created_at', 'updated_at')
    
    inlines = [OrderMeasurementInline, OrderDesignInline, OrderStatusHistoryInline]
    
    fieldsets = (
        ('Order Information', {
            'fields': ('order_number', 'status', 'quantity', 'order_date')
        }),
        ('Customer Information', {
            'fields': ('customer_name', 'customer_phone', 'customer_email')
        }),
        ('Shipping Address', {
            'fields': ('address_line1', 'address_line2', 'city', 'state', 'postal_code')
        }),
        ('Special Instructions', {
            'fields': ('delivery_notes', 'fabric_notes'),
            'classes': ('collapse',)  # Make this section collapsible
        }),
        ('Pricing', {
            'fields': ('base_price', 'total_price')
        }),
        ('Delivery Dates', {
            'fields': ('estimated_delivery', 'shipped_at', 'delivered_at')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


# Standalone registration for other models (if you want to see them separately)
@admin.register(OrderMeasurement)
class OrderMeasurementAdmin(admin.ModelAdmin):
    list_display = ('order', 'qad', 'shana', 'chaati', 'measurement_unit')
    search_fields = ('order__order_number',)


@admin.register(OrderDesign)
class OrderDesignAdmin(admin.ModelAdmin):
    list_display = ('order', 'sleeve_style', 'collar_type', 'fabric_color')
    search_fields = ('order__order_number',)


@admin.register(OrderStatusHistory)
class OrderStatusHistoryAdmin(admin.ModelAdmin):
    list_display = ('order', 'old_status', 'new_status', 'changed_by', 'changed_at')
    list_filter = ('new_status', 'changed_at')
    search_fields = ('order__order_number',)