import { useEffect, useRef } from "react";

const useInfiniteScroll = (scrollAmount: number, intervalSpeed: number) => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const handleScroll = () => {
            if (scrollAmount > 0) {
                scroller.scrollLeft += scrollAmount;
                if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
                    scroller.scrollLeft = 0;
                }
            } else {
                scroller.scrollLeft += scrollAmount;
                if (scroller.scrollLeft <= 0) {
                    scroller.scrollLeft = scroller.scrollWidth / 2;
                }
            }
        };

        const intervalId = setInterval(handleScroll, intervalSpeed);

        return () => clearInterval(intervalId);
    }, [scrollAmount, intervalSpeed]);

    return scrollerRef;
};

export default useInfiniteScroll;
