import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "click "
    };
  }
  handelColor =(colorP)=>{
    this.setState({
      color:colorP
    })

  }
 componentDidMount(){
   this.timer=setInterval(()=>{
   console.log(`componentDidMount`)
   },1000)
 }
 componentDidUpdate(){
  console.log("componentDidUpdat")}
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

render(){
return(
 <div>
   <h1>my favorite color is {this.state.color}</h1>
  <button onClick= {()=>{
    this.handelColor("Green")
  }}>Green</button>
  <button onClick={()=>{
    this.handelColor("Red")
  }}>Red</button>
  <button onClick={()=>{
    this.handelColor("Balck")
  }}>Black</button>
 </div>
)
}
}

export default About;
