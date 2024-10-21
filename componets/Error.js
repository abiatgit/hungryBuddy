import { useRouteError } from "react-router-dom"



const Error =()=>{
    const error=useRouteError()
    console.log(error)
    return (
        <div>
             <h1>opps something went wrong</h1>
             <p>{error.status}</p>
        </div>
    )
}
export default Error