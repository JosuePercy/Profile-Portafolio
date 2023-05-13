import React from 'react'

import styles from './technologies.module.css'
import listSkills from "@/data/projects/icons.json"

import { Listcardstechnology } from '@/components/ui/list-cards-technology'

export const Technologies = () => {
    return (
        <div className={styles["skills-container-parent"]}>
            <div className={styles["display-container-skills"]}>
                <div className={styles["conteiner-skills"]}>
                    {
                        listSkills.map((skill, index) => {
                            return (
                                <Listcardstechnology
                                    name={skill.name}
                                    url={skill.url}
                                    link={skill.link}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
