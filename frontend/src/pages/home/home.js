import CodeWorkspace from '../../components/codeStuff/codePlace';
import CodeBox from '../../components/codeStuff/codeBox';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from '../../components/infoBox/infoBox';

import './home.css';

export default function Home() {
    const code2 =
    `<html>
    // Your C code here
#include <stdio.h>

int main() {
    printf("Hell1o, world!");
    return 0;
}`;

    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <CodeBox code={
                        <>
                            #include iostream<br/>
                            using namespace st4444555 4332xgbgfd sbhkggd gkdshg kgdksjh skdghsd dfghfgh<br/><br/>
                            int main
                        </>
                    }/>
                    <br/>
                    <CodeWorkspace code={code2} language="html" />
                </Col>
                <Col sm={3}>
                    <Row>
                        <InfoBox text={
                            <>
                                Astăzi mă duc la cina si mananc ceva bun pentru ca si asa mie imi este foame acum.
                            </>
                        }/>
                    </Row>
                    <Row>
                        CUPRINS
                    </Row>
                    <Row>
                        ALTCEVA
                    </Row>
                </Col>
            </Row>
            <Row className="text-center">
                <Col sm={5}>
                    a
                </Col>
                <Col sm={2}>
                    LINIE ORIZONTALA
                </Col>
                <Col sm={5}>
                    c
                </Col>
            </Row>
        </Container>
    )
}