import {Card, CloseButton,Button} from "react-bootstrap";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Moviecard({el,i,movies,setMovies}) {
    const ratingChanged = (newRating) => {
        setMovies([...movies.slice(0,i), {...el, rate:newRating}, ...movies.slice(i+1)])
        };
    const removeMovie = (id) => {
        setMovies(movies.filter(el => el.id !== id))
        };
    
    return(
        <Card style={{ width: '18rem', margin: "0 15px 30px"}} >
            <CloseButton onClick={() => removeMovie(el.id)} />
            <Card.Img variant="top" src={el.img} style={{height:"410px"}}/>
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                {el.desc}
                </Card.Text>
                <div className="Stars">
                <ReactStars count={5} size={30} value={el.rate} isHalf={true} activeColor="#ffd700" onChange={ratingChanged} />
                </div>
                <Link to={`/Trailer/${el.title}`}> <Button variant="info">View Trailer</Button> </Link>
            </Card.Body>
        </Card>
        )
}
export default Moviecard