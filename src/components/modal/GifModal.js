import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { deselectGif, openModal } from '../../actions'
import SelectedGif from './SelectedGif'
import ModalInterface from './ModalInterface'

const GifModal = (props) => {
    const clearSelectedGif = () => {
        props.openModal()

        setTimeout(() => {
            props.deselectGif()
        }, 200)
        
    }

    return (
        <Modal
            className="modal"
            isOpen={props.isModalOpen}
            onRequestClose={clearSelectedGif}
            contentLabel="Selected Gif"
            closeTimeoutMS={200}
            ariaHideApp={false}
        >
            {props.selectedGif &&
                <div>
                    <SelectedGif />
                    <ModalInterface />
                </div>
            }
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        selectedGif: state.selectedGif
    }
}

export default connect(
    mapStateToProps,
    {
        deselectGif,
        openModal
    }
)(GifModal)