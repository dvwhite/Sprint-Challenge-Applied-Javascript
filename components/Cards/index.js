// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*
* Component that represents an article
* @param {object} articleObj: The object containing all article content
* @returns {object} article: The article created by the component
*/
function Card(articleObj) {
    // Declare variables from the object
    const headline = articleObj.headline;
    const authorName = articleObj.authorName;
    const authorPhoto = articleObj.authorPhoto;

    // Outer card div
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Article headline
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;

    // Article author
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author')

    // Author image container
    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');

    const imgAuthor = document.createElement('img');
    imgAuthor.src = authorPhoto;
    imgContainerDiv.appendChild(imgAuthor);

    // Author name
    const spanAuthor = document.createElement('span');
    spanAuthor.textContent = authorName;

    // Append child nodes to parent nodes
    authorDiv.appendChild(imgContainerDiv);
    authorDiv.appendChild(spanAuthor);
    appendChildren([headlineDiv, authorDiv], cardDiv);

    return cardDiv;
}

/*
* Create a series of articles from an array of article content
* @param {Array} articles: The topics to set as each tab's textContent
* @returns: none
*/
function createCards(articles) {
    const cardsDiv = document.querySelector('.cards-container');
    articles.forEach(article => cardsDiv.appendChild(Card(article)));
}

const articlesAPIURL = 'https://lambda-times-backend.herokuapp.com/articles';

axios.get(articlesAPIURL)
    .then(response => {
        const topics = response.data.articles;
        for (const topic of Object.values(topics)) {
            createCards(topic);
        }
    })
    .catch(err => {
        console.log("Error:", err);
    });