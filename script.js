const btnHeader = document.getElementById('btn-header');
const divMenu = document.getElementById('menu-bar');
const hamBurger = document.getElementById('hamburger');
const menuBarContent = document.querySelector('.menu_bar_content');
const divOverlay = document.getElementsByClassName('project_details_overlay_outer')[0];
const gymfitButton = document.getElementById('gymfit');
const divGymfit = document.getElementById('div-gymfit');
const overlayHeaderButton = document.getElementsByClassName('overlay_header_button');

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


const show_overlay = (overlayID) => {
  console.log(overlayID);
  document.getElementsByClassName(overlayID)[0].style.display = 'block';
}
const close_overlay = (overlayID) => {
  document.getElementsByClassName(overlayID)[0].style.display = 'none';
}

window.onload = function(event) {
  console.log("Total Projects: ", projects);
  let finalHTML = "";
  let overlayHTML = "";
  for (let i = 0; i < projects.length; i++) {
    finalHTML += showProject(i);
    overlayHTML += showProjectOverlay(i);
  }
  document.getElementById("projects-container").innerHTML = finalHTML;
  document.getElementById("overlays-container").innerHTML = overlayHTML
};
const showProjectOverlay = (id) => {
  let html = ` <section class="project_details_overlay_outer o${id}">
  <div class="project_details_overlay">
    <div class="overlay_header d-flex justify-content-between">
      <h1>${projects[id].title}</h1><button type="button" class="overlay_header_button" onclick="close_overlay('o${id}')">&times;</button>
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
  for (let i = 0; i < projects[id].technologies.length; i++)
    html += `<li><a href="#">${projects[id].technologies[i]}</a></li>`

  html += `</ul>
          <ul class="ul_2">`
  for (let i = 0; i < projects[id].otherTechnologies.length; i++)
    html += `<li><a href="#">${projects[id].otherTechnologies[i]}</a></li>`

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
</section>`
  return html;
}
const showProject = (id) => {
  let className = "work ";
  if (id % 2 != 0) {
    className += "reverse"
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
  for (let i = 0; i < projects[id].technologies.length; i++)
    html += `<li><a href="#">${projects[id].technologies[i]}</a></li>`;
  html +=
    `</ul>
      </div>
      <button type="button" class="button" onclick="show_overlay('o${id}')">See Project</button>
    </div>
  </div>`
  return html;
}