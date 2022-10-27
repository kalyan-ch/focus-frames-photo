import './App.css';
import logo from '../images/logo.png';

const App = () => {
  return (
    <div className="App ui massive message">
      <img class="ui small image" alt='FocusFrames logo' src={logo} />
      <h1 className='ui huge inverted header'>FocusFrames Photo</h1>
      <p className='ui inverted'>Portraits, Landscapes, Prints</p>
    </div>
  );
}

export default App;
