//= ==========================PROJECTS-CARDS DATA==================================//
const projectsData = [
  {
    name: 'Tonic',
    client: 'CANOPY',
    id: 1,
    year: 2015,
    image: '/assets/img/snapshoot-protfolio-1.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry.',
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },
  {
    name: 'Multi post Stories',
    client: 'CANOPY',
    id: 2,
    year: 2020,
    image: '/assets/img/snapshoot-protfolio-2.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry.',
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },

  {
    name: 'Tonic',
    client: 'CANOPY',
    year: 2019,
    id: 3,
    image: '/assets/img/snapshoot-protfolio-3.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry.',
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },

  {
    name: 'Multi post Stories',
    client: 'CANOPY',
    year: 2020,
    id: 4,
    image: '/assets/img/snapshoot-protfolio-4.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry.',
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },
];
//= ==============================DETAILS POPUP==================================//
//= =========GLOBAL VARIABLES====================//
// Get the modal_content div
const popupProjectCard = document.getElementById('popupProjectCard');
function createProjectCard(pid) {
  // Project title
  const projName = document.createElement('div');
  projName.classList.add('popup-project-title');
  const h2 = document.createElement('h2');
  h2.innerText = projectsData[pid].name;
  projName.appendChild(h2);
  popupProjectCard.appendChild(projName);
  // Client-frame
  const clientFrame = document.createElement('div');
  clientFrame.classList.add('popup-client-frame');
  /* CLIENT NAME */
  const ul1 = document.createElement('ul');
  const li1 = document.createElement('li');
  const clientName = document.createElement('div');
  clientName.classList.add('popup-client-name');
  const h31 = document.createElement('h3');
  h31.innerText = 'CANOPY';
  clientName.appendChild(h31);
  li1.appendChild(clientName);
  ul1.appendChild(li1);
  /* ROLE TXT */
  const li2 = document.createElement('li');
  const roleTxt = document.createElement('div');
  const span1 = document.createElement('span');
  span1.classList.add('solid-circle');
  span1.innerHTML = '&#9679;';
  roleTxt.appendChild(span1);
  const h32 = document.createElement('h3');
  h32.innerText = 'Back End Dev';
  roleTxt.appendChild(h32);
  li2.appendChild(roleTxt);
  ul1.appendChild(li2);
  /* YEAR TXT */
  const li3 = document.createElement('li');
  const yearTxt = document.createElement('div');
  const span2 = document.createElement('span');
  span2.classList.add('solid-circle');
  span2.innerHTML = '&#9679;';
  yearTxt.appendChild(span2);
  const h33 = document.createElement('h3');
  h33.innerText = projectsData[pid].year;
  yearTxt.appendChild(h33);
  li3.appendChild(yearTxt);
  ul1.appendChild(li3);
  /* Finally append the whole 'ul' list to clientFrame */
  clientFrame.appendChild(ul1);
  popupProjectCard.appendChild(clientFrame);
  /* ADD IMAGE SNAPSHOOT-PORTFOLIO */
  const imgPortfolio = document.createElement('div');
  imgPortfolio.classList.add('popup-snapshoot-portfolio');
  const img = document.createElement('img');
  img.setAttribute('src', projectsData[pid].image, 'alt', `project${pid + 1}image`);
  imgPortfolio.appendChild(img);
  popupProjectCard.appendChild(imgPortfolio);
  /* ADD DESCRIPTION & ACTION-BUTTONS & TAGS CONTAINER */
  const descContainer = document.createElement('div');
  descContainer.classList.add('popup-description-container');
  /* ADD DESCRIPTION */
  const description = document.createElement('div');
  description.classList.add('popup-detail-txt');
  const p = document.createElement('p');
  p.innerText = projectsData[pid].description;
  description.appendChild(p);
  descContainer.appendChild(description);
  /* ADD TAGS & ACTION-BUTTONS CONTAINER */
  const actionContainer = document.createElement('div');
  actionContainer.classList.add('popup-action-container');
  /* ADD TAGS */
  const tags = document.createElement('div');
  tags.classList.add('popup-tags');
  const ul2 = document.createElement('ul');
  const li4 = document.createElement('li');
  li4.innerText = 'html';
  ul2.appendChild(li4);
  const li5 = document.createElement('li');
  li5.innerText = 'css';
  ul2.appendChild(li5);
  const li6 = document.createElement('li');
  li6.innerText = 'javascript';
  ul2.appendChild(li6);
  tags.appendChild(ul2);
  actionContainer.appendChild(tags);
  /* ADD ACTION-BUTTONS */
  const popupAction = document.createElement('div');
  popupAction.classList.add('popup-action');
  const aLive = document.createElement('a');
  aLive.href = projectsData[pid].liveVersion;
  const btnLive = document.createElement('button');
  btnLive.innerHTML = 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
  aLive.appendChild(btnLive);
  popupAction.appendChild(aLive);
  const aSource = document.createElement('a');
  aSource.href = projectsData[pid].source;
  const btnSource = document.createElement('button');
  btnSource.innerHTML = 'Source Code <i class="fa-brands fa-github"></i>';
  aSource.appendChild(btnSource);
  popupAction.appendChild(aSource);
  actionContainer.appendChild(popupAction);
  descContainer.appendChild(actionContainer);
  popupProjectCard.appendChild(descContainer);
}

//= ========================END OF DETAILS POPUP============================//
/* Toggle Button Function Starts Here */
const sideMenu = document.getElementById('side_menu');
const sideMenuNav = document.getElementById('side_menu_nav');
const toggleButton = document.getElementById('menu_toggle_btn');
const closeButton = document.getElementById('menu_close_btn');

toggleButton.onclick = function () {
  sideMenuNav.style.display = 'block';
  sideMenu.classList.toggle('active');
};

closeButton.onclick = function () {
  sideMenu.classList.toggle('active');
  sideMenuNav.style.display = 'none';
};

createProjectCard(1);