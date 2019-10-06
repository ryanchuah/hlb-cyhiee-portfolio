import React, { Component } from 'react'
import Hero from "../components/Hero"
import MapSection from "../components/MapSection"
import Winners from "../components/Winners"
import Gallery from "../components/Gallery"
import LoadingScreen from '../components/LoadingScreen'

export class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cmsData: undefined,
            isContentLoading: true
        }
    }

    componentDidMount = () => {
        const url = '/api/content/homepage'
        fetch(url)
          .then(response => response.json())
          .then(myJson => {
            this.setState({ cmsData: myJson, isContentLoading: false })
            
          })
      }

    getContent = section => {
        return this.state.cmsData.find(item => item.name === section)
    }

    render() {
        if (this.props.isNumOfYearsLoading || this.state.isContentLoading) return <LoadingScreen />
        
        return (
            <React.Fragment>
                <Hero content={this.getContent("Hero")} />
                <MapSection content={this.getContent("Map")} />
                <Winners content={this.getContent("Winner")}/>
                <Gallery content={this.getContent("Gallery")}/>
            </React.Fragment>
        )
    }
}

export default Index
