const tabs = [
    {
      id: 1,
      tabTopic: 'about',
      tabTitle: 'about me',
      tabImg: undefined,
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces. ",
        "Currently training to become a frontend developer, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code. ",
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
      id: 3,
      tabTopic: 'project',
      tabTitle: 'Greenier please',
      projectDate: new Date(2024, 10),
      projectLanguages: ['Phaser', 'React', 'CSS3'],
      tabImg: "greenier-please.png",
      tabContent: ['This website hosts a game designed to raise awareness about green IT. It was created during a hackathon at Interface3, in October 23-25 2024. ', 'In the game, you take on the role of a recruiter tasked with selecting the CV that demonstrates the best environmental practices in IT. Be quick – you only have 30 seconds per round to make your choice! In each round, you\'ll receive an explanation of the correct answer and its source. '],
      githubProjectLink: 'https://github.com/Blacg13/IF3_Greenier_please',
      liveProjectLink: null,
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
    {
      id: 5,
      tabTopic: 'project',
      tabTitle: 'Disneydle',
      projectDate: new Date(2025, 4),
      projectLanguages: ['.NET', 'React', 'CSS3'],
      tabImg: "disneydle.png",
      tabContent: ['This playful side project was born from a shared idea between a classmate and me: adapting the Pokedle concept to Disney characters. ', 'She handled the backend while I focused on the frontend. Although the site is still a work in progress, we decided to deploy an early version to share it with friends and family. ', 'At the moment, the quote quiz is partially functional, and the UI still needs some polish — but it\'s been a fun way to explore the full development cycle and experiment with new ideas. '],
      githubProjectLink: 'https://github.com/Blacg13/IF3_Disneydle_WP',
      liveProjectLink: 'https://disneydle.vercel.app/',
    }
  ];
  
  export default tabs;