import React, {useEffect, useRef} from "react";
import h from '../style/Home.module.css'
import Nav from './Nav'
import Typed from 'typed.js'
import Particle from "./Particle";

export default function Home(){

    const el= useRef(null)

    useEffect(() => {
        const typed= new Typed (el.current,{
            strings:["Full Stack Developer","Web Designer"],
            startDelay: 500,
            typeSpeed:30,
            backSpeed:80,
            backDelay:100,
            smartBackspace:true,
            showCursor:true,
            autoInsertCss:true,
            loop:true
        });

    })

    return(
        <>
        <Particle/>
            <Nav/>
        <div id='home'>
            <div className={h.divInfo}>
                <p className={h.info}>Hi, I am</p>
                <h1 className={h.name}>Nicolas Larrosa</h1>
                <p className={h.full}><span ref={el}></span></p>
            </div>
        </div>
        </>
    )
} 