
export interface Employment {
    id: number
    company: string,
    title: string,
    image: string,
    statement: string,
    skills: string[],
    year: number,
    website: string,
}

export interface SectionRefs {
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
};


export interface VisibilityContextType {
    isExperienceVisible: boolean;
    setIsExperienceVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
