import {Link} from "react-router-dom";
import {Badge, Card, Col} from "react-bootstrap";
import {faker} from "@faker-js/faker";

function CardFlash({card: {question, answer, tags, id}}) {

    return (
        <Col>
            <Link to={`/decks/${id}`}><Card>
                <Card.Img variant="top" src={faker.image.cats(640, 480, true)}/>
                <Card.Body>
                    <Card.Title>{question}</Card.Title>
                    <Card.Text>
                        {answer}
                    </Card.Text>
                    <Card.Text>
                        {tags.map((tag) => (<Badge pill bg="primary" key={tag} className="me-1">
                            {tag}
                        </Badge>))}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </Col>
    )

}

export default CardFlash;