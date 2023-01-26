import React from 'react'
import n from '../style/Nav.module.css'

export default function About() {
    return(
        <div className={n.nav}>
            <div className={n.contLogo}>
                <p className={n.logo}>Larrosa Portfolio</p>
            </div>
            <div className={n.contMode}>
                <div className={n.darkMode}>
                    <span className={n.dark}>a</span>
                    <span className={n.ligth}>b</span>
                </div>
            </div>
        </div>
    )
}