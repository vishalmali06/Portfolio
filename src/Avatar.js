import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist'
import 'tachyons';

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to Avatar World"
    }
  }
  namechange() {
    this.setState({
      name: "Subscribe to VishalTechnical Channel"
    })
  }
  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "Vishal",
        work: "Web Devwloper"
      },
      {
        id: 2,
        name: "jess",
        work: "Web Devwloper"
      },
      {
        id: 3,
        name: "jon",
        work: "Web Devwloper"
      },
      {
        id: 4,
        name: "jodi",
        work: "Web Devwloper"
      }
    ]

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
      return <Avatarlist
        key={i}
        id={avatarlistarray[i].name}
        name={avatarlistarray[i].name}
        work={avatarlistarray[i].work}
      />
    })
    return (
      <div className="mainpage tc">
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
        <br></br>
        <button onClick={() => this.namechange()}> Subscribe </button>
      </div>
    );
  }
}

export default Avatar;