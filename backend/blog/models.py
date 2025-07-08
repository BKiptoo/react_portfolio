from django.db import models

# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField(blank=True)
    content = models.TextField()
    image = models.URLField(blank=True)  # Use ImageField for uploads if needed
    date = models.DateField(null=True, blank=True)  # Or DateTimeField if you want time
    author = models.CharField(max_length=100)
    readTime = models.CharField(max_length=20, blank=True)
    category = models.CharField(max_length=50, blank=True)
    tags = models.JSONField(default=list, blank=True)  # Requires Django 3.1+
    featured = models.BooleanField(default=False)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title
