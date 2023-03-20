from rest_framework import serializers
from .models import userDetails
class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = userDetails
        fields =['id', 'username', 'password']