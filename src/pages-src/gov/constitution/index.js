import React from 'react'
import injectSheet from 'react-jss'
import Section from '../../../components/Section'

const styles = theme => ({
  articleTitle: {
    boxShadow: theme.shadows[4],
    background: theme.palette.primary.color,
    color: theme.palette.primary.contrast,
    padding: '1em 1.5em',
    marginTop: '1em',
    '& h2': {
      margin: 0,
    },
  },
  articleBody: {
    boxShadow: theme.shadows[4],
    padding: '1.5em',
    marginBottom: '2em',
  },
  sectionHead: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottom: `3px solid ${theme.palette.secondary.color}`,
    marginBottom: '1em',
    '& h4, & h5': {
      margin: '0 0 .25em',
    },
    '& h5': {
      color: theme.palette.gray.color,
    },
  },
  sectionBody: {
    marginLeft: 25,
    '@media (max-width: 767px)': {
      marginLeft: 0,
    },
  },
})

const ConsitutionPage = ({ classes }) => (
  <>
    <Section disableVertPadding>
      <h1>Constitution</h1>
      <hr />
      <p>
        The Association of Capitalists, Explorers and Soldiers (ACES) is a
        democratic organization that values the contributions and individuality
        of each of its members. It is composed of an equal union of peers.
        Through its members combined strength by mutual association, members of
        ACES will be able to attain their individual goals by playing Star
        Citizen how they want, when they want.
      </p>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article I: Name</h2>
      </div>
      <div className={classes.articleBody}>
        <p>
          The name of this society shall be The Association of Capitalists,
          Explorers, and Soldiers.
        </p>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article II: Object</h2>
      </div>
      <div className={classes.articleBody}>
        The object of this Society shall be:
        <ol>
          <li>
            To provide a framework where individuals can attain success and
            acclaim in Star Citizen.
          </li>
          <li>To promote its members equality and individuality.</li>
          <li>To promote democracy in the Star Citizen universe.</li>
          <li>
            To coordinate the various professions of our members in Star
            Citizen.
          </li>
          <li>To uphold and protect the laws of the United Empire of Earth.</li>
          <li>To promote and nurture its members’ interest in video games.</li>
        </ol>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article III: Members</h2>
      </div>
      <div className={classes.articleBody}>
        <div className={classes.sectionHead}>
          <h4>Membership Eligibility and Admission Procedure</h4>
          <h5>&sect;1</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            Anyone with an interest in Star Citizen is eligible for membership.
            The membership will be composed of real-life people, not in game
            characters. Alternate characters of a member must still abide by
            this constitution. Anyone who wishes to become a member will submit
            a Membership Application on the website, and will become a full
            member upon acceptance by a Website Administrator.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Resignation from Membership</h4>
          <h5>&sect;2</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            Any member desiring to resign from the Society shall submit his
            resignation to the Executive Councilman via Personal Message.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Member Duties</h4>
          <h5>&sect;3</h5>
        </div>
        <div className={classes.sectionBody}>
          Members will:
          <ol>
            <li>
              Be law-abiding members of the United Empire of Earth. Citizenship
              is not necessary or preferred. Engagement in unlawful activity is
              grounds for permanent expulsion from the Society.
            </li>
            <li>Have the same rights and privileges as every other member.</li>
            <li>
              Be professional in their dealings and strive for excellence.
            </li>
            <li>
              Respect their elected leadership and their appointed officers.
              Problems should be submitted to the Council for adjudication.
            </li>
            <li>
              Not engage in bribery. Both the briber and the receiver of the
              bribe may be expelled from the Society.
            </li>
            <li>
              Be loyal to the Society. Treason or being a member of another Star
              Citizen guild will result in expulsion.
            </li>
            <li>
              Not intentionally harm any other member, or by in-action, allow
              any member to come to harm if assistance was possible. Members are
              obligated to assist other members in whatever capacity they can,
              within reason, unless it will mean their certain or likely death.
            </li>
            <li>
              Not harm law-abiding humans through violence or dishonest
              practices under any circumstances.
            </li>
          </ol>
        </div>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article IV: Councilmen</h2>
      </div>
      <div className={classes.articleBody}>
        <div className={classes.sectionHead}>
          <h4>Councilmen and Duties</h4>
          <h5>&sect;1</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The councilmen of the Society shall be an Executive Councilman, two
            Capitalist Councilmen, two Explorer Councilmen, and two Soldier
            Councilmen. These councilmen shall perform the duties prescribed by
            this constitution and the parliamentary authority adopted by the
            Society.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Councilmen Compensation</h4>
          <h5>&sect;2</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The councilmen will receive compensation for their position on the
            Council ONLY with the approval of a majority of the members. This
            privilege must be renewed by a vote every three months. Council
            members will be compensated after their term is completed. If they
            resign or are impeached, they will not receive any pay.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Nomination Procedure, Time of Elections</h4>
          <h5>&sect;3</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            Any member wishing to run for office will announce their candidacy
            in the Election section on the website forum. This section will be
            open to all members starting fourteen days before the new term,
            until the start of the term (December 18th – January 1st, March 18th
            – April 1st, June 17th – July 1st, September 17th – October 1st).
            This does not preclude the section being available for longer.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Ballot Election, Term of Office, Removal from Office</h4>
          <h5>&sect;4</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The Councillors shall be elected by secret ballots cast through the
            website to serve for six months or until their successors are
            elected. The term for the Executive Councillor, one Explorer
            Councillor, one Capitalist Councillor, and one Soldier Councillor
            will begin April 1st, or October 1st at midnight GMT. The remaining
            Councillor’s terms will begin January 1st, or July 1st at midnight
            GMT. Councillors may be removed from office with the same majorities
            stated in Article VIII Section 2, or a unanimous vote from the six
            other members of the Council.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Office-Holding Limitations</h4>
          <h5>&sect;5</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            No member shall hold more than one Councillor position at a time. A
            member may serve on the Council for two consecutive terms. A Member
            may only serve on the Council in subsequent consecutive terms if the
            Council position they are running for has equal, or less candidates
            than there are positions that need to be filled. A Member limited by
            the term limit may run for a Council seat again in the next
            election. If a Member serves less than a majority of a term, then
            that Member won’t be considered to have served that term with
            regards to the office-holding limitations.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Executive Councilman</h4>
          <h5>&sect;6</h5>
        </div>
        <div className={classes.sectionBody}>
          The Executive Councilman will:
          <ol>
            <li>
              Coordinate the actions of the other branches of the Society.
            </li>
            <li>
              Manage the administrative and bureaucratic functions of the
              Society.
            </li>
            <li>
              Be responsible for recruitment and promotion of the Society to the
              larger universe.
            </li>
            <li>
              Organize cooperation between the Society and other organizations.
            </li>
          </ol>
        </div>
        <div className={classes.sectionHead}>
          <h4>Capitalist Councilmen</h4>
          <h5>&sect;7</h5>
        </div>
        <div className={classes.sectionBody}>
          The Capitalist Councilmen will:
          <ol>
            <li>
              Be responsible for the trade and industrial activities of the
              Society. This includes business ventures operated directly by the
              Society, as well as coordinating trade and cooperation between
              ACES members.
            </li>
            <li>
              Be responsible for the mining, manufacturing, production, trading
              posts and stores of the Society.
            </li>
          </ol>
        </div>
        <div className={classes.sectionHead}>
          <h4>Explorer Councilmen</h4>
          <h5>&sect;8</h5>
        </div>
        <div className={classes.sectionBody}>
          The Explorer Councilmen will:
          <ol>
            <li>
              Be responsible for the exploration operations of the Society.
            </li>
            <li>
              Disseminate the information and intelligence gathered by explorers
              to all members.
            </li>
            <li>
              Work closely with traders and explorers not only to find new
              systems to access, but also to discover new opportunities.
            </li>
            <li>Manage scouting and bounty-hunting operations.</li>
          </ol>
        </div>
        <div className={classes.sectionHead}>
          <h4>Soldier Councilmen</h4>
          <h5>&sect;9</h5>
        </div>
        <div className={classes.sectionBody}>
          The Soldier Councilmen will:
          <ol>
            <li>Coordinate the military functions of the Society.</li>
            <li>
              Manage the security of the Society assets, and protect the
              members.
            </li>
            <li>
              Work closely with the other branches to coordinate escorts and
              fire support for traders and explorers entering unsecured
              territory.
            </li>
            <li>
              Manage and coordinate combat operations against pirates or other
              threats to the Society’s security.
            </li>
            <li>
              Coordinate training exercises and keep the Society’s military
              assets ready for combat.
            </li>
            <li>
              Manage private wars against guilds who threaten the Society’s
              security or attempt to bar the Society’s access to trade routes.
              The decision to declare war will involve the entire Council.
            </li>
          </ol>
        </div>
        <div className={classes.sectionHead}>
          <h4>Officers</h4>
          <h5>&sect;10</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The Councilmen may appoint officers to help them in their duties.
            Except for officers appointed under the Executive Councilman, all
            officers must be accepted by both Councilmen holding a particular
            office. Only the elected Councilmen can vote on the Council.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Conflict Committee</h4>
          <h5>&sect;11</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The role of the Conflict Committee will be to mediate conflicts
            between members, maintain and abide by the Code of Conduct, and
            generally involve themselves with any discord between members.
          </p>
          <p>
            The Conflict Committee will consist of six members. Each Councillor,
            except the Executive Councillor, will nominate one Member that is
            not currently serving on the Council to serve on the Committee. Any
            Councillor may veto any Conflict Committee nominee. Each Committee
            Member’s term will be tied to their nominating Councillor’s term.
            When the Councillor’s term ends, so does the Committee Member’s.
            This does not prohibit the Councillor from replacing their Committee
            Member, or the next Councillor from nominating the same Member to be
            on the Committee.
          </p>
        </div>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article V: The Council</h2>
      </div>
      <div className={classes.articleBody}>
        <div className={classes.sectionHead}>
          <h4>Council Composition</h4>
          <h5>&sect;1</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The seven Councilmen of the Society shall constitute the Council.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Council’s Duties and Powers</h4>
          <h5>&sect;2</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The Council shall have general supervision of the affairs of the
            Society, make recommendations to the Society, and perform such other
            duties as are specified in this constitution. The Council may pass
            motions which effect and govern the entire Society. Such motions
            will require a majority vote within the Council. The Council may not
            pass a motion that overrides a previous motion passed by the general
            membership.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Council Meetings</h4>
          <h5>&sect;3</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            Unless a special meeting is requested by four or members of the
            Council, all Council business will take place through the website.
            In all Council meetings, parliamentary procedure will be suspended
            and the meeting may be conducted in any way seen fit by the
            Executive Councilman.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Assets and Donations</h4>
          <h5>&sect;4</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The Council will be responsible for the management, use, buying, and
            selling of group assets. The Council will also be responsible for
            administering the Society’s donations. Contributed money will be
            spent on the improvement of the Society, its buildings, its website,
            and its fleet for the benefit of all members. All transactions
            regarding the Society’s assets and donations will require a five
            vote majority in the Council. The only exception to this is when a
            member donates funds or assets to be used for a specific purpose.
            Then, the donator’s wishes will be honored.
          </p>
        </div>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article VI: Parliamentary Authority</h2>
      </div>
      <div className={classes.articleBody}>
        <p>
          The rulesition of Robert’s Rules of Order Newly Revised shall govern
          the Society in all cases to which they are applicable and in which
          they are not inconsistent with this constitution and any special rules
          of order the Society may adopt.
        </p>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article VII: Amendment of the Constitution</h2>
      </div>
      <div className={classes.articleBody}>
        <p>
          This constitution mayquarters vote of participating members. The
          voting for all amendments shall be open for fourteen days on the
          website. The Executive Councilman will post a site announcement on the
          website and private message all members informing them that a bylaw
          amendment is being voted on.
        </p>
      </div>
    </Section>
    <Section disableVertPadding>
      <div className={classes.articleTitle}>
        <h2>Article VIII: Meetings</h2>
      </div>
      <div className={classes.articleBody}>
        <div className={classes.sectionHead}>
          <h4>Regular Meetings</h4>
          <h5>&sect;1</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            The Society will be considered in-session continuously.
            Parliamentary procedure will be permanently suspended. Discussions
            and votes will take place within the website’s forum.
          </p>
        </div>
        <div className={classes.sectionHead}>
          <h4>Member Passed Motions</h4>
          <h5>&sect;2</h5>
        </div>
        <div className={classes.sectionBody}>
          <p>
            Any motion proposed by a lay-member will require ten co-sponsors.
            These co-sponsors will have their name on the proposal in support of
            the motion. This will take the place of someone needing to second a
            proposal. Any motion seeking approval will have its voting period
            open for one week.
          </p>
          <p>
            If twenty-five percent or more of the Society’s membership logs on
            to the website during the week-long vote, a simple majority will
            pass the motion. If between fifteen percent and twenty-five percent
            of the Society’s membership logs on, then a motion will require a
            three-quarters majority. If fifteen percent or less of the Society’s
            membership logs on, then motion will require a nine-tenths majority
            for approval.
          </p>
          <p>
            Any member who logs on during a vote counts towards the quorum. If a
            member logs on but doesn’t vote, they will be considered an
            abstention.
          </p>
        </div>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(ConsitutionPage)
