import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import axios from "axios"

import AddMember from "../components/AddMember"
import Members from "../components/Members"
import SignUpModal from "../components/SignUpModal"
import SignUpSuccessAlert from "../components/SignUpSuccessAlert"

export class SignUp extends Component {
  // initialize our state
  state = {
    teamName: "",
    state: "WP Kuala Lumpur",
    members: [],
    projectIdea: "",
    projectValue: "",
    projectImplementation: "",
    showModal: false,
    showAlert: false,
    dataHasUploaded: false,
  }

  onSelectChange = e => {
    this.setState({ state: e.target.value })
  }

  addMember = (name, email, phone, size) => {
    this.setState({
      members: [
        ...this.state.members,
        {
          name,
          email,
          phone,
          size
        }
      ]
    })
  }

  removeMember = id => {
    this.setState({
      members: this.state.members.filter(member => member.id !== id)
    })
  }

  // =============== Modal ===============

  onModalClose = () => {
    this.setState({ showModal: false })
  }

  onModalShow = () => {
    this.setState({ showModal: true })
  }

  // =============== End Modal ===============

  putDataToDB = () => {
    axios.post("/api/signUpInfo", {
      teamName: this.state.teamName,
      state: this.state.state,
      members: this.state.members,
      projectIdea: this.state.projectIdea,
      projectValue: this.state.projectValue,
      projectImplementation: this.state.projectImplementation
    }).then(() => {
      this.setState({dataHasUploaded: true})
    })
  }

  render() {
    return (
      <div style={containerStyle}>
        <SignUpModal 
        showModal={this.state.showModal} 
        members={this.state.members}
        onClose={this.onModalClose}
        putDataToDB={this.putDataToDB}
        dataHasUploaded={this.state.dataHasUploaded} />

        



        <h1>Sign Up</h1>
        <h3>Team Details</h3>
        <Form
          onSubmit={e => {
            e.preventDefault()
            this.onModalShow()
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Team StarFire"
              onChange={e => this.setState({ teamName: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" onChange={this.onSelectChange}>
              <option>WP Kuala Lumpur</option>
              <option>Perlis</option>
              <option>Perak</option>
              <option>Kedah</option>
              <option>Pulau Pinang</option>
              <option>Pahang</option>
              <option>Terengganu</option>
              <option>Kelantan</option>
              <option>Melaka</option>
              <option>Negeri Sembilan</option>
              <option>Johor</option>
              <option>Selangor</option>
              <option>Sabah</option>
              <option>Sarawak</option>
            </Form.Control>
          </Form.Group>
          <hr />

          <div>
            <h3 className='mb-0'>Team Member Details</h3>
            <p>(A team must consist of a mimimum of two members and a maximum of
              four members)</p>
          </div>
          
          <AddMember
            isRegisteringAlone={this.state.isRegisteringAlone}
            addMember={this.addMember}
          />

          <Members
            isRegisteringAlone={this.state.isRegisteringAlone}
            members={this.state.members}
            removeMember={this.removeMember}
          />
          <hr />

          <h3>Project Details</h3>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Project Idea</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="A short description of your project idea..."
              onChange={e => this.setState({
                projectIdea: e.target.value
              })}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What Value Does Your Idea Add?</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Does it solve a problem? Does your idea improve revenue, employee experience...? How do you measure the effectiveness of your idea?"
              onChange={e => this.setState({
                projectValue: e.target.value
              })}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>How Would You Implement Your Idea?</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="How do you want to carry out your idea/solution? What are the stages of implementation? How do you ensure that your solution is sustainable?"
              onChange={e =>
                this.setState({
                  projectImplementation: e.target.value
                })
              }
            />
          </Form.Group>
          <Button
            variant="outline-success"
            type="submit"
            style={{ margin: "auto", maxWidth: "30vw" }}
            block
          >
            Submit
          </Button>
        </Form>
        <SignUpSuccessAlert
        show={this.state.showAlert}
        onClose={this.onAlertClose} />

      </div>
    )
  }
}

const containerStyle = {
  padding: "3vw 10vw"
}

export default SignUp
