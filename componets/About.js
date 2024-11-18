import { Component,Consumer } from "react";
import userData from "../utils/UserContext";


class About extends Component {
   constructor(props) {
    super(props);
   }

   render() {
    return (
        <div>
            <h1 className="text-bold">
                Hello about page 
            </h1>
            <userData.Consumer>
                {(data)=><p>{data.userName}</p>}
            </userData.Consumer>
        
        </div>
    );
   }
}

export default About;