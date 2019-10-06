import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ParticipantDataTable from '../components/ParticipantDataTable'
import TitleHeader from '../components/TitleHeader'
import LoadingScreen from '../components/LoadingScreen'

export class ParticipantData extends Component {
    constructor(props){
        super(props)
        this.state={
            participantInfo: undefined,
            memberLimit: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        const limit = 12
        const url = `/api/participantInfo/${this.props.year}?limit=${limit}`
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ participantInfo: myJson.spreadsheetItem, memberLimit: myJson.memberLimit, isLoading: false })
            });
        
    }

    render() {
        if (this.state.isLoading) return <LoadingScreen />
        const {content} = this.props
        return (
            <div className='pb-4'>
                <TitleHeader 
                    title={content}
                    wrapperClassName='px-3 py-1' />
                <ParticipantDataTable 
                aspectRatio={this.props.aspectRatio}
                participantInfo={this.state.participantInfo}
                memberLimit={this.state.memberLimit}
                isLoading={this.state.isLoading} />
                <Button 
                variant='outline-info' 
                className='w-25 mx-auto'
                href={`/${this.props.year}/allParticipants`}
                block>View all participants</Button>
            </div>
        )
    }
}

export default ParticipantData
