const projectsDiv = document.querySelector("section#projects");

let projects = [  {
  name: "WonderWomen of the World Cup -- GoogleTrends",
  imgUrl: "https://i.imgur.com/WkSVFc9.png",
  deployedAt: "https://womens-world-cup-google-trends.now.sh/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/womensWorldCupGoogleTrends"
},
  {
    name: "Kanyes Quotes",
    imgUrl: "https://i.imgur.com/rebjeFe.png",
    deployedAt: "https://kanyesays.now.sh/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/ReactReduxThunk"
  },

  {
    name: "TheArtificialArtist",
    imgUrl: "https://i.imgur.com/lGQKb7s.png",
    deployedAt: "https://theArtificialArtist.com/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/artificial-artist-fe"
  },  
  {
    name: "rVenture",
    imgUrl: "https://i.imgur.com/GXJ8srz.jpg",
    deployedAt: "https://rventuren.herokuapp.com/api",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos:netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/Build-Week-RVAirBnB/Backend"
  },
];

function createProjectCards(projectsArr) {
  let card,
    cardImage,
    cardTitle,
    projectDeployedLink,
    projectDeployedIcon,
    projectRepo,
    projectRepoIcon,
    projectInfoBlock;
  projectsArr.map(project => {
    (card = document.createElement("div")),
      card.classList.add("card"),
      (cardImage = document.createElement("img")),
      (cardImage.src = project.imgUrl),
      card.appendChild(cardImage),
      (cardTitle = document.createElement("h3")),
      cardTitle.classList.add("cardTitle"),
      (cardTitle.style.fontSize = "2rem"),
      (cardTitle.textContent = project.name),
      card.appendChild(cardTitle),
      (projectDeployedLink = document.createElement("a")),
      (projectDeployedIcon = document.createElement(project.deployedIcon.type)),
      console.log("************(((((((()))))))))))8***", {
        projectDeployedIcon
      });
    projectDeployedIcon.classList.add([project.deployedIcon.class]),
      projectDeployedIcon.setAttribute(
        "data-icon",

        `${project.deployedIcon[`data-icon`]}`
      ),
      projectDeployedIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectRepoIcon = document.createElement(project.repoIcon.type)),
      console.log("************(((((((()))))))))))8***", {
        projectRepoIcon
      });
    projectRepoIcon.classList.add([project.repoIcon.class]),
      projectRepoIcon.setAttribute(
        "data-icon",

        `${project.repoIcon[`data-icon`]}`
      ),
      projectRepoIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectDeployedLink.textContent = `Demo `),
      (projectDeployedLink.href = project.deployedAt),
      (projectDeployedLink.setAttribute("target","_blank")),
      (projectRepo = document.createElement("a")),
      (projectRepo.textContent = `Github `),
      (projectRepo.setAttribute("target","_blank")),
      (projectRepo.href = project.githubRepo),
      (projectInfoBlock = document.createElement("div")),
      projectInfoBlock.appendChild(projectDeployedLink),
      projectDeployedLink.appendChild(projectDeployedIcon),
      projectInfoBlock.appendChild(projectRepo),
      projectRepo.appendChild(projectRepoIcon),
      projectInfoBlock.classList.add("projectInfoBlock"),
      card.appendChild(projectInfoBlock),
      console.log(card),
      projectsDiv.appendChild(card);
  });
}

createProjectCards(projects);

console.log({ projects });

let tuckersProjectsItemDiv = document.querySelectorAll(".projects");

console.log("*************************", { tuckersProjectsItemDiv });

// import $ from "jquery";

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });
