import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Game from '../pages/game/game';

import './styles.css';

export default function StartModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [gameStarted, setGameStarted] = useState(false);

    const [category, setCategory] = useState("None");

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory); setGameStarted(true);
    };

    return (
        <div>
            <Modal show={show} size="lg">
                <Modal.Header>
                    <Modal.Title className="text-center title">Word Scramble Game</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <Row>
                        <h5># Descriptions</h5>
                        Woohoo, you are reading this text in a modal!

                        Choose a category to start
                    </Row>
                    <Row>
                        <h5># Rules:</h5>
                        Woohoo, you are reading this text in a modal!

                        Choose a category to start
                    </Row>
                    <Row>
                        <h5># Points:</h5>
                        Woohoo, you are reading this text in a modal!

                        Choose a category to start
                    </Row>
                    <Row>
                        Category:<br/>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={() => { handleCategoryChange("words1"); handleClose(); }}>
                                Categoria words1
                            </Button>
                            <Button variant="secondary" onClick={() => { handleCategoryChange("words2"); handleClose(); }}>
                                Categoria words2
                            </Button>

                            <Button variant="success" onClick={() => { handleClose() }}>
                                Start
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            
            {gameStarted && <Game category={category}/>}
        </div>
    );
}
