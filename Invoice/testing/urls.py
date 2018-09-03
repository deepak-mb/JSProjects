from django.conf.urls import url,include
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^getlogo/',DataLogo.as_view(),name="getdata"),
    url(r'^getcomapanydetails/',DataCompany.as_view(),name="getdata"),
    url(r'^getitems/',DataItems.as_view(),name="getdata"),
    url(r'^gettax/',DataTax.as_view(),name="getdata"),
    url(r'^getpost/',DataPost.as_view(),name="postdata"),




    ]



urlpatterns = format_suffix_patterns(urlpatterns)
    

