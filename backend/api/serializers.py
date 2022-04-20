from rest_framework import serializers
from .models import Student


# Model Student Serializer
class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = '__all__'