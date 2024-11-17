import datetime
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

def validate_non_negative(value):
    """
    It should not be possible to add an item with negative or zero amount to the database.
    """
    if value <= 0:
        raise ValidationError('Amount cannot be zero or non-negative.')

# Create your models here.
class ShoppingListItem(models.Model):
    item = models.CharField(max_length=200)
    amount = models.IntegerField(validators=[validate_non_negative])
    date_added = models.DateTimeField()
    bought = models.BooleanField()

    class Meta:
        ordering = ('date_added',)

    def __str__(self):
        return self.item

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.date_added <= now
