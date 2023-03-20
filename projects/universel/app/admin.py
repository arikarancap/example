from django.contrib import admin
from .models import userDetails
# Register your models here.
admin.site.register(userDetails)
# @admin.register(userDetails)
# class userDetails(admin.ModelAdmin):
#     list_filter= ('username','password')
#     list_display= ('username','password')