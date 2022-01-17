import React, { useState,useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {ListGroupItem,Button,ListGroup,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../App.css'

function BestProduct(props){
  
   const data=props.data
   const [incre, setincre] = useState(0)

   const handleIncre=()=>{
    setincre({...incre,incre:incre+1})
   }

    return(
        //console.log("Props In BP",data.imageLinks.thumbnail),
        //console.log("Props In BP",props.data.averageRating),
        <Card style={{width:'15rem',background:'#072227',color:'#4FBDBA'}}>
            <Card.Img variant="top" src={data.imageLinks.thumbnail} className="Img" />
            <Card.Body >
                <Card.Title>{data.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{background:'#072227',color:'#4FBDBA'}}><b style={{display:'inline-flex'}}>Authors :</b>{data.authors.map((author,i)=>{
                    return <p key={i} style={{display:'inline'}} > {(i!=0)?",":""} {author}</p>
                })}</ListGroupItem>
                <ListGroupItem style={{background:'#072227',color:'#4FBDBA'}} >{(data.averageRating !==undefined)?<p> <b>Rating :</b>  {data.averageRating}/5</p> : <p> <b>Rating :</b>  No rating</p>} </ListGroupItem>
                <ListGroupItem style={{background:'#072227',color:'#4FBDBA'}} ><b>Price : </b> 190/-</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button onClick={()=>{handleIncre()}} style={{background:'#072227',border:'1px solid #4FBDBA'}} > <Link to="/addtocart" className="Link"> <b>Add To Cart </b> </Link> </Button>
            
            </Card.Body>
        </Card>    
    );
}

export default BestProduct