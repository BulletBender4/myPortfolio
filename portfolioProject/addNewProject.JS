const collectDetails = document.querySelector('.collectDetails');
const newProjectForm = document.querySelector('.newProjectForm');
const projectName = document.querySelector('#projectName');
const projectDescription = document.querySelector('#projectDescription');
const projectURL = document.querySelector('#projectURL');
const projectImg = document.querySelector('#projectImg');
// const body1 = document.querySelector('.portfolio');




const ul = document.createElement('ul');

console.log(ul);
newProjectForm.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  let li = document.createElement('li');
  li.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=C:\Users\Admin\Downloads${projectImg.value} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${projectName.value}</h5>
      <p class="card-text">${projectDescription.value}</p>
      <a href="${projectURL.value}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> `;
  ul.appendChild(li);
  collectDetails.insertAdjacentElement('afterend', ul);


  console.log(li);
})

console.log(projectName.value);
console.log(projectDescription.value);
console.log(projectURL.value);
console.log(projectImg.value);