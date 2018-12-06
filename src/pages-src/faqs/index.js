import { Link } from '@reach/router'
import React from 'react'
import injectSheet from 'react-jss'
import Section from '../../components/Section'

// following images from https://www.flickr.com/photos/hasgaha

const styles = theme => ({
  flex: {
    display: 'flex',
    '& > div': {
      width: '50%',
      padding: 16,
      '& h3': {
        paddingBottom: 8,
        borderBottom: `2px solid ${theme.palette.secondary.color}`,
      },
      margin: '0 auto',
      maxHeight: 272,
    },
  },
  subsectionHead: {
    background: theme.palette.primary.color,
    paddingBottom: '.5em',
    marginBottom: '.5em',
    boxShadow: theme.shadows[20],
    padding: '1em 4.5em 1em 1em !important',
    color: theme.palette.explorer.contrast,
    transform: 'skew(-15deg,0)',
    '&>div': {
      transform: 'skew(15deg,0)',
    },
  },
  faqSection: {
    '& > h4': {
      marginBottom: '.5em',
    },
    '& > div': {
      padding: '0 1em',
    },
  },
  darkSection: {
    background: theme.palette.primary.color,
    color: theme.palette.primary.contrast,
  },
})

const AboutPage = ({ classes }) => (
  <>
    <Section disableVertPadding>
      <h1>Frequently Asked Questions</h1>
    </Section>
    <Section disableVertPadding>
      <div className="row">
        <div className="col4">
          <h3 className={classes.subsectionHead}>
            <div>General</div>
          </h3>
          <ul>
            <li>
              <Link to="/faqs/#gen1">
                What do all of the tags and colors mean by everyone's names?
              </Link>
            </li>
            <li>
              <Link to="/faqs/#gen2">
                What do the points under people's names mean?
              </Link>
            </li>
            <li>
              <Link to="/faqs/#gen3">
                How can I add an ACES banner to my signature?
              </Link>
            </li>
            <li>
              <Link to="/faqs/#gen4">
                Where can I find member's usernames for Steam, Xbox Live, PSN
                etc.?
              </Link>
            </li>
          </ul>
        </div>
        <div className="col4">
          <h3 className={classes.subsectionHead}>
            <div>Government</div>
          </h3>
          <ul>
            <li>
              <Link to="/faqs/#gov1">Who are the current Councilors?</Link>
            </li>
            <li>
              <Link to="/faqs/#gov2">When are elections?</Link>
            </li>
            <li>
              <Link to="/faqs/#gov3">How do I run for Council?</Link>
            </li>
            <li>
              <Link to="/faqs/#gov4">Who can run for Council?</Link>
            </li>
            <li>
              <Link to="/faqs/#gov5">How do I make an amendment?</Link>
            </li>
            <li>
              <Link to="/faqs/#gov6">How do I pass legislation?</Link>
            </li>
          </ul>
        </div>
        <div className="col4">
          <h3 className={classes.subsectionHead}>
            <div>Squadrons</div>
          </h3>
          <ul>
            <li>
              <Link to="/faqs/#squad1">What is a Squadron?</Link>
            </li>
            <li>
              <Link to="/faqs/#squad2">How do I join a Squadron?</Link>
            </li>
            <li>
              <Link to="/faqs/#squad3">How do I make a Squadron?</Link>
            </li>
            <li>
              <Link to="/faqs/#squad4">
                What are the numbers in the squadron's thread title?
              </Link>
            </li>
            <li>
              <Link to="/faqs/#squad5">What is an Official Mission?</Link>
            </li>
            <li>
              <Link to="/faqs/#squad6">
                Why can't I join more than one Squadron?
              </Link>
            </li>
            <li>
              <Link to="/faqs/#squad7">
                Can I fly with Squadron I don't belong to?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
    <Section
      className={classes.darkSection}
      innerClassName={classes.faqSection}
    >
      <h2>General</h2>
      <hr />
      <h4 id="gen1">
        What do all of the tags and colors mean by everyone's names?
      </h4>
      <div>
        <p>
          In General:
          <br />
          Blue: Explorer
          <br />
          Green: Capitalist
          <br />
          Red: Soldier
        </p>

        <p>
          Green O: Online
          <br />
          Yellow A: Admin
          <br />
          Orange EC: Executive Councilor
          <br />
          Orange CC: Capitalist Councilor
          <br />
          Orange EXC: Explorer Councilor
          <br />
          Orange SC: Soldier Councilor
          <br />
          Red TW: Tech Wizard
          <br />
          Blue MVP: Got the Most Valuable Post on Wingman's Hangar
          <br />
          Blue EFC: Explorer Fleet Commander
          <br />
          Blue ESC: Explorer Squadron Commander
          <br />
          Green CFC: Capitalist Fleet Commander
          <br />
          Green CSC: Capitalist Squadron Commander
          <br />
          Red SFC: Soldier Fleet Commander
          <br />
          Red SSC: Soldier Squadron Commander
          <br />
          Orange Peace Sign: Conflict Committee Member
        </p>

        <p>
          Orange Name: Councilor
          <br />
          Green Name: Haven't completed "New Member Tutorials"
          <br />
          Red Name: This member hasn't logged onto the website for 30 days. Once
          they make a forum post, their name will turn back to blue.
        </p>

        <p>
          If you're interested in what the individual ribbons mean, you can
          click on it. It should take you to a post about it.
        </p>
      </div>
      <h4 id="gen2">What do the points under people's names mean?</h4>
      <div>
        <p>
          There are certain things you can do in ACES that help you accrue
          points. These points really mean nothing. It is simply a way to gauge
          a members activity. All members lose 1 point a week. This give you an
          incentive to stay active.
        </p>
        <p>
          Join ACES: 10 Points
          <br />
          Join a Squadron: 10 Points
          <br />
          Make a new thread: 2 Points
          <br />
          Make 5 forum posts: 1 Point
          <br />
          Be a Councilman: 50 Points
          <br />
          Not visit ACES for 30 days: -10 Points
        </p>
      </div>
      <h4 id="gen3">How can I add an ACES banner to my signature?</h4>
      <div>
        <p>
          You can create a personalized banner by using Devideo's Banner
          Generator. You can save this banner to your computer, and upload it to
          our Member Banner Gallery. Once it's uploaded, you can click on it. In
          the next screen, click Full Size. You can use the URL that this takes
          you to as a replacement for the URL for the generic banner.
        </p>
        <p>
          For the RSI site:
          <br />
          To set you signature, go over here.
          <br />
          Then, copy paste this, or something similar into your "signature" box:
        </p>

        <p>
          <code>
            &lt;center>&lt;a href="http://sc-aces.enjin.com"> ACES Website
            <br />
            &lt;img
            src="http://files.enjin.com.s3.amazonaws.com/366646/module_gallery/original/1159922.jpg"
            alt="ACES" />
            <br />
            &lt;/a> &lt;/center>
          </code>
        </p>
      </div>
      <h4 id="gen4">
        Where can I find member's usernames for Steam, Xbox Live, PSN etc.?
      </h4>
      <div>
        <p>
          You can find a list of usernames in the Gamer ID's list. Make sure you
          add yourself: Menu->Member->Gamer ID's
        </p>
      </div>
    </Section>
    <Section innerClassName={classes.faqSection} bg="triangles" inset>
      <h2>Government</h2>
      <hr />
      <h4 id="gov1">Who are the current Councilors?</h4>
      <div>
        <p>
          The current Councillors can be found a couple of different ways. They
          have orange names on the forum and chat, and Council emblems under
          their avatars in the forum.
        </p>
        <p>
          You can find a list of the current Councillors either on the left side
          of the Members list: Menu->Member List or at the top of the Roster
          page: Menu->Command Central->Squadron Rosters
        </p>
      </div>
      <h4 id="gov2">When are elections?</h4>
      <div>
        <p>
          Elections for the Council are every three months. The Council terms
          begin on January 1st, April 1st, July 1st, and October 1st. Elections
          are held during the 2 weeks prior to these terms. The election season
          consists of 1 week of campaigning, and 1 week of voting.
        </p>
        <p>
          Elections for Squadron Commander, Fleet Commander, or anything else
          are held according to charter of that organization. Refer to their
          threads for specific information.
        </p>
      </div>

      <h4 id="gov3">How do I run for Council?</h4>
      <div>
        <p>
          To run for the Council, create a thread announcing your candidacy in
          the appropriate Election Central section of the forum. The available
          seats are Executive Councillor, Capitalist Councillor, Explorer
          Councillor, and Soldier Councillor.
        </p>
        <p>Once your thread is created, you will be included on the ballot.</p>
      </div>
      <h4 id="gov4">Who can run for Council?</h4>
      <div>
        <p>
          The only Members who cannot run for the Council are outgoing
          Councillors who have hit the term limit. Every other member, brand new
          or old, is eligible to run for Council.
        </p>
      </div>
      <h4 id="gov5">How do I make an amendment?</h4>
      <div>
        <p>
          Before you formally propose an amendment, it is highly recommended
          that you post your idea in the Constituent section of the forums in
          order to gauge the amount of support your proposal has, and to invite
          any improvements. Keep in mind, your amendment will need the approval
          of 75% of the members who participate in the vote to adopt it. Make
          sure your proposal includes the EXACT wording of the amendment, and
          where the amendment will fit into the Constitution. Here is a sample
          amendment:
        </p>
        <blockquote>
          <h4>Article IV</h4>
          <h5>
            Section 4. Ballot Election, Term of Office, Removal from Office.
          </h5>
          <p>
            The councilmen shall be elected by secret ballots cast through the
            website to serve for 6 months or until their successors are elected.
            The term for the Executive Councilman, one Explorer Councilman, one
            Capitalist Councilman, and one Soldier Councilman will begin April
            1st, or October 1st at midnight GMT. The remaining Councilman's
            terms will begin January 1st, or July 1st at midnight GMT.
            Councilmen may be removed from office with the same majorities
            stated in Article V, Section 2. A vote to remove a Councilman will
            be open for one week.
          </p>
        </blockquote>
        <p>
          Once you are certain your proposal is in its optimum form, and that
          you can get the approval from 75% of the Members that vote on it, you
          can post your amendment in a poll in the Amendment Voting section of
          the Voting Booth. Your poll will only have selections for support of
          the amendment, and disapproval of the amendment. The length of the
          poll with be 14 days.
        </p>
        <p>
          Once your poll is posted, alert an admin. They will send a Private
          Message to all members, and post announcements around the website.
        </p>
      </div>
      <h4 id="gov6">How do I pass legislation?</h4>
      <div>
        <p>
          If you want to see a change to ACES's policy that is outside the scope
          of the Constitution, the best way is to contact your favorite
          Councillor(s). If they agree with your idea, they can bring it up for
          discussion and vote within the Council. A vote of this kind requires a
          majority of the Council's approval.
        </p>
        <p>
          If you feel the Council is not doing an adequate job dealing with your
          issue, or they disagree with its premise, you may bring the measure up
          to a vote of our general membership. Make a thread in the Constituents
          section of the forum to gauge the support your measure has, and to
          receive any improvements that another Member may have for the measure.
          During this period, you will need to find 9 other "co-sponsors" who
          will publicly support this proposal. Having these co-sponsors will
          guarantee that your proposal will have at least 10 YAY votes.
        </p>
        <p>
          Once your proposal is well structured, and you feel it has the support
          to pass, you can make a new thread bringing it up for a vote. This
          thread will contain the proposal in its final form, a list of the 10
          co-sponsors (including yourself), and vote options for approval and
          disapproval only. This poll will be open for 7 days.
        </p>
        <p>
          At the completion of the poll, an admin will see how many Members
          logged onto the website while the poll was open. In order for the
          proposal to pass, you must meet one of the following goals:
        </p>
        <p>
          If 25% of ACES Members logon, you need 51% to pass
          <br />
          If 16%-24% logon, you need 76% of the vote
          <br />
          If less than 15% logon, you need 91% of the vote
        </p>
        <p>
          Anyone who logs on, and doesn't vote will be considered an "Abstain"
          vote. They won't count towards YAY or NAY but will count towards the
          logon percentage.
        </p>
      </div>
    </Section>
    <Section innerClassName={classes.faqSection}>
      <h2>Squadrons</h2>
      <hr />
      <h4 id="squad1">What is a Squadron?</h4>
      <div>
        <p>
          A Squadron is a group of members that agree to perform Official
          Missions for ACES. Official Missions are missions which are
          commissioned by the Council for the betterment of ACES. Official
          Missions will be ACES only official source of revenue, protection, and
          scouting.
        </p>
        <p>
          Squadrons will have a certain "commitment level" designation: Low,
          Medium, and High. These commitment levels roughly translate to 1, 2,
          or 3 nights a week of service respectively.
        </p>
        <p>
          When not performing an Official Mission, Squadron Members will be able
          to play Star Citizen in any way they choose. This includes, continuing
          to fly with their Squadron, or helping another Squadron with their
          Official Mission.
        </p>
        <p>
          Because the main purpose of a Squadron is to let the Council know how
          many members they have to perform a mission at a particular time,
          members are only allowed to join 1 squadron. If members were allowed
          to join more than 1, the member could be committed to flying 2
          missions at once. This would defeat the purpose of the squadron
          system.
        </p>
      </div>
      <h4 id="squad2">How do I join a Squadron?</h4>
      <div>
        <p>
          To join a Squadron, simply visit the Enlistment Office, and select the
          squadron you wish to join from the drop-down menu. You can also find
          the Enlistment Office in the menu: Menu->Central Command->Enlistment
          Office.
        </p>
        <p>
          Keep in mind, you won't be able to join any squadron that is full, or
          the SIA. If you're interested in joining the SIA, send a private
          message to the squadron's Commander.
        </p>
      </div>
      <h4 id="squad3">How do I make a Squadron?</h4>
      <div>
        <p>
          To make a squadron, simply make a thread in either the Capitalist,
          Explorer, or Soldier section of the forum. You should choose the one
          that most closely fits the role of your Squadron. Look around at other
          squadrons to see how they structured their threads. Your post should
          contain this information at a minimum:
        </p>
        <p>Thread name: [Probationary] YOUR SQUADRON NAME</p>
        <p>Squadron Name:</p>
        <p>Squadron Motto:</p>
        <p>Statement of Purpose:</p>
        <p>Primary Time Zone:</p>
        <p>Active Times:</p>
        <p>Squadron Commitment Level:</p>
        <p>Expected Individual Contribution:</p>
        <p>Squadron Commander:</p>
        <p>Squadron Structure:</p>
        <p>Commander Election Process:</p>
        <p>Application Procedure/Requirements:</p>
        <p>Roster:</p>
        <p>
          Once your thread is created, send a banner, and a symbol you'd like to
          appear under your member's avatars in the forum to an Admin.
        </p>
      </div>
      <h4 id="squad4">What are the numbers in the squadron's thread title?</h4>
      <div />
      <h4 id="squad5">What is an Official Mission?</h4>
      <div>
        <p>
          Official Missions are missions which are commissioned by the Council
          for the betterment of ACES. Official Missions will be ACES only
          official source of revenue, protection, and scouting.
        </p>
      </div>
      <h4 id="squad6">Why can't I join more than one Squadron?</h4>
      <div>
        <p>
          Because the main purpose of a Squadron is to let the Council know how
          many members they have to perform a mission at a particular time,
          members are only allowed to join 1 squadron. If members were allowed
          to join more than 1, the member could be committed to flying 2
          missions at once. This would defeat the purpose of the squadron system
        </p>
      </div>
      <h4 id="squad7">Can I fly with Squadron I don't belong to?</h4>
      <div>
        <p>
          Of course! We highly recommend it. When not performing Official
          Missions with a Squadron you're not already committed to, you can do
          anything you like. This includes, continuing to fly with your
          Squadron, or flying with a different Squadron.
        </p>
        <p>
          Playing Star Citizen how you want, when you want is a very important
          part of ACES. We want to ensure that our members can experience the
          entire game, and have a great group of friends to do it with.
        </p>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(AboutPage)
