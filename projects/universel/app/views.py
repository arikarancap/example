from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from .models import userDetails
from .serializers import userSerializer
# Create your views here.
class userViewSet(viewsets.GenericViewSet,mixins.ListModelMixin,
mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,
mixins.DestroyModelMixin):
    queryset =userDetails.objects.all()
    serializer_class = userSerializer