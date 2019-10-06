import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export class AdditionalSearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            ideaSearch: "",
            bankValuesSearch: "",
            implementationSearch: "",
        }
    }

    render() {
        return (
            <div>
                <Row className="fadeIn animated pb-3">
                <Col sm={4} xs={6}>
                        {/* onChange and onKeyUp is both used here to avoid performance 
                        issues when holding down a key (eg backspace) */}
                        <input
                            value={this.state.ideaSearch}
                            type='text'
                            className="w-100 h-100 border-top-0 border-left-0 border-right-0"
                            style={{ borderBottom: 'solid 1px', borderColor: 'rgb(169, 169, 169)' }}
                            name='ideaSearch'
                            placeholder='&nbsp;Idea'
                            onKeyUp={this.props.onFilterChange}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                    </Col>
                    <Col sm={4} xs={6}>
                        {/* onChange and onKeyUp is both used here to avoid performance 
                        issues when holding down a key (eg backspace) */}
                        <input
                            value={this.state.bankValuesSearch}
                            type='text'
                            className="w-100 h-100 border-top-0 border-left-0 border-right-0"
                            style={{ borderBottom: 'solid 1px', borderColor: 'rgb(169, 169, 169)' }}
                            name='bankValuesSearch'
                            placeholder='&nbsp;Bank Values'
                            onKeyUp={this.props.onFilterChange}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                    </Col>
                    <Col sm={4} xs={6}>
                        {/* onChange and onKeyUp is both used here to avoid performance 
                        issues when holding down a key (eg backspace) */}
                        <input
                            value={this.state.implementationSearch}
                            type='text'
                            className="w-100 h-100 border-top-0 border-left-0 border-right-0"
                            style={{ borderBottom: 'solid 1px', borderColor: 'rgb(169, 169, 169)' }}
                            name='implementationSearch'
                            placeholder='&nbsp;Implementation'
                            onKeyUp={this.props.onFilterChange}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default AdditionalSearchBar
