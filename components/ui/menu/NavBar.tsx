import React, { useState } from 'react'

import { ActiveLink } from './ActiveLink';

import styles from "./menu.module.css";

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import backgroundaProfile from '../../../public/image/hero-banner4.jpg'
import { CSSProperties } from "react";

const menuItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Proyectos', href: '/proyectos' },
    { text: 'Skills', href: '/skills' },
    { text: 'About Me', href: '/About' }
]



export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onClickMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    return (
        <header className={styles['main-header']}>
            <div className={styles['align-elements-center']}>
                <div className={styles['flexbox']}>
                    <div className={`${styles['con']}`}>
                        <img className={`${styles['logo-header']}`} src='../../../image/3.png' />
                        <img className={`${styles['img-logo-responsive']} `} src='../../../image/2.png' />
                        <div>
                            <IconButton className={`${styles['button-container']}`} onClick={onClickMenu}>
                                {isOpen ? (
                                    <CloseIcon color='primary' className={`${styles['btn-menu-header']}`} />
                                ) : (
                                    <MenuIcon color='primary' className={`${styles['btn-menu-header']}`} />
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <nav className={`${styles['menu-group']} ${isOpen ? styles["show"] : ""}`}>
                        {menuItems.map(({ text, href }) => (
                            <ActiveLink href={href} text={text} key={href} />
                        ))}
                    </nav>
                </div>
                <div className={styles['row-align-items-center']}>
                    <div className={styles['introduction-profile']}>
                        <p>Hola, mi nombre es</p>
                        <h1> Josue Percy</h1>
                        <p>Soy desarrollador web, autodidacta en el aprendizaje, esperó que el portafolio sea de curiosidad para algunas personas y disfruten mis proyectos🚀</p>
                    </div>
                    <div className={styles['introduction-profile']}>
                        <img src='../../../image/perfil23.jpg' className={styles['profile-photo']} />
                    </div>
                </div>
            </div>
        </header>
    )
}