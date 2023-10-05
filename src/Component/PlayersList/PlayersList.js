
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';


const PlayersList = (props) => {
  return ( 
    <Fragment>
      <Card style={{ width: "100%" }} className="mb-3 mt-2" key={PlayersList}>
            <Card.Body>
              <Card.Title>{props.playerName}</Card.Title>
              <Card.Text>{props.position}</Card.Text>
              <Card.Text>{props.age}</Card.Text>
              <Card.Text>{props.nationality}</Card.Text>
              <Card.Text>{props.jerseynumber}</Card.Text>
            </Card.Body>
          </Card>
    </Fragment>
  );
};

export default PlayersList;





















// import React from "react"
// import Players from "./Players.js"
// import Player from "./Player.js"



// const PlayersList =()=> {

//     return (
//         <Fragment>
//       <Player/>
//       <Players/>
   
//     </Fragment>
//     )
// }


// export default PlayersList;