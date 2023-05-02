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
          <div className={styles['sterilized-area-description']}>
            <h3>
              Featured Project
            </h3>
            <h2>
              Crypto App Flutter Wallet
            </h2>
            <div className={styles['sterilized-dynamic']}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae ullam sunt deleniti recusandae id aspernatur omnis dolorum aliquam rerum, repellat odit cumque ipsum, commodi impedit, hic expedita magni delectus.
              </p>
            </div>
          </div>
          <div className={styles['icons-languages']}>
            <img alt='html' width={50} height={50} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg' />
          </div>
        </div>
        <div className={styles['area-briefcase']}>

        </div>
      </div>
    </section >
  )
}
