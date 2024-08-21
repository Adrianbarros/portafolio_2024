
export interface Employment {
    id: number
    company: string,
    title: string,
    image: string,
    statement: string,
    skills: string[],
    year: number
}

export interface SectionRefs {
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
};