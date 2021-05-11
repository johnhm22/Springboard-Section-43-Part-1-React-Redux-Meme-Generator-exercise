

const meme = document.querySelector('#meme');
const topText = document.querySelector("input[name ='top']")
const bottomText = document.querySelector("input[name ='bottom']")
const memeImage = document.querySelector("input[name ='image']")
const button = document.querySelector("#button")
const testButton = document.querySelector("#testButton")
const form = document.getElementById('#newmeme');



testButton.addEventListener('click', function(e) {
    let text = form.elements['top']
    console.log("This is the top text: ", text);
    // console.log("e is: ", e)
    // store.dispatch({type: PROVIDE_MEMES});
    console.log("CLICK!!");
    // dispatchEvent.innerText = state.meme;
})
