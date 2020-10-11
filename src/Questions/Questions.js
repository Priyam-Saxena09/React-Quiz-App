import React from "react"
import "./Questions.css"

const ques = (props) => {
    return (
        <div class="card mb-5">
            <div class="card-header">
               <h2>{props.ques}</h2>
    </div>
            <ul class="list-group list-group-flush">
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name={props.val} id="exampleRadios1" value={props.options.one+ "@" +props.ques} onClick={props.func}/>
                    <label class="form-check-label" for="exampleRadios1">
                        <b>{props.options.one}</b>
  </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name={props.val} id="exampleRadios2" value={props.options.two+ "@" +props.ques} onClick={props.func}/>
                    <label class="form-check-label" for="exampleRadios2">
                        <b>{props.options.two}</b>
  </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name={props.val} id="exampleRadios3" value={props.options.three+ "@" +props.ques} onClick={props.func}/>
                    <label class="form-check-label" for="exampleRadios3">
                    <b>{props.options.three}</b>

  </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name={props.val} id="exampleRadios3" value={props.options.four+ "@" +props.ques} onClick={props.func}/>
                    <label class="form-check-label" for="exampleRadios3">
                    <b>{props.options.four}</b>

  </label>
                </div>
            </ul>
        </div>
    )
}

export default ques