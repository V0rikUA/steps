import { use, useState } from 'react';

const messages = [
"Learn React ⚛️",
"Apply for jobs 💼",
"Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const onNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }else{
      setStep(1);
    }
  }

  const onPreviousStep = () => {
    if(step > 1){
      setStep(step - 1);
    }else{
      setStep(3);
    }
  }

  return (
    <div className="steps">
      <div className='numbers'>
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className='message'>Step {step} : {messages[step - 1]}</p>

      <div className='buttons'>
        <button onClick={onPreviousStep} style={{backgroundColor:"#7950f2", color:"#fff"}}>Previous</button>
        <button onClick={onNextStep} style={{backgroundColor:"#7950f2", color:"#fff"}}>Next</button>
      </div>
    </div>
   );
}

export default App;
