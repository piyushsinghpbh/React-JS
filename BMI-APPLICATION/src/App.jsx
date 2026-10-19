import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();

    if(weight == 0 || height ==  0){
      alert('Please enter a valid weight and height');
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi);

      if(bmi < 18.5){
        setMessage('You are underweight');
      } else if(bmi >= 18.5 && bmi < 24.9){
        setMessage('You are healthy');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };


  return (
    <div className="App"> 
      <div className="container">
        <h2> BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg):</label>
            <input type="text" placeholder="Enter weight" value={weight} onChange={(e) => setWeight(e.target.value) } />
          </div>
           <div>
            <label>Height (cms):</label>
            <input type="text" placeholder="Enter height" value={height} onChange={(e) => setHeight(e.target.value) } />
          </div>

          <div>
            <button className="btn" type="submit">Calculate BMI</button>
            <button className="btn" type="submit" onClick={reload}>Reload</button>
          </div>

          <div className="center">
            <h3> Your BMI is: { bmi }</h3>
            <h3> { message } </h3>
          </div>
        </form>
      </div> 
    </div>)
}

export default App
