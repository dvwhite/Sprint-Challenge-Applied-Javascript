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

/*
* A component representing a tab
* @param {string} topic: The topic to set as the tab's textContent
* @returns {object} divTag: The content created by the component
*/
function Tab(topic) {
    const divTag = document.createElement('div');
    divTag.classList.add('tab');
    divTag.textContent = topic;
    return divTag;
}

/*
* Create a series of tabs from an array of topics
* @param {Array} topics: The topics to set as each tab's textContent
* @returns: none
*/
function createTabs(topics) {
    const topicsDiv = document.querySelector('.topics');
    topics.forEach(topic => topicsDiv.appendChild(Tab(topic)));
}

axios.get(apiURL)
    .then(response => {
        const topicsArr = response.data.topics;
        createTabs(topicsArr);
    })
    .catch(err => {
        console.log("Error:", err);
    });