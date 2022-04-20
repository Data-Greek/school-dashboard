from django.db import models

# Create your models here.
class Student(models.Model):
    
    school_choices = (('GP', 'GP'), ('MS', 'MS'))
    sex_choices = (('F', 'F'), ('M', 'M'))
    address_choices = (('U', 'U'), ('R', 'R'))
    famsize_choices = (('LE3', 'LE3'), ('GT3', 'GT3'))
    Pstatus_choices = (('T', 'T'), ('A', 'A'))
    yes_no_choices = (('yes', 'yes'), ('no', 'no'))
    guardian_choices = (("mother", "mother"), ("father", "father"), ("other","other"))
    reason_choices = (("home", "home"), ("reputation","reputation"), ("course","course"), ("other","other"))
    job_choices = (("teacher", "teacher"), ("health","health"), ("services", "services"), ("at_home", "at_home"), ("other", "other"))
    
       
    school = models.CharField(max_length=200, choices=school_choices, blank=True, null=True)
    sex = models.CharField(max_length=200, choices=sex_choices, blank=True, null=True)
    age = models.IntegerField(default=0)
    address = models.CharField(max_length=200, choices=address_choices, blank=True, null=True) 
    famsize = models.CharField(max_length=200, choices=famsize_choices, blank=True, null=True)
    Pstatus = models.CharField(max_length=200, choices=Pstatus_choices, blank=True, null=True)
    Medu = models.IntegerField(default=0)
    Fedu = models.IntegerField(default=0)
    Mjob = models.CharField(max_length=200, choices=job_choices, blank=True, null=True)
    Fjob = models.CharField(max_length=200, choices=job_choices, blank=True, null=True)
    reason = models.CharField(max_length=200, choices=reason_choices, blank=True, null=True) 
    guardian = models.CharField(max_length=200, choices=guardian_choices, blank=True, null=True)
    traveltime = models.IntegerField(default=0)
    studytime = models.IntegerField(default=0)
    failures = models.IntegerField(default=0)
    schoolsup = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    famsup = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    paid = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    activities = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    nursery = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    higher = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    internet = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    romantic = models.CharField(max_length=200, choices=yes_no_choices, blank=True, null=True)
    famrel  = models.IntegerField(default=0)
    freetime = models.IntegerField(default=0)
    goout = models.IntegerField(default=0)
    Dalc = models.IntegerField(default=0)
    Walc = models.IntegerField(default=0)
    health = models.IntegerField(default=0)
    absences = models.IntegerField(default=0)

    # these grades are related with the course subject, Math or Portuguese:
    G1 = models.IntegerField(default=0)
    G2 = models.IntegerField(default=0)
    G3 = models.IntegerField(default=0)
    
    def __str__(self):
        return self.id