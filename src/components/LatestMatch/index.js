import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const newTeamDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.man_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = newTeamDetails

  return (
    <>
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-match-details-container">
        <div className="top-section">
          <div>
            <h1 className="competing-team-name">{competingTeam}</h1>
            <h1 className="competing-team-date">{date}</h1>
            <p className="ground-details">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={competingTeam}
          />
        </div>
        <hr />
        <p className="first-innings-heading">First Innings</p>
        <p className="first-innings-team">{firstInnings}</p>
        <p className="second-innings-heading">Second Innings</p>
        <p className="second-innings-team">{secondInnings}</p>
        <p className="man-of-the-match-heading">Man Of The Match</p>
        <p className="man-of-the-match-player">{manOfTheMatch}</p>
        <p className="umpires-heading">Umpires</p>
        <p className="umpires-name">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
