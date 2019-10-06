import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class ParticipantDataTableHeader extends Component {
    render() {
        return (
            <Container>
                <Row className='font-weight-bold'>
                    <Col lg={2}>
                        <p>Team Name</p>
                    </Col>
                    <Col lg={1}>
                        <p>Place</p>
                    </Col>
                    <Col lg={3}>
                        <p>Idea</p>
                    </Col>
                    <Col lg={3}>
                        <p>Bank Value</p>
                    </Col>
                    <Col lg={3}>
                        <p>Implementation</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ParticipantDataTableHeader
