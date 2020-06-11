import React,{Component} from 'react';
// we are importing react library class function from 'react' library
import './App.css';
import Tasks from './taskanalysis';
//There are two ways to initialize  the components. class-based component and function-based component.
class App extends Component {
  constructor(props)
    {
      super(props)
      this.state={

        TASKS:[
          {
            id:0,
            name:"Making Break Fast",
            description:"I have to make breakFast early in the morning for my family at 7:00 A.m",
            assigned:"Mother"


          }
          ,
          {

           id:1,
           name:'Going to the Office',
           description:"I have to go the office at 9:00 AM to earn bread and Butter for my children",
           assigned:"Father"
          }
          ,
          {

          id:2,
          name:"Going To School",
          description:"We have to go to School daily at 8:00 Am in order to educate ourselves ",
          assigned:"Children"
          }


        ]
      }
    

    }
  

  render()
  {
  return (
    <div className="App">

      <Tasks tasks={this.state.TASKS} />
    {/*if we need to comment any thing here  then use this*/}
    </div>
  );
  }
}


export default App;

//Service -worker App is used for PWA(Progressive Web App)
//Its an object.
