import {Button, Card} from "react-bootstrap";

function Answer({answer, nextFlashCard, setIsQuestion, dispatch}) {

    function handleClick() {
        nextFlashCard();
        setIsQuestion(true);
    }

    return (
        <Card className="text-center">
            <Card.Header>Question</Card.Header>
            <Card.Body>
                <Card.Title>{answer}</Card.Title>
                <Button className='m-1' variant="success"
                        onClick={() => {
                            handleClick();
                            dispatch({type: 'INCREMENT_GOOD'});
                        }}
                >I know it!
                </Button>
                <Button className='m-1' variant="warning" onClick={() => {
                    handleClick();
                    dispatch({type: 'INCREMENT_MID'});
                }}
                >
                    Not sure
                </Button>
                <Button className='m-1' variant="danger" onClick={() => {
                    handleClick();
                    dispatch({type: 'INCREMENT_BAD'});
                }}
                >
                    I don't know
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Answer;