import React from 'react';
import {BsInfoCircle} from 'react-icons/bs';
import PageHeaderContent from '../../components/page-header-content';

const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent  headerText ="My Portfolio" icon={<BsInfoCircle size={40}/>}/>
    </section>
    )
}

export default Portfolio;