function Question({question, onClick, nextFlashCard}) {
    return (
        <div onClick={onClick}>{question}</div>
    );
}

export default Question;