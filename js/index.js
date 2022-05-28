const today = new Date();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.classList.add('copyright');
copyright.innerHTML = `<span> &copy; Erick Odero ${thisYear}</span> `;
footer.appendChild(copyright);
const messageSection = document.querySelector('#messages');
const listItems = document.querySelector('.users-messages');


// Add skills section
let skills = ['HTML', 'CSS', 'JavaScript', 'Ajax', 'Fetch-API'];

// const skillsSection = document.getElementById('skills');
const skillsList = document.getElementById('skillz');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// Handle message form submit  button
const messageForm = document.querySelector('form[name="leave_message"]')

messageForm.addEventListener('submit', (e) => {
    // prevent default refreshing behavior
    e.preventDefault();

    const user_name = e.target.name;
    const user_email = e.target.email;
    const user_message = e.target.message;

    // Display messages in list
    const messageList = messageSection.children[1];
    const newMessage = document.createElement('li');
    newMessage.classList.add('msg-List');
    newMessage.innerHTML = `<a href="mailto:${user_email.value}">${user_name.value}</a><span id="msg-span"> wrote: ${user_message.value}</span>`;

    // create remove button element
    const removeButton = document.createElement('button');
    removeButton.classList.add('btn');
    removeButton.setAttribute('id', 'remove');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    // create edit button element
    const editButton = document.createElement('button');
    editButton.classList.add('btn');
    editButton.innerText = 'Edit';
    editButton.setAttribute('id', 'edit');
    editButton.type = 'button';
    newMessage.appendChild(editButton);

    //handle edit button
    editButton.addEventListener('click', (e) => {
        const span = document.getElementById("msg-span");
        const li = editButton.parentNode;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
    })

    // handle the removeButton
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
        hideMessageSection();
    })
    // reset the form
    messageForm.reset();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    hideMessageSection();
})

//Sticky - header

const header = document.getElementById('header');
header.classList.add('sticky');

//Fetch repositories using Fetch API

fetch('https://api.github.com/users/eodero/repos')
    .then(response => response.json())
    .then(data => displayRepo(data))
    .catch(error => console.log('Error detected!', error))

function displayRepo(data) {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.lastElementChild;
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement('li');

        project.innerText = data[i].name;
        projectList.appendChild(project);
    }
}


const hideMessageSection = () => {
    const listOfMessages = listItems.childElementCount;
    // console.log(listOfMessages);
    if (listOfMessages == 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

hideMessageSection();


