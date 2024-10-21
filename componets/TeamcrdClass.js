import React from "react";
// https://api.github.com/users/abiatgit
class TeamcardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    userInfo:{
        name:"abi",
        location:"Belfast",
        avatar_url:"dummy"
    }
    };
    console.log("child constructor")
  }
  async componentDidMount(){
    const data =await fetch("https://api.github.com/users/abiatgit")
    const json=await data.json()
    console.log(json)
    this.setState({
        userInfo:{
            name:json.name,
            location:json.login,
            avatar_url:json.avatar_url

        }
    })
  }

  render() {
    console.log("child render")
    const { name, location,avatar_url} = this.state.userInfo
    return (
      <div>
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <h1>{location}</h1>
      </div>
    );
  }
}
export default TeamcardClass;
