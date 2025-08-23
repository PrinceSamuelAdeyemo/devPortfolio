from django.shortcuts import render
from .models import (Expertise, Tool, ProgrammingLanguage, ExpertiseSkill, Project, Article)
from .serializers import (ExpertiseSerializer, ToolSerializer, ProgrammingLanguageSerializer, ExpertiseSkillSerializer,  ProjectSerializer, ArticleSerializer)
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class ExpertiseViews(APIView):
    def get(self, request):
        expertises = Expertise.objects.all()
        serializer = ExpertiseSerializer(expertises, many=True)

        return Response(serializer.data)


class ToolViews(APIView):
    def get(self, request):
        tools = Tool.objects.all()
        serializer = ToolSerializer(tools, many=True)

        return Response(serializer.data)


class ExpertiseToolViews(APIView):
    def get(self, request, expertise):
        tools = Tool.objects.filter(expertise__name__icontains=expertise)
        serializer = ToolSerializer(tools, many=True)

        return Response(serializer.data)
    

class ProgrammingLanguageViews(APIView):
    def get(self, request):
        programming_language = ProgrammingLanguage.objects.all()
        serializer = ProgrammingLanguageSerializer(programming_language, many=True)

        return Response(serializer.data)
    

class ExpertiseSkillViews(APIView):
    def get(self, request, type):
        expertise_skill = ExpertiseSkill.objects.filter(expertise__name__icontains=type)
        serializer = ExpertiseSkillSerializer(expertise_skill, many=True)

        return Response(serializer.data)
    

class ProjectViews(APIView):
    def get(self, request, expertise=None):
        if expertise == None:
            projects = Project.objects.all()
        else:
            projects = Project.objects.filter(expertise__name__icontains=expertise)
        serializer = ProjectSerializer(projects, many=True)

        return Response(serializer.data)


class ArticleViews(APIView):
    def get(self, request, expertise=None):
        if expertise == None:
            article = Article.objects.all()
        else:
            article = Article.objects.filter(expertise__name__icontains=expertise)
        serializer = ArticleSerializer(article, many=True)

        return Response(serializer.data)