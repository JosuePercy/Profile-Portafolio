import React from 'react'

import Link from 'next/link'

import styles from './portafolio.module.css'

import AddLinkIcon from '@mui/icons-material/AddLink';
import { technology } from "@/interfaces/technology";

type Props = {
  outstanding: string;
  title: string;
  description: string;
  technologies: technology[];
  link?: string
  //  agregar propierda reverse
}

export const ProjectsPortfolio = ({ outstanding, title, description, technologies, link }: Props) => {
  return (
    <section>
      <div className={styles['card']}>
        <div className={styles['area-description']}>
          <div className={styles['display-conteiner-description']}>
            <div className={styles['conteiner-area-description']}>
              <div className={styles['conteiner-text']}>
                <h3>
                  {outstanding}
                </h3>
                <h2>
                  {title}
                </h2>
              </div>
              <div className={styles['sterilized-dynamic']}>
                <p>{description}</p>
              </div>
            </div>
            <div className={styles['container-icons-languages']}>
              {
                technologies.map((technology, index) => {
                  return (
                    <div className={styles['technologies-icon']} key={index}>
                      <span className={styles['event-icon']}>{technology.name}</span>
                      <img
                        width={50}
                        height={50}
                        src={technology.url}
                        key={technology.url}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={styles['area-briefcase']}>
          <Link href={'https://page-layout-green.vercel.app/'} target="_blank">

            <img src={link} />
            <AddLinkIcon className={styles['icon-link']
            } fontSize='large' />
          </Link>
        </div>
      </div>
    </section >
  )
}
