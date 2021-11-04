
import './App.css';
import Title from './Title';
import Input from './Input';
import ListOfToDos from './ListOfToDos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title />
      <Input /> <br/>
      <ListOfToDos />
        
        
      </header>
    </div>
  );
}

export default App;
