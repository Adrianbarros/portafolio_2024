export const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
        const topOffset = ref.current.offsetTop;
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
        });
    }
};