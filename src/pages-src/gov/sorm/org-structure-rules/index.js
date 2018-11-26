import React from 'react'
import injectSheet from 'react-jss'
import Section from '../../../../components/Section'
import Button from '../../../../components/Button'

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
    borderBottom: `3px solid ${theme.palette.secondary.color}`,
    marginBottom: '1em',
    '& h4, & h5': {
      margin: '0 0 .25em',
    },
  },
  sectionBody: {
    marginLeft: 25,
    '@media (max-width: 767px)': {
      marginLeft: 0,
    },
  },
  col3: {
    width: '25%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  col9: {
    width: '75%',
    // padding: '0 8px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  row: {
    display: 'flex',
    width: '100%',
    // margin: '0 -16px',
    '@media (max-width: 767px)': {
      display: 'block',
    },
  },
  navButton: {
    margin: '2px 0',
    width: '100%',
  },
  pageNav: {
    marginTop: '1em',
    position: 'sticky',
    top: 0,
  },
})

const OrgStructRulesPage = ({ classes }) => (
  <>
    <Section disableVertPadding>
      <h1 className="entry-title">Organization Structure Rules</h1>
      <hr />
    </Section>
    <Section disableVertPadding>
      <div className={classes.row}>
        <div className={classes.col9}>
          <Section id="general" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>General</h2>
            </div>
            <div className={classes.articleBody}>
              <div id="general-division">
                <div className={classes.sectionHead}>
                  <h4>Division</h4>
                </div>
                <p className={classes.sectionBody}>
                  Capitalist, Explorer, or Soldier. These are the three main
                  focuses of ACES, and how the Council and our players organize
                  our activities.
                </p>
              </div>
              <div id="general-squadrons">
                <div className={classes.sectionHead}>
                  <h4>Squadrons</h4>
                </div>
                <p className={classes.sectionBody}>
                  Joining a squadron or staying unaffiliated. Members can choose
                  to work together for a common goal and organize themselves as
                  they see fit. These squadrons also make a decision about their
                  division, identifying to other players and the Council what
                  kind of play styles and missions you and your squad members
                  are interested in.
                </p>
              </div>
              <div id="general-commitment-levels">
                <div className={classes.sectionHead}>
                  <h4>Commitment Levels</h4>
                </div>
                <p className={classes.sectionBody}>
                  Standard or high commitment. Squadrons will help further
                  identify their goals by choosing either standard or high
                  commitment. This isn’t an indication of skill, but rather just
                  an indicator about how often your squadron will be
                  participating in ACES missions and activities.
                </p>
              </div>
              <div id="general-official-missions">
                <div className={classes.sectionHead}>
                  <h4>Official Missions</h4>
                </div>
                <p className={classes.sectionBody}>
                  Squadrons will participate in missions for the overall benefit
                  of our organization and their squad members. Squadrons and
                  members are organized in a way that makes sense for the way
                  that our members play now, and have said they would like to
                  play in the future. The official mission forces use the
                  established ideas and rules around divisions, squadrons,
                  commitment, and the Council officer system to organize ten
                  forces that will coordinate official missions.
                </p>
              </div>
              <div id="general-fleets">
                <div className={classes.sectionHead}>
                  <h4>Fleets</h4>
                </div>
                <p className={classes.sectionBody}>
                  Our members and their squadrons have the flexibility to form
                  unofficial alliances or groups with other ACES members in
                  order to work towards the interest of our players outside of
                  their squadron goals or official mission participation.
                </p>
              </div>
            </div>
          </Section>
          <Section id="freelancers" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Freelancers</h2>
            </div>
            <div className={classes.articleBody}>
              <div id="freelancers-definition">
                <div className={classes.sectionHead}>
                  <h4>Definition</h4>
                </div>
                <p className={classes.sectionBody}>
                  All members of ACES are considered “Freelancers.” In the
                  spirit of being able to play how you want, when you want, this
                  title has been decided upon to encapsulate the essence of who
                  we are as ACES.
                </p>
              </div>
              <div id="freelancers-rules-of-play">
                <div className={classes.sectionHead}>
                  <h4>Rules of Play</h4>
                </div>
                <ol>
                  <li>
                    Members who do not wish to join a specific squadron, but
                    wish to participate in Official Operations will temporarily
                    join the Reserve Squadron under a Division (Capitalist,
                    Explorer, or Soldier). Each division will have their own
                    Reserve Squadron. The Councilmen will assign the reserves as
                    they see fit.
                  </li>
                  <li>
                    Members who are online, but don’t want to fly an Official
                    Mission can join the Inactive Squadron. These guys can form
                    squadrons Ad-Hoc, or Lone Wolf it.
                  </li>
                </ol>
              </div>
            </div>
          </Section>
          <Section id="squads" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Squadrons</h2>
            </div>
            <div className={classes.articleBody}>
              <div id="squads-overview-and-structure">
                <div className={classes.sectionHead}>
                  <h4>Overview and Structure</h4>
                </div>
                <ol>
                  <li>
                    You pick one division (Capitalist, Explorer or Soldier) for
                    your squadron to fall under.
                  </li>
                  <li>
                    Squadrons will identify with one of two “commitment levels,”
                    either standard commitment or high commitment. (High
                    commitment squadrons do not necessarily indicate higher
                    skill, and, likewise, standard commitment does not indicate
                    a lower level of skill. A squadron’s commitment indicates
                    the squadron members’ overall level of interest in
                    participation on official missions. Commitment levels will
                    help the council organize missions to be as successful as
                    possible.)
                  </li>
                  <li>It can do any mixture of roles you want.</li>
                  <li>
                    It can be inclusive of whatever timezones you think work
                    best.
                  </li>
                  <li>Minimum squadron size is 5 members.</li>
                  <li>
                    Squadrons with less than 5 members are Probationary
                    Squadrons. They don’t officially have any members, and don’t
                    participate in Official Missions.
                  </li>
                  <li>
                    Once a squadron has more than 5 members, it becomes an
                    Active Squadron. All members on the squadron’s probationary
                    roster are immediately moved from their previous Active
                    Squadron to the new squadron.
                  </li>
                  <li>
                    Members can only be a member of one Active Squadron but may
                    fly with and participate with any other squadron or member
                    at anytime in accordance with member Squadron rules.
                  </li>
                  <li>
                    You can change your squadron as often as once a week (except
                    for Reserve Squadrons. You can switch between those at
                    will).
                  </li>
                </ol>
              </div>
              <div id="squads-rules-for-creation">
                <div className={classes.sectionHead}>
                  <h4>Rules for Creation</h4>
                </div>
                <ol>
                  <li>Anyone can make a Squadron</li>
                  <li>
                    It can be as easy or as difficult to join as you want.
                  </li>
                  <li>
                    The Councilmen you pick can construct any larger structure
                    they need to keep their division organized. If the squadron
                    doesn’t agree with how their Division Councilmen are
                    implementing them, they can take the issue up with the other
                    5 members of the Council.
                  </li>
                  <li>
                    You need to have a set commitment level: High (9+ hours a
                    week), Medium (5-8 hours a week), or Low (2-4 hours a week).
                    The requirements to maintain the levels will be laid out
                    later.
                  </li>
                </ol>
              </div>
              <div id="squads-rules-for-operation">
                <div className={classes.sectionHead}>
                  <h4>Rules for Operation</h4>
                </div>
                <ol>
                  <li>
                    Squadrons are expected to run Official ACES ops with a
                    certain level of participation at their published commitment
                    level.
                  </li>
                  <li>
                    The Squadron Commander will be democratically elected by the
                    squadron members. Other leaders can be appointed or elected
                    depending on how the squadron is set up. It is RECOMMENDED
                    that there be 1 Squadron Commander, and 1 Squad Leader for
                    every 5 members of the squadron.
                  </li>
                  <li>
                    If the Council feels a Squadron Commander is not performing
                    their duties, they can ask the squadron to hold an election.
                  </li>
                </ol>
              </div>
              <div id="squads-rules-for-dissolving">
                <div className={classes.sectionHead}>
                  <h4>Rules for Dissolving</h4>
                </div>
                <ol>
                  <li>
                    Any squadron that does not meet its commitment level 2 weeks
                    in a row will be lowered 1 commitment level. If a squadron
                    currently at the lowest commitment levels fails to reach its
                    commitment level 2 weeks in a row, the squadron will be
                    dissolved and its members absolved of any and all
                    responsibilities towards the squadron.
                  </li>
                  <li>
                    Squadron members may be expelled from the squadron with a
                    majority vote by the squadron members.
                  </li>
                </ol>
              </div>
              <div id="squads-miscellaneous-rules">
                <div className={classes.sectionHead}>
                  <h4>Miscellaneous Rules</h4>
                </div>
                <ol>
                  <li>
                    Squadrons can control who can see and post in their forums.
                    The Council can see and post in all squadron forums, except
                    the SIA.
                  </li>
                  <li>
                    Squadrons are prohibited from making recruitment threads in
                    the Looking for a Squadron forum section. That section is
                    for individual members who would like to be recruited into a
                    squadron. A squadron’s recruitment thread, and the Looking
                    for a Squadron forum section are the only places where
                    recruiting can take place.
                    <sup className="footNote">
                      <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/20536685-lfas-section">
                        <i className="fa fa-link" />
                      </a>
                    </sup>
                  </li>
                </ol>
              </div>
            </div>
          </Section>
          <Section id="omf" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Official Mission Forces (OMF)</h2>
            </div>
            <div className={classes.articleBody}>
              <div className={classes.sectionBody}>
                <p>
                  An “Official Mission” is a mission sanctioned by ACES, in
                  which ACES gets a portion of the profits. Squadrons will only
                  be required to fly together during Official Missions. Official
                  missions are organized by the Council for the benefit of ACES
                  and will be the primary source of revenue, protection, and
                  scouting.
                </p>
                <p>
                  Only a vote of the Council can declare that the next “Official
                  Mission Forces” Commander (aka “FC”) seat is available to be
                  filled. Until such a vote, the FC seats are not able to be
                  filled.
                </p>
              </div>
              <div id="omf-official-missions">
                <div className={classes.sectionHead}>
                  <h4>Official Missions</h4>
                </div>
                <div className={classes.sectionBody}>
                  <p>
                    The forces system is a new system being implemented to
                    organize official missions. This system is an overall
                    organizational idea that has been discussed and refined by
                    our members, and will be used by the Council to organize
                    official missions in the Star Citizen universe. The council
                    will use this system to help create official missions to
                    maximize ACES resources and enhance the in-game experience
                    of our members.
                  </p>
                  <p>
                    The forces system uses our established division, squadron,
                    commitment, and Councilor officer system to organize ten
                    forces that will assist with coordinating these official
                    missions. These forces will be rolled out in stages as the
                    game nears completion, and the officers are being renamed to
                    force commanders to help clarify their role.
                  </p>
                  <p>
                    The Council recently defined an official mission as follows:
                  </p>
                  <blockquote>
                    <p>
                      An official mission is a mission sanctioned by ACES, in
                      which ACES gets a portion of the profits. Squadrons will
                      only be required to fly together during Official Missions.
                    </p>
                  </blockquote>
                  <p>
                    After clarifying this, and taking into consideration the
                    input of our players, we believe that this model will work
                    best for everyone. When players and squadrons are interested
                    in joining an official mission, they will work with the
                    Council, their squadrons and other members within the
                    following proposed structure:
                  </p>
                  <p>
                    Proposed Official Mission Forces (aka: “OMFs” or “Forces”)
                    <br />
                    Each OMF has a Force Commander (aka: “FC” or “Commander”) to
                    coordinate operations and ensure balance.
                  </p>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan="3">
                            OMF 1<br />
                            ACES Organizational OMF
                            <br />
                            Coordinates cross-divisional missions and organizes
                            official mission distribution services
                            <span style={{ color: '#CB2E27' }}>**</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            OMF 2<p> High Commitment Capitalist Squadron OMF</p>
                          </td>
                          <td>
                            OMF 3<p> High Commitment Explorer Squadron OMF</p>
                          </td>
                          <td>
                            OMF 4<p> High Commitment Soldier Squadron OMF</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            OMF 5
                            <p> Standard Commitment Capitalist Squadron OMF</p>
                          </td>
                          <td>
                            OMF 6
                            <p> Standard Commitment Explorer Squadron OMF</p>
                          </td>
                          <td>
                            OMF 7
                            <p> Standard Commitment Soldier Squadron OMF</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            OMF 8<p> Unaffiliated Member Capitalist OMF</p>
                          </td>
                          <td>
                            OMF 9<p> Unaffiliated Member Explorer OMF</p>
                          </td>
                          <td>
                            OMF 10
                            <p> Unaffiliated Member Soldier OMF</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Capitalists</strong>
                          </td>
                          <td>
                            <strong>Explorers</strong>
                          </td>
                          <td>
                            <strong>Soldiers</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <span style={{ color: '#CB2E27' }}>**</span> Mission
                    distribution system will be a job board or similar style
                    system used to send out official missions that require less
                    oversight from commanders or the council. A majority of
                    missions going through a mission board or a similar system
                    would likely only require a small group of members or a
                    small number of squadrons. Whatever this system ends up
                    being in the game, the council and the commanders will work
                    with all members to ensure it is fair.
                  </p>
                </div>
              </div>
              <div id="omf-mission-distribution-system">
                <div className={classes.sectionHead}>
                  <h4>Mission Distribution System</h4>
                </div>
                <p className={classes.sectionBody}>TBD</p>
              </div>
              <div id="omf-official-mission-rewards">
                <div className={classes.sectionHead}>
                  <h4>Official Mission Rewards</h4>
                </div>
                <p className={classes.sectionBody}>TBD</p>
              </div>
            </div>
          </Section>
          <Section id="fleets" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Fleets</h2>
            </div>
            <div className={classes.articleBody}>
              <div id="fleets-overview-and-structure">
                <div className={classes.sectionHead}>
                  <h4>Overview and Structure</h4>
                </div>
                <ol>
                  <li>
                    Fleets are made of up two or more Squadrons that choose to
                    work together for a common purpose of their choosing within
                    ACES.
                  </li>
                  <li>There is no limit to the size a Fleet can be.</li>
                  <li>
                    There is no requirement for a Squadron of Freelancer to be a
                    member of any Fleet at any time.
                  </li>
                  <li>
                    Squadrons cannot be permanently attached to a Fleet. If a
                    Squadron remains with a Fleet it is always at the discretion
                    of the Squadron Commander and it’s members.
                  </li>
                  <li>
                    Fleets shall have a clearly defined mission statement and
                    goals pertaining to the purpose and mission of the Fleet to
                    justify the formation of the Fleet.
                  </li>
                </ol>
              </div>
              <div id="fleets-rules-for-creation">
                <div className={classes.sectionHead}>
                  <h4>Rules for Creation</h4>
                </div>
                <div className={classes.sectionBody}>
                  <p>
                    <strong>General</strong>
                  </p>
                  <ol className="col-sm-offset-1">
                    <li>
                      A Fleet is a group of squadrons that join together for
                      unofficial purposes.
                    </li>
                    <li>
                      Fleets are not related to official activities of ACES, and
                      are instead groups of friends, allies and members across
                      our organization that work together for their own ideas.
                    </li>
                    <li>Any member of ACES can create a Fleet.</li>
                    <li>
                      These Fleets are not smaller organizations within ACES
                      itself and hold zero political power.
                    </li>
                    <li>
                      Limits on Powers
                      <ol>
                        <li>
                          Fleet Commanders or leaders, if there are any, do not
                          have the power to prevent Squadrons from leaving a
                          Fleet for any reason the Squadron deems necessary.
                        </li>
                        <li>
                          Fleet Commanders or leaders do not have power over
                          Squadron Commanders or individual Squadron Members
                          unless specifically and publicly agreed upon by the
                          Squadron or Member.
                        </li>
                        <li>
                          Fleet Commanders or leaders cannot arbitrarily move
                          Members of Squadrons from one Squadron to another
                          within the Fleet without the express consent of the
                          Member.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p>
                    <strong>Squadron Inclusion and Removal</strong>
                  </p>
                  <ol className="col-sm-offset-1">
                    <li>
                      Squadron Commanders have the sole decision, in conjunction
                      with Squadron Member concurrence, to petition a Fleet for
                      inclusion or request leave of a Fleet at their discretion.
                      <sup className="footNote">
                        <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/7131235-council-decisions/post/64277359#p64277359">
                          <i className="fa fa-link" />
                        </a>
                      </sup>
                    </li>
                    <li>
                      A Squadron may only be removed from a Fleet by majority
                      Fleet member vote and concurrence of the Council.
                    </li>
                  </ol>
                </div>
              </div>
              <div id="fleets-rules-for-operation">
                <div className={classes.sectionHead}>
                  <h4>Rules for Operation</h4>
                </div>
                <ol>
                  <li>
                    Fleets may operate in any capacity of their choosing for any
                    purpose in support of current ACES Operations or not as long
                    as it is in accordance with the Constitution and not
                    hindering or in conflict with ongoing ACES operations. They
                    have the right to operate independently or as a team with
                    other ACES Freelancers, Squadrons, or Fleets.
                  </li>
                </ol>
              </div>
              <div id="fleets-rules-for-dissolving">
                <div className={classes.sectionHead}>
                  <h4>Rules for Dissolving</h4>
                </div>
                <ol>
                  <li>
                    If a Fleet is reduced to only one Squadron, the Fleet is
                    considered dissolved.
                  </li>
                  <li>
                    The Council may rule, unanimously, that a Fleet be dissolved
                    if the Fleet’s conduct is proven by trial to be in violation
                    of the ACES Constitution and/or By-laws.
                  </li>
                </ol>
              </div>
            </div>
          </Section>
          <Section id="subsidiary-orgs" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Subsidiary Organizations</h2>
            </div>
            <div className={classes.articleBody}>
              <p>
                Members may join whatever Subsidiary Orgs they wish, as long as
                they comply with the following standards and requirements:
              </p>
              <ol>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/OPPF">
                    OPPF
                  </a>
                  .
                </li>
                <li>The subsidiary organization is an NPC/Alt group.</li>
                <li>The subsidiary organization is a social-only group.</li>
                <li>The subsidiary organization is a news group.</li>
                <li>The subsidiary organization is a racing league.</li>
                <li>
                  The subsidiary organization has been explicitly cleared by a
                  majority Council vote.
                </li>
                <li>
                  Regardless of the above, all subsidiary organizations must
                  follow all of the following rules:
                  <ol>
                    <li>
                      The subsidiary organization must comply with any and all
                      UEE laws.
                    </li>
                    <li>
                      The subsidiary organization must comply with all ACES
                      constitutional rules concerning illegal activities (aka —
                      not allowed).
                    </li>
                    <li>
                      The subsidiary organization must NOT fulfill the role of a
                      traditional guild in any sense, in such that it may not be
                      “another ACES”.
                    </li>
                    <li>
                      The subsidiary organization must remain that, a subsidiary
                      organization. ACES must always remain the member’s primary
                      organization.
                      <span style={{ color: '#CB2E27' }}>*</span>
                    </li>
                  </ol>
                </li>
              </ol>
              <p>
                The Council, Conflict Committee, SIA, and Squadron Leaders will
                continually police member’s organization memberships. If an
                objectionable organization is found, the Council will determine
                if ACES members are allowed to take part in said organization
                what-so-ever; all members will be bound to respect this decision
                without issue.
              </p>
              <p>
                ACES members may not have any Orgs listed as Secret or Redacted.
                ACES must always be listed as your Main Org.
              </p>
              <ol>
                <li>
                  <span style={{ color: '#CB2E27' }}>*</span>
                  Officially named ambassadors to ACES may join and have ACES
                  listed as a subsidiary organization, being the only exception
                  to the rule.
                </li>
              </ol>
              <p>Current list of NOT Allowed Organizations:</p>
              <ul>
                <li>Any Org with “Pirate” listed in their goals</li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/asfl">
                    Applied Space-Faring &amp; Logistics – ASFL
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/aurea">
                    Aurea Oculos -AUREA
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/bwc">
                    Black Widow Company – BWC
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/browncoats">
                    Brown Coats – BROWNCOATS
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/coks">
                    Cocks Clan – COKS
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/creddit">
                    cReddit Interstellar Directorate – CREDDIT
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/wastemngmt">
                    cReddit Waste Management – WASTEMNGMT
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/grs">
                    Galactic Racing Syndicate – GRS
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/fljk">
                    Goonrathi – FLJK
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/jumo">
                    Joint Universal Merchants’ Organization – JUMO
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/kong">
                    Kong Interstellar Security Solutions – KONG
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/lamp">
                    L.A.M.P. – LAMP
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/hardcorg">
                    OPFOR HARDCORG – HARDCORG
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/apparition">
                    Order of the Apparition – APPARITION
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/pbkac">
                    Peoples Itteh Bitteh Kitteh Action Committee – PBKAC
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/reddex">
                    ReddEx – REDDEX
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/rfbc">
                    ReddFaction Broadcasting Company – RFBC
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/redsqdrn">
                    ReddSquadron – REDSQDRN
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/sca">
                    Southern Cross Alliance – SCA
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/sfd">
                    Starfleet Dental – SFD
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/test">
                    Test Squadron – TEST
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/skullz">
                    The Grinning Skulls – SKULLZ
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/iec">
                    The Independent Exploration Conglomerate – IEC
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/tcap">
                    Trade Coalition for the Allied Proletariat – TCAP
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/ulmc">
                    United Logistics &amp; Military Corporation – ULMC
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/ufs">
                    Unitized Fuel Stocks, Inc. – UFS
                  </a>
                </li>
                <li>
                  <a href="https://robertsspaceindustries.com/orgs/uptec">
                    Utter Pirates Transportation and Escort Company – UPTEC
                  </a>
                </li>
                <li className="noListStyle">
                  <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/13003915-subsidiary-orgs/post/69911952#p69911952">
                    View the forum post to see if there have been recent updates
                  </a>
                </li>
              </ul>
            </div>
          </Section>
        </div>
        <div className={classes.col3}>
          <nav className={classes.pageNav}>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#general"
            >
              General
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#freelancers"
            >
              Freelancers
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#squads"
            >
              Squadron
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#omf"
            >
              Official Mission Forces (OMF)
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#fleets"
            >
              Fleets
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#subsidiary-orgs"
            >
              Subsidiary Organizations
            </Button>
          </nav>
        </div>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(OrgStructRulesPage)
