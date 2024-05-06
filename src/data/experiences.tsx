import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import agahpadidar from '@public/image/jpg/company/agahpadidar.jpg'
import pcm from '@public/image/png/company/pcm.png'
import IraniCard from '@public/image/png/company/IraniCard.png'
import { type StaticImageData } from 'next/image'
import React from 'react'

export interface ExperienceInterface {
  alt: string
  name: string | React.ReactNode
  link: string
  logo: string | StaticImageData
  icon: string
  listicon: string
  experiences: string[] | React.ReactNode[]
  color: ColorType
}

export const experiences: ExperienceInterface[] = [
  {
    alt: 'pcm',
    name: (
      <>
        <span className={styles.bold}>PCM Broker</span> (Remote)
        <br />
        Senior Front-end Developer
      </>
    ),
    link: 'https://pcmfa.co/',
    logo: pcm,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      // <>
      //   <span className={styles.bold}>Led a team</span> of developers and provided guidance on
      //   project requirements.
      // </>,
      <>
       Engineered captivating interfaces for a groundbreaking web app, skyrocketing user retention by
        <span className={styles.bold}>(25%)</span>in the exchange department.
      </>,
      <>
        Spearheaded collaboration with cross-functional teams, slashing development time by{' '}
        <span className={styles.bold}>15%</span> and{' '} mitigating post-release bugs by
        <span className={styles.bold}>10%</span>.
      </>,
      <>
        Innovated features to elevate user satisfaction by <span className={styles.bold}>40%</span> , validated through feedback surveys.
      </>,
      <>
        Conducted rigorous code reviews resulting in a <span className={styles.bold}>20%</span> decrease in defects and a <span className={styles.bold}>30%</span>{' '}
        enhancement in maintainability.
      </>,
      <>
       Optimized deployment efficiency by <span className={styles.bold}>15%</span> and supercharged team productivity by <span className={styles.bold}>20%</span>
      </>,
      <>
       Implemented cutting-edge technologies, slashing page load times by <span className={styles.bold}>25%</span> and catapulting overall performance by <span className={styles.bold}>20%</span>
      </>,
      <>
       Rectified frontend issues, halving customer support tickets by <span className={styles.bold}>50%</span>
      </>,
      <>
      Pioneered Agile methodologies, propelling a <span className={styles.bold}>10%</span> increase in sprint velocity and achieving a remarkable 15% higher project success rate.
     </>,
    ],
    color: 'blue',
  },
  {
    alt: 'IraniCard',
    name: (
      <>
        <span className={styles.bold}>IraniCard</span>
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://www.iranicard.ir/',
    logo: IraniCard,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Designed <span className={styles.bold}>User interfaces</span> for mobile apps and websites.
      </>,
      <>
        Created{' '}
        <span className={styles.bold}>User personas, Wireframes, High fidelity designs</span>, and
        integrated <span className={styles.bold}>Prototyping</span>.
      </>,
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span>.
      </>,
    ],
    color: 'blue',
  },
  {
    alt: 'Agahpadidar',
    name: (
      <>
        <span className={styles.bold}>Agahpadidar</span> (Full-time)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://www.linkedin.com/company/agahpadidar/',
    logo: agahpadidar,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Developed complex dynamic features using <span className={styles.bold}>React.js</span> and{' '}
        <span className={styles.bold}>Redux Toolit</span>.
      </>,
      <>
        Established connections to <span className={styles.bold}>Restful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and{' '}
        <span className={styles.bold}>Axios</span>.
      </>,
      <>
        Utilized <span className={styles.bold}>Redux toolit</span> for state management.
      </>,
      <>
        Participated in <span className={styles.bold}>Agile development methodologies</span> such as
        daily stand-ups and sprint planning.
      </>,
    ],
    color: 'blue',
  },
]
