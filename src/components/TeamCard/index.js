import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeamData} = props
  const {id, name, teamImageUrl} = iplTeamData
  console.log(id)

  return (
    <Link to={`ipl/${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} className="ipl-team-image" alt={name} />
        <p className="ipl-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
