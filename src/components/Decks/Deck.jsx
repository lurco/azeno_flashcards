import {Badge, Card, Col, Row} from "react-bootstrap";
import {faker} from '@faker-js/faker'
import {Link} from "react-router-dom";

function Deck({deck: {id, tags, name, description} = {}}) {
    return (<Col>
            <Link to={`/decks/${id}`}><Card>
                <Card.Img variant="top" src={faker.image.cats(640,480,true)}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {tags.map((tag) => (<Badge pill bg="primary" key={tag} className="me-1">
                            {tag}
                        </Badge>))}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Link>
        </Col>);
}

export default Deck;