from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Order, OrderMeasurement, OrderDesign, OrderStatusHistory
from .serializers import (
    OrderSerializer, 
    OrderMeasurementSerializer,
    OrderDesignSerializer,
    OrderStatusHistorySerializer
)


class OrderViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Order model
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        return Order.objects.all().order_by('-created_at')
    
    def create(self, request, *args, **kwargs):
        """
        Override create to add debug logging
        """
        # Print what we received
        print("=" * 50)
        print("Received data:", request.data)
        print("=" * 50)
        
        # Validate with serializer
        serializer = self.get_serializer(data=request.data)
        
        # Check if valid
        if not serializer.is_valid():
            print("Validation errors:", serializer.errors)
            print("=" * 50)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        # If valid, create the order
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    @action(detail=False, methods=['get'], url_path='track/(?P<order_number>[^/.]+)')
    def track_order(self, request, order_number=None):
        """
        Track order by order number
        """
        try:
            order = Order.objects.get(order_number=order_number)
            serializer = self.get_serializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response(
                {'error': 'Order not found'},
                status=status.HTTP_404_NOT_FOUND
            )