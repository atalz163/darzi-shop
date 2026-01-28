
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import ClothingType, DesignOption, DesignPortfolio
from .serializers import (
    ClothingTypeSerializer,
    DesignOptionSerializer,
    DesignPortfolioSerializer
)


class ClothingTypeViewSet(viewsets.ModelViewSet):

    queryset = ClothingType.objects.all()
    serializer_class = ClothingTypeSerializer
    permission_classes = [AllowAny]

class DesignOptionViewSet(viewsets.ModelViewSet):
    queryset = DesignOption.objects.all()
    serializer_class = DesignOptionSerializer
    permission_classes = [AllowAny]

class DesignPortfolioViewSet(viewsets.ModelViewSet):
    queryset = DesignPortfolio.objects.all()
    serializer_class = DesignPortfolioSerializer
    permission_classes = [AllowAny]
    
