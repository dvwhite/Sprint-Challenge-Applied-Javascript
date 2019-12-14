// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

/*
* Component that represents the header
* @returns {object} outerDiv: The div content created by the component
*/
function Header(date, temp) {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('header');

    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    spanDate.textContent = date;

    const h1Tag = document.createElement('h1');
    h1Tag.textContent = 'Lambda Times';

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent = temp;

    appendChildren([spanDate, h1Tag, spanTemp], outerDiv);
    return outerDiv;
}

/*
* Append an array of child nodes to a parent node
* @param {Array} children: An array of child nodes
* @param {node} parent: The parent node to append them to
*/
function appendChildren(children, parent) {
    children.forEach(child => parent.appendChild(child));
}

// Add header component to the DOM
const headerDiv = document.querySelector('.header-container');
headerDiv.appendChild(Header('DECEMBER 12, 2019', '57°'));