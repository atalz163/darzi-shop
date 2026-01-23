from django.contrib import admin
from .models import ClothingType, DesignOption, DesignPortfolio


@admin.register(ClothingType)
class ClothingTypeAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_dari', 'created_at')
    search_fields = ('name', 'name_dari')


@admin.register(DesignOption)
class DesignOptionAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'clothing_type', 'additional_price', 'is_active')
    list_filter = ('category', 'clothing_type', 'is_active')
    search_fields = ('name', 'name_dari')
    list_editable = ('is_active',)  # Can toggle active status directly from list


@admin.register(DesignPortfolio)
class DesignPortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_featured', 'display_order', 'is_active', 'created_at')
    list_filter = ('is_featured', 'is_active')
    search_fields = ('title', 'title_dari')
    list_editable = ('is_featured', 'display_order', 'is_active')