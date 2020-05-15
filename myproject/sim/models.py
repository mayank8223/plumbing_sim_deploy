from django.db import models
from django.contrib.postgres.fields import JSONField


# Create your models here.

class Game(models.Model):
	user = models.TextField(max_length=30)
	size = models.IntegerField(default=10)
	row = models.IntegerField(default=0)
	col = models.IntegerField(default=0)
	grid = JSONField()
