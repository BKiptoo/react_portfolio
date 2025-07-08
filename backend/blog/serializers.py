from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = '__all__'
    
    def get_formatted_date(self, obj):
        """Return date in 'January 15, 2024' format"""
        if obj.date:
            return obj.date.strftime('%B %d, %Y')
        return "No date" 