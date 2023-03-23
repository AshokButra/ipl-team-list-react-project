import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplMatchesList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getIplList()

    this.setState({isLoading: true})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  getIplList = async () => {
    const apiUrl = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const iplArray = data.teams
    const newObjectList = iplArray.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    if (response.ok === true) {
      this.setState({
        iplMatchesList: newObjectList,
        isLoading: false,
      })
      this.onSubmitSuccess()
    }
  }

  render() {
    const {iplMatchesList, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="ipl-dashboard-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo"
                alt="ipl logo"
              />
              <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {iplMatchesList.map(eachIplTeam => (
                <TeamCard iplTeamData={eachIplTeam} key={eachIplTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
