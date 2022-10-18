//nba stats project imgs
import nbaStatsProjectImage from "../images/project-images/nba_stats_project_screenshot.png";
import kobeMural from "../images/project-images/logo-images/kobe_bryant_mural.jpg";

//memory game images
import brainImage from "../images/project-images/logo-images/brain_image.jpg";
import memoryGameProjectImage from "../images/project-images/memory_game.png";

//expense tracker project images
import expenseTrackerProjectImage from "../images/project-images/expense_tracker_screenshot.png";
import walletImage from "../images/project-images/logo-images/wallet_and_cards.jpg";

export const projectsData = [
  {
    id: 1,
    logoUrl: kobeMural,
    modalInfo: {
      title: "NBA Statistics",
      description:
        "This is a website in which NBA fans all over the world can search for their favorite NBA players name and a suggestion list pops up as they type the name. Once they find the player they want they can find their average stats as well as all the games that they played that season.",
      whatILearned:
        "While building this project I was practicing the basics of functional programming in javascript. I was practing the fundamentals an learned how to work with APIs which included fetching data and organizing that data so that it renders correctly on the screen. I also learned how to build a responsive web page",
      imageUrl: nbaStatsProjectImage,
      toolsUsed: ["HTML", "CSS", "JAVASCRIPT", "API", "GIT"],
      links: {
        github: "https://github.com/singhimat99/nba-statistics",
        live: "https://nba-statistics-search.netlify.app/",
      },
    },
  },
  {
    id: 9,
    logoUrl: brainImage,
    modalInfo: {
      title: "Expense Tracker",
      description:
        "This is very simple but fun memory game in which the player must find two matching images by memorizing the given set of cards once they flip them over.",
      whatILearned:
        "This was one of my first projects from when I started to learn how to code and I kept this in here to just show my own improvement. In this project I learned how to think like a programmer. I figured out how to break a bigger problem into a bunch of smaller problems. I added one functionality at a time and learned how important it was to have an effective workflow. I also learned the basics of javascript event handling and DOM manipulation.",
      imageUrl: memoryGameProjectImage,
      toolsUsed: ["HTML", "CSS", "JAVASCRIPT", "GIT"],
      links: {
        github: "https://github.com/singhimat99/Memory-Game",
        live: "https://memory-game9.netlify.app/",
      },
    },
  },
  {
    id: 4,
    logoUrl: walletImage,
    modalInfo: {
      title: "Expense Tracker",
      description:
        "This is a simple expense tracker in which the client would enter expense information into a form and once submitted the information would be organized into a html table.",
      whatILearned:
        "I learned the basics of html and and css building this project and also practiced the basics of javascript which included handling events, using variables and conditional statements.",
      imageUrl: expenseTrackerProjectImage,
      toolsUsed: ["HTML", "CSS", "JAVASCRIPT", "GIT"],
      links: {
        github: "https://github.com/singhimat99/Expense-Tracker",
        live: "https://easy-expense-tracker1.netlify.app/",
      },
    },
  },
];
