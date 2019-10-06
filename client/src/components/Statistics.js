import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import TitleHeader from '../components/TitleHeader'

export class Statistics extends Component {

    render() {
        const {content} = this.props
        return (
            <div>
                <TitleHeader
                    title={content.title}
                    wrapperClassName='px-3 pt-5 py-3' />

                <Row className='text-center mx-5' >
                    {
                        content.statistics.map(statsItem => (
                            <Col key={statsItem._id} lg={4} xs={6}>
                                <img src={statsItem.image.url} alt={statsItem.label} width='90vw' />
                                <p dangerouslySetInnerHTML={{__html: statsItem.description}}></p>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default Statistics
