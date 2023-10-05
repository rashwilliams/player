import React from "react"
import {Card} from "react-bootstrap"
import Players from "./Players.js"
import { Fragment } from "react"
import PlayersList from "./Component/PlayersList/PlayersList"
import { Players } from "../Players/Players.js"

const Players = (props) => {

  return (
    <Fragment>
      {Players.map((Player) => {
        return <PlayersList playerName={Player.name} nationality={player.nationality} age={player.age} team={player.team} position={player.position} jerseyNumber={player.jerseyNumber}/>
      })}
    </Fragment>
  );
  
}


export default Players;
