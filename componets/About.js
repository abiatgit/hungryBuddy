import React from "react";

import TeamcardClass from "./TeamcrdClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("Parent componentDidMount")
  }
  render() {
    console.log("parent render")
    return (

      <div className="about_card">

        <TeamcardClass />
       
      </div>
    );
  }
}

export default About;
