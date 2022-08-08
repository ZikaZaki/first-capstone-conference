//= ==========================SPEAKERS-CARDS DATA==================================//
const speakersData = [
  {
    id: 1,
    name: 'ZikaZaki',
    image: '/assets/img/speaker1.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
  {
    id: 2,
    name: 'ZikaZaki',
    image: '/assets/img/speaker2.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
  {
    id: 3,
    name: 'ZikaZaki',
    image: '/assets/img/speaker3.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
  {
    id: 4,
    name: 'ZikaZaki',
    image: '/assets/img/speaker4.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
  {
    id: 5,
    name: 'ZikaZaki',
    image: '/assets/img/speaker5.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
  {
    id: 6,
    name: 'ZikaZaki',
    image: '/assets/img/speaker6.png',
    organization: 'MIT Institute',
    description:
    'Focusing on a collaborative approach in a networked environment, '
    + 'we created the concept of co-production based on sharing, '
    + 'such as open source software and Wikipedia.',
  },
];

//= =====================CREATE SPEAKERS CARD FUNCTION========================//
function createSpeakersCard(obj) {
  // Speaker image
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');
  const speakerImage = document.createElement('div');
  speakerImage.classList.add('speaker-image');
  const speakerImageImg = document.createElement('img');
  speakerImageImg.src = obj.image;
  speakerImage.appendChild(speakerImageImg);
  speaker.appendChild(speakerImage);
  // Speaker info
  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speaker-info');
  const speakerName = document.createElement('div');
  speakerName.classList.add('speaker-name');
  const speakerNameLink = document.createElement('a');
  speakerNameLink.href = '#';
  speakerNameLink.innerText = obj.name;
  speakerName.appendChild(speakerNameLink);
  speakerInfo.appendChild(speakerName);

  // Speaker org
  const speakerOrg = document.createElement('div');
  speakerOrg.classList.add('org-name');
  speakerOrg.innerText = obj.organization;
  speakerInfo.appendChild(speakerOrg);

  // Speaker desc
  const speakerDesc = document.createElement('div');
  speakerDesc.classList.add('speaker-desc');
  speakerDesc.innerText = obj.description;
  speakerInfo.appendChild(speakerDesc);

  speaker.appendChild(speakerInfo);
  return speaker;
}

const speakersList = document.querySelector('.speakers-list');
speakersData.forEach(obj => {
  speakersList.appendChild(createSpeakersCard(obj));
});

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

const viewMoreBtn = document.querySelector('.view-more-btn');
const morePrograms = document.querySelector('.view-more');

viewMoreBtn.addEventListener('click', () => {
  if (viewMoreBtn.innerText === 'View All Programs') {
    morePrograms.style.display = 'flex';
    viewMoreBtn.innerText = 'View Less';
  } else {
    morePrograms.style.display = 'none';
    viewMoreBtn.innerText = 'View All Programs';
  }
});