import React from "react"
import { Alert } from 'react-bootstrap'

export default class AlertDismissibleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    render() {

        if (this.props.show) {
            return (
                <div className='pt-5'>
                    <Alert variant="success" onClose={this.props.onClose} dismissible>
                        <Alert.Heading>Success!</Alert.Heading>
                        <p>
                            Your sign up is successful. We look forward to meeting you!
                        </p>
                    </Alert>
                </div>
            )
        }
        return null

    }
}