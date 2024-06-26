import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Summary.module.scss'
import photo from '@public/image/jpg/me.jpg'
import type { StaticImageData } from 'next/image'

export interface SummaryInterface {
  image: StaticImageData
  content: React.ReactNode
  extra?: React.ReactNode
  links: SummaryLinkInterface[]
}

export interface SummaryLinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export const summary: SummaryInterface = {
  image: photo,
  content: (
    <>
      I am <span className={styles.accent}>Hossein Emami</span> and innovative As a{' '}
      <span className={styles.bold}>Front-end developer </span> with{' '}
      <span className={styles.bold}>6 years of experience </span> building and maintaining responsive websites in the industry, I possess a{' '}
      <span className={styles.bold}>diverse skill set</span> in my field of work.
      <div className={styles.break}></div> With a strong focus on delivering{' '}
      <span className={styles.bold}>
        clean code
        <span />, <span className={styles.bold}></span> high-quality projects{' '}
      </span>{' '}
      and <span className={styles.bold}>exceptional user interfaces</span>, I am committed to
      staying <span className={styles.bold}>up-to-date</span> with the latest industry trends and
      best practices.Passionate about collaborating closely with the team.
    </>
  ),
  // extra: (
  //   <>
  //     <div className={styles.break}></div>I also have the knowledge and skills for UI Design and I
  //     have created{' '}
  //     <span className={styles.bold}>User personas, Wireframes, High fidelity projects</span> and{' '}
  //     <span className={styles.bold}>Prototypes</span> using{' '}
  //     <span className={styles.bold}>Figma and Adobe XD</span>.
  //   </>
  // ),
  links: [
    {
      link: 'mailto:hosseinemami1370@gmail.com',
      color: 'blue',
      text: 'Hosseinemami1370@gmail.com',
      icon: 'ci:mail',
    },
    {
      link: 'https://www.linkedin.com/in/hossein-emami-9b4b0ba2/',
      color: 'blue',
      text: 'linkedin.com/in/hossein-emami-9b4b0ba2',
      icon: 'bxl:linkedin-square',
    },
    {
      link: 'https://github.com/hosseinemami1370',
      color: 'blue',
      text: 'github.com/hosseinemami1370',
      icon: 'bxl:github',
    },
    // {
    //   link: 'https://gitlab.com/cnawam',
    //   color: 'blue',
    //   text: 'gitlab.com/cnawam',
    //   icon: 'bxl:gitlab',
    // },
    {
      link: 'https://t.me/Hosseinemami1370',
      text: 't.me/Hosseinemami1370',
      color: 'blue',
      icon: 'bxl:telegram',
    },
  ],
}
