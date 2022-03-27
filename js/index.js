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


// console.log(skillsList);