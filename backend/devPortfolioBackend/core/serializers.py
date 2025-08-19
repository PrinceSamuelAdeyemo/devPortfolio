from rest_framework import serializers
from .models import (Expertise, Tool, ProgrammingLanguage, ExpertiseSkill, Project, Article)

class ExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expertise
        fields = "__all__"


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = "__all__"
    

class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = "__all__"


class ExpertiseSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpertiseSkill
        fields = "__all__"
    

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
    

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"
    
