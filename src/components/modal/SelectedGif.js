import React from 'react'
import { connect } from 'react-redux'
import { deselectGif, openModal } from '../../actions'

const SelectedGif = (props) => {
    const clearSelectedGif = () => {
        props.openModal()

        setTimeout(() => {
            props.deselectGif()
        }, 200)
        
    }

    return (
        <div className="selected-gif">
            <img 
                src={props.selectedGif.gifUrl} 
                alt={props.selectedGif.gifTitle}
                id={props.selectedGif.gifID}
                onClick={() => clearSelectedGif()}
            />
            <p>{props.selectedGif.gifTitle}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGif: state.selectedGif
    }
}

export default connect(
    mapStateToProps,
    {
        deselectGif,
        openModal
    }
)(SelectedGif)