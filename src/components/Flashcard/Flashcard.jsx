import Question from "./Question";
import {useState} from "react";
import Answer from "./Answer";

function Flashcard({card, nextFlashCard, dispatch}) {
    const [isQuestion, setIsQuestion] = useState(true);
    return (
        <div>
            {isQuestion ? (
                <Question question={card.question} onClick={() => setIsQuestion(false)}/>
            ) : (
                <Answer answer={card.answer} nextFlashCard={nextFlashCard} setIsQuestion={setIsQuestion} dispatch={dispatch}/>
            )}
        </div>

    );
}

export default Flashcard;