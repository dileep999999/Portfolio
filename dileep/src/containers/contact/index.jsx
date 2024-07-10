import React from 'react';
import {BsInfoCircle} from 'react-icons/bs';
import PageHeaderContent from '../../components/page-header-content';


const Contact=()=>{
    return(
        <section id="contact" className="contact">
        <PageHeaderContent  headerText ="My Contact" icon={<BsInfoCircle size={40}/>}/>
    </section>
    )
}

export default Contact;