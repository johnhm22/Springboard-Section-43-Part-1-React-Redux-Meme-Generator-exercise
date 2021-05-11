import { useSelector, useDispatch } from 'react-redux';

import {Container, Row, Col, Button} from 'reactstrap';
import { v4 as uuidv4} from 'uuid';
import NewMemeForm from './NewMemeForm';

const ShowMemes = () => {
    const dispatch = useDispatch();
    const meme = useSelector(store => [...store]);
    console.log("memes in store are: ", meme);

    const newMeme = (topText, meme, bottomText) => {
        dispatch({type: 'ADD_MEMES', payload: {id: uuidv4(), topText, meme, bottomText}})
    }

    const reset = () => {
        dispatch({type:'RESET'})
    }

    return (
        <>
            <Container>
            <Row>
            {meme.map(m => (
            <Col xs="3">
            <p className="m-0">{m.topText}</p>
            <img id='meme' className='m-0' src={m.meme} height='150' width='180' alt='meme image'/>
            <p>{m.bottomText}</p>
            </Col>
            ))}
            </Row>
            <NewMemeForm newMeme = {newMeme}/>
            <Button onClick={reset} color="warning" size="sm">Reset</Button>
            </Container>
          
        </>
    )
}

export default ShowMemes;