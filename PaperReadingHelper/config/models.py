from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import DO_NOTHING
from django.db.models.signals import post_save
from django.dispatch import receiver

# 유저
class profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    phone_no = models.CharField(db_column='phone_no', null=True, max_length=100, default='')
    usage_flag = models.CharField(max_length=10, default='1')
    name = models.CharField(db_column='name', max_length=100)

    class Meta:
        db_table = "profile"


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()