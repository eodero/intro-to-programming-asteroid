const today = new Date();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Erick Odero ${thisYear}</span> `;
footer.appendChild(copyright);

let skills = ['html', 'CSS', 'JavaScript'];
const skillsSection = document.getElementById('skills');
const skillsList = document.getElementById('skills').children[1];

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// Handle message from submit
const messageForm = document.querySelector('form[name="leave_message"]')
messageForm.addEventListener('submit', (e) => {
    // prevent default refreshing behavior
    e.preventDefault();

    // create variables for each form field
    const user_name = messageForm.name.value;
    const user_email = messageForm.email.value;
    const user_message = messageForm.message.value;

    // Display messages in list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.children[1];
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${user_email}">${user_name}</a><span> wrote: ${user_message}</span>`;
    messageList.appendChild(newMessage);

    // create button element
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    newMessage.appendChild(removeButton);

    // handle the removeButton
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();

    })
    // reset the form
    messageForm.reset();

})