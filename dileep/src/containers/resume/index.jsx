import React from 'react';
import {BsInfoCircle} from 'react-icons/bs';
import PageHeaderContent from '../../components/page-header-content';

const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <PageHeaderContent  headerText ="My Resume" icon={<BsInfoCircle size={40}/>}/>
        </section>
    )
}

export default Resume;