
from __future__ import absolute_import, unicode_literals
from rest_framework.response import Response
from django.contrib.auth import logout as django_logout
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status

from rest_framework import generics, mixins
from rest_framework.parsers import JSONParser,MultiPartParser,FormParser
from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.fields import CurrentUserDefault
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer
from .serializer import *

null=None
#        

class DataLogo(APIView):
    def get(self,request,format=None):
        data={
        	"imageurl":"https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png"
        	}
        return Response({"data":data,"message":"data","requestStatus":1},status=status.HTTP_200_OK)


class DataCompany(APIView):
    def get(self,request,format=None):
        data={"comapnyName":"paorbit",
        	"companyAddrees":"123/208 some addrees",
        	}
        return Response({"data":data,"message":"data","requestStatus":1},status=status.HTTP_200_OK)


class DataItems(APIView):
    def get(self,request,format=None):
        data={
        	"itemList":[{"itemId":"1",
        				"itemName":"tomoto",
        				"price":"500"
        				},
        				{"itemId":"2",
        				"itemName":"apple",
        				"price":"50"
        				},
        				{"itemId":"3",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"4",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"5",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"6",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"7",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"8",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"9",
        				"itemName":"egg",
        				"price":"5000"
        				},
        				{"itemId":"10",
        				"itemName":"egg",
        				"price":"5000"
        				}
        				]
        	}
        return Response({"data":data,"message":"data","requestStatus":1},status=status.HTTP_200_OK)


class DataTax(APIView):
    def get(self,request,format=None):
        data={
        	"tax":2
        	}
        return Response({"data":data,"message":"data","requestStatus":1},status=status.HTTP_200_OK)



class DataPost(APIView):
    def post(self,request,format=None):
        serializers=someserilaizer(data=request.data)
        if serializers.is_valid():
        	print request.data
        	print serializers.data
        	return Response({"data":null,"message":"data posted","requestStatus":1},status=status.HTTP_200_OK)
        return Response({"data":serializers.errors,"message":"error field are quired","requestStatus":0},status=status.HTTP_200_OK)
