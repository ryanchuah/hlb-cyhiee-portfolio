import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

export default class MapSection extends React.Component {
    render(){
        return (
            <Container style={containerStyle} bsPrefix="footerContainer">
                <Row className="text-center" style={upperRowStyle}>
                    <Col xs={5} style={verticalAlign}>
                        <h4>Can You Hack It Employees' Edition</h4>
                    </Col>
                    <Col>
                        <p className="font-weight-bold d-block">Links</p>
                        <a 
                        href="https://www.hlb.com.my/en/personal-banking/about-us/careers/can-you-hack-it.html" 
                        className="d-block"
                        target="_blank"
                        rel="noopener noreferrer" >Can You Hack It</a>
                        <a 
                        href="https://www.hlb.com.my/" 
                        className="d-block"
                        target="_blank"
                        rel="noopener noreferrer" >Hong Leong Bank</a>
                    </Col>
                    <Col>
                        <p className="font-weight-bold d-block">Contact Us</p>
                        <p className="d-block mb-0" >Tel: +603 2777 17778</p>
                        <p className="d-block mb-0">6, Jalan Damanlela</p>
                    </Col>
                </Row>
                <Row style={lowerRowStyle}>
                    <Col >
                        <p>&copy; Hong Leong Bank Berhad</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const containerStyle = {
    overflowX: "hidden",
    background: "#f8f8f8",
}

const upperRowStyle = {
    overflowX: "hidden",
    padding: "3vw 5vw",
}

const lowerRowStyle = {
    textAlign: "center",
}

const verticalAlign = {
    display: "flex",
    alignItems: "center",
}