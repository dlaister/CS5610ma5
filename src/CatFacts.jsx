import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';

// insert your name here

function CatFacts() {

    // you may need to add other code elsewhere!

    function generateCatFact() {
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                // insert code here
            })
    }



  return (
    <div className="App">
        <div className='catFactsText'>
            {"Loading..." }
            {/* The cat fact should be displayed here*/} 
        </div>
        <div>
            <button onClick={generateCatFact} className="catFactBtn">
                Click me for a cat fact!
            </button>
        </div>
        <div>
            <img src={CatLogo} className="catFactImg" />
        </div>
    </div>
  )
}

export default CatFacts
