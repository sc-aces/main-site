import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoins,
  faMicroscope,
  faFighterJet,
} from '@fortawesome/free-solid-svg-icons'
import img from '../assets/img/home_hero.jpg'
import acesLogo from '../assets/img/acesLogoB-300x188.png'
import Button from '../components/Button'

const styles = theme => ({
  root: {
    display: 'flex',
    background: 'green',
  },
  content: {},
  section: {
    maxWidth: 1250,
    // margin: '0 auto',
    fontFamily: theme.fonts.body,
    margin: '0 auto',
    padding: '3em 0',
    '& h1, & h2, & h3, & h4': {
      fontFamily: theme.fonts.display,
      textAlign: 'center',
    },
    '& h1': {
      fontSize: '2.5rem',
    },
    '& h2': {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    '& h3': {
      fontSize: '1.25rem',
      fontVariant: 'small-caps',
    },
  },
  darkSection: {
    background: '#f7f8fa',
    boxShadow: 'inset 0px 0px 13px 2px rgba(200, 200, 200, .5)',
  },
  row: {
    display: 'flex',
  },
  col3: {
    width: '25%',
    padding: '5px 10px',
  },
  col9: {
    width: '75%',
    padding: '5px 10px',
  },
  divisionIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: '8em',
    },
  },
  '@global': {
    '#about-aces': {
      textAlign: 'justify',
    },
    '#capitalist-color': {
      color: theme.palette.capitalist.color,
    },
    '#explorer-color': {
      color: theme.palette.explorer.color,
    },
    '#solider-color': {
      color: theme.palette.solider.color,
    },
  },
})

const Home = ({ classes }) => (
  <>
    <div className={classes.backgroundImg}>
      <img src={img} alt="Esperia Prowler" />
    </div>
    <div className={classes.content}>
      <div className={classes.darkSection}>
        <div className={classes.section}>
          <h1>Association of Capitalists, Explorers, and Soldiers</h1>
          <h3>libertas ad infinitas</h3>
          <hr />
          <div className={classes.row}>
            <div className={classes.col3}>
              <img src={acesLogo} alt="ACES Logo" />
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
                <Button href="#" variant="primary">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(classes.section, classes.row)}>
        <div className={classes.col9}>
          <h2>Capitalist</h2>
          <hr />
          <p id="about-aces">
            The Capitalist division takes advantage of the economic markets and
            helps to increase the value of ACES. Capitalists play the market,
            ship goods, and transport passengers for profit.
          </p>
          <div className={classes.buttonContainer}>
            <Link to="/gov/constitution/">Become a Capitalist</Link>
          </div>
        </div>
        <div className={classNames(classes.col3, classes.divisionIcon)}>
          <FontAwesomeIcon id="capitalist-color" icon={faCoins} />
        </div>
      </div>
      <div className={classes.darkSection}>
        <div className={classNames(classes.section, classes.row)}>
          <div className={classNames(classes.col3, classes.divisionIcon)}>
            <FontAwesomeIcon id="explorer-color" icon={faMicroscope} />
          </div>
          <div className={classes.col9}>
            <h2>Explorer</h2>
            <hr />
            <p id="about-aces">
              The Explorer division goes out into the vast universe to discover
              new systems and planets, find the best way to route goods and
              services, monitor enemy locations and movenments, and obtain other
              sensitive intel for ACES.
            </p>
            <div className={classes.buttonContainer}>
              <Link to="/gov/constitution/">Become an Explorer</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(classes.section, classes.row)}>
        <div className={classes.col9}>
          <h2>Solider</h2>
          <hr />
          <p id="about-aces">
            The Solider division is the big stick of ACES. Soldiers are tasked
            with protecting ACES assets and helping the other divisions function
            to their highest capacity. They escort cargo, clear shipping lanes,
            and defend ACES's stores of goods.
          </p>
          <div className={classes.buttonContainer}>
            <Link to="/gov/constitution/">Become a Solider</Link>
          </div>
        </div>
        <div className={classNames(classes.col3, classes.divisionIcon)}>
          <FontAwesomeIcon id="solider-color" icon={faFighterJet} />
        </div>
      </div>
    </div>
  </>
)

export default injectSheet(styles)(Home)
