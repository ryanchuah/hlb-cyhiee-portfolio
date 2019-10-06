import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'
import styles from '../Styles.module.css'
import MalaysiaMap from '../components/MalaysiaMap'
import MapModal from './MapModal';

export class MapSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolledIntoView: window.innerWidth < 768 ? true : false,
            offsetFromTop: undefined,
            showModal: false,
            regionClicked: null,
        }
    }

    onHideModal = () => this.setState({ showModal: false, regionClicked: null })

    onShowModal = () => this.setState({ showModal: true })

    componentDidMount() {
        if (window.innerWidth >= 768){
            window.addEventListener('scroll', this.handleScrollIntoView)
            var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
            this.setState({
                offsetFromTop: rect.y - rect.height,
                elemHeight: rect.height
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollIntoView)
    }

    handleScrollIntoView = () => {
        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

        // bigger division = faster display of map
        const triggerHeight = this.state.offsetFromTop / 4

        if (rect.y - this.state.elemHeight <= triggerHeight) {
            this.setState({ scrolledIntoView: true},
                () => window.removeEventListener('scroll', this.handleScrollIntoView)
            )
        }
    }

    getAnimationClass = () => {
        if (this.state.scrolledIntoView) {
            return 'fadeIn animated slow py-lg-0 py-4'
        }
    }

    getVisibilityStyle = () => {
        return {
            visibility: this.state.scrolledIntoView ? 'visible' : 'hidden',
        }
    }

    onClickMap = region => {
        this.setState({ regionClicked: region, showModal: true })
    }

    render() {
        const { content } = this.props
        return (
            <React.Fragment>
                <Container style={containerStyle} className={styles.mapSectionBackground} bsPrefix="mapContainer">
                    <Row noGutters  className={this.getAnimationClass()} style={this.getVisibilityStyle()}>
                        <Col xs={12} lg={5} style={alignCenter} >
                            <div className="textContainer " style={titleContainerStyle} >
                                <h1 className='pb-5 font-weight-bold'>{content.title}</h1>
                                <h5 style={{whiteSpace: 'pre-line'}}>
                                    {/* Congratulations people!<br />
                                    We're happy to see your passion in improving the world of banking and helping others.<br />
                                    For regional information, click on the map. */}
                                    {content.subtitle}
                                </h5>
                            </div>
                        </Col>
                        <Col xs={12} lg={7} style={alignCenter} >
                            <MalaysiaMap onClickMap={this.onClickMap}/>
                        </Col>
                    </Row>
                </Container>
                <MapModal show={this.state.showModal} onHide={this.onHideModal} regionClicked={this.state.regionClicked}/>
            </React.Fragment>
        )
    }
}

const containerStyle = {
    minHeight: '40vh',
    padding: '3vw 4vw',
    background: '#f7faff',
}

const alignCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const titleContainerStyle = {
    flex: '1',
    padding: '0 2vw',
    zIndex: 3,
    color: 'white',
}

export default MapSection
