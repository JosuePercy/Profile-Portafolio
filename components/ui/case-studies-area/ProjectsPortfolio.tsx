import React from 'react'

import Link from 'next/link'

import styles from './portafolio.module.css'

import AddLinkIcon from '@mui/icons-material/AddLink';

type Props = {
  outstanding: string;
  title: string;
  description: string;
  technologies: string[];

}

export const ProjectsPortfolio = ({ outstanding, title, description, technologies }: Props) => {
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
                technologies.map(e => {
                  return <img alt='html' width={50} height={50} src={e} key={e} />
                })
              }
            </div>
          </div>
        </div>
        <div className={styles['area-briefcase']}>
          <Link href={'https://page-layout-green.vercel.app/'} target="_blank">
            <img src='../../../image/portfolio3.png' />
            <AddLinkIcon className={styles['icon-link']
            } fontSize='large' />
          </Link>
        </div>
      </div>
    </section >
  )
}
