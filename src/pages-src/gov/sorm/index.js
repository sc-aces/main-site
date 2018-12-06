import React from 'react'
import injectSheet from 'react-jss'
import Section from '../../../components/Section'
import cityImg from '../../../assets/img/city.jpg'
import Button from '../../../components/Button'

const styles = theme => ({
  aboutRoot: {
    background: theme.palette.midnight.color,
    '-webkit-clip-path': 'polygon(0% 0%, 100% 4em, 100% 100%, 0% 100%)',
    clipPath: 'polygon(0% 0%, 100% 4em, 100% 100%, 0% 100%)',
    color: theme.palette.midnight.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.midnight.contrast}`,
    },
  },
  about: {
    boxShadow: theme.shadows[20],
    padding: '1em 4.5em 1em 1em !important',
    background: theme.palette.primary.color,
    '-webkit-clip-path':
      'polygon(0em 0, 100% 0em, calc(100% - 2em) 100%, 0em 100%)',
    clipPath: 'polygon(0em 0, 100% 0em, calc(100% - 2em) 100%, 0em 100%)',
    color: theme.palette.primary.contrast,
    '& h2': {
      paddingBottom: '.5em',
      marginBottom: '.5em',
      borderBottom: `2px solid ${theme.palette.primary.contrast}`,
    },
  },
  centerBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const SormPage = ({ classes }) => (
  <>
    <img src={cityImg} alt="" />
    <Section disableVertPadding>
      <h1>Standard Organization and Rules Manual</h1>
      <hr />
      <p>
        The ACES Standard Organization and Rules Manual (SORM) is a companion
        document to the ACES Constitution and shall be considered the law with
        regard to how ACES is structured and operates within the Star Citizen
        Universe. It includes all Council decisions and rules that will help
        ACES function as a thriving organization.
      </p>
      <p>
        The Rules and Functions contained within have been ratified by the
        Council. Any requests for changes to the rules contained in this
        document may be brought forth by any Member of ACES in accordance with
        their rights as outlined in the ACES Constitution.
      </p>
      <p>
        Any rules in this document found to be in conflict with the ACES
        Constitution, the Constitution shall hold precedence.
      </p>
      <p>
        Any rules found to be in error must be brought to the attention of the
        Council for correction.
      </p>
    </Section>
    <Section className={classes.aboutRoot}>
      <h2 className="text-center">Sections</h2>
      <div className="row">
        <div className="col6">
          <h3 className={classes.about}>Councillor Handbook</h3>
          <div className={classes.centerBlock}>
            <p>
              The Councillor Handbook contains all the information that any
              councillor would need during their term. All items are intended to
              aid councillors in their duties during their term. This
              information is considered public for openness and transparency.
            </p>
            <Button href="/gov/sorm/councillor-handbook" variant="secondary">
              View Councillor Handbook
            </Button>
          </div>
        </div>
        <div className="col6">
          <h3 className={classes.about}>Organizational Structures and Rules</h3>
          <div className={classes.centerBlock}>
            <p>
              The Organizational Structures and Rules section of the SORM
              outlines the various divisions and hierarchy within ACES. This
              section outlines all the rules surrounding common strucutures
              within ACES.
            </p>
            <Button href="/gov/sorm/org-structure-rules" variant="secondary">
              View Organizational Structures and Rules
            </Button>
          </div>
        </div>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(SormPage)
