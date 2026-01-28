from rest_framework import serializers
from .models import Order, OrderMeasurement, OrderDesign, OrderStatusHistory


class OrderMeasurementSerializer(serializers.ModelSerializer):
    """
    Serializer for OrderMeasurement model
    Converts measurement data to/from JSON
    """
    class Meta:
        model = OrderMeasurement
        fields = [
            'qad', 'shana', 'asteen', 'yakhan', 'chaati',
            'baghal', 'daman', 'qad_shalwar', 'pacha', 'measurement_unit'
        ]
        # All fields are required by default
        # You can make optional with: extra_kwargs = {'field_name': {'required': False}}


class OrderDesignSerializer(serializers.ModelSerializer):
    """
    Serializer for OrderDesign model
    Converts design selections to/from JSON
    """
    class Meta:
        model = OrderDesign
        fields = [
            'sleeve_style', 'collar_type', 'has_front_pocket',
            'has_side_pockets', 'skirt_style', 'pants_style',
            'has_pants_pocket', 'fabric_color'
        ]


class OrderStatusHistorySerializer(serializers.ModelSerializer):
    """
    Serializer for order status history
    Shows who changed status and when
    """
    class Meta:
        model = OrderStatusHistory
        fields = ['old_status', 'new_status', 'changed_by', 'notes', 'changed_at']
        read_only_fields = ['changed_at']  # Auto-generated, don't accept from user


class OrderSerializer(serializers.ModelSerializer):
    """
    Main Order serializer
    Includes nested serializers for measurements and designs
    """
    # Nested serializers - will show measurement/design data inside order
    measurements = OrderMeasurementSerializer()
    design = OrderDesignSerializer()
    status_history = OrderStatusHistorySerializer(many=True, read_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'customer_name', 'customer_phone',
            'customer_email', 'address_line1', 'address_line2',
            'city', 'province', 'postal_code', 'delivery_notes',
            'fabric_notes', 'quantity', 'status', 'order_date',
            'estimated_delivery', 'measurements', 'design', 'status_history'
        ]
        read_only_fields = ['id', 'order_number', 'order_date', 'status_history']
    
    def create(self, validated_data):
        """
        Custom create method to handle nested data
        When creating order, also create measurements and design
        """
        # Extract nested data
        measurements_data = validated_data.pop('measurements')
        design_data = validated_data.pop('design')
        
        # Create the order first
        order = Order.objects.create(**validated_data)
        
        # Create measurements linked to this order
        OrderMeasurement.objects.create(order=order, **measurements_data)
        
        # Create design linked to this order
        OrderDesign.objects.create(order=order, **design_data)
        
        return order