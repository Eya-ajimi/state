import React from "react"
import './App.css';
import Img from "./img/justin.jpg"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      isvisible:false,
      timer: 0 ,
      interval:0

    }
  }
  toggle=()=>{ 
    this.setState( {isvisible: !this.state.isvisible} )
  }
   componentDidMount(){
     this.setState ({ 
       interval:setInterval(()=>(this.setState({timer: this.state.timer+1})),1000)
     })
   }
  
  render(){
    console.log(this.state.isvisible)
    return( 
    <div className ="card">
   
  <p> <button onClick ={this.toggle}> {this.state.isvisible ?'hide not interesed':"show"}  </button> </p>

  {this.state.isvisible && 
  <>
  <img className ="img" src= {Img} alt="Justin" />
  <h1>Justin Timberlake  </h1>
  <p className="title"> singer, songwriter, actor, and record producer</p>
  <p>American </p>
  
  <p><button onClick={this.toggle} >contact </button></p>
  </>
  }
   <span>{this.state.timer}</span>
  </div>
  );}

  }
  
 
  


export default App;
