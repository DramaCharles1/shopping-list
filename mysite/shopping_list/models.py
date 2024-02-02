import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Item(models.Model):
    item = models.CharField(max_length=200)
    amount = models.IntegerField()
    date_added = models.DateTimeField()
    bought = models.BooleanField()
    def __str__(self):
        return self.item

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.date_added <= now
