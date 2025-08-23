export interface myExpertiseType{
    id: string;
    name: string;
    description: string;
    icon: string | null;
    image: string | null;
}

export interface myExpertiseSkillsType{
    id: string;
    name: string;
    description: string;
    icon: string | null;
    expertise: myExpertiseType;
}

export interface myToolsType{
    id: string;
    name: string;
    expertise: myExpertiseType | null;
}

export interface myProgrammingLanguagesType{
    id: string;
    name: string;
}

export interface myProjectsType{
    id: string;
    name: string;
    description: string;
    image: string | null;
    video: string | null;
    github_url: string;
    live_url: string | null;
    expertise: myExpertiseType[];
    programming_language: myProgrammingLanguagesType[];
    tools: myToolsType[];
}