from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClothingTypeViewSet, DesignOptionViewSet, DesignPortfolioViewSet


router = DefaultRouter()


router.register(r'clothing-types', ClothingTypeViewSet, basename='clothingtype')
router.register(r'design-options', DesignOptionViewSet, basename = 'designoption')
router.register(r'designs', DesignPortfolioViewSet, basename='designportfolio')


urlpatterns = [
    path('', include(router.urls)),
]