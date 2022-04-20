from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import StudentSerializer
from .models import Student

# Base de donnée principale : JSON data format
@api_view(['GET'])
def index(request):
    
    queryset = Student.objects.all()
    serializer = StudentSerializer(queryset, many=True)
    
    return Response(serializer.data)


# Chargement du fichier CSV dans la BDD
@api_view(['POST'])
def loading_csv(request):

    # Importation du fichier CSV
    file = request.FILES['filePath']
    # Stockage interne
    fs = FileSystemStorage()
    path = fs.save(file.name, file)
    path = fs.url(path)
    filePath = '.' + path

    # Préparation des données pour l'envoi vers la BDD
    print(filePath)

    # for rows in range(len(results)):

    #     data_bdd.append(
            
    #         Data(
    #     # Méthode "iloc" [row] [columns]
    #     produit_A = results.iloc[rows][0],
    #     produit_B = results.iloc[rows][1],
    #     support = results.iloc[rows][2],
    #     confidence = results.iloc[rows][3],
    #     lift = results.iloc[rows][4]
        
    #     ))

    # # Sauvegarde des données dans la BDD
    # Data.objects.bulk_create(data_bdd)

    return Response(filePath)
    
 