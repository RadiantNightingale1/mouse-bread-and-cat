
let sideBarContainer = document.createElement('div');
sideBarContainer.style.width = "33%";
sideBarContainer.style.marginRight = "10px"

let mainContainer = document.createElement("div");
mainContainer.setAttribute("style", "width: 60%");

const documentBody = document.body;
const myBody = document.getElementById('myBody')

const sidebar = document.createElement('div');
sidebar.className = 'sidebar';

const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
homeLink.className = 'active';

const loginLink = document.createElement('a');
loginLink.href = '#news';
loginLink.textContent = 'Log In';

const storeLink = document.createElement('a');
storeLink.href = '#contact';
storeLink.textContent = 'Store';

const customLink = document.createElement('a');
customLink.href = '#about';
customLink.textContent = 'Custom';

sidebar.appendChild(homeLink);
sidebar.appendChild(loginLink);
sidebar.appendChild(storeLink);
sidebar.appendChild(customLink);
sideBarContainer.appendChild(sidebar);

const header = document.createElement('h1');
header.textContent = 'Center Park Home Page';
header.style.textAlign = 'center';
header.style.color = 'grey';

const content = document.createElement('div');
content.className = 'content';

const festivalHeader = document.createElement('h1');
festivalHeader.textContent = 'JUNE BUG FESTIVAL';

const img = document.createElement('img');
img.src = 'beetle.jpg';
img.alt = 'beetle';
img.style.height = '350px';

const festivalDate = document.createElement('h1');
festivalDate.textContent = 'JUNE 12th - 14th';
festivalDate.style.textAlign = 'center';

content.appendChild(festivalHeader);
content.appendChild(img);
content.appendChild(festivalDate);

const hr = document.createElement('hr');
hr.style.borderWidth = '1px';

const julyEventsDiv = document.createElement('div');
const julyEventContent = "<b>July 4th</b> - Fireworks on the mall. Come Enjoy the Holiday With the Center Park faculty, staff, and students.<br>".repeat(4);
julyEventsDiv.innerHTML = julyEventContent;




documentBody.appendChild(sideBarContainer);

mainContainer.appendChild(header);
mainContainer.appendChild(content);
mainContainer.appendChild(hr); // Append HR before julyEventsDiv
mainContainer.appendChild(julyEventsDiv);
// documentBody.appendChild(mainContainer)
myBody.appendChild(mainContainer)

