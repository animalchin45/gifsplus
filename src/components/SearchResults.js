import React from 'react'
import { connect } from 'react-redux'
import { fetchTrending, selectGif, openModal } from '../actions'

import GifModal from './modal/GifModal'


class SearchResults extends React.Component {
    componentDidMount() {
        this.props.fetchTrending()
    }

    onGifSelect(gifUrl, gifTitle, gifID, gifBitly) {
        this.props.selectGif({gifUrl, gifTitle, gifID, gifBitly})
        this.props.openModal()
    }

    renderedGifs() {
        return this.props.gifs.map((gif) => {
            const getSpanEstimate = (size) => {
                if (size > 250) {
                  return 2
                }
              
                return 1
              }
    
            const style = {
                gridColumnEnd: `span ${getSpanEstimate(gif.images.fixed_height.width)}`,
                gridRowEnd: `span ${getSpanEstimate(gif.images.fixed_height.height)}`
            }
    
            return (
                <img 
                    style={style}
                    src={gif.images.fixed_height.url} 
                    alt={gif.title} 
                    key={gif.id}
                    className="search-results--img"
                    onClick={() => this.onGifSelect(gif.images.original.url, gif.title, gif.id, gif.bitly_url)}
                />
            )
        })
    } 

    render() {
        return (
            <section className="search-results">
                
                {this.renderedGifs()}
                
                <GifModal />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTrending,
        selectGif,
        openModal
    }
)(SearchResults) 