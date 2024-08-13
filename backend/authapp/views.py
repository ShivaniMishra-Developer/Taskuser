from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializer import UserRegister
from .models import Userr



class UserRegisterView(APIView):
    permission_classes = [AllowAny] 

    def post(self, request, *args, **kwargs):
        serializer = UserRegister(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserListView(APIView):
    def get(self, request):
        return Response("user list")
