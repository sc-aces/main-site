import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Section from '../../components/Section'
import govImg from '../../assets/img/gov.jpg'

// following images from https://www.flickr.com/photos/hasgaha
import squadImg from '../../assets/img/squad.jpg'
import fleetImg from '../../assets/img/fleet.jpg'

const styles = theme => ({
  flex: {
    display: 'flex',
    '& > div': {
      width: '50%',
      padding: 16,
      '& h2': {
        paddingBottom: 8,
        borderBottom: `2px solid ${theme.palette.secondary.color}`,
      },
      '& img': {
        margin: '0 auto',
        maxHeight: 272,
      },
    },
  },
  aboutRoot: {
    background: theme.palette.primary.color,
    '-webkit-clip-path':
      'polygon(0% 0%, 100% 0em, 100% 100%, 0% calc(100% - 4em))',
    clipPath: 'polygon(0% 0%, 100% 3.5em, 100% 100%, 0% calc(100% - 2em))',
    color: theme.palette.primary.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.primary.contrast}`,
    },
  },
  about: {
    boxShadow: theme.shadows[20],
    padding: '1em 4.5em 1em 1em !important',
    background: theme.palette.explorer.light,
    '-webkit-clip-path':
      'polygon(0em 0, 100% 0em, calc(100% - 2em) 100%, 0em 100%)',
    clipPath: 'polygon(0em 0, 100% 0em, calc(100% - 2em) 100%, 0em 100%)',
    color: theme.palette.explorer.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.explorer.contrast}`,
    },
  },
  col4: {
    width: '33%',
    padding: '0 16px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  col6: {
    width: '50%',
    padding: '0 16px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  row: {
    display: 'flex',
    width: '100%',
    margin: '0 -16px',
    '@media (max-width: 767px)': {
      display: 'block',
    },
  },
})

const AboutPage = ({ classes }) => (
  <>
    <img src={govImg} />
    <Section disableVertPadding>
      <h1 className="text-center">About</h1>
    </Section>
    <Section className={classes.aboutRoot}>
      <h2 className="text-center">THE HOME OF DEMOCRACY AND FREEDOM</h2>
      <div className={classes.row}>
        <div className={classNames(classes.col6)}>
          <h3 className={classes.about}>ACES</h3>
          <p>
            The Association of Capitalists, Explorers, and Soldiers, is a
            Democratic star citizen organization dedicated to serving the needs
            of its members and promoting the good of the galaxy as a whole. our
            goal is efficiency of communication and organizing the optimum path
            between resource, acquisition and expansion.
          </p>
          <p>
            ACES is a diverse organization of professionals, including traders,
            mercenaries/ career explorers, bounty hunters, industrialists, and
            all other legal SC professions. Privateers are ships installed with
            docking collars and tractor beams to allow the capture of ACES enemy
            ships.
          </p>
          <p>
            ACES operates completely within the law. It's members are known for
            their honesty, reliability and excellence.
          </p>
          <p>
            ACES is divided into three divisions but no member is restricted to
            any one profession. Each division is further broken up into
            squadrons. Each of these squadrons has a particular mission: bounty
            hunting, escorting convoys, deep space exploring, mining, etc. You
            can enlist yourself intoone of these squadrons, or make your own.
          </p>
        </div>
        <div className={classNames(classes.col6)}>
          <h3 className={classNames('tex-center', classes.about)}>
            LIBERTAS AD INFINITAS
          </h3>
          <p>
            We pledge our honor and commitment to the United Empire of Earth. We
            will defend our allies and mankind giving pride to humanity and
            freedom to all. We will uphold our values, our honor, and honest
            opportunity throughout the galaxy for all. Protect the weak, fight
            the strong, and strength in unity; we are ACES.
          </p>
          <h5 className="text-center">2943, Members of the Aces Fleet</h5>
        </div>
      </div>
    </Section>
    <Section innerClassName={classes.flex}>
      <div>
        <h2>Squadrons</h2>
        <img src={squadImg} alt="constellation in hyperspace" />
        <p>
          Since ACES will never take a mandatory tax from its members, it gets
          its money and resources from Official ACES Missions. These missions
          are handed out to squadrons, and the squadrons volunteer to give the
          proceeds from the missions back to ACES. While members aren't
          performing Official ACES Missions with their squadron, they can do
          anything they want!
        </p>
        <p>
          Each squadron can organize themselves as they deem fit. They can
          implement any rules they want (provided they adhere to our
          Constitution). They can have any in-game focus they want, from
          defending ACES, to owning a missile factory, to charting jump points.
          The squadron structure is intentionally left open to give our members
          the most freedom possible.
        </p>
        <p>
          When we have a bunch of like-minded individuals working together, it
          helps the individual members, and ACES, achieve their goals. If your
          in-game goals change, no problem! You can change squadrons as often as
          once a week. There's also no need to join a squadron if you don't want
          to. You can help squadrons perform their Official Missions, group up
          with other individuals on your own, or even fly around by yourself.
          ACES is committed to letting you play how you want, when you want.
        </p>
      </div>
      <div>
        <h2>Fleets</h2>
        <img src={fleetImg} alt="fleet of bombers" />
        <p>
          If several squadrons want to come together to realize a similar goal,
          they can form into a fleet. These fleets can have any goal that they
          want, from serving as a support group for other ACES activity, to
          being a conglomeration of ACES's defense squadrons. Having fleets make
          it easier for our Council to quickly dispatch a large group to perform
          a particular mission.
        </p>
        <p>
          Fleets are not autonomous groups within ACES. Each fleet's main
          purpose is to enhance the effectiveness of ACES's forces. When fleets
          aren't performing Official ACES Missions, their members can do
          whatever they want, including continuing to fly with their fleet, or
          flying with a different fleet. Fleets are just one more way to give
          our members freedom to play how they want, when they want.
        </p>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(AboutPage)
