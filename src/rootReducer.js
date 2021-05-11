import { v4 as uuidv4} from 'uuid';

const INITIAL_STATE = [
{
    id: uuidv4(),
    meme: 'https://images.unsplash.com/photo-1620354599717-70353d8e0e20?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    topText: "This is the top text",
    bottomText: "This is the bottom text"},
{
    id: uuidv4(),
    meme: 'https://images.unsplash.com/photo-1619977081345-756ebdafe46a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    topText: "More top text",
    bottomText: "More bottom text"
}];
// const INITIAL_STATE = {count: 0};



const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case 'PROVIDE_MEMES':
        return state
    
    case 'ADD_MEMES':
        return ([...state, action.payload])
    
    case 'RESET':
        return (state.map(s => {})) //how to return to the original state?

    default:
        return state;
    }
}

export default rootReducer;

