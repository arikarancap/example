# from django.urls import path,include
# # from .views import ArticleViewSets

# urlpatterns = [
# # path('',include(router.urls)),
# ]
from django.urls import path,include
from .views import userViewSet
from rest_framework.routers import DefaultRouter


router =DefaultRouter()
router.register('user',userViewSet, basename='user')
urlpatterns = [
    path('',include(router.urls)),  
]