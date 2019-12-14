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

function Header() {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('header');

    const spanDate = document.createElement('span');
    spanTag.classList.add('date');
    spanTag.textContent = 'SMARCH 28, 2019';

    const h1Tag = document.createElement('h1');
    h1Tag.textContent = 'Lambda Times';

    const spanTemp = document.createElement('span');
    spanTag.classList.add('temp');
    spanTag.textContent = '98°';

    outerDiv.appendChildren([spanDate, h1Tag, spanTemp]);
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
