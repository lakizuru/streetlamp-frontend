import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <ul style={{width: '100%', backgroundColor: 'white'}}>
          <li style={{backgroundColor: 'black', borderRadius: '10%'}}><h3 style={{ color: 'white'}}>Home</h3></li>
          <li><h3>New Admin</h3></li>
          <li style={{position: 'absolute', left: '75%'}}><h3>Time</h3></li>
          <li style={{position: 'absolute', left: '25%'}}><input placeholder="Search Light or Light Group" className="Searchbox"></input></li>
          <li style={{float:'right', paddingRight: '3%'}}><h3>Log Out</h3></li>
        </ul>
      </div>

      <div className="Container1">
        <div className="Card" style={{backgroundColor: 'blue' }}>
          <h2 style={{color: 'white'}}>Total</h2>
          <h1 style={{color: 'white'}}>Card 1</h1>
        </div>
        <div className="Card" style={{backgroundColor: 'orange'}}>
        <h2 style={{color: 'white'}}>Total</h2>
          <h1 style={{color: 'white'}}>Card 1</h1>
        </div>
        <div className="Card" style={{backgroundColor: 'green'}}>
          <h2 style={{color: 'white'}}>Active</h2>
          <h1 style={{color: 'white'}}>Card 1</h1>  
        </div>
        <div className="Card" style={{backgroundColor: 'red'}}>
          <h2 style={{color: 'white'}}>Defective</h2>
          <h1 style={{color: 'white'}}>Card 1</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App;
