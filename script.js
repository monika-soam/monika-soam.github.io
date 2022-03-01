const btnHeader = document.getElementById('btn-header');
const divMenu = document.getElementById('menu-bar');
const hamBurger = document.getElementById('hamburger');
const menuBarContent = document.querySelector('.menu_bar_content');
const projects = [{
  featuredImage: 'img/Evocode.svg',
  name: 'Monika',
  title: 'Tonic',
  description: {
    interface: 'Back End Dev',
    year: 2022,
  },
  fullDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technologies: ['Html', 'Css', 'Javascript'],
  otherTechnologies: ['github', 'ruby', 'bootstrap'],

  liveDemo: '',
  sourceCode: '',
},

{
  featuredImage: 'img/GYMFit.svg',
  name: 'Monika',
  title: 'Tonic',
  description: {
    interface: 'Back End Dev',
    year: 2022,
  },
  fullDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technologies: ['Html', 'Css', 'Javascript'],
  otherTechnologies: ['github', 'ruby', 'bootstrap'],

  liveDemo: '',
  sourceCode: '',
},
{
  featuredImage: './img/Avalability.svg',
  name: 'Monika',
  title: 'Multi-Post Stories',
  description: {
    interface: 'Back End Dev',
    year: 2022,
  },
  fullDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technologies: ['Html', 'Css', 'Javascript'],
  otherTechnologies: ['github', 'ruby', 'bootstrap'],

  liveDemo: '',
  sourceCode: '',
},
{
  featuredImage: 'img/ProfessionalArt.svg',
  name: 'Monika',
  title: 'Tonic',
  description: {
    interface: 'Back End Dev',
    year: 2022,
  },
  fullDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technologies: ['Html', 'Css', 'Javascript'],
  otherTechnologies: ['github', 'ruby', 'bootstrap'],

  liveDemo: '',
  sourceCode: '',
},

];

function hideMenu() {
  divMenu.style.display = 'none';
}
btnHeader.addEventListener('click', () => {
  hideMenu();
});

hamBurger.addEventListener('click', () => {
  divMenu.style.display = 'block';
});

document.addEventListener('mouseup', (e) => {
  if (!menuBarContent.contains(e.target)) {
    hideMenu();
  }
});

const showOverlay = (overlayID) => {
  try {
    document.getElementsByClassName(overlayID)[0].style.display = 'block';
  } catch (e) {
    overlayID = undefined;
  }
};
const closeOverlay = (overlayID) => {
  try {
    document.getElementsByClassName(overlayID)[0].style.display = 'none';
  } catch (e) {
    overlayID = undefined;
  }
};
const showProjectOverlay = (id) => {
  let html = ` <section class="project_details_overlay_outer o${id}">
  <div class="project_details_overlay">
    <div class="overlay_header d-flex justify-content-between">
      <h1>${projects[id].title}</h1><button type="button" class="overlay_header_button" onclick="closeOverlay('o${id}')">&times;</button>
    </div>
    <div>
      <div class="inner_content">
        <h4>${projects[id].name}</h4>
        <p><img src="./img/Counter.svg" alt="Counter">&nbsp;&nbsp;&nbsp; Back End Dev</p>
        <p><img src="./img/Counter.svg" alt="Counter">&nbsp;&nbsp;&nbsp; 2022</p>
      </div>
    </div>
    <div>
      <img src="./${projects[id].featuredImage}" class="overlay_image" alt="Nature">
    </div>
    <div class="overlay_content">
      <p>${projects[id].fullDesciption}
      </p>
      <div class="overlay_inner">
        <div class="inner_content_button">
          <ul class="ul_1">`;
  for (let i = 0; i < projects[id].technologies.length; i += 1) {
    html += `<li><a href="#">${projects[id].technologies[i]}</a></li>`;
  }

  html += `</ul>
          <ul class="ul_2">`;
  for (let i = 0; i < projects[id].otherTechnologies.length; i += 1) html += `<li><a href="#">${projects[id].otherTechnologies[i]}</a></li>`;

  html += `</ul>
        </div>
        <hr>
        <div class="div_overlay">
          <button class="overlay_button"><span class="d-flex">See Live<img
                src="./img/Icon-Export.svg" alt="Arrow"></span></button>
          <button class="overlay_button"><span class="d-flex">See Source<img
                src="./img/Icon-GitHub.svg" alt="git"></span></button>
        </div>
      </div>
    </div>
  </div>
</section>`;
  return html;
};
const showProject = (id) => {
  let className = 'work ';
  if (id % 2 !== 0) {
    className += 'reverse';
  }
  let html = `<div class="portfolio_work">
    <div class="${className}">
      <img src="${projects[id].featuredImage}" alt="Gymfit">
    </div>
    <div class="content">
      <h3>${projects[id].title}</h3>
      <div class="inner_content">
        <h4>${projects[id].name}</h4>
        <p><img src="./img/Counter.svg" alt="Counter">&nbsp;&nbsp;&nbsp; Back End Dev</p>
        <p><img src="./img/Counter.svg" alt="Counter">&nbsp;&nbsp;&nbsp; 2022</p>
      </div>
      <p>${projects[id].detail}</p>
      <div class="inner_content_button">
        <ul>`;
  for (let i = 0; i < projects[id].technologies.length; i += 1) html += `<li><a href="#">${projects[id].technologies[i]}</a></li>`;
  html
    += `</ul>
      </div>
      <button type="button" class="button" onclick="showOverlay('o${id}')">See Project</button>
    </div>
  </div>`;
  return html;
};
window.onload = function onload() {
  let finalHTML = '';
  let overlayHTML = '';
  showOverlay('oo');
  closeOverlay('oo');
  for (let i = 0; i < projects.length; i += 1) {
    finalHTML += showProject(i);
    overlayHTML += showProjectOverlay(i);
  }
  document.getElementById('projects-container').innerHTML = finalHTML;
  document.getElementById('overlays-container').innerHTML = overlayHTML;
};