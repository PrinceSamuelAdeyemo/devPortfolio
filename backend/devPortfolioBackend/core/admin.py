from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import (Expertise, Tool, ProgrammingLanguage, ExpertiseSkill, Project, Article)

# Register your models here.
@admin.register(Expertise)
class ExpertiseAdminClass(ModelAdmin):
    pass


@admin.register(Tool)
class ToolAdminClass(ModelAdmin):
    pass


@admin.register(ProgrammingLanguage)
class ProgrammingLanguageAdminClass(ModelAdmin):
    pass


@admin.register(ExpertiseSkill)
class ExpertiseSkillAdminClass(ModelAdmin):
    pass


@admin.register(Project)
class ProjectAdminClass(ModelAdmin):
    pass


@admin.register(Article)
class ArticleAdminClass(ModelAdmin):
    pass