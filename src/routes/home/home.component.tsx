import { useState, useContext } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import VisibilitySensor from 'react-visibility-sensor'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import Text from '@components/text/text.component'
import Heading from '@components/heading/heading.component'
import Slide from '@components/slide/slide.component'
import Button, {
  BUTTON_TYPE_CLASSES,
} from '@components/button/button.component'
import Menu from '@components/menu/menu.component'
import FadeIn from '@components/fade-in/fade-in.component'
import Sidebar from '@components/sidebar/sidebar.component'
import Container from '@components/container/container.component'
import MenuButton from '@components/menu-button/menu-button.component'
import AbilityItem from '@components/ability-item/ability-item.component'

import { MenuContext, DarkModeContext } from 'contexts/app.context'
import mediaLinks from 'media-links'
import * as S from './home.styles'

export type HomeProps = {
  percentage: number
} & React.HTMLAttributes<HTMLDivElement>

const Home: React.FC<HomeProps> = ({ percentage }) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')
  const { menuOpen } = useContext(MenuContext)
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const changeLanguageHandler = () => {
    const newLang = lang === 'en' ? 'br' : 'en'

    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  const contactScroll = () => {
    document
      .getElementById('footer')
      ?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  return (
    <S.MainContainer percentage={percentage}>
      <Sidebar />
      <S.MobileNav menuOpen={menuOpen}>
        <S.DMButton onClick={toggleDarkMode}>
          {darkMode === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
        </S.DMButton>
        <S.LangButton color="secondary" onClick={changeLanguageHandler}>
          {t('language')}
        </S.LangButton>
        <MenuButton />
      </S.MobileNav>
      <Menu />
      <S.Intro as="section">
        <div>
          <S.Hello>
            HELLO WORLD!
            <br />
            <Trans i18nKey="hello_name">
              <span style={{ marginLeft: '-0.3rem' }}>I&apos;m John.</span>
            </Trans>
          </S.Hello>
          <Text className="w-lg-90 w-xxl-45 lh-4 text-md-justify my-4">
            <Trans i18nKey="intro">
              A <span className="text-red">Full Stack Developer</span> and{' '}
              <span className="text-red">Designer</span> based in Brazil using{' '}
              creativity to craft impactful and memorable experiences and loves
              minimalism, games and a good adventure!
            </Trans>
          </Text>
          <div>
            <ul>
              <li>
                <a href={mediaLinks.linkedin}>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={mediaLinks.github}>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href={mediaLinks.instagram}>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <S.ScrollIcon />
      </S.Intro>
      <S.Slide>
        <Slide>
          <div>
            <Text color="red" className="marquee">
              <span>
                React • NodeJS • Typescript • Web Design • GraphQL • MongoDB{' '}
                •&nbsp;
              </span>
            </Text>
            <Text color="red" className="marquee marquee2">
              <span>
                React • NodeJS • Typescript • Web Design • GraphQL • MongoDB{' '}
                •&nbsp;
              </span>
            </Text>
          </div>
          <div>
            <Text color="red" className="marquee">
              <span className="reverse">
                MongoDB • GraphQL • Web Design • Typescript • NodeJS • React{' '}
                •&nbsp;
              </span>
            </Text>
            <Text color="red" className="marquee marquee2">
              <span className="reverse">
                MongoDB • GraphQL • Web Design • Typescript • NodeJS • React{' '}
                •&nbsp;
              </span>
            </Text>
          </div>
        </Slide>
      </S.Slide>
      <VisibilitySensor partialVisibility={true} minTopValue={500}>
        {({ isVisible }: { isVisible: boolean }) => (
          <FadeIn isVisible={isVisible}>
            <S.About as="section" id="about" className="container-fluid">
              <Heading label={t('aboutTitleLabel')} weight="bold">
                <Trans i18nKey="aboutTitle">
                  MY <span className="text-red">STORY</span>
                </Trans>
              </Heading>
              <Text
                color="secondary"
                className="my-4 text-md-justify lh-4 w-xxl-45"
              >
                <Trans i18nKey="about">
                  Since I was a child, I loved to play games, my first
                  programming language was LUA using a simple Notepad because
                  many games at that time were made with it.
                  <br />
                  After high school, I decided that I wanted to do things
                  better, I went to a college to learn systems analysis and
                  development and started working with what I always wanted. I
                  dedicated several years to learn and improve my skills and
                  creativity to always be respectful and give the best for my
                  teammates, friends and my clients both as a developer and
                  designer.
                </Trans>
              </Text>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.outlined}
                onClick={contactScroll}
              >
                {t('btnTalk')}
              </Button>
            </S.About>
          </FadeIn>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} minTopValue={500}>
        {({ isVisible }: { isVisible: boolean }) => (
          <FadeIn isVisible={isVisible}>
            <S.Abilities id="abilities">
              <Heading label={t('skillsTitleLabel')} weight="bold">
                <Trans i18nKey="skillsTitle">
                  MY <span className="text-red">ABILITIES</span>
                </Trans>
              </Heading>
              <div className="my-4">
                <AbilityItem name="css3" level={5}>
                  <Trans i18nKey="cssSkill">
                    <span className="font-medium">Learned: </span>SASS,
                    CSS-in-JS, all style properties, all unit types (em, rem,
                    ch, vh, vw, etc...), pseudo-classes and pseudo-elements,
                    grid, flexbox, bootstrap framework.
                    <br />
                    <span className="font-medium">Not learned: </span>-
                  </Trans>
                </AbilityItem>
                <AbilityItem name="html5" level={4}>
                  <Trans i18nKey="htmlSkill">
                    <span className="font-medium">Learned: </span> Almost every
                    HTML tag and use cases.
                    <br />
                    <span className="font-medium">Not learned: </span>{' '}
                    Accessible properties (ARIA) and most uncommon tags.
                  </Trans>
                </AbilityItem>
                <AbilityItem name="javascript" level={4}>
                  <Trans i18nKey="jsSkill">
                    <span className="font-medium">Learned: </span>Typescript,
                    CommonJS, V8 engine, JS Runtime, Prototypes, Generic
                    Functions, Promises, Async/Await (ES8), API/Fetch calls,
                    Variable Declarations, Classes, Jquery.
                    <br />
                    <span className="font-medium">Not learned: </span>Regular
                    expressions
                  </Trans>
                </AbilityItem>
                <AbilityItem name="nodejs" level={4}>
                  <Trans i18nKey="nodeSkill">
                    <span className="font-medium">Learned: </span>REPL, Modules,
                    NodeJS Environment, Middlewares, NPM and Semantic
                    Versioning, RESTful APIs, GraphQL, JWT and OAuth 2.0
                    <br />
                    <span className="font-medium">Not learned: </span>Docker,
                    CI/CD, ORMs
                  </Trans>
                </AbilityItem>
                <AbilityItem name="react" level={4}>
                  <Trans i18nKey="reactSkill">
                    <span className="font-medium">Learned: </span>CRA, Vite,
                    Functional/Class Components, Hooks, Context API, Redux/Saga,
                    Rendering, Styled Components, Apollo Client, Typescript,
                    Gatsby (Basics), Testing
                    <br />
                    <span className="font-medium">Not learned: </span>PWA
                  </Trans>
                </AbilityItem>
                <AbilityItem name="sql" level={3}>
                  <Trans i18nKey="sqlSkill">
                    <span className="font-medium">Learned: </span>Statements,
                    Clauses, Operators, Database Structure, UML and ERD
                    (Software Engineering), PostgreSQL and MySQL
                    <br />
                    <span className="font-medium">Not learned: </span>Oracle,
                    NoSQL (except MongoDB), Best Security Practices
                  </Trans>
                </AbilityItem>
                <AbilityItem name="git" level={3}>
                  <Trans i18nKey="gitSkill">
                    <span className="font-medium">Learned: </span>Github + CLI,
                    Github Actions (basics), Markup Language, Repositories,
                    Branches and Versioning, Pull Requests
                    <br />
                    <span className="font-medium">Not learned: </span>Github
                    Pages, Any git solution besides Github
                  </Trans>
                </AbilityItem>
              </div>
            </S.Abilities>
          </FadeIn>
        )}
      </VisibilitySensor>
      <S.Footer id="footer">
        <VisibilitySensor partialVisibility={true} minTopValue={250}>
          {({ isVisible }: { isVisible: boolean }) => (
            <FadeIn isVisible={isVisible}>
              <Container>
                <Heading
                  label={t('contactTitleLabel')}
                  weight="semibold"
                  size="xxlarge"
                >
                  {t('contactTitle')}
                </Heading>
                <a href="mailto:hello@jhones.co">
                  <S.Email>hello@jhones.co</S.Email>
                </a>
                <div>
                  <ul>
                    <li>
                      <a href={mediaLinks.linkedin}>Linkedin</a>
                    </li>
                    <li>
                      <a href={mediaLinks.github}>Github</a>
                    </li>
                    <li>
                      <a href={mediaLinks.instagram}>Instagram</a>
                    </li>
                    <li>
                      <a href={t('resume')}>Resume</a>
                    </li>
                  </ul>
                </div>
              </Container>
            </FadeIn>
          )}
        </VisibilitySensor>
        <S.Copyright className="container-fluid">
          <Text size="xsmall">
            <Trans i18nKey="copyright">
              © 2022 All rights reserved
              <br />
              Designed and developed by me
            </Trans>
          </Text>
        </S.Copyright>
      </S.Footer>
    </S.MainContainer>
  )
}

export default Home
