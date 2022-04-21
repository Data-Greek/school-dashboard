from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import StudentSerializer
from .models import Student

# Base de donnée principale : JSON data format
@api_view(['GET'])
# @permission_classes([IsAdminUser])
def index(request):
    
    queryset = Student.objects.all()
    serializer = StudentSerializer(queryset, many=True)
    
    return Response(serializer.data)


# Chargement du fichier CSV dans la BDD
@api_view(['POST'])
# @permission_classes([IsAdminUser])
def loading_csv(request):

    # Importation du fichier CSV
    file = request.FILES['file']
    
    # Stockage interne
    fs = FileSystemStorage()
    path = fs.save(file.name, file)
    path = fs.url(path)
    filePath = '.' + path
    
    # Pandas 
    import pandas as pd
    # df = pd.read_csv(file, delim_whitespace=True)
    # print(df)

    # Préparation des données pour l'envoi vers la BDD
    # for row in file:
    #     print(row)

    # data_bdd = []
    
    # for rows in enumerate(file):
        
    #     data_bdd.append(   
                    
    #         Student(
                
    #     # Méthode "iloc" [row] [columns]
    #     school = file.iloc[rows][0],
    #     sex = file.iloc[rows][1],
    #     age = file.iloc[rows][2],
    #     address = file.iloc[rows][3],
    #     aggregated_notation = file.iloc[rows][4],
    #     studytime = file.iloc[rows][5],
    #     absences = file.iloc[rows][6],
    #     Dalc = file.iloc[rows][7],
    #     Medu = file.iloc[rows][8],
    #     Fedu = file.iloc[rows][9],
    #     health = file.iloc[rows][10],
    #     famrel = file.iloc[rows][11],
        
    #     ))

    # # Sauvegarde des données dans la BDD
    # Student.objects.bulk_create(data_bdd)

    return Response(filePath)
    
 