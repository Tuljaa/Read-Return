import React from "react";
import {Card, Container} from 'react-bootstrap';
import '../App.css'

function Categories(){
    const CardStyle1= {
        padding:'10%',
        marginRight:'5%'   
    }
    const CardStyle2 ={ padding:'10%',marginLeft:'5%'  }
    return(
        <Container className="Mycard">
        <Card className="bg-dark text-white" style={CardStyle1} >
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>EDUCATION</Card.Title>
            <Card.Text>
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card> 

        <Card className="bg-dark text-white" style={CardStyle2}>
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>NOVELS</Card.Title>
            <Card.Text>
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </Container>
    );
}

export default Categories