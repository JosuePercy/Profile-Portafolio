import React from 'react'

import styles from './portafolio.module.css'

// type Props = {
//   tittle
// }

export const ProjectsPortfolio = () => {
  return (
    <section>
      <div className={styles['card']}>
        <div className={styles['area-description']}>
          <div className={styles['display-conteiner-description']}>
            <div className={styles['conteiner-area-description']}>
              <div className={styles['conteiner-text']}>
                <h3>
                  Featured Project
                </h3>
                <h2>
                  Crypto App Flutter Wallet
                </h2>
              </div>
              <div className={styles['sterilized-dynamic']}>
                <p>Crypto and Wallet Ul kit can be use for Crypto and Wallet
                  theme application in android and ios device. It contain 60++
                  Screens with different type of UI, Crypto and Wallet Ul kit
                  can be save your time to code all Front end layout.</p>
              </div>

            </div>
            <div className={styles['container-icons-languages']}>
              <img alt='html' width={50} height={50} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg' />
              <img alt='html' width={50} height={50} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' />
            </div>
          </div>
        </div>
        <div className={styles['area-briefcase']}>
          <img src='../../../image/portada.jpg' />
        </div>
      </div>
    </section >
  )
}
