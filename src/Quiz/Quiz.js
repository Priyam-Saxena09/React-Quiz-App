import React, { Component } from "react"
import Questions from "../Questions/Questions"
import Aux from "../Auxillary/Auxillary" 
import "./Quiz.css"

class Quiz extends Component{
    state={
        Allone:[{
            "ques":"What type of Language is Javascript?",
            "options":{
                "one":"Client-Side Language",
                "two":"Server-Side Language",
                "three":"Both of the Above",
                "four":"None of the Above",
                },
                "correct":"Both of the Above",
                "name":"option1"
        },{
            "ques":"Which of the following is used to make Front-End?",
            "options":{
                "one":"React.js",
                "two":"Angular.js",
                "three":"Vue.js",
                "four":"All of the Above",
                },
                "correct":"All of the Above",
                "name":"option2"
        },{
            "ques":"Which package is used to upload the Images and Files?",
            "options":{
                "one":"mongoose",
                "two":"multer",
                "three":"passport",
                "four":"sharp",
                },
                "correct":"multer",
                "name":"option3"
        },{
            "ques":"Which of the following method is used to insert the elemnt on the front side of an array?",
            "options":{
                "one":"shift()",
                "two":"push()",
                "three":"pop()",
                "four":"unshift()",
                },
                "correct":"unshift()",
                "name":"option4"
        },{
            "ques":"Which of the following DOM method is incorrect?",
            "options":{
                "one":"document.getElementByTitleName",
                "two":"document.getElementById",
                "three":"document.getElementByClassName",
                "four":"document.querySelector",
                },
                "correct":"document.getElementByTitleName",
                "name":"option5"
        }],
        yourop:[]
    }

    receiveval = (event) => {
         let ar = event.target.value.split("@");
        if (this.state.yourop === []) {
            let upd = []
            upd.push({
                "que": ar[1],
                "ans": ar[0]
            })
            this.setState({ yourop: upd })
        }
        else
        {
             let findque = this.state.yourop.find(que => {
                 return que["que"] === ar[1]
             })
             let findind = this.state.yourop.findIndex(que => {
                 return que["que"] === ar[1]
             })
             if (!findque) {
                 let upd = [...this.state.yourop]
                 upd.push({
                     "que": ar[1],
                     "ans": ar[0]
                 })
                 this.setState({ yourop: upd })
             }
             else {
                 let upd = [...this.state.yourop]
                 upd[findind].ans = ar[0];
                 this.setState({ yourop: upd })
             }
        }
    }

    finalvals = () => {
        let sco=0;
        for(let i=0;i<this.state.yourop.length;i++)
        {
            let findind = this.state.Allone.findIndex(que => {
                return que.ques===this.state.yourop[i].que
            })
            if(this.state.Allone[findind]["correct"]===this.state.yourop[i].ans)
            {
                sco++;
            }            
        }
        let stre = `right=${sco}&wrong=${5-sco}`
        this.props.history.replace({
            pathname:"/res",
            search:"?"+stre
        })
    }
    render(){
        let allthe = this.state.Allone.map(all => {
            return <Questions key={all.name} ques={all.ques} options={all.options} val={all.name} func={(e) => this.receiveval(e)}/>
        })     
        return(
            <Aux>
                <h1 className="display-4">Welcome to the Javascript Quiz.</h1>
                    <h1 className="display-4">Answer the following Questions by selecting an option of each question.</h1>
                    <h1 className="mb-5">All the Best</h1>
            <div className="d-flex flex-column bd-highlight mb-3" >
                {allthe}
            </div >
            <button type="button" className="btn btn-outline-primary mb-5" onClick={this.finalvals}>Submit</button>            
            </Aux>
            
        )
    }
}

export default Quiz