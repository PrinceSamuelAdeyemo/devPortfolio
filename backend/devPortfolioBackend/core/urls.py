from django.urls import path
from .views import (ExpertiseViews, ToolViews, ProgrammingLanguageViews, ExpertiseSkillViews, ProjectViews, ArticleViews)

urlpatterns = [
    path('expertises/', ExpertiseViews.as_view(), name='expertises'),
    path('tools/', ToolViews.as_view(), name='tools'),
    path('programminglanguage/', ProgrammingLanguageViews.as_view(), name='programminglanguage'),
    path('expertise-skills/<str:type>/', ExpertiseSkillViews.as_view(), name='expertise-skill'),
    path('projects/', ProjectViews.as_view(), name='projectviews'),
    path('article/', ArticleViews.as_view(), name='article'),
]
