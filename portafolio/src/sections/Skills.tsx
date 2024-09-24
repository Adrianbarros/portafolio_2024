import React, { forwardRef } from "react";
import Highlight from '../assets/highlight.svg'
import '../styles/Skills.css'

import useInfiniteScroll from "../utils/InfinateScroll";

const languagesSvgs = [
    { name: 'TypeScript', path: require('../assets/logos/typeScript.svg').default },
    { name: 'Python', path: require('../assets/logos/python.svg').default },
    { name: 'JavaScript', path: require('../assets/logos/javaScript.svg').default },
    { name: 'HTML', path: require('../assets/logos/html.svg').default },
    { name: 'CSS', path: require('../assets/logos/css.svg').default },
    { name: 'SQL', path: require('../assets/logos/sql_icon.svg').default },
];
const frameworkSvgs = [
    { name: 'React', path: require('../assets/logos/reactLogo.svg').default },
    { name: 'Django', path: require('../assets/logos/django.svg').default },
    { name: 'Next', path: require('../assets/logos/next.svg').default },
    { name: 'Flask', path: require('../assets/logos/flask.svg').default },
    { name: 'Node', path: require('../assets/logos/node.svg').default },
    { name: 'AWS', path: require('../assets/logos/aws.svg').default },

];
export const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    const languagesScrollerRef = useInfiniteScroll(1, 20);
    const frameworksScrollerRef = useInfiniteScroll(-1, 20);

    return (
        <div className="skill-section" ref={ref} id="skills">
            <div className="skill-title">
                <img className="accent-title-reverse" src={Highlight} alt="Curved Line" />
                <div className="skill-title-text">My Set of Skills</div>
                <img className="accent-title" src={Highlight} alt="Curved Line" />
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
                <div className="sub-title-text">Frameworks & Technologies</div>
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
