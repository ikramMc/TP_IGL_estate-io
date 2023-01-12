from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from backend.models import User
from backend.serializers import UserSerializer
from backend.models import Annonce
from backend.serializers import AnnonceSerializer
from backend.models import BienImmobilier
from backend.serializers import BienImmobilierSerializer
from backend.models import Image
from backend.serializers import ImageSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.views import APIView
from functools import reduce 
import operator
from django.db.models import Q
# Create your views here.

class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        image_serializer = ImageSerializer(data=request.data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', image_serializer.errors)
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def UserAPI(request ,pk=0):
 if request.method=='GET':
       users = User.objects.all()
       users_serializer = UserSerializer(users, many=True)
       return JsonResponse(users_serializer.data, safe=False)
 elif request.method == 'POST':
       users_data = JSONParser().parse(request)
       users_serializer = UserSerializer(data=users_data)
       print(users_serializer.is_valid())
       user=User.objects.filter(email=users_data["email"])
       print(user)
       user_ser= UserSerializer(user,many=True)
       #print(user_ser.is_valid())
       print(user_ser.data)
       #print( user_ser.data)
       if users_serializer.is_valid()   : 
         if user_ser.data==[]:   
           users_serializer.save()
           return JsonResponse("creating user Successfully", safe=False)
         return JsonResponse(user_ser.data, safe=False) 
       return JsonResponse("Failed To Add or existing account", safe=False)
 elif request.method == 'PUT':
       users_data = JSONParser().parse(request)
       print("users data")
       print(users_data)
       print("todo ID")
       user = User.objects.get(Id=users_data['id'])
       print(user)
       users_serialzer = UserSerializer(todo, data=todos_data)
       if users_serializer.is_valid():
         users_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 user = User.objects.get(id=pk)
		 user.delete()
		 return JsonResponse("todot Was Deleted Successfully", safe=False)				


@csrf_exempt
def filterAPI(request,dateDebut,dateFin,wilaya,commune,motsClés,pk=0):
 if request.method=='GET':
       annonces = Annonce.objects.select_related("bienId").filter(date__lte=dateFin,date__gte=dateDebut)
       annoncesModif=Annonce.objects.none()
       biens=BienImmobilier.objects.none()
       keyWords=motsClés.split(' ')
       print(keyWords)
       qr=reduce(operator.or_,(Q(description__icontains=key)|Q(titre__icontains=key)for key in keyWords))
       for annonce in annonces :
        set=BienImmobilier.objects.filter(qr,bienImmobilierId=annonce.bienId.bienImmobilierId,wilaya=wilaya,commune=commune)
        if set: 
          biens =biens.union(set)
          annoncesModif=annoncesModif.union(Annonce.objects.filter(annonceId=annonce.annonceId))
       biens_serialize=BienImmobilierSerializer(biens,many=True)
       annonces_serializer = AnnonceSerializer(annoncesModif, many=True)
       if biens_serialize.data!=[]:
        return JsonResponse([annonces_serializer.data, biens_serialize.data], safe=False) 
       return JsonResponse("pas d'annonces", safe=False)
 
@csrf_exempt
def AnnonceAPI(request ,pk=0):
 if request.method=='GET':
       annonces= Annonce.objects.all()
       annonces_serializer = AnnonceSerializer(annonces, many=True)
       return JsonResponse(annonces_serializer.data, safe=False)
 elif request.method == 'POST':
      
       annonces_data = JSONParser().parse(request)
       print(annonces_data )
       annonces_serializer = AnnonceSerializer(data=annonces_data)
       print(annonces_serializer)
       if annonces_serializer.is_valid():
         annonces_serializer.save()
         return JsonResponse("Added Successfully", safe=False)
       return JsonResponse("Failed To Add annonces ", safe=False)
 elif request.method == 'PUT':
       annonces_data = JSONParser().parse(request)
       print("annonces data")
       print(annonces_data)
       print("annonce ID")
       annonce = Annonce.objects.get(Id=annonces_data['id'])
       print(annonce)
       annonces_serialzer = AnnonceSerializer(todo, data=todos_data)
       if annonces_serializer.is_valid():
         annonces_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 annonce = Annonce.objects.get(id=pk)
		 annonce.delete()
		 return JsonResponse("todot Was Deleted Successfully", safe=False)	
@csrf_exempt
def BienImmobilierAPI(request ,pk=0):
 if request.method=='GET':
       bis = BienImmobilier.objects.all()
       bi_serializer = BienImmobilierSerializer(bis, many=True)
       return JsonResponse(bi_serializer.data, safe=False)
 elif request.method == 'POST':
       bi_data = JSONParser().parse(request)
       bi_serializer= BienImmobilierSerializer(data=bi_data)
       if bi_serializer.is_valid():
         b=bi_serializer.save()
         return JsonResponse(["Added Successfully",b.bienImmobilierId], safe=False)
       return JsonResponse("bien im not added", safe=False)
 elif request.method == 'PUT':
       bi_data = JSONParser().parse(request)
       print("bienim data")
       print(bi_data)
       print("bi ID")
       bi = BienImmobilier.objects.get(Id=bi_data['id'])
       print(bi)
       bi_serializer = BienImmobilierSerializer(bi, data=bi_data)
       if bi_serializer.is_valid():
         bi_serializer.save()
         return JsonResponse("Updated Successfully", safe=False)
       return JsonResponse("Failed To Update")	
 elif request.method == 'DELETE':
		 bi = BineImmobilier.objects.get(id=pk)
		 bi.delete()
		 return JsonResponse("todot Was Deleted Successfully", safe=False)	         
  







def igl(request):
	return render(request, 'backend/index.html')