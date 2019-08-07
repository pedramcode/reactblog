from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LoginSerializer,SignupSerializer
from rest_framework.response import Response
from constants import values
from packs.token import Token


class Login(APIView):
    def post(self, request):
        data = LoginSerializer(data=request.data)
        if not data.is_valid():
            return Response("Data format is invalid", values.HTTP_BAD_REQUEST)
        user = data.authorized()
        if not user:
            return Response("Username or password is wrong", values.HTTP_UNAUTHORIZED)
        token = Token.create(user.username)
        return Response(token, values.HTTP_OK)


class Signup(APIView):
    def post(self, request):
        data = SignupSerializer(data=request.data)
        msg, stat, code = data.register()
        return Response(msg, code)