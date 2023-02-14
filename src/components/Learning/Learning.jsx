import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useReducer, useState} from "react";
import Flashcard from "../Flashcard/Flashcard";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_GOOD':
            return {...state, good: state.good + 1};
        case 'INCREMENT_MID':
            return {...state, mid: state.mid + 1};
        case 'INCREMENT_BAD':
            return {...state, bad: state.bad + 1};
        default:
            return state;
    }
}

function Learning() {
    const [flashcards, setFlashcards] = useState([]);
    const [flashcard, setFlashcard] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [score, dispatch] = useReducer(reducer, {good: 0, bad: 0, mid: 0}, (state) => state);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController()
        getFlashcardsApi(id, controller.signal)
            .then((data) => {
                setFlashcards(data);
                setFlashcard(data[Math.floor(Math.random() * data.length)]);
                setIsLoading(false);
            })
            .catch(console.error)

        return () => {
            controller.abort();
        }
    }, [])

    useEffect(()=> {
        if(flashcards.length === 0 && !isLoading){
            navigate('/end', {
                state: score
            })
        }
    },[score])
    async function getFlashcardsApi(id, signal) {
        const response = await fetch(`/flashcards?decks=${id}`, {signal});
        return await response.json();
    }

    function nextFlashcard() {
        if (flashcards.length > 0 && !isLoading) {
            setFlashcard(drawFlashcard());
        }
    }

    function drawFlashcard() {
        const flashcard = flashcards[Math.floor(Math.random() * flashcards.length)];
        setFlashcards(flashcards.filter((fc) => fc !== flashcard))
        return flashcard;
    }

    return (
        <div>
            {isLoading ? (
                <h3>
                    loading
                </h3>
            ) : (
                <Flashcard card={flashcard} nextFlashCard={nextFlashcard} dispatch={dispatch}/>
            )}
        </div>
    );
}

export default Learning;