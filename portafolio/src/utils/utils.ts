import resume from '../assets/AdrianBarros_Resume.pdf';


export const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
}

export const handleOpenEmail = () => {
    window.open('mailto:adriansbarros1@gmail.com')
}

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "AdrianBarros_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}