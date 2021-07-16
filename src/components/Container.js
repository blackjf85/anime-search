import React from 'react'
import { connect } from 'react-redux'
import AnimeCard from './AnimeCard'
import Characters from './Characters'

function Container({results, characters}) {

    return (
        <div>
            { !characters ? results.map(item => <AnimeCard key={item.mal_id} anime={item}/>) : characters.map(item => <Characters key={item.mal_id} character={item} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        characters: state.characters
    }
}

export default connect(mapStateToProps)(Container);