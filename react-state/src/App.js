import React, { Component } from "react";
import "./App.css";
import Student from "./Student";
import students from "./Students"

class App extends Component{
  
  render() {
    const students = [
      "Salha",
      "Ahmed",
      "Norah",
      "Haneen",
      "Nuwayyir",
      "maha",
      "amany",
      "Asmaa",
      "Salman",
      "saeed",
      "Danyah",
      "Omar",
      "Jawaher",
      "Mashael",
      "Nader",
      "Samah",
      "Sumayah",
      "Huda",
      "omar",
      "Dhaffaf",
      "Abdulrhman",
      "Taha",
      "Nashaat",
      "Wijdan",
      "Lamar"
    ];
  
    return(
      <div>
         <h1>All Students</h1>
         <ul>
         {students.map( (student,index) => (<Student name={student} key={index}/>) )}
         </ul>
      </div>
    )
  }
}


export default App;