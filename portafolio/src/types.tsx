
export interface Employment {
    company: string,
    title: string,
    image: string,
    statement: string,
    skills: string[],
}

export interface SectionRefs {
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
};