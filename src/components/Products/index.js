import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css'
const ProductCards = () => {
    return (
        <CardGroup className='cardCss'>
            <Card className='cardCss' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51vOMolqGsL._SL1050_.jpg" />
                <Card.Body>
                    <Card.Title>Pens</Card.Title>
                    <Card.Text>
                        This is a Pens
                    </Card.Text>
                    <Button className='buttonCss'>Cart</Button>
                    <Button className='buttonCss'>Buy</Button>
                </Card.Body>
            </Card>
            <Card className='cardCss' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CS/UQ/MY-3181807/fabric-cutting-scissor-500x500.jpg" />
                <Card.Body>
                    <Card.Title>Scissor</Card.Title>
                    <Card.Text>
                        This is a Scissor
                    </Card.Text>
                    <Button className='buttonCss'>Cart</Button>
                    <Button className='buttonCss'>Buy</Button>
                </Card.Body>
            </Card>
            <Card className='cardCss' style={{ width: '50rem' }}>
                <Card.Img variant="top" src="https://www.epw.in/system/files/note.png" />
                <Card.Body>
                    <Card.Title>Note Pad</Card.Title>
                    <Card.Text>
                        This is a NotePad
                    </Card.Text>
                    <Button className='buttonCss'>Cart</Button>
                    <Button className='buttonCss'>Buy</Button>
                </Card.Body>
            </Card>
            <Card className='cardCss' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.fruugo.com/product/8/54/143345548_max.jpg" />
                <Card.Body>
                    <Card.Title>Calendar</Card.Title>
                    <Card.Text>
                        This is a Calendar
                    </Card.Text>
                    <Button className='buttonCss'>Cart</Button>
                    <Button className='buttonCss'>Buy</Button>
                </Card.Body>
            </Card>
            <Card className='cardCss' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://offimart.com/679-large_default/camlin-office-highlighter-pen-set-5-assorted-colours.jpg" />
                <Card.Body>
                    <Card.Title>Highlighter </Card.Title>
                    <Card.Text>
                        This is a Highlighter Pen                    </Card.Text>
                    <Button className='buttonCss'>Cart</Button>
                    <Button className='buttonCss'>Buy</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
 
}
export default ProductCards;
