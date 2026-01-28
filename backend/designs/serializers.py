from rest_framework import serializers
from .models import ClothingType, DesignOption, DesignPortfolio


class ClothingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingType
        fields = [
            'id', 'name', 'name_dari', 'name_pashto', 'description', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class DesignOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignOption
        fields = [
            'id', 'name', 'name_dari', 'image', 'category', 
            'clothing_type', 'additional_price', 'is_active', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class DesignPortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignPortfolio
        fields = [
            'id', 'title', 'title_dari', 'description', 'image', 
            'is_featured', 'display_order', 'is_active', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']