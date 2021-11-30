import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <form className="data">
        <p className="para">Username</p>
        <input type='text' className="data1"  placeholder="Enter  Username"/>
       <p className="para">Mail ID</p>
        <input type='text' className="data1" placeholder="Enter mail"/>
       <p className="para">Password</p>
        <input type='text'className="data1" placeholder="Enter password"/>

    <label>
    <input type="checkbox" className="box"  />
     Remeber me
     
     <input type="checkbox" className="box1" />
     I have read and agree to the terms
  </label>
   <p>forgot password</p>
   

        
        <button className="submit" type="submit">submit </button>
        <p>Not a member?Sign Up</p>

        </form>
    </div>
  );
}

export default App;
