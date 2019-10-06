import React, { Component } from 'react'
import Statistics from '../components/Statistics'
import ParticipantData from '../components/ParticipantData'
import Mentors from '../components/Mentors'
import HeroYear from '../components/HeroYear'
import LoadingScreen from '../components/LoadingScreen'

export class Year extends Component {
    constructor(props){
        super(props)
        this.state={
            aspectRatio: window.innerWidth/window.innerHeight,
            cmsData: undefined,
            isLoading: true,
            spreadsheetData: undefined,
        }
    }

    componentDidMount() {
        const {year} = this.props
        const url = `/api/content/years/${year}`

        fetch(url)
            .then(response => response.json())
            .then(myJson => this.setState({ cmsData: myJson, isLoading: false }))

    }

    getContent = (section, additionalSection) => {
        if (additionalSection === undefined){
            return this.state.cmsData[section]
        }
        return {
            [section]:this.state.cmsData[section], 
            [additionalSection]:this.state.cmsData[additionalSection]
        }
        // return Object.assign({}, this.state.cmsData[section], this.state.cmsData[additionalSection])
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingScreen />
            )
        }

        const { cmsData } = this.state
        if (cmsData.isComingSoon === true){
            return (
                <HeroYear content={this.getContent('yearHero')} />
            )
        }

        const {aspectRatio} = this.state
        return (
            <div>
                <HeroYear content={this.getContent('yearHero')} />
                <Statistics content={this.getContent('yearStatistics')} aspectRatio={aspectRatio} />
                <Mentors content={this.getContent('yearJudges', 'yearMentors')}/>
                <ParticipantData 
                aspectRatio={aspectRatio} 
                content={this.getContent('titleParticipants')}
                year={this.props.year}/>
            </div>
        )
    }
}

export default Year
