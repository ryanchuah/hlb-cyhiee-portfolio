import React, { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import uuidv4 from 'uuid/v4'
import ParticipantDataCard from './ParticipantDataCard'

export class ParticipantDataTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    render() {
        if (this.props.isLoading) {
            return null
        }

        if (this.props.participantInfo.length < 1){
            return <h4>No results found</h4>
        }

        const cardRowArray = []
        const cardItemArray = []
        const numberOfParticipants = this.props.numberOfParticipants === undefined ? this.props.participantInfo.length : 12
        const numberOfCardsPerRow = 3
        const numberOfRows = Math.ceil(numberOfParticipants / numberOfCardsPerRow)
        const memberLimit = this.props.memberLimit !== undefined ? this.props.memberLimit : 0

        for (let index = 0; index < numberOfParticipants; index++) {
            this.props.participantInfo[index].id = uuidv4()
            const participantItem = this.props.participantInfo[index]
            var teamMembersArray = []

            for (let member = 1; member < memberLimit + 1; member++) {
                teamMembersArray.push({
                    name: participantItem[`M${member} Full Name`],
                    email: participantItem[`M${member} Work Email Address`]
                })
            }

            cardItemArray.push(
                <ParticipantDataCard
                    key={participantItem.id}
                    teamName={participantItem['Team Name']}
                    teamMembersArray={teamMembersArray}
                    placement={participantItem['Placement']}
                    idea={participantItem['Idea'].replace(/(?:\r\n|\r|\n|●)/g, '\n')}
                    cxJourney={participantItem['CX Journey Level 1']}
                    state= {participantItem['State']}
                    bankValues= {participantItem['Bank Values'].replace(/(?:\r\n|\r|\n|●)/g, '\n')}
                    implementation= {participantItem['Implementation'].replace(/(?:\r\n|\r|\n|●)/g, '\n')}
                    aspectRatio={this.props.aspectRatio}
                    onShow={this.onShow} />
            )
        }

        for (let i = 0; i < numberOfRows * 3; i += 3) {
            cardRowArray.push(
                <CardDeck 
                key={uuidv4()} 
                className='mx-5 pb-sm-4 pb-0' 
                style={{ whiteSpace: 'pre-wrap' }}>
                    {cardItemArray.slice(i, i + 3)}
                </CardDeck>
            )
        }

        return (
            <div>
                {cardRowArray}
            </div>
        )
    }
}

export default ParticipantDataTable
