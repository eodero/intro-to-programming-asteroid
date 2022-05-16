const today = new Date();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span> &copy; Erick Odero ${thisYear}</span> `;
footer.appendChild(copyright);
let repositories;


// Added skills and edited section
let skills = ['HTML', 'CSS', 'JavaScript', 'Ajax', 'Fetch-API'];
// const skillsSection = document.getElementById('skills');
const skillsList = document.getElementById('skillz');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// Create and handle edit button
// const editMessage = document.querySelector('#text_message');
// const editButton = document.createElement('button');
// editButton.textContent = 'Edit';
// editButton.type = 'button';
// editButton.classList.add('btn');
// editMessage.appendChild(editButton);

// editMessage.addEventListener('click', (e) => {
// const button = e.target.parentNode;
//     const span = document.createElement('span');
//     const editedMessage = document.createElement('input');
//     input.type = 'text';
// console.log('edit');
// })

// Handle message form submit  button
const messageForm = document.querySelector('form[name="leave_message"]')

messageForm.addEventListener('submit', (e) => {
    // prevent default refreshing behavior
    e.preventDefault();

    // create variables for each form field
    // const user_name = messageForm.name.value;
    // const user_email = messageForm.email.value;
    // const user_message = messageForm.message.value;

    const user_name = e.target.name;
    const user_email = e.target.email;
    const user_message = e.target.message;

    // Display messages in list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.children[1];
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${user_email.value}">${user_name.value}</a><span> wrote: ${user_message.value}</span>`;


    // create button element
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';


    // handle the removeButton
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
    })
    // reset the form
    messageForm.reset();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
})

let messages = document.getElementById('messages');
let userMessages = document.getElementById('users-messages').children;

if (userMessages.length == 0) {
    messages.style.display = "none";
} else {
    messages.style.display = "block"
}


const header = document.getElementById('header');
header.classList.add('sticky');

var gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
    if (gitHubRequest.readyState === 4 && gitHubRequest.status === 200) {
        gitHubRequest.responseText;
    }
};

gitHubRequest.open('GET', 'https://api.github.com/users/eodero/repos');
gitHubRequest.send();

gitHubRequest.addEventListener('load', (e) => {
    repositories = JSON.parse(gitHubRequest.response);
    console.log(repositories);

    const projectSection = document.getElementById('projects');
    const projectList = projectSection.lastElementChild;
    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement('li');

        project.innerText = repositories[i].name;
        console.log(project.innerText = repositories[i].name)
        projectList.appendChild(project);
    }

});







