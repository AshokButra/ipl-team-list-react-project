import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  const newMatchCardObject = {
    competingTeam: matchCardDetails.competing_team,
    competingTeamLogo: matchCardDetails.competing_team_logo,
    date: matchCardDetails.date,
    firstInnings: matchCardDetails.first_innings,
    id: matchCardDetails.id,
    manOfTheMatch: matchCardDetails.man_of_the_match,
    matchStatus: matchCardDetails.match_status,
    result: matchCardDetails.result,
    secondInnings: matchCardDetails.second_innings,
    umpires: matchCardDetails.umpires,
    venue: matchCardDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = newMatchCardObject

  const matchStatusStyle =
    matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'

  return (
    <li className="list-item-card">
      <img
        src={competingTeamLogo}
        className="competing-team-card-logo"
        alt={competingTeam}
      />
      <p className="competing-team-name-card">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`${matchStatusStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
