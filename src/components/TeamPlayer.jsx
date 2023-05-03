import React from 'react';
import { render } from 'react-dom';
import json from '../data/teamplayer.json';
//console.log(json);

const TeamPlayer = () => {
    
    return (
        
        <div>        
          {json.teams.map((team) => {
            return <div> 
              <p>{team.number} {team.name}</p>
              {team.players.map((player)=> {
              return <p>{player.firstName} {player.lastName}</p>

            })}
            </div>

          })}
        </div>

        )
        }


export default TeamPlayer;


/*
return (
 <>
 {arr.map((item, index) => {
 <span key={index}>{a}</span>
 })}
 </>
 )
}





import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const data = [
  {
    name: "Jude",
    position: "Developer",
    experiences: [
      {
        id: 0,
        job: "React UI Developer",
        period: "2017-2018",
        description:
          "I love Creating beautiful Smart UI with React js and styled components"
      },
      {
        id: 1,
        job: "React/ Redux UI Developer",
        period: "2017-2018",
        description:
          "I love Creating beautiful Smart UI with React js and styled components"
      }
    ]
  }
];

class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    console.log(data);
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    const resume = data.map(dataIn => {
      return (
        <div key={dataIn.name}>
          {dataIn.name}
          <ul>
            {dataIn.experiences.map(experience => (
              <li key={experience.id}>{experience.job}</li>
            ))}
          </ul>
          {dataIn.position}
        </div>
      );
    });

    return <div>{<React.Fragment>{resume}</React.Fragment>}</div>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



*/

