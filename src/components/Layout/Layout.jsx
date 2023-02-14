import MainNavbar from "../MainNavbar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import '../../styles/main.scss';

function Layout(props) {
    return (
        <>
            <MainNavbar/>
            <Container>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )
        ;
}

export default Layout;