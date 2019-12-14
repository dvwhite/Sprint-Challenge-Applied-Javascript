// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const apiURL = 'https://lambda-times-backend.herokuapp.com/topics';

function Tab(topic) {
    const divTag = document.createElement('div');
    divTag.classList.add('tab');
    divTag.textContent = topic;
    return divTag;
}

function createTabs(topics) {
    const topicsDiv = document.querySelector('.topics');
    topics.forEach(topic => topicsDiv.appendChild(Tab(topic)));
}

axios.get(apiURL)
    .then(response => {
        const topicsArr = response.data.topics;
        createTabs(topicsArr);
        console.log(response);
    })
    .catch(err => {
        console.log("Error:", err);
    });