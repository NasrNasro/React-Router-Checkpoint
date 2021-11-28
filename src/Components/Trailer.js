import {Button} from "react-bootstrap";
import React from 'react'

function Trailer(props) {
    const movie=props.movies.find(el => el.title===props.match.params.title)
    return (
        <div className='Trail' >
            <h2>{movie.desc}</h2>
            <iframe
                title={movie.name}
                className="video p240"
                width="520"
                height="415"
                src={movie.trailer}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
            ></iframe>
            <Button variant="secondary" size="lg" onClick={() => props.history.push('/')}> Home </Button>
        </div>
    )
}

export default Trailer
