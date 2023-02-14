import Deck from "./Deck";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";


async function getDeckApi(signal) {
    const response = await fetch('decks/', {signal});
    return await response.json();
}

function Decks() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        getDeckApi(controller.signal)
            .then((data) => {
                setDecks(data)
            }).catch(console.error);

        return () => {
            controller.abort()
        };
    }, [])

    return (
        <Container className="mt-4">
            <Row xs={1} md={2} className="g-4">
                {decks.map((deck) => (
                    <Deck key={deck.id} deck={deck}/>
                ))}
            </Row>
        </Container>
    );
}

export default Decks;