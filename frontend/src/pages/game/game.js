import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { words1, words2 } from '../../components/words';

import './game.css';

export default function Game(props) {
    const { category } = props;

    const [timeLeft, setTimeLeft] = useState(30);
    const [words, setWords] = useState([]);

    const [displayWord, setDisplayWord] = useState("Press Refresh Word to start the game or wait 30 seconds");
    const [correctWord, setCorrectWord] = useState("Press Refresh Word to start the game or wait 30 seconds");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if(category === "words1"){
            setWords(words1);
        }
        else{
            setWords(words2);
        }

        const timerId = setInterval(countdown, 1000);

        function countdown() {
            if(timeLeft === 0){
                clearInterval(timerId);
                setDisplayWord(shuffleWord());
                setTimeLeft(30);
            }
            else setTimeLeft(timeLeft - 1);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [timeLeft, category]);

    function shuffleWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCorrectWord(words[randomIndex]);

        const wordArray = words[randomIndex].split('');

        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        const shuffledWord = wordArray.join('');

        return shuffledWord;
    }

    function handleRefreshClick() {
        setTimeLeft(30);
        setDisplayWord(shuffleWord());
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmitClick() {
        if(inputValue === correctWord){
            console.log('Correct answer!');
            setDisplayWord(shuffleWord());
            setInputValue("");
            setTimeLeft(30);
        }
        else{
            console.log('Incorrect answer.');
        }
    }

    return (
        <Container fluid className="container">
            <Row>
                <Col className="text-center">
                    <p className="title">Word Scramble Game</p>
                    <p>{category}</p>
                    <hr />
                    {displayWord}<br />
                    <hr />
                    <input type="text" id="answer" value={inputValue} onChange={handleInputChange} />
                </Col>
            </Row>
            <Row>
                <p>Time left: {timeLeft} seconds remaining...</p>
            </Row>
            <Row>
                <Col sm={6} className="text-center">
                    <Button variant="danger" onClick={handleRefreshClick} size="lg">
                        Refresh Word
                    </Button>{' '}
                </Col>
                <Col sm={6} className="text-center">
                    <Button variant="success" onClick={handleSubmitClick} size="lg">
                        Submit Answer
                    </Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}
