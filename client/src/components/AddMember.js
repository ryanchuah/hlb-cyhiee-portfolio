import React from "react"
import { Form, Button } from "react-bootstrap"

export default class AddMember extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    size: "XS"
  }

  onClick = e => {
    if (
      this.state.name &&
      this.state.email &&
      this.state.phone &&
      this.state.size
    ) {
      this.props.addMember(
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.size
      )
      this.setState({ name: "", email: "", phone: "", size: "XS" })
    }
  }

  handleSelectChange = e => {
    this.setState({ size: e.target.value })
  }

  
  render() {
    return (
      <React.Fragment>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name (as per NRIC)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lim Sook Yi"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Work Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@hlbb.hongleong.com.my"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="+60 12 345 6789"
            onChange={e => this.setState({ phone: e.target.value })}
            value={this.state.phone}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>T-shirt Size</Form.Label>
          <Form.Control
            as="select"
            onChange={this.handleSelectChange}
            value={this.state.size}
          >
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="outline-info"
          type="button"
          onClick={this.onClick}
          style={{ margin: "auto", maxWidth: "30vw" }}
          block
        >
          Add Member
        </Button>
      </React.Fragment>
    )
  }
}
