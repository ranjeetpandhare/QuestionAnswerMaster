import React from 'react'
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {

    return (
        <div >
            <span><h5>Copyright @ 2021 Ranjeet .All Rights Reserved</h5></span>
            <a href="https://www.facebook.com/ranjeet.pandhare" target="_blank"><Facebook color="#3B5998" size={50} /></a>&nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/pandhare-ranjeet-3b6850a5/" target="_blank"><Linkedin color="#0e76a8 " size={50} /></a>&nbsp; &nbsp;
            <a href="https://github.com/ranjeetpandhare" target="_blank"><Github color="#4078c0" size={50} /></a>&nbsp; &nbsp;
        </div >
    )
}

export default Footer
