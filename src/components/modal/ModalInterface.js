import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const ModalInterface = (props) => {
    const inputRef = useRef(null);

    const copyToClipboard = (e) => {
        inputRef.current.select()
        document.execCommand('copy')
        e.target.focus()
    }

    const interfaceTypes = [
        {
            icon: '',
            text: 'Copy',
            link: copyToClipboard
        }
    ]

    const renderedInterface = interfaceTypes.map((type) => {
        return (
            <button 
                className="btn btn--modal"
                key={uuidv4()}
                onClick={type.link}
            >
                {type.text}
            </button>
        )
    })

    return (
        <div className="selected-gif__interface">
            <input 
                className="search--input"
                ref={inputRef}
                defaultValue={props.selectedGif.gifBitly}
            />
            <div>
                {renderedInterface}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGif: state.selectedGif
    }
}

export default connect(
    mapStateToProps
)(ModalInterface) 