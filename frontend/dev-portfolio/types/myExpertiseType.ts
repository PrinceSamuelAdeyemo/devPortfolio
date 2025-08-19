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