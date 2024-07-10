import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import PageHeaderContent from '../../components/page-header-content';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import {DiAngularSimple, DiJavascript, DiJava, DiAws} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa'
const personalDetails = [
    {
        label: "Name",
        value: "Dileepkumarreddy Kollareddy"
    },
    {
        label: "Age",
        value: "26",

    },
    {
        label: "Address",
        value: "USA",
    },
    {
        label: "Email",
        value: "dileepkumarreddy9797@gmail.com"
    },
    {
        label: "Phone",
        value: "+1 6504026005"
    }
]
const jobSummary = "A focused and innovative Senior Software Engineer with a strong foundation in Object-Oriented Programming, software requirements analysis, data analysis, and web services. With extensive expertise in application design and agile development methodologies, I excels in all phases of the Software Development Life Cycle (SDLC). Dileep holds a Master's in Computer Science from Wright State University and a Bachelor's in Computer Science from Vardhaman College of Engineering. I have demonstrated proficiency in Java, Python, C#, and various web and backend development technologies, including Angular, .Net, Spring Boot, and MySQL. My professional experience includes significant contributions at Ivy Comptech | Entain | BETMGM, where I led framework upgrades, optimized application performance, and provided 24/7 production support. Additionally, I have developed projects like a fraud detection system using machine learning and an online assessment evaluation system. Recognized for my dedication and skill, I have received multiple Manager Awards and won competitions like CODEFEST and the JPL Contest."
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent headerText="About Me" icon={<BsInfoCircle size={40} />} />

            <div className="about__content">
                <div className='about__content__personalWrapper'>
                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>


                    </Animate>

                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3 className='personalInformationHeader'>
                            Personal Information
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='title'>{item.label} : </span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__servicesWrapper'>
                <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(600px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                    <div className='about__content__servicesWrapper__innerContent'>
                    <div><FaDev size={60} color="var(--yellow-theme-main-color)"/></div>
                    <div><DiAngularSimple size={60} color="var(--yellow-theme-main-color)"/></div>
                    <div><DiJavascript size={60} color="var(--yellow-theme-main-color)"/></div>
                    <div><DiJava size={60} color="var(--yellow-theme-main-color)"/></div>
                    <div><DiAws size={60} color="var(--yellow-theme-main-color)"/></div>
                    <div><FaDatabase size={60} color="var(--yellow-theme-main-color)"/></div>
                    </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}

export default About;