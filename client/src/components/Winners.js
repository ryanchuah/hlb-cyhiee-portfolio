import React, { Component } from 'react'
import { Card, Container, Row, Col, CardDeck } from 'react-bootstrap'
import styles from '../Styles.module.css'
import TitleHeader from '../components/TitleHeader'
import ParticipantModal from '../components/ParticipantModal'

export class Winners extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participantInfo: undefined,
      isLoading: true,
      showModal: false,
      modalParticipant: undefined,
    }
  }

  onShow = (place) => {
    this.setState({
      showModal: true,
      modalParticipant: this.state.participantInfo === undefined ? undefined : this.state.participantInfo[place - 1]
    })
  }

  componentDidMount() {
    const winnersOnly = "true"
    const url = `/api/participantInfo/2019?winners_only=${winnersOnly}`
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then((myJson) => {
        this.setState({ 
          participantInfo: myJson.spreadsheetItem, 
          memberLimit: myJson.memberLimit, 
          isLoading: false 
        })
      })
  }

  getTeamData = (content, placement) => {
    const winnersData = content.winners
    return winnersData.find(item => item.placement === placement)
  }

  render() {
    // if (this.state.isLoading) return <LoadingScreen />
    const { content } = this.props

    let modal
    if (this.state.isLoading) {
      modal = null
    } else {
      const { modalParticipant, participantInfo } = this.state
      const participantItem = modalParticipant === undefined ? participantInfo[0] : modalParticipant
      var teamMembersArray = []
      for (let member = 1; member < this.state.memberLimit + 1; member++) {
        teamMembersArray.push({
            name: participantItem[`M${member} Full Name`],
            email: participantItem[`M${member} Work Email Address`]
        })
    }
      modal =
        <ParticipantModal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
          teamName={participantItem['Team Name']}
          teamMembersArray={teamMembersArray}
          placement={participantItem['Placement']}
          idea={participantItem['Idea'].replace(/(?:\r\n|\r|\n|●)/g, '\n')}
          cxJourney={participantItem['CX Journey Level 1']}
          state={participantItem['State']}
          bankValues={participantItem['Bank Values'].replace(/(?:\r\n|\r|\n|●)/g, '\n')}
          implementation={participantItem['Implementation'].replace(/(?:\r\n|\r|\n|●)/g, '\n')} />
    }

    let cards
    if (window.innerWidth >= 992) {
      cards =
        <CardDeck>
          <Card style={cardStyle}>
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={this.getTeamData(content, 2).image.url}/>
              <div style={cardTextStyle} className={styles.test}>
                <h6 className='font-weight-bold'>2nd<br></br>place</h6>
                <h6>{this.getTeamData(content, 2).teamName}</h6>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <p className={styles.linkStyle} onClick={() => this.onShow(2)}>View More</p>
            </Card.Footer>
          </Card>
          <Card style={cardStyle}>
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={this.getTeamData(content, 1).image.url} />
              <div style={cardTextStyle} className={styles.test}>
                <h6 className='font-weight-bold'>1st<br></br>place</h6>
                <h6>{this.getTeamData(content, 1).teamName}</h6>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <p className={styles.linkStyle} onClick={() => this.onShow(1)}>View More</p>
            </Card.Footer>
          </Card>
          <Card style={cardStyle}>
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={this.getTeamData(content, 3).image.url} />
              <div style={cardTextStyle} className={styles.test}>
                <h6 className='font-weight-bold'>3rd<br></br>place</h6>
                <h6>{this.getTeamData(content, 3).teamName}</h6>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <p className={styles.linkStyle} onClick={() => this.onShow(3)}>View More</p>
            </Card.Footer>
          </Card>
        </CardDeck>
    } else {
      cards =
        <Container>
          <Row>
            <Col className={styles.alignCenter} sm={{ order: 2, span: 12, }} xs={{ order: 2, span: 12 }}>
              <Card style={cardStyle} className='mt-5'>
                <div style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={this.getTeamData(content, 2).image.url} />
                  <div style={cardTextStyle} className={styles.test}>
                    <h6 className='font-weight-bold'>2nd<br></br>place</h6>
                    <h6>{this.getTeamData(content, 2).teamName}</h6>
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>
                    {this.getTeamData(content, 2).summary}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <p className={styles.linkStyle} onClick={() => this.onShow(2)}>View More</p>
                </Card.Footer>
              </Card>
            </Col>
            <Col className={styles.alignCenter} sm={{ order: 1, span: 12 }} xs={{ order: 1, span: 12 }}>
              <Card style={cardStyle}>
                <div style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={this.getTeamData(content, 1).image.url} />
                  <div style={cardTextStyle} className={styles.test}>
                    <h6 className='font-weight-bold'>1st<br></br>place</h6>
                    <h6>{this.getTeamData(content, 1).teamName}</h6>
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>
                    {this.getTeamData(content, 1).summary}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <p className={styles.linkStyle} onClick={() => this.onShow(1)}>View More</p>
                </Card.Footer>
              </Card>
            </Col>
            <Col className={styles.alignCenter} sm={{ order: 3, span: 12 }} xs={{ order: 3, span: 12 }}>
              <Card style={cardStyle} className='mt-5'>
                <div style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={this.getTeamData(content, 3).image.url} />
                  <div style={cardTextStyle} className={styles.test}>
                    <h6 className='font-weight-bold'>3rd<br></br>place</h6>
                    <h6>{this.getTeamData(content, 3).teamName}</h6>
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>
                    {this.getTeamData(content, 3).summary}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <p className={styles.linkStyle} onClick={() => this.onShow(3)}>View More</p>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
    }

    const backgroundStyle = {
      backgroundAttachment: 'fixed',
      backgroundImage: `url(${content.backgroundImage.url})`,
      backgroundPosition: "top center",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      paddingBottom: '5%'
    }

    return (
      <div className={styles.winnerSectionBackground} style={backgroundStyle}>
        <div className="mt-0 px-4">
          <TitleHeader title={'Congratulations to all the Winners!'} subtitle='You were amazing' color='white' />
          {cards}
          {modal}
        </div>
      </div>
    )
  }
}



const wrapperStyle = {
  paddingBottom: '5%',
}

const cardTextStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 6%',
  backgroundImage: 'linear-gradient(to top, rgb(7, 7, 7), rgba(7,7,7,0))',
  color: 'white'
}

const cardStyle = {
  width: '95%'
}

export default Winners
