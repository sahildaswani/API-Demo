// r0LW54zer1LDuErzvplhjX3ntNNnqbaU

let wordAPI = "https://random-word-api.herokuapp.com/word?number=1"
let giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=r0LW54zer1LDuErzvplhjX3ntNNnqbaU&q="

callAPI()

function callAPI() {
    fetch(wordAPI)
    .then(response => {
        return response.json()
    })
    .then(word => {
        document.getElementById("word").innerHTML = word[0]
        return fetch(`${giphyAPI + word[0]}`)
    })
    .then(response => {
        return response.json()
    })
    .then(gif => {
        let imgURL = gif.data[0].images['downsized_large'].url
        document.getElementById("gif").src = imgURL
    })
    .catch(() => {
        callAPI()
    })
}