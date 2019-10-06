import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class GalleryModal extends Component {
    render() {
        if (this.props.show && this.props.itemClicked !== null) {
            const { item } = this.props
            return (
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onClick={this.props.onHide}
                >

                    <Modal.Body>
                        <img
                            src={item.url}
                            alt={item.name}
                            className="d-block w-100"
                        />
                    </Modal.Body>
                </Modal>
            )
        }

        return null

    }
}

export default GalleryModal
