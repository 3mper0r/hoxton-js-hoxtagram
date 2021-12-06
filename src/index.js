const state = {
    images: [],
};

const imageContainer = document.querySelector('.image-container')

function getImages() {
    return fetch("http://localhost:3000/images").then((response) =>
        response.json()
    );
}
getImages().then(function (imagesFromServer) {
    state.images = imagesFromServer

    renderImageCard();
});

// {/* <article class="image-card">
//         <h2 class="title">Title of image goes here</h2>
//         <img src="./assets/image-placeholder.jpg" class="image" />
//         <div class="likes-section">
//           <span class="likes">0 likes</span>
//           <button class="like-button">♥</button>
//         </div>
//         <ul class="comments">
//           <li>Get rid of these comments</li>
//           <li>And replace them with the real ones</li>
//           <li>From the server</li>
//         </ul> */}


function renderImageCard() {

    for (const image of state.images) {

        const imageCard = document.createElement('article')
        imageCard.setAttribute('class', 'image-card')

        const header = document.createElement('h2')
        header.setAttribute('class', 'title')
        header.textContent = image.title

        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', image.image)
        imageEl.setAttribute('class', 'image')

        const likesDiv = document.createElement('div')
        likesDiv.setAttribute('class', 'likes-section')

        const likesSpan = document.createElement('span')
        likesSpan.setAttribute('class', 'likes')
        likesSpan.textContent = '0 likes'

        const likesButton = document.createElement('button')
        likesButton.setAttribute('class', 'like-button')
        likesButton.textContent = '♥'

        const ulComments = document.createElement('ul')
        ulComments.setAttribute('class', 'comments')

        for (const coment of image.comments) {
            const commentLi = document.createElement('li')

            ulComments.append(commentLi)
            commentLi.textContent = coment.content
        }

        imageCard.append(header, imageEl, likesDiv, ulComments)
        likesDiv.append(likesSpan, likesButton)
        imageContainer.append(imageCard)
    }

}