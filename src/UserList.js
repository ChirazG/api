import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


    
const UserList = ({el}) => {
    

        
       
  
    return (
        <div> 

      
<Card border="warning" style={{ width: '18rem' }}>
             
             <Card.Body>
               <Card.Title>{el.name} ({el.username})</Card.Title>
               <Card.Text>
                 Address: 
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>{el.email}</ListGroupItem>
               <ListGroupItem>{el.phone}</ListGroupItem>
               <ListGroupItem>company</ListGroupItem>
               
             </ListGroup>
             <Card.Body>
               <Card.Link >{el.website}</Card.Link>
             </Card.Body>
           </Card>
         
        </div>
    )
}

export default UserList

/*            {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
         
        {data.map(user=> (
             <Card border="warning" style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
             <Card.Body>
               <Card.Title>{user.name} ({user.username})</Card.Title>
               <Card.Text>
                 Address: {user.address}
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>{user.email}</ListGroupItem>
               <ListGroupItem>{user.phone}</ListGroupItem>
               <ListGroupItem>{user.company}</ListGroupItem>
               
             </ListGroup>
             <Card.Body>
               <Card.Link >{user.website}</Card.Link>
             </Card.Body>
           </Card>
          
        ))}
*/
