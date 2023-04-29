import React from 'react';
import './floatingIcons.css';

const FloatingIcons = () => {
    return (
        <div className="fixed-social">
            <a href={"https://www.facebook.com/sharer/sharer.php?u="+window.location.href} className="fixed-facebook" target="_blank">
                <i className='fa fa-brands fa-meta'></i>
                <span>Meta  </span>
            </a>
            <a href={"https://web.whatsapp.com/send?text="+window.location.href}  className="fixed-whatsapp" target="_blank">
                
            <i className='fa fa-brands fa-whatsapp'></i>
                {/* <FontAwesomeIcon icon={brands('whatsapp')} /> */}
                <span>WhatsApp</span>
            </a>
            {/*  */}
            <a href={"https://www.linkedin.com/sharing/share-offsite/?url="+window.location.href} className="fixed-linkedin" target="_blank">
                {/* <FontAwesomeIcon icon={brands('instagram')} /> */}
                <i className='fa fa-brands fa-linkedin'></i>
                <span>Linkedin</span></a>
        </div>
    )
}
export default FloatingIcons;

