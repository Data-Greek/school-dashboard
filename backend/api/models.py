from django.db import models

# Create your models here.
class Student(models.Model):
    
    # Modalités de réponses
    school_choices = (('GP', 'GP'), ('MS', 'MS'))
    sex_choices = (('Féminin', 'Féminin'), ('Masculin', 'Masculin'))
    address_choices = (('Ville', 'Ville'), ('Campagne', 'Campagne'))
    studytime_choices = (('Moins de 2h', 'Moins de 2h'), ('2 à 5 heures', '2 à 5 heures'),
                         ('5 à 10 heures', '5 à 10 heures'), ('Plus de 10h', 'Plus de 10h'))
    parents_level_choices = (('aucun', 'aucun'), ('brevet', 'brevet'),
                         ('baccalauréat', 'baccalauréat'), ('bac à bac+2', 'bac à bac+2'),
                         ('bac +3 et plus', 'bac +3 et plus'))
    
    # Variables de la table
    school = models.CharField(max_length=200, choices=school_choices, blank=True, null=True)
    sex = models.CharField(max_length=200, choices=sex_choices, blank=True, null=True)
    age = models.IntegerField(default=0)
    address = models.CharField(max_length=200, choices=address_choices, blank=True, null=True) 
    aggregated_notation = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    studytime = models.CharField(max_length=200, choices=studytime_choices, blank=True, null=True) 
    absences = models.IntegerField(default=0)
    Dalc = models.IntegerField(default=0)
    Medu = models.CharField(max_length=200, choices=parents_level_choices, blank=True, null=True) 
    Fedu = models.CharField(max_length=200, choices=parents_level_choices, blank=True, null=True) 
    health = models.IntegerField(default=0)
    famrel  = models.IntegerField(default=0)
    
    def __str__(self):
        return self.id
    
