from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Profile
from constants import values


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)

    def authorized(self):
        if not self.is_valid():
            return False
        username = self.validated_data.get("username")
        password = self.validated_data.get("password")
        user = authenticate(username=username, password = password)
        if not user:
            return False
        return user


class SignupSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)
    firstname = serializers.CharField(max_length=100)
    lastname = serializers.CharField(max_length=100)
    email = serializers.CharField(max_length=100)

    def register(self):
        if not self.is_valid():
            return "Please enter valid data", False, values.HTTP_BAD_REQUEST
        username = self.validated_data.get("username")
        password = self.validated_data.get("password")
        firstname = self.validated_data.get("firstname")
        lastname = self.validated_data.get("lastname")
        email = self.validated_data.get("email")
        if User.objects.filter(username=username).count() != 0:
            return "This username already taken", False, values.HTTP_NOT_ACCEPTABLE
        user = User.objects.create_user(username=username,email=email,first_name=firstname, last_name=lastname,password=password)
        prof = Profile()
        prof.user = user
        prof.save()
        return "Registration was successful", True, values.HTTP_OK