import React from 'react';
import { render } from 'react-dom';
import json from '../data/teamplayer.json';
//console.log(json);

const TPtest = () => {
    
    return (
          <table>      
          {json.teams.map((team) => {
            <>
            return
              <tr key={team.id}><th>{team.number} {team.name}</th></tr>
              
            
            
              {team.players.map((player)=> {
              return <>
              <tr key={player.pid}>
                <td>{player.firstName}</td>
                <td>{player.lastName}</td>
              </tr>
              </>
        
        
            

            })}
              </> 

          })}
        
          </table>
      

        )
        }


export default TPtest;