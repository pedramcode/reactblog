from django.db import models
from django.contrib.auth.models import User
import uuid


class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,unique=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    image = models.ImageField(upload_to="profile_images", blank=True)
    mobile = models.CharField(max_length=20,blank=True)

    def __str__(self):
        return f"{self.user.username}"


class Like(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,unique=True, editable=False)
    liker = models.ForeignKey(Profile, on_delete=models.CASCADE)
    like_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.liker.username}"


class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,unique=True, editable=False)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    body = models.TextField()
    comment_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.profile.user.username}"


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,unique=True, editable=False)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    body = models.TextField()
    publish_date = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(Like,blank=True)
    comments = models.ManyToManyField(Comment,blank=True)

    def __str__(self):
        return f"{self.title}, {self.profile.user.username}"