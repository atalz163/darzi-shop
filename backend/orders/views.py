from django.shortcuts import render


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
    Automatically provides: list, create, retrieve, update, destroy
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]  # For now, anyone can access
    
    # Custom ordering - newest orders first
    def get_queryset(self):
        return Order.objects.all().order_by('-created_at')
    
    # Custom action for tracking orders by order number
    @action(detail=False, methods=['get'], url_path='track/(?P<order_number>[^/.]+)')
    def track_order(self, request, order_number=None):
        """
        Custom endpoint: GET /api/orders/track/TS-2025-00001/
        Allows tracking order by order number (not ID)
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