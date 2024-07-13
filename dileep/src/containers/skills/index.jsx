import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import PageHeaderContent from '../../components/page-header-content';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent headerText="My Skills" icon={<BsInfoCircle size={40} />} />
            <div className='skills__content-wrapper'>
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)',
                                    width: '95%'
                                }}
                                end={{
                                    transform: 'translateX(0px)',
                                    width: '95%'
                                }}
                            >
                                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                                <div className='skills__content-wrapper__inner-content__progressbar-content'>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity: 1", "opacity: 0"]}
                                                iterationCount="1"
                                                key={`${i}-${j}`}  // Unique key for each item
                                            >
                                                <div className='progressbar-wrapper' key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        trailWidth="2"
                                                        strokeLinecap='square'
                                                    />
                                                </div>

                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;
