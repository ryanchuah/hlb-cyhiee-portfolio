import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'

export class MemberItem extends Component {
    render() {
        return (
            <React.Fragment>
                <Form.Label className="font-weight-bold">Full Name (as per NRIC)</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                        plaintext readOnly
                        aria-label="Team Member's Name"
                        aria-describedby="basic-addon2"
                        value={this.props.member.name}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"
                            onClick={this.props.removeMember.bind(this, this.props.member.id)}>Remove</Button>
                    </InputGroup.Append>
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="font-weight-bold">Work Email Address</Form.Label>
                    <Form.Control plaintext readOnly type="email" value={this.props.member.email} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="font-weight-bold">Phone Number</Form.Label>
                    <Form.Control plaintext readOnly type="text" value={this.props.member.phone} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font-weight-bold">T-shirt Size</Form.Label>
                    <Form.Control plaintext readOnly type="text" value={this.props.member.size} />
                </Form.Group>

            </React.Fragment>
        )
    }
}

export default MemberItem
