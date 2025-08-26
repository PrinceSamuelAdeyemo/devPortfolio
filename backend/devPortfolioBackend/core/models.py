from django.db import models

import uuid

# Create your models here.

class Expertise(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)
    icon = models.FileField(upload_to="icons/expertise/", blank=True, null=True)
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name


class Tool(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=128)
    expertise = models.ManyToManyField(Expertise, related_name="tools")

    def __str__(self):
        return self.name


class ProgrammingLanguage(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=128)
    expertise = models.ManyToManyField(Expertise, related_name="programming_languages")

    def __str__(self):
        return self.name


class ExpertiseSkill(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=256)
    icon = models.FileField(upload_to="icons/expertise-skills/")
    expertise = models.ManyToManyField(Expertise, related_name="expertise_skills")

    def __str__(self):
        return self.name

class Project(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=256)
    description = models.TextField()
    
    expertise = models.ManyToManyField(Expertise, related_name='projects')
    programming_language = models.ManyToManyField(ProgrammingLanguage, related_name="projects", blank=True, null=True)
    tools = models.ManyToManyField(Tool, related_name="projects", blank=True, null=True)

    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField()

    image = models.ImageField(upload_to='images/frontend/', blank=True, null=True)
    video = models.FileField(upload_to='videos/frontend', blank=True, null=True)

    def __str__(self):
        return self.name


class Article(models.Model):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True)
    title = models.CharField(max_length=256)
    slug = models.SlugField(max_length=256, unique=True)
    expertise = models.ManyToManyField(Expertise, related_name='articles')

    body = models.TextField(blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.title