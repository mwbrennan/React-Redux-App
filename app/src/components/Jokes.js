import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getJoke } from '../actions/indexActions';

const Jokes = (props) => {
    const { jokeSetup, jokePunchLine, isFetching, error } = props;
console.log("test");
console.log(props)
    const handleClick = (e) => {
        e.preventDefault();
        props.getJoke();
    }

    useEffect(() => {
        props.getJoke();
    }, []);

    if (error) {
        return <h3>Something appears to be wrong: {error}</h3>;
    }

    if (isFetching) {
        return <h3>Trying to find a joke...</h3>;
    }

    return(
        <div>
            <button className='button' onClick={handleClick} >Tell me a Joke</button>
            <div className='jokeBox'>
                <h2>{jokeSetup}</h2>
                <h2>{jokePunchLine}</h2>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        jokeSetup: state.jokeSetup,
        jokePunchLine: state.jokePunchLine,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getJoke })(Jokes)