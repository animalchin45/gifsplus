import React from 'react'

import Header from './Header'
import Search from './Search'
import SearchResults from './SearchResults'
import Top from "./Top"

const App = () => {
    return (
        <section className="container">
            <div className="container--header">
                <Header />
                <Search />
            </div>
            <SearchResults />
            <Top />
        </section>
        
    )
}

export default App