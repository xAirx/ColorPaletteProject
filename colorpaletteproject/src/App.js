import Palette from './Palette';
import React,{Component} from 'react'
import seedColors from './seedColors';

class  App extends Component {
  render() {

  /* const seedcolors = [] */


  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
 }
}

export default App;
