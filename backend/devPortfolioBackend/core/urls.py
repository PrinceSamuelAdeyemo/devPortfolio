from django.urls import path
from .views import (ExpertiseViews, ToolViews, ExpertiseToolViews, ProgrammingLanguageViews, ExpertiseSkillViews, ProjectViews, ArticleViews)

urlpatterns = [
    path('expertises/', ExpertiseViews.as_view(), name='expertises'),
    path('tools/', ToolViews.as_view(), name='tools'),
    path('tools/<str:expertise>/', ExpertiseToolViews.as_view(), name='tools-expertise'),
    path('programminglanguage/', ProgrammingLanguageViews.as_view(), name='programminglanguage'),
    path('expertise-skills/<str:type>/', ExpertiseSkillViews.as_view(), name='expertise-skill'),
    path('projects/', ProjectViews.as_view(), name='projectviews'),
    path('projects/<str:expertise>/', ProjectViews.as_view(), name='expertise-projectviews'),
    path('articles/', ArticleViews.as_view(), name='article'),
    path('articles/<str:expertise>/', ArticleViews.as_view(), name='expertise-article'),
]
