import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export class SignUpModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isUploadLoading: false,
            hasTimedOut: false
        }
    }

    onClick = () => {
        this.setState({
            isUploadLoading: true
        }, () => {
            setTimeout(() => {
                this.setState({ hasTimedOut: true })
            }, 8000)
            this.props.putDataToDB()
        })
    }

    handleFailureOnClick = () => {
        this.setState({
            isUploadLoading: false,
            hasTimedOut: false
        }, this.props.onClose)
    }

    render() {
        //success
        if (this.props.dataHasUploaded) {
            return (
                <Modal show={this.props.showModal} className="text-center">
                    <Modal.Header>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your sign up is complete. See you there!
                    </Modal.Body>
                    <Modal.Footer>
                        <NavLink to="/" className="btn btn-outline-success">
                            Return to Homepage
                        </NavLink>
                    </Modal.Footer>
                </Modal>
            )
        }

        //failure
        const { hasTimedOut } = this.state
        if (hasTimedOut) {
            return (
                <Modal show={this.props.showModal} className="text-center">
                    <Modal.Header>
                        <Modal.Title>Hmm...Something Went Wrong</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This is taking longer than expected.<br/>
                        You may want to record your sign up details before proceeding.<br/>
                        Going 'Back' will not cause your data to be lost.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={this.handleFailureOnClick}>
                            I wish to go back to record my data
                    </Button>
                        <Button variant="primary" onClick={this.onClick} disabled={true}>
                            Uploading your details...
                    </Button>
                    </Modal.Footer>
                </Modal>
            )
        }

        //loading
        const { isUploadLoading } = this.state
        return (
            <Modal show={this.props.showModal} className="text-center">
                <Modal.Header>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your team consists of&nbsp;
                    <span className="font-weight-bold">
                        {this.props.members.length} members
                    </span>
                    <br />Is this correct?
          </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose} disabled={isUploadLoading}>
                        No, I've forgotten to click "Add Member"
                    </Button>
                    <Button variant="primary" onClick={this.onClick} disabled={isUploadLoading}>
                        {!isUploadLoading ? "Yes, I wish to submit" : "Uploading your details..."}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SignUpModal
