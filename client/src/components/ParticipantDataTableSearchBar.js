import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import AdditionalSearchBar from '../components/AdditionalSearchBar'
import styles from '../Styles.module.css'

export class ParticipantDataTableSearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teamNameSearch: "",
            placementSearch: "Placement",
            cxJourneySearch: "CX Journey",
            stateSearch: "State",
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
            moreFilters: false,
            resultsFound: -1,
        }
    }

    onClear = e => {
        this.setState({
            teamNameSearch: "",
            placementSearch: "Placement",
            cxJourneySearch: "CX Journey",
            stateSearch: "State",
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
            moreFilters: false,
        }, this.props.onClear(e))
    }

    onSearchChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.props.onFilterChange(e)
    }

    onClickMoreFilters = e => {
        this.setState({moreFilters: !this.state.moreFilters}, ()=>{
            if (!this.state.moreFilters) this.props.onLessFilters()
        })
    }

    render() {
        return (
            <Container>
                <Row className="pb-3">
                    <Col sm={3} xs={6}>
                        {/* onChange and onKeyUp is both used here to avoid performance 
                        issues when holding down a key (eg backspace) */}
                        <input
                            value={this.state.teamNameSearch}
                            type='text'
                            className="w-100 h-100 border-top-0 border-left-0 border-right-0"
                            style={{ borderBottom: 'solid 1px', borderColor: 'rgb(169, 169, 169)' }}
                            name='teamNameSearch'
                            placeholder='&nbsp;Team Name'
                            onKeyUp={this.props.onFilterChange}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                    </Col>
                    <Col sm={3} xs={6}>
                        <select
                            style={{color: this.state.placementSearch === "Placement" || this.state.placementSearch === "" ? 'grey' : 'black'}}
                            value={this.state.placementSearch}
                            className={styles.select}
                            onChange={this.onSearchChange}
                            name="placementSearch">
                            <option value="">&nbsp;Placement</option>
                            <option value="Finalist" className='text-body'>&nbsp;Finalist</option>
                            <option value="Regionals" className='text-body'>&nbsp;Regionals</option>
                            <option value="-" className='text-body'>&nbsp;Participant</option>
                        </select>
                    </Col>
                    <Col sm={3} xs={6}>
                        <select
                            style={{color: this.state.cxJourneySearch === "CX Journey" || this.state.placementSearch === "" ? 'grey' : 'black'}}
                            value={this.state.cxJourneySearch}
                            className={styles.select}
                            onChange={this.onSearchChange}
                            name="cxJourneySearch">
                            <option value="">&nbsp;CX Journey</option>
                            <option value="Acquire" className='text-body'>&nbsp;Acquire</option>
                            <option value="Attract" className='text-body'>&nbsp;Attract</option>
                            <option value="Employee Experience" className='text-body'>&nbsp;Employee Exp</option>
                            <option value="Engage" className='text-body'>&nbsp;Engage</option>
                            <option value="N/A" className='text-body'>&nbsp;N/A</option>
                            <option value="Product" className='text-body'>&nbsp;Product</option>
                            <option value="Transact" className='text-body'>&nbsp;Transact</option>
                        </select>
                    </Col>
                    <Col sm={3} xs={6}>
                        <select
                            style={{color: this.state.stateSearch === "State" || this.state.placementSearch === "" ? 'grey' : 'black'}}
                            value={this.state.stateSearch}
                            className={styles.select}
                            onChange={this.onSearchChange}
                            name="stateSearch">
                            <option value="">&nbsp;State</option>
                            <option value="Kuala Lumpur" className='text-body'>&nbsp;Kuala Lumpur</option>
                            <option value="Perlis" className='text-body'>&nbsp;Perlis</option>
                            <option value="Perak" className='text-body'>&nbsp;Perak</option>
                            <option value="Kedah" className='text-body'>&nbsp;Kedah</option>
                            <option value="Pulau Pinang" className='text-body'>&nbsp;Pulau Pinang</option>
                            <option value="Pahang" className='text-body'>&nbsp;Pahang</option>
                            <option value="Terengganu" className='text-body'>&nbsp;Terengganu</option>
                            <option value="Kelantan" className='text-body'>&nbsp;Kelantan</option>
                            <option value="Melaka" className='text-body'>&nbsp;Melaka</option>
                            <option value="Negeri Sembilan" className='text-body'>&nbsp;Negeri Sembilan</option>
                            <option value="Johor" className='text-body'>&nbsp;Johor</option>
                            <option value="Selangor" className='text-body'>&nbsp;Selangor</option>
                            <option value="Sabah / Labuan" className='text-body'>&nbsp;Sabah / Labuan</option>
                            <option value="Sarawak" className='text-body'>&nbsp;Sarawak</option>
                        </select>
                    </Col>
                </Row>

                {this.state.moreFilters &&
                <AdditionalSearchBar 
                moreFilters={this.state.moreFilters}
                onFilterChange={this.props.onFilterChange} />}

                <Row className="pb-5">
                    <Col className="d-flex justify-content-end">
                        <Button
                            variant='outline-dark'
                            className="w-25"
                            sm={4}
                            size='sm'
                            onClick={this.onClickMoreFilters}>
                                {this.state.moreFilters ? "Less Filters" : "More Filters"}
                            </Button>
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <Button
                            variant='outline-dark'
                            className="w-25"
                            sm={4}
                            size='sm'
                            height='100%'
                            onClick={this.onClear}>Clear
                            </Button>
                        <p>{`${this.props.resultsCount} results found`}</p>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default ParticipantDataTableSearchBar
