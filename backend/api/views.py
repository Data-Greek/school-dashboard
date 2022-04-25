from django.core.files.storage import FileSystemStorage
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import StudentSerializer, UserSerializer, UserSerializerWithToken
from .models import Student

# JWT authentification module
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Liste des utilisateurs 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    
    queryset = Student.objects.all()
    serializer = StudentSerializer(queryset, many=True)
    
    return Response(serializer.data)


# Chargement du fichier CSV dans la BDD
@api_view(['POST'])
@permission_classes([IsAdminUser])
def loading_csv(request):
    
    """_Chargement d'un fichier CSV vers la BDD_

    Args:
        request (_str_): _POST Request_

    Returns:
        _JSON data_: _data load to Django BDD_
    """

    # Importation du fichier CSV
    file = request.FILES['file']
    
    # Stockage interne
    fs = FileSystemStorage()
    path = fs.save(file.name, file)
    path = fs.url(path)
    filePath = './static' + path
    
    # Lecture du fichier CSV
    import pandas as pd
    data = pd.read_csv(filePath, sep=',')

  # Préparation des données pour l'envoi vers la BDD
    data_bdd = []

    for rows in range(len(data)):

        data_bdd.append(
            
            Student(
        # Méthode "iloc" [row] [columns]
        school = data.iloc[rows][0],
        sex = data.iloc[rows][1],
        age = data.iloc[rows][2],
        address = data.iloc[rows][3],
        aggregated_notation = data.iloc[rows][4],
        studytime = data.iloc[rows][5],
        absences = data.iloc[rows][6],
        Dalc = data.iloc[rows][7],
        Medu = data.iloc[rows][8],
        Fedu = data.iloc[rows][9],
        health = data.iloc[rows][10],
        famrel = data.iloc[rows][11],
        famsup = data.iloc[rows][12],
        
        ))

    print(data.iloc[rows][0])
    # Sauvegarde des données dans la BDD
    Student.objects.bulk_create(data_bdd)

    return Response(data)

# JWT Authentification 
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
     def validate(self, attrs):
        data = super().validate(attrs)

        # Serializer d'authentification
        serializer = UserSerializerWithToken(self.user).data
        for keys, values in serializer.items():

            data[keys] = values
            
        return data
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
 
 
 # User Serializer
@api_view(['GET'])
def user_login(request):
    
    """_Caractéristiques de l'utilisateur_

    Args:
        request (_str_): _GET Request_

    Returns:
        _JSON data_: _authentificated user_
    """
    
    user = request.user
    serializer = UserSerializer(user, many=False)
    
    return Response(serializer.data)