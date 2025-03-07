const tabs = [
    {
      id: 1,
      tabTopic: 'about',
      tabTitle: 'about me',
      tabImg: undefined,
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces. ",
        "Currently training to become a frontenddeveloper, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code. ",
      ],
    },
    {
      id: 2,
      tabTopic: 'project',
      tabTitle: 'rock paper scissors',
      projectDate: new Date(2024, 2),
      projectLanguages: ['HTML5', 'CSS3', 'JavaScript'],
      tabImg: 'rock-paper-scissors.png',
      tabContent: ['\"Rock, paper, scissors\” game made during my training as a frontend developer at Interface3 (Brussels, Belgium). ', 'The user clicks on one of the images on the left, and the computer randomly selects one of the images with a small animation. '],
      githubProjectLink: 'https://github.com/Blacg13/IF3_PierrePapierCiseaux',
      liveProjectLink: 'https://www.whatbeatsrock.com/',
    },
    {
      id: 4,
      tabTopic: 'project',
      tabTitle: 'FestivalFlow',
      projectDate: new Date(2024, 10),
      projectLanguages: ['node.js', 'React', 'CSS3'],
      tabImg: "festival-flow.png",
      tabContent: ['The ambition of this website is to streamline the management of exhibitors for a small festival in Wallonia, replacing spreadsheets, emails, and physical files. ', 'It centralizes contact management, contract tracking, and payment follow-ups while aiming to automate tasks like reminder emails. ', 'The key priorities are enabling contact, organizing data, and ensuring data communication. '],
      githubProjectLink: 'https://github.com/Blacg13/FestivalFlow',
      liveProjectLink: null,
    },
  ];
  
  export default tabs;