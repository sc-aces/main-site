import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react'
import injectSheet from 'react-jss'
import avatarMk from '../../assets/img/avatar-mk.jpg'
import govImg from '../../assets/img/gov.jpg'
import Button from '../../components/Button'
import Section from '../../components/Section'

const styles = theme => ({
  section: {
    boxShadow: theme.shadows[2],
  },
  userContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  faIcon: {
    fontSize: '5em',
    height: 81,
    width: 81,
    borderRadius: 200,
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  userExec: {
    background: theme.palette.secondary.color,
    color: theme.palette.secondary.contrast,
  },
  userCap: {
    background: theme.palette.capitalist.color,
    color: theme.palette.capitalist.contrast,
  },
  userExpl: {
    background: theme.palette.explorer.color,
    color: theme.palette.explorer.contrast,
  },
  userSold: {
    background: theme.palette.soldier.color,
    color: theme.palette.soldier.contrast,
  },
  avatar: {
    height: 161,
    width: 161,
    '& > img': { borderRadius: 100 },
    background: 'none',
  },
  centerBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  skewButton: {
    transform: 'skew(15deg,0)',
    marginLeft: 0,
    marginRight: 0,
    '& > div': {
      transform: 'skew(-15deg,0)',
    },
  },
})

const GovPage = ({ classes }) => (
  <>
    <img src={govImg} alt="" />
    <Section disableVertPadding>
      <h1 className="text-center">Government</h1>
      <div className={classes.centerBlock}>
        <Button
          className={classes.skewButton}
          href="/gov/constitution"
          variant="primary"
        >
          <div>Constitution</div>
        </Button>
        <Button
          className={classes.skewButton}
          href="/gov/sorm"
          variant="primary"
        >
          <div>SORM</div>
        </Button>
      </div>
    </Section>
    <Section inset bg="triangles">
      <h2>Executive Council</h2>
      <p>
        Coordinates the actions of the other branches of the Society. Manages
        the administrative and bureaucratic functions of the Society. Is
        responsible for recruitment and promotion of the Society to the larger
        universe. Organizes cooperation between the Society and other
        organizations.
      </p>
      <div className="row">
        <div className={classNames(classes.userContainer, 'col4')}>
          <div className={classNames(classes.userExec, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
        <div className={classNames(classes.userContainer, 'col4')}>
          <div className={classNames(classes.userExec, classes.avatar)}>
            <img src={avatarMk} alt="MobiusKiller Profile" />
          </div>
          <h3>MobiusKiller</h3>
          <Button href="#">Contact</Button>
        </div>
        <div className={classNames(classes.userContainer, 'col4')}>
          <div className={classNames(classes.userExec, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
      </div>
    </Section>
    <Section dark>
      <h2>Capitalist Council</h2>
      <p>
        Is responsible for the trade and industrial activities of the Society.
        This includes business ventures operated directly by the Society, as
        well as coordinating trade and cooperation between ACES members. Is
        responsible for the mining, manufacturing, production, trading posts and
        stores of the Society.
      </p>
      <div className="row">
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userCap, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userCap, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
      </div>
    </Section>
    <Section inset bg="triangles">
      <h2>Explorer Council</h2>
      <p>
        Is responsible for the exploration operations of the Society.
        Disseminate the information and intelligence gathered by explorers to
        all members. Works closely with traders and explorers not only to find
        new systems to access, but also to discover new opportunities. Manages
        scouting and bounty-hunting operations.
      </p>
      <div className="row">
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userExpl, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userExpl, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
      </div>
    </Section>
    <Section dark>
      <h2>Soldier Council</h2>
      <p>
        Coordinates the military functions of the Society. Manages the security
        of the Society assets, and protect the members. Works closely with the
        other branches to coordinate escorts and fire support for traders and
        explorers entering unsecured territory. Manages and coordinate combat
        operations against pirates or other threats to the Society’s security.
        Coordinate training exercises and keep the Society’s military assets
        ready for combat. Manages private wars against guilds who threaten the
        Society’s security or attempt to bar the Society’s access to trade
        routes.
      </p>
      <div className="row">
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userSold, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
        <div className={classNames(classes.userContainer, 'col6')}>
          <div className={classNames(classes.userSold, classes.faIcon)}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h3>Councillor Name</h3>
          <Button href="#">Contact</Button>
        </div>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(GovPage)
