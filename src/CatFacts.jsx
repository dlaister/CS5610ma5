import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
// Task 1: Display a Cat Fact when the button is pressed
import {useEffect, useState} from 'react';

// insert your name here - Derek Laister

function CatFacts() {

    // you may need to add other code elsewhere!
    // Task 1: Display a Cat Fact when the button is pressed
    // const [catFact, setCatFact] = useState("Click the button for a cat fact!");
    const [catFact, setCatFact] = useState("");
    // Task 3: Display Loading Text While The API Request is in Flight
    const [loading, setLoading] = useState(true);

    function generateCatFact() {
        // Task 3: Display Loading Text While The API Request is in Flight
        setLoading(true);
        // clear previous catFact
        setCatFact("");

        // added delay to be sure "loading" working as intended
        setTimeout(() => {
            axios.get('https://catfact.ninja/fact')
                .then(response => {
                    // insert code here

                // Task 1: Display a Cat Fact when the button is pressed
                    setCatFact(response.data.fact);
                })
                .catch(error => {
                    console.error("Fetching error!", error);
                    setCatFact("Failed to load. Please try again later!");
                })
                // Task 3: Display Loading Text While The API Request is in Flight
                .finally(() => {
                    setLoading(false);
                });
        }, 500);
    }
    // Task 2: Display a Cat Fact on Page Load
    useEffect(() => {
        generateCatFact();
    }, []);


    return (
        <div className="App">
            <div className='catFactsText'>
                {/*{"Loading..."}*/}
                {loading ? "Loading..." : catFact}
                {/*The cat fact should be displayed here*/}
                {/*Task 1: Display a Cat Fact when the button is pressed*/}
                {catFact}
            </div>
            <div>
                <button onClick={generateCatFact} className="catFactBtn">
                    Click me for a cat fact!
                </button>
            </div>
            <div>
                <img src={CatLogo} className="catFactImg"/>
            </div>
        </div>
    )
}

export default CatFacts


// I think there is an issue with the useEffect where generateCatFact() executes before the state changes, so on a page refresh it shows a catFact twice. Since the assignment tasks have been satisfied, ill leave it be.