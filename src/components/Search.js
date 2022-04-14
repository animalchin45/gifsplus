import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchSearch } from '../actions'

const Search = (props) => {
    const renderError = ({ error, touched }) => {
        if (error && touched) {
            return `${error}`
        }
    }
    const renderInput = ({ input, meta }) => {
        return (
            <div>
                <input 
                    className="search--input" 
                    {...input} 
                    autoComplete='off' 
                />
                {renderError(meta)}
            </div>  
        )
    }

    const onFormSubmit = (formValues) => {
        props.fetchSearch(formValues)
    }

    return (
        <div className="search">
            <form className="search--form" onSubmit={props.handleSubmit(onFormSubmit)}>
                <Field
                    name="search"    
                    component={renderInput}
                />
                <button className="btn btn--search">Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        term: state.term
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.search) {
        errors.search = 'What gifs are you looking for?'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'gifSearch',
    validate
})(Search)

export default connect(
    mapStateToProps,
    {
        fetchSearch
    }
)(formWrapped)