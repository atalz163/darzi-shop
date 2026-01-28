from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet

# Create a router
router = DefaultRouter()

# Register ViewSets with the router
router.register(r'orders', OrderViewSet, basename='order')

# The router automatically generates URL patterns
urlpatterns = [
    path('', include(router.urls)),
]

