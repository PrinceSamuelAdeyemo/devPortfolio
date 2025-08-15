from django.shortcuts import render
from .models import (Expertise, Tool, ProgrammingLanguage, Project, Article)
from .serializers import (ExpertiseSerializer, ToolSerializer, ProgrammingLanguageSerializer,  ProjectSerializer, ArticleSerializer)
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
        tools = tools.objects.all()
        serializer = ToolSerializer(tools, many=True)

        return Response(serializer.data)
    

class ProgrammingLanguageViews(APIView):
    def get(self, request):
        programming_language = ProgrammingLanguage.objects.all()
        serializer = ProgrammingLanguageSerializer(programming_language, many=True)

        return Response(serializer.data)
    

class ProjectViews(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)

        return Response(serializer.data)


class ArticleViews(APIView):
    def get(self, request):
        article = Article.objects.all()
        serializer = ArticleSerializer(article, many=True)

        return Response(serializer.data)