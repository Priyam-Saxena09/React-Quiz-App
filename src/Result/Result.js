import React, { Component } from "react"
import { NavLink } from "react-router-dom"
class Result extends Component{
    
    render(){
        const query = new URLSearchParams(this.props.location.search)
        console.log(query.entries)
        let right = query.get("right")
        let wrong = query.get("wrong")
        return(
    <div class="card mt-5">
        <h1 className="display-3">Here is Your Result</h1>
            <div class="card-body">
           <h3 class="card-title">Correct Answers:{right}</h3>
           <h3 class="card-title">Wrong Answers:{wrong}</h3>
                <p class="card-text">Want to Give Test Again?Click below.</p>
                <NavLink to="/" type="button" className="btn btn-outline-primary mb-2">Test</NavLink>
            </div>
</div>
        )
    }
}

export default Result