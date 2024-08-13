from rest_framework import serializers
from . models import Userr


class UserRegister(serializers.Serializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    confirm_password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    def validate(self, data):

         #  validation for email uniqueness
        if Userr.objects.filter(email=data.get('email')).exists():
            raise serializers.ValidationError("A user with this email already exists.")

        """
        Check that the password and confirm_password fields match.
        """
        password = data.get('password')
        confirm_password = data.pop('confirm_password')
        
        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")
        
        return data

    def create(self, validated_data):
        """
        Create a new user instance and return it.
        """
        password = validated_data.pop('password')
        user = Userr(**validated_data)
        user.set_password(password)  # Hash the password
        user.save()
        return user
