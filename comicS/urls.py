from django.urls import path, include
from comicS import views
urlpatterns =[
path('latest-products/',views.LatestProductList.as_view())
]