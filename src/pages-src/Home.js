import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoins,
  faMicroscope,
  faFighterJet,
} from '@fortawesome/free-solid-svg-icons'
import img from '../assets/img/home-hero.jpg'
import acesLogo from '../assets/img/acesLogoB-300x188.png'
import Button from '../components/Button'
import Section from '../components/Section'
import trianglesBg from '../assets/img/triangles.svg'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  acesLogo: {
    margin: '0 auto',
  },
  flex: {
    display: 'flex',
  },
  flexColumnMobile: {
    '@media (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
  flexColumnReverseMobile: {
    '@media (max-width: 767px)': {
      flexDirection: 'column-reverse',
    },
  },
  col3: {
    width: '25%',
    padding: '5px 10px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  col9: {
    width: '75%',
    padding: '5px 10px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  divisionIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImg: `url(${trianglesBg})`,
    '& svg': {
      fontSize: '8em',
    },
  },
  capitalist: {
    background: theme.palette.capitalist.dark,
    '-webkit-clip-path':
      'polygon(0% 0%, 100% 0%, 100% calc(100% - 2.5em), 0% 100%)',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 2.5em), 0% 100%)',
    color: theme.palette.capitalist.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.capitalist.contrast}`,
    },
  },
  explorerBg: {
    background: theme.palette.explorer.dark,
  },
  explorer: {
    color: theme.palette.explorer.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.explorer.contrast}`,
    },
  },
  soldier: {
    background: theme.palette.soldier.dark,
    '-webkit-clip-path': 'polygon(0% 0%, 100% 2.5em, 100% 100%, 0% 100%)',
    clipPath: 'polygon(0% 0%, 100% 2.5em, 100% 100%, 0% 100%)',
    color: theme.palette.soldier.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.soldier.contrast}`,
    },
  },
  '@global': {
    '#capitalist-color': {
      color: theme.palette.capitalist.light,
    },
    '#explorer-color': {
      color: theme.palette.explorer.light,
    },
    '#soldier-color': {
      color: theme.palette.soldier.light,
    },
  },
})

const Home = ({ classes }) => (
  <>
    <div className={classes.backgroundImg}>
      <img src={img} alt="Esperia Prowler" />
    </div>
    <div className={classes.content}>
      <Section>
        <div className={classes.section}>
          <h1 className="text-center">
            Association of Capitalists, Explorers, and Soldiers
          </h1>
          <h3 className="text-center">libertas ad infinitas</h3>
          <hr />
          <div
            className={classNames(
              classes.flex,
              classes.flexColumnReverseMobile
            )}
          >
            <div className={classes.col3}>
              <img
                className={classes.acesLogo}
                src={acesLogo}
                alt="ACES Logo"
              />
            </div>
            <div className={classes.col9}>
              <p id="about-aces">
                The Association of Capitalists, Explorers, and Soldiers is a
                democratic Star Citizen organization dedicated to serving the
                needs of its members and promoting the good of the galaxy as a
                whole. ACES is a diverse organization of professionals, from
                marines to stock traders, from bounty hunters to scientists, and
                everything in between. ACES operates completely within the law.
                It's members are known for their honesty, reliability, and
                excellence.
              </p>
              <div className={classes.buttonContainer}>
                <Button href="/gov/constitution/">Read Our Constitution</Button>
                <Button href="/apply" variant="primary">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className={classes.explorerBg}>
        <Section className={classes.capitalist}>
          <div
            className={classNames(
              classes.flex,
              classes.flexColumnReverseMobile
            )}
          >
            <div className={classes.col9}>
              <h2>Capitalist</h2>
              <p>
                Traders, miners, manufacturers, and business men will be in
                charge of trade and industrial activities of ACES. This includes
                business ventures operated by ACES owned assets as well as
                coordinating trade and cooperation between ACES members and
                other factions. Facilities such ay mining, manufacturing,
                production, trading, posts and stores will all be vested
                interests. Capitalists are the backbone for a strong ACES
                economy.
              </p>
              <div className={classes.buttonContainer}>
                <Button href="/apply" variant="dark">
                  Become a Capitalist
                </Button>
              </div>
            </div>
            <div className={classNames(classes.col3, classes.divisionIcon)}>
              <FontAwesomeIcon id="capitalist-color" icon={faCoins} />
            </div>
          </div>
        </Section>
        <Section className={classes.explorer}>
          <div className={classNames(classes.flex, classes.flexColumnMobile)}>
            <div className={classNames(classes.col3, classes.divisionIcon)}>
              <FontAwesomeIcon id="explorer-color" icon={faMicroscope} />
            </div>
            <div className={classes.col9}>
              <h2>Explorer</h2>
              <p>
                The ACES explorers division will blaze new trails in space
                opening new systemS to commerce or strive to discover new
                resources, phenomena and artifacts that will benefit
                ACES.Collaboration with other ACES squadrons will capitalize on
                those discoveries with ACES contacts in business to mine the
                minerales they discover or open new trade routes for commerce.
                Explorers are also capable of search and rescue missions, along
                with bounty hunting.
              </p>
              <div className={classes.buttonContainer}>
                <Button href="/apply" variant="dark">
                  Become an Explorer
                </Button>
              </div>
            </div>
          </div>
        </Section>
        <Section className={classes.soldier}>
          <div
            className={classNames(
              classes.flex,
              classes.flexColumnReverseMobile
            )}
          >
            <div className={classes.col9}>
              <h2>Soldier</h2>
              <p>
                The ACES soldier division is the combat arm for protecting,
                ensuring open trade lanes, and providing expedition secruity.
                The navy, escort, protection, and privateering squadrons will be
                proficient in combat situations. The navy is the strength of
                protecting ACES territory and assets as well as engaging in
                conflicts. Escort and protection will specialize in long range
                missions assisting traders and explorers. The privateers will
                specialize in ships capable of sweeping up disabled enemy
                vessels after a battle or engagement.
              </p>
              <div className={classes.buttonContainer}>
                <Button href="/apply" variant="dark">
                  Become a Soldier
                </Button>
              </div>
            </div>
            <div className={classNames(classes.col3, classes.divisionIcon)}>
              <FontAwesomeIcon id="soldier-color" icon={faFighterJet} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  </>
)

export default injectSheet(styles)(Home)
