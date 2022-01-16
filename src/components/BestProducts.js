import React from "react";
import {Card} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
 import {ListGroup} from 'react-bootstrap';
 import {ListGroupItem,Button} from 'react-bootstrap';
 import {Link} from 'react-router-dom'
 import '../App.css'

function BestProduct(props){
  
   // const thumbNail =props.data.imageLinks.thumbnail
   const data=props.data

    return(
        //console.log("Props In BP",props.data.imageLinks.thumbnail),
        //console.log("Props In BP",props.data.averageRating),
        <Card style={{width:'22rem'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b style={{display:'inline-flex'}}>Authors :</b>{data.authors.map((author,i)=>{
                    return <p key={i} style={{display:'inline'}} > {(i!=0)?",":""} {author}</p>
                })}</ListGroupItem>
                <ListGroupItem>{(data.averageRating !==undefined)?<p> <b>Rating :</b>  {data.averageRating}/5</p> : <p> <b>Rating :</b>  No rating</p>} </ListGroupItem>
                <ListGroupItem><b>Price : </b> 190/-</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="outline-info"> <Link to="/addtocart" className="Link"> <b>Add To Cart </b> </Link> </Button>
            
            </Card.Body>
        </Card>    
    );
}

export default BestProduct