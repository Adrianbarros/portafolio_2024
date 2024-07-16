import React, { forwardRef } from "react";
import '../styles/Skills.css'
import CurvedLine from '../assets/curveLine.svg'
import Lottie from "lottie-react";
import FrontEnd from '../assets/first_ani.json'
import Backend from '../assets/sec_ani.json'
import useInfiniteScroll from "../utils/InfinateScroll";

const languagesSvgs = [
    { name: 'TypeScript', path: require('../assets/logos/typeScript.svg').default },
    { name: 'Python', path: require('../assets/logos/python.svg').default },
    { name: 'JavaScript', path: require('../assets/logos/javaScript.svg').default },
    { name: 'HTML', path: require('../assets/logos/html.svg').default },
    { name: 'CSS', path: require('../assets/logos/css.svg').default },
];
const frameworkSvgs = [
    { name: 'React', path: require('../assets/logos/reactLogo.svg').default },
    { name: 'Django', path: require('../assets/logos/django.svg').default },
    { name: 'Next', path: require('../assets/logos/next.svg').default },
    { name: 'Flask', path: require('../assets/logos/flask.svg').default },
    { name: 'Node', path: require('../assets/logos/node.svg').default },

];
export const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    const languagesScrollerRef = useInfiniteScroll(1, 20);
    const frameworksScrollerRef = useInfiniteScroll(-1, 20);

    return (
        <div className="skill-section" ref={ref} id="skills">
            <div className="title">
                <img className="accent-title" src={CurvedLine} alt="Curved Line" />
                <div className="title-text">Skills</div>
            </div>
            <div className="concept-list">
                <Lottie className='lottie' animationData={FrontEnd} />
                <Lottie className='lottie' animationData={Backend} />
            </div>
            <div className="sub-title-skills">
                <div className="sub-title-text">Programming Languages</div>
            </div>
            <div className="scroller" ref={languagesScrollerRef}>
                <div className="skill-list scroller_items">
                    {languagesSvgs.concat(languagesSvgs).map((svg, index) => (
                        <div key={index} className="skill-item">
                            <img className="logo" src={svg.path} alt={`${svg.name}-logo`} />
                            <div>{svg.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sub-title-skills">
                <div className="sub-title-text">Frameworks & Libraries</div>
            </div>
            <div className="scroller" ref={frameworksScrollerRef}>
                <div className="skill-list scroller_items">
                    {frameworkSvgs.concat(frameworkSvgs).map((svg, index) => (
                        <div key={index} className="skill-item">
                            <img className="logo" src={svg.path} alt={`${svg.name}-logo`} />
                            <div>{svg.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
});
