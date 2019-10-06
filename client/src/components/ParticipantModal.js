import React from 'react'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'

class ParticipantModal extends React.Component {

  render() {
    const { teamName, teamMembersArray, placement, idea, cxJourney, state, bankValues, implementation } = this.props
    var leftColumnMembers = []
    var rightColumnMembers = []

    for (let index = 0; index < teamMembersArray.length / 2; index++) {
      leftColumnMembers.push(teamMembersArray[index])
    }

    for (let i = teamMembersArray.length / 2; i < teamMembersArray.length; i++) {
      rightColumnMembers.push(teamMembersArray[i])
    }


    // TODO: change header styles to Alif's

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ whiteSpace: 'pre-wrap' }}
      >
        <Modal.Header closeButton>
          <Modal.Title className='d-flex justify-content-between w-100 align-items-center'>
            <div className='team-member-details'>
              <h3 className='font-weight-bold d-inline-block'>{teamName}</h3>
            </div>

            <div className='text-right text-muted pt-2'>
              <h6 >{state}</h6>
              <h6>{placement}</h6>
              <h6>{`Customer Experience Journey: ${cxJourney}`}</h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>
          <Container className='d-flex justify-content-center'>
            <Row>
              {/* TODO: check below code. could break */}
              <Col sm='auto' style={{ marginRight: window.innerWidth >= 576 ? '100px' : 0 }}>
                {
                  leftColumnMembers.map(member => {
                    if (member.name === '-') return null
                    return (
                      <p key={member.email} className='font-weight-bold'>
                        {member.name}<br></br>
                        <span style={{ fontSize: '0.8rem' }} className='font-weight-normal text-muted'>{member.email}</span>
                      </p>
                    )
                  })
                }
              </Col>

              <Col sm='auto'>
                {
                  rightColumnMembers.map(member => {
                    if (member.name === '-') return null
                    return (
                      <p key={member.email} className='font-weight-bold'>
                        {member.name}<br></br>
                        <span style={{ fontSize: '0.8rem' }} className='font-weight-normal text-muted'>{member.email}</span>
                      </p>
                    )
                  })
                }
              </Col>
            </Row>
          </Container>
          <h4 className='font-weight-bold pt-2'>Idea</h4>
          <p>{idea}</p>
          <h4 className='font-weight-bold pt-2'>Bank Values</h4>
          <p>{bankValues}</p>
          <h4 className='font-weight-bold pt-2'>Implementation</h4>
          <p>{implementation}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ParticipantModal
