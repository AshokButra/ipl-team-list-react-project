import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const iplTeamBgColorsList = [
  {
    teamID: 'RCB',
    color1: '#d91c1f',
    color2: '#a4261d',
  },
  {
    teamID: 'MI',
    color1: '#13418b',
    color2: '#475569',
  },
  {
    teamID: 'CSK',
    color1: '#f7db00',
    color2: '#475569',
  },
  {
    teamID: 'DC',
    color1: '#4f5db0',
    color2: '#475569',
  },
  {
    teamID: 'KKR',
    color1: '#5755a7',
    color2: '#475569',
  },
  {
    teamID: 'KXP',
    color1: '#d91c1f',
    color2: '#a4261d',
  },
  {
    teamID: 'RR',
    color1: '#da237b',
    color2: '#475569',
  },
  {
    teamID: 'SH',
    color1: '#f26d22',
    color2: '#475569',
  },
]

class TeamMatches extends Component {
  state = {iplTeamDetails: {}, isLoading: true, colorObject: {}}

  componentDidMount() {
    this.getIplTeam()
    this.setState({isLoading: true})
  }

  getIplTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const filteredObject = iplTeamBgColorsList.filter(
      eachObj => eachObj.teamID === id,
    )

    const apiUrl = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const newObject = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({
      iplTeamDetails: newObject,
      isLoading: false,
      colorObject: filteredObject,
    })
  }

  render() {
    const {iplTeamDetails, isLoading, colorObject} = this.state
    console.log(colorObject)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = iplTeamDetails

    return (
      <>
        {isLoading ? (
          <div className="loader-container-card">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div
            className="team-matches-container"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorObject[0].color1}, ${colorObject[0].color2})`,
            }}
          >
            <img src={teamBannerUrl} className="banner-url" alt="banner" />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="ipl-list-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
