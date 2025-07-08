from django.contrib import admin
from .models import BlogPost

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date', 'category', 'featured', 'views')
    search_fields = ('title', 'author', 'category', 'tags')
    list_filter = ('category', 'featured')
