from django.contrib import admin

from .models import (Expertise, Tool, ProgrammingLanguage, Project, Article)
# Register your models here.
admin.site.register(Expertise)
admin.site.register(Tool)
admin.site.register(ProgrammingLanguage)
admin.site.register(Project)
admin.site.register(Article)