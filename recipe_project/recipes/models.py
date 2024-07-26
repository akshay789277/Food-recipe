from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField()  # Store as comma-separated or JSON
    steps = models.TextField()  # Store as comma-separated or JSON
    image_url = models.URLField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
