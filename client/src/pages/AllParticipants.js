import React, { Component } from 'react'
import TitleHeader from '../components/TitleHeader'
import ParticipantDataTable from '../components/ParticipantDataTable'
import ScrollUpButton from "react-scroll-up-button";
import { ReactComponent as ChevronUp } from '../images/icons/chevronUp.svg'
import styles from '../Styles.module.css'
import ParticipantDataTableSearchBar from '../components/ParticipantDataTableSearchBar'
import LoadingScreen from '../components/LoadingScreen'

export class AllParticipants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            participantInfo: undefined,
            memberLimit: undefined,
            isLoading: true,
            teamNameSearch: "",
            placementSearch: "Placement",
            cxJourneySearch: "CX Journey",
            stateSearch: "State",
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
        }
    }

    componentDidMount() {
        const limit = -1
        const url = `/api/participantInfo/${this.props.year}?limit=${limit}`
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ 
                    participantInfo: myJson.spreadsheetItem,
                    memberLimit: myJson.memberLimit, 
                    isLoading: false 
                })
            });
    }

    onFilterChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClear = () => {
        this.setState({
            teamNameSearch: "",
            placementSearch: "Placement",
            cxJourneySearch: "CX Journey",
            stateSearch: "State",
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
        })
    }

    onLessFilters = () => {
        this.setState({
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
        })
    }

    getFilteredList = () => {
        var { participantInfo, teamNameSearch, placementSearch, cxJourneySearch, stateSearch,
            ideaSearch, bankValuesSearch, implementationSearch } = this.state

        if (placementSearch === "Placement") placementSearch = ""
        if (cxJourneySearch === "CX Journey") cxJourneySearch = ""
        if (stateSearch === "State") stateSearch = ""

        //TODO: change indexOf to regex for performance
        return (participantInfo.filter(
            item => (
                item['Team Name']
                    .toString()
                    .toLowerCase()
                    .indexOf(teamNameSearch.toLowerCase()) > -1 &&
                item['Placement']
                    .indexOf(placementSearch) > -1 &&
                item['CX Journey Level 1']
                    .indexOf(cxJourneySearch) > -1 &&
                item['State']
                    .indexOf(stateSearch) > -1 &&
                item['Idea']
                    .toLowerCase()
                    .indexOf(ideaSearch.toLowerCase()) > -1 &&
                item['Bank Values']
                    .toLowerCase()
                    .indexOf(bankValuesSearch) > -1 &&
                item['Implementation']
                    .toLowerCase()
                    .indexOf(implementationSearch) > -1
            )
        ))
    }

    render() {
        if (this.state.isLoading) return <LoadingScreen />

        const filteredList = this.getFilteredList()
        const aspectRatio = window.innerWidth / window.innerHeight

        return (
            <div style={{minHeight:'75vh'}}>
                <TitleHeader title={`Our ${this.props.year} Participants`} wrapperClassName='px-3 pt-5 pb-1' />
                <ParticipantDataTableSearchBar
                    onFilterChange={this.onFilterChange}
                    onClear={this.onClear}
                    onLessFilters={this.onLessFilters}
                    resultsCount={filteredList.length} />
                <ParticipantDataTable
                    aspectRatio={aspectRatio}
                    participantInfo={filteredList}
                    memberLimit={this.state.memberLimit}
                    isLoading={this.state.isLoading} />
                <ScrollUpButton
                    ContainerClassName={styles.AnyClassForContainer}
                    TransitionClassName={styles.AnyClassForTransition} >
                    <ChevronUp />
                </ScrollUpButton>
            </div>
        )
    }
}

export default AllParticipants
