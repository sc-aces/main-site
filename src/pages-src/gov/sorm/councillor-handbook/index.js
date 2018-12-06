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
    top: '1em',
  },
})

const CouncillorHandbookPage = ({ classes }) => (
  <>
    <Section disableVertPadding>
      <h1>Councillor Handbook</h1>
      <hr />
    </Section>
    <Section disableVertPadding>
      <div className="row">
        <div className="col9">
          <Section id="general" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>General Rules of the Council</h2>
            </div>
            <div className={classes.articleBody}>
              <p>
                When the Beta PU arrives, the next election Cycle will see all
                Council members give up any leadership positions (eg, Squadron
                Commander), in favor of serving ACES for the period of time they
                are in office.
              </p>
              <p>
                The Council shall conduct at least 4 State of ACES meetings on
                Teamspeak or other appropriate service once per quarter each
                calendar year on or about February 15, May 15, August 15 and
                November 15.
              </p>
              <p>
                These dates would fall almost exactly on the halfway mark for a
                council term, and in theory would help the council gain valuable
                feedback on how their administration is being received, and what
                improvements could be made.
              </p>
              <h4 className={classes.sectionHead}>Agenda</h4>
              <ol>
                <li>
                  Typically, Councils have a list of stuff they want to
                  accomplish in the new term. It's easiest to keep track of
                  these goals with a color-coded list. The Executive Councillor
                  should start a thread with the following BBCode:
                  <div>
                    <p>
                      [color=
                      <span style={{ color: '#dd2423' }}>#dd2423</span>]
                      <span style={{ color: '#dd2423' }}>Discussing</span>
                      [/color]
                      <br />
                      [color=
                      <span style={{ color: '#ddd123' }}>#ddd123</span>]
                      <span style={{ color: '#ddd123' }}>Voting</span>
                      [/color]
                      <br />
                      [color=
                      <span style={{ color: '#6cdd23' }}>#6cdd23</span>]
                      <span style={{ color: '#6cdd23' }}>Complete</span>
                      [/color]
                      <br />
                      [s]Abandoned[/s]
                      <br />
                      <br />
                      [color=
                      <span style={{ color: '#dd2423' }}>#dd2423</span>]
                      <span style={{ color: '#dd2423' }}>Item 1</span>
                      [/color]
                      <br />
                      [color=
                      <span style={{ color: '#dd2423' }}>#dd2423</span>]
                      <span style={{ color: '#dd2423' }}>Item 2</span>
                      [/color]
                      <br />
                      [color=
                      <span style={{ color: '#dd2423' }}>#dd2423</span>]
                      <span style={{ color: '#dd2423' }}>Item 3</span>
                      [/color]
                      <br />
                    </p>
                  </div>
                </li>
                <li>
                  The list should be kept up-to-date and the colors changed as
                  progress is make. Have an admin sticky the thread for easy
                  access.
                </li>
              </ol>
              <h4 className={classes.sectionHead}>The Constitution</h4>
              <ol>
                <li>
                  Be familiar with the
                  <a href="http://starcitizenaces.org/constitution">
                    Constitution
                  </a>
                  . Some highlights:
                  <ol>
                    <li>
                      All members are equal. It doesn't matter if you founded
                      ACES, or just joined.
                    </li>
                    <li>
                      A Councillor is in charge of ALL of ACES activities that
                      fall under their division, not just those squadrons that
                      primarily fall under their division.
                    </li>
                    <li>
                      The Executive Councillor has no special powers. They focus
                      on inter-divisional and inter-guild activities, which
                      makes them a natural pick to lead the Council, but this is
                      by no means mandatory.
                    </li>
                    <li>
                      Councillors can appoint any officer they want to help them
                      perform their duties. These officers can only be vetoed by
                      the Councillor's counterpart.
                    </li>
                    <li>
                      Councillors can decide how to spend the guild's money. If
                      a member donates money for a specific cause, their wish
                      will be honored.
                    </li>
                    <li>
                      The constitution can be amended if 75% of the members who
                      actually vote on the amendment approve it.
                    </li>
                    <li>
                      The members can pass their own legislation without Council
                      support. The Council can't override member-passed
                      legislation.
                    </li>
                  </ol>
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Accepting New Members</h4>
              <ol>
                <li>
                  To accept a new member:
                  <ol>
                    <li>Go to their application and review it</li>
                    <li>
                      Visit their RSI profile page and ensure they aren't a
                      member of any objectionable Orgs
                    </li>
                    <li>
                      Write a message on the application welcoming them to ACES
                      and pointing them to the New Member Tutorials
                    </li>
                    <li>Click "Accept Application"</li>
                    <li>
                      Go to the
                      <a href="https://robertsspaceindustries.com/orgs/ACES">
                        ACES's Org page
                      </a>
                    </li>
                    <li>Go to Menu-&gt;Admin-&gt;Recruitment</li>
                    <li>
                      If they have already submitted a request under the
                      Applications tab, accept them
                    </li>
                    <li>
                      Otherwise, send them an invite. Their handle can be found
                      in their RSI profile URL
                      (robertsspaceindustries.com/citizens/HANDLE). Send them
                      another "Welcome to ACES!" in the body of the invite.
                    </li>
                    <li>
                      If unable to send an invite because the new member doesn't
                      have a game package, alert an admin
                    </li>
                  </ol>
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Teamspeak Rules</h4>
              <ol>
                <li>
                  Server permissions are as follows:
                  <ol>
                    <li>Banned Members: No access</li>
                    <li>Non-ACES Members: Access to the lobby area</li>
                    <li>Individuals Pending Trial: Access to the lobby area</li>
                    <li>Known Associates/Friends: Generic ACES access</li>
                  </ol>
                </li>
                <li>
                  eamspeak Moderator Appointments: For anyone interested go to
                  the subforum under the admin section of our site, called
                  "teamspeak admin applications". Should users desire to become
                  an admin, they can apply in this section of the forum, where
                  the council will review them and accept them should we believe
                  them to be a good fit. The application will include basic
                  questions such as the applicant's experience with Teamspeak,
                  his history with any type of similar duties in other
                  games/orgs, and why he feels he's a good fit for joining the
                  TS mod team. The sitting council can also remove a TS admin at
                  their discretion at any time, should a majority agree to do
                  so.
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Officers</h4>
              <ol>
                <li>
                  Councillors are able to appoint Officers to help them with
                  their day-to-day activities. This officer needs only be
                  approved by both division's Councillors (or just the Executive
                  Councillor).
                </li>
                <li>
                  Some officers that have been appointed in the past include:
                  <ol>
                    <li>Design Officer</li>
                    <li>Head Ambassador</li>
                    <li>Recruitment Officer</li>
                  </ol>
                </li>
                <li>
                  If you appoint an officer, alert an Admin so they can be
                  awarded a ribbon.
                </li>
              </ol>
            </div>
          </Section>
          <Section id="committees" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Committees</h2>
            </div>
            <div className={classes.articleBody}>
              <ol>
                <li>
                  The Council has the authority to create various committees
                  that handle various "meta" tasks the leadership of ACES has to
                  contend with. These are different from normal squadrons
                  because the tasks they carry out are not in-game, but rather
                  web-based activities.
                </li>
                <li>
                  They will advise the council in their respective specialities,
                  and will assist the Council in carrying out the requests they
                  are given.
                </li>
                <li>
                  They are appointed by the Council and can be added or removed
                  at will, however outside of that they hold the position
                  indefinitely (allowing them to pass knowledge between
                  Councils).
                </li>
                <li>
                  All of the committees with the exception of the CC are lead by
                  a "Director" of that particular committee who manages the
                  committee's various tasks and reports to the council.
                </li>
                <ol>
                  <li>
                    <span>Administrative Committee</span>
                    <br />
                    Includes website admins and teamspeak admins, with one
                    Director of Administration to manage the admins. Their
                    responsibilities include managing the setup of the teamspeak
                    server and the website, making changes when requested by the
                    council. They also maintain a quasi-moderator role by being
                    able to issue strikes on their respective mediums (website
                    and teamspeak), but do not mediate conflicts like the CC.
                  </li>
                  <li>
                    <span>Conflict Committee</span>
                    <ol>
                      <li>
                        The Conflict Committee is responsible for keeping the
                        peace within ACES in the most discreet manner possible.
                        The committee is made up of 6 members.
                      </li>
                      <li>
                        It's roles include being moderators of both the forums
                        and teamspeak, and mediating conflicts between ACES
                        members.
                      </li>
                      <li>
                        Since each Councillor represents 1 division, it's very
                        likely that a Councillor will appoint someone who
                        primarily operates within their division. This could be
                        because the Councillor really only knows people they've
                        flown missions with, or because of some power grab. To
                        help mitigate this, the Executive doesn't get a
                        representative, so there isn't a divisional
                        "Tie-Breaker" on the committee. Also, having an even
                        number of committee members fosters an atmosphere of
                        consensus over votes.
                      </li>
                      <li>
                        As a new Council begins, it's important that the
                        Councillors review the
                        <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/11125369-conflict-committee-roster">
                          Conflict Committee's roster
                        </a>
                        . Ensure that all the members are active and productive.
                        ACES will need their help in our most difficult times.
                      </li>
                      <li>
                        All Councillors inherit the committee member from the
                        outgoing Councillor they're replacing. If a change is
                        desired, a list of willing volunteers can be found in
                        the
                        <a href="http://www.starcitizenaces.org/forum/m/11393875/viewforum/3794042">
                          Conflict Committee Sub-forum
                        </a>
                        . Typically, all potential Conflict Committee
                        appointments are discussed via PM. Any Councillor can
                        veto any nominee's appointment to the committee. Once a
                        new Member has been allowed into the committee, contact
                        an Admin to have the necessary tags added to the member,
                        and have the Conflict Committee's roster edited.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span>Diplomatic Committee</span>
                    <br />
                    Comprised of the ambassadors of ACES, with one Director of
                    Diplomacy to coordinate all information and carry out orders
                    from the Executive Councillor. Deals with the diplomatic
                    aspects of ACES, including managing the ambassadors of ACES,
                    advising the Executive Councillor of the current Star
                    Citizen community political climate, and maintaining a
                    database of information on the different organizations we
                    have relations with.
                  </li>
                  <li>
                    <span>Recruitment Committee</span>
                    <br />
                    Comprised of various recruiters with one Director of
                    Recruitment to manage its activities and carry out orders
                    from the council. Essentially the PR wing of ACES, the
                    recruitment committee ensures ACES maintains a good public
                    image, avoids bad press, and attempts to increase
                    recruitment numbers to meet quotas set by the council.
                  </li>
                </ol>
              </ol>
            </div>
          </Section>
          <Section id="votes" disableVertPadding>
            <div className={classes.articleTitle}>
              <h2>Votes</h2>
            </div>
            <div className={classes.articleBody}>
              <h4 className={classes.sectionHead}>Council Votes</h4>
              <ol>
                <li>
                  Council Votes make up the bulk of votes Councillors
                  participate in. These votes comprise ACES's legislation, and
                  manage everything about ACES not included in the Constitution.
                </li>
                <li>
                  To bring an idea up for a Council Vote, simply make a thread
                  in the Council forum section, and use the "Open Council Vote"
                  thread label. DON'T USE THE POLL FEATURE. It is important that
                  members know who voted for what, and that admins haven't
                  participated in the vote. Use this thread to discuss the
                  thoughts for and against the proposal.
                </li>
                <li>
                  When each individual Councillor has reached a decision on the
                  topic, they can post their vote. When either side of the
                  proposal reaches 4 votes, the legislation is either passed or
                  defeated. Councillors are free to change their vote until the
                  matter is decided. After this point, the entire matter must be
                  reviewed, and a new vote must be taken to overturn the
                  previous vote.
                </li>
                <li>
                  Any Council Decisions should be posted in the
                  <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/7131235-council-decisions">
                    Council Decisions
                  </a>
                  thread, along with a summary of the decision, and a link to
                  the thread with the vote. An announcement should also be
                  posted, alerting members to the decision.
                </li>
                <li>
                  Prior to voting on any proposed change that directly affects
                  ACES members, there shall be a 48 hour period in which the
                  council shall discuss the motion (This is the minimum time
                  period, more time can be taken if needed). During this time, a
                  countdown will be placed in the proposal's original post, a
                  global announcement made, and the councilor making the
                  proposition should respond to any questions received via PM or
                  otherwise within the 48 hour time period.
                </li>
                <li>
                  Councillors can vote as soon as they wish, but the proposal if
                  passed will not go into effect until 48 hours after it is
                  posted. in a time-sensitive situation an exception can be made
                  to this rule by tagging [urgent] to the title of the proposal.
                </li>
                <li>
                  The Council shall have the right to pass "Emergency Decisions"
                  as required, with the same required notifications and by
                  tagging the proposal “Urgent”.
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Amendments</h4>
              <ol>
                <li>
                  Any suggested amendments should be taken very seriously.
                </li>
                <li>
                  To begin the process, start a thread in the Constituents forum
                  section with an initial wording of the amendment. The wording
                  should be EXACT, and include where the amendment will be
                  placed. Discussion should be encouraged from all members, and
                  all points of view should make improvements to it.
                </li>
                <li>
                  Once all points of view have chimed in, the wording has been
                  reviewed, and there's a reasonable chance the amendment will
                  pass, have an Admin activate the Voting Booth forum section.
                  Place a thread in the Voting Booth with the exact wording and
                  placement of the amendment. Include a poll with the options,
                  "I Approve This Amendment" and "I DO NOT Approve This
                  Amendment". Leave the poll open for 2 weeks. Make a site
                  announcement, and have an Admin PM the members to alert them
                  to the fact that an amendment is being voted on.
                </li>
                <li>
                  After 2 weeks, if the amendment has less than 75% approval, it
                  is defeated. If the amendment has 75% or more approval, it is
                  enacted and an Admin should add it to the Constitution.
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Elections</h4>
              <ol>
                <li>
                  Election season runs March 18th - April 1st, June 17th - July
                  1st, September 17th - October 1st, and December 18th - January
                  1st. The week before election season begins, an announcement
                  should be sent out to the members reminding them of the
                  upcoming elections. The Admins should also be reminded to
                  begin following their Election Season checklist.
                </li>
                <li>
                  Close cooperation between the Council and the Admins is needed
                  during Election Season to ensure everything goes smoothly.
                  Councillors should be familiar with the
                  <a href="http://www.starcitizenaces.org/forum/m/11393875/viewthread/16044388-election-season-checklist">
                    Admin's Election Season Checklist
                  </a>
                  to ensure everything is being accomplished.
                </li>
                <li>
                  Votes cast in any ACES election and their corresponding polls
                  are to be considered permanent and not subject to change once
                  submitted.
                </li>
              </ol>
              <h4 className={classes.sectionHead}>Golden Anvil</h4>
              <ol>
                <li>
                  At the end of every term, a member is awarded the Golden Anvil
                  to show ACES's appreciation of their hard work during the last
                  term. Each Councillor should nominate a different member.
                  Councillors are not eligible. There is no need to second a
                  nomination. All nominees must be submitted in time to be added
                  to the Golden Anvil vote that takes place during the voting
                  week of the election.
                </li>
              </ol>
            </div>
          </Section>
        </div>
        <div className="col3">
          <nav className={classes.pageNav}>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#general"
            >
              General Rules of the Council
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#committees"
            >
              Committees
            </Button>
            <Button
              className={classes.navButton}
              variant="secondary"
              href="#votes"
            >
              Votes
            </Button>
            <Button className={classes.navButton} href="/gov/sorm">
              Back to SORM
            </Button>
          </nav>
        </div>
      </div>
    </Section>
  </>
)

export default injectSheet(styles)(CouncillorHandbookPage)
