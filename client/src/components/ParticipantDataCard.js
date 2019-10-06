import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styles from '../Styles.module.css'
import ParticipantModal from '../components/ParticipantModal'

export default class ParticipantDataCard extends Component {
    constructor(props){
        super(props)
        this.state={
            showModal: false,
        }
    }

    onShow = () => this.setState({ showModal: true })

    render() {

        const { teamName, teamMembersArray, placement, idea, cxJourney, state, bankValues, implementation } = this.props

        return (
            <React.Fragment>

                <Card>
                    <Card.Body>
                        <Card.Title>{teamName}</Card.Title>
                        <Card.Subtitle className="pb-2 text-muted">
                        <div className='d-flex justify-content-between'>

                            <h6>{placement}</h6>
                            {/* this is to prevent placement and state from overlapping */}
                            {/* the aspect ratio is to check for undesired ratios (long cards that squeeze the text together) */}
                            {/* the innerWidth is to check if mobile (allow state to show because each card now takes up whole row) */}
                            <h6 className='font-italic'>
                                {this.props.aspectRatio > 1.35 || window.innerWidth < 576 ? cxJourney : null}
                            </h6>
                        </div>
                        </Card.Subtitle>
                        <Card.Text>
                            {idea.length < 200 ? idea : `${idea.substring(0, 200)}...`}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <p className={styles.linkStyle} onClick={this.onShow}>View More</p>
                    </Card.Footer>
                </Card>

                <ParticipantModal
                    show={this.state.showModal}
                    onHide={() => this.setState({ showModal: false })}
                    teamName={teamName}
                    placement={placement}
                    idea={idea}
                    cxJourney={cxJourney}
                    state={state}
                    bankValues={bankValues}
                    implementation={implementation}
                    teamMembersArray={teamMembersArray}
                />
            </React.Fragment>
        )
    }
}
