import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'

class MapModal extends React.Component {

    getData = () => {
        const { regionClicked } = this.props

        if (regionClicked === 'northern') {
            return {
                header: "Northern Region",
                finalist: "22",
                regionals: "26",
                teams: "33",
                acquisition: "36",
                attraction: "14",
                employeeExperienceCx: "10",
                engagement: "17",
                product: "12",
                transaction: "18",
                customerFacing: "132",
                customerSupport: "123",
                employeeProcess: "91",
                employeeExperienceCat: "10",
                employeeBenefits: "10",
            }
        } else if (regionClicked === 'eastern') {
            return {
                header: "Eastern Region",
                finalist: "12",
                regionals: "11",
                teams: "81",
                acquisition: "14",
                attraction: "10",
                employeeExperienceCx: "13",
                engagement: "73",
                product: "10",
                transaction: "13",
                customerFacing: "14",
                customerSupport: "12",
                employeeProcess: "10",
                employeeExperienceCat: "12",
                employeeBenefits: "10",
            }
        } else if (regionClicked === 'central') {
            return {
                header: "Central Region",
                finalist: "14",
                regionals: "312",
                teams: "953",
                acquisition: "17",
                attraction: "130",
                employeeExperienceCx: "130",
                engagement: "12",
                product: "15",
                transaction: "139",
                customerFacing: "216",
                customerSupport: "2",
                employeeProcess: "10",
                employeeExperienceCat: "7",
                employeeBenefits: "18",
            }
        } else if (regionClicked === 'southern') {
            return {
                header: "Southern Region",
                finalist: "21",
                regionals: "16",
                teams: "8",
                acquisition: "8",
                attraction: "11",
                employeeExperienceCx: "16",
                engagement: "30",
                product: "10",
                transaction: "17",
                customerFacing: "4",
                customerSupport: "18",
                employeeProcess: "10",
                employeeExperienceCat: "28",
                employeeBenefits: "24",
            }
        } else {
            //if east
            return {
                header: "East Malaysia",
                finalist: "14",
                regionals: "14",
                teams: "327",
                acquisition: "84",
                attraction: "10",
                employeeExperienceCx: "7",
                engagement: "10",
                product: "10",
                transaction: "15",
                customerFacing: "7",
                customerSupport: "12",
                employeeProcess: "10",
                employeeExperienceCat: "1",
                employeeBenefits: "1",
            }
        }
    }
    render() {
        const { header,
            finalist,
            regionals,
            teams,
            acquisition,
            attraction,
            employeeExperienceCx,
            engagement,
            product,
            transaction,
            customerFacing,
            customerSupport,
            employeeProcess,
            employeeExperienceCat,
            employeeBenefits } = this.getData()

        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='w-100'>
                        <h2 className='font-weight-bold'>{header}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-3'>
                    <h5 className='text-center font-weight-bold py-2'>Team Breakdown</h5>
                    <Container>
                        <Row className='text-center '>
                            <Col>
                                <h5>{`${teams} teams`}</h5>
                            </Col>
                            <Col>
                                <h5>{`${regionals} regionals`}</h5>
                            </Col>
                            <Col>
                                <h5>{`${finalist} finalists`}</h5>
                            </Col>
                        </Row>
                    </Container>

                    <Row className='pt-4'>
                        <Col xs={6}>
                            <h5 className='text-center font-weight-bold pb-2'>CX Journey</h5>
                            <Container>
                                <Row>
                                    <Col xs={6} className='font-weight-bold'>
                                        <p>Type</p>
                                    </Col>
                                    <Col xs={6} className='font-weight-bold'>
                                        <p>Number of Teams</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p>Acquisition</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {acquisition}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Attraction</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {attraction}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Employee Experience</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {employeeExperienceCx}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Engagement</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {engagement}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Product</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {product}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Transaction</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {transaction}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={6}>
                            <h5 className='text-center font-weight-bold pb-2'>Category</h5>
                            <Container>
                                <Row>
                                    <Col xs={6} className='font-weight-bold'>
                                        <p>Type</p>
                                    </Col>
                                    <Col xs={6} className='font-weight-bold'>
                                        <p>Number of Teams</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p>Customer Facing</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {customerFacing}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Customer Support</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {customerSupport}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Employee Process</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {employeeProcess}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Employee Experience</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {employeeExperienceCat}
                                    </Col>
                                    <Col xs={6}>
                                        <p>Employee Benefits</p>
                                    </Col>
                                    <Col xs={6} className='text-center'>
                                        {employeeBenefits}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MapModal
