import React, {Component} from 'react'
import axios from 'axios'




class Dashboard extends Component {
  constructor(){
     super();

     this.state = {
       input: ''    
     };

     handleInput(val) 
     {this.setState({input: val})};


    componentDidMount() 
    {axios.get('api/all').then(res => {
        console.log(res.data);
        this.setState({
          messages: res.data
        });
      });
    }


     render() 

 return (
  <div className='App'>
  </div>
       )

    }
}
export default Dashboard;