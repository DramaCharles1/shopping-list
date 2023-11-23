from django.db import models

# Create your models here.
class Item(models.Model):
    item = models.CharField(max_length=200)
    amount = models.IntegerField()
    date_added = models.DateTimeField()
    bought = models.BooleanField()
    def __str__(self):
        return self.item
