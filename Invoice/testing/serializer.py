from rest_framework.serializers import ModelSerializer,Serializer
from rest_framework import serializers

#                                          vendor profile serializer                                   #

#serializers for vendor login

class ItemSerializer(serializers.Serializer):
	itemName=serializers.CharField()
	quantity=serializers.IntegerField()
	total=serializers.DecimalField(max_digits=10,decimal_places=7)

class someserilaizer(serializers.Serializer):
	invoiceNumber=serializers.IntegerField()
	customerName=serializers.CharField()
	customerAddress=serializers.CharField()
	date=serializers.DateField()
	item=ItemSerializer(many=True,write_only=True)
	total=serializers.DecimalField(max_digits=10,decimal_places=7)
	taxamount=serializers.DecimalField(max_digits=10,decimal_places=7)
	grandtotal=serializers.DecimalField(max_digits=10,decimal_places=7)

