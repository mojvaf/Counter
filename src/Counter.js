import React from 'react'
import Number from './Number'

export default class Counter extends React.Component {

     constructor(props){
           super(props)
           //we are in the counter
           this.state = { counter: props.start,
                          starting: props.start,
                          show: false,
                          textValue:   "gc"
        
        }
     }
   
      incrementCounter = () => {
          console.log("INc")
          this.setState(prevState => {
              return { counter: prevState.counter + 1 }
          })
          
              
                 
      }
     
    decrementCounter = () => {
       
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })



    }
 
      


    render() {
        return (
            <div className="counter">
            <h2>My React Counter</h2>
            <h3>{this.state.counter}</h3>
            <Number anotherProps ="do you see" 
              counter/>
            <h4>{this.state.counter}</h4>
                <button onClick={this.decrementCounter} >DEC -1</button>
                <button onClick={this.incrementCounter}> INC + 1</button>
            </div>
        )
    }
}
