const today = new Date();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.classList.add('copyright');
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
const editMessage = document.getElementById('text_message');
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.type = 'button';
editButton.classList.add('btn');
editMessage.appendChild(editButton);

editButton.addEventListener('click', (e) => {
    const messageText = document.getElementById('textMessage');
    messageText.textContent = text;
})

// Handle message form submit  button
const messageForm = document.querySelector('form[name="leave_message"]')

messageForm.addEventListener('submit', (e) => {
    // prevent default refreshing behavior
    e.preventDefault();

    const user_name = e.target.name;
    const user_email = e.target.email;
    const user_message = e.target.message;

    // Display messages in list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.children[1];
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${user_email.value}">${user_name.value}</a><span> wrote: ${user_message.value}</span>`;


    // create remove button element
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
//hide message section

const msgList = document.getElementsByClassName('msgList');
for (let i = 0; i < msgList.length; i++) {
    let li = msgList[i];
    if (!li.getElementsByTagName('li').length) {
        li.style.display = 'none';
    } else {
        li.style.display = 'block';
    }
}

const header = document.getElementById('header');
header.classList.add('sticky');

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
        // console.log(project.innerText = repositories[i].name)
        projectList.appendChild(project);
    }
}



