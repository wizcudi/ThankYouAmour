const projectsContainer = document.getElementById('projects-container');

const projects = [
    
    {
        name: "Shopping Cart",
        description: "Dessert Shopping Cart",
        link: "https://wizcudi.github.io/ShoppingCart/"
    },
    {
        name: 'Pokemon Search',
        description: 'Search up any Pokemon by name or ID number',
        link: 'https://wizcudi.github.io/PokeDex/',
    },
    {
        name: 'Calorie Counter',
        description: 'Allows users to add food eaten and workouts to track there daily calories burned.',
        link: 'https://wizcudi.github.io/calorieCounter/'
    },
    
    {
        name: 'Dice Game',
        description: 'Rolling Dice Game',
        link: 'https://wizcudi.github.io/diceGame/'
    },
    {
        name: 'RPG Game',
        description: 'Role Playing Game that allows users to fight monsters/dragons, level up and more.',
        link: 'https://wizcudi.github.io/rpgGame/'
    },
    


    {
        name: "News Author Page",
        description: "Fetching data from Free Code Camp APi to display authors of Free Code Camp blogs",
        link: "https://wizcudi.github.io/FCCNewsAuthorPage/"
    },
    {
        name: "Forum Leader Board",
        description: "BEST VIEWED ON MONITOR SCREEN! Fetching data from Free Code Camp to display a Forum",
        link: "https://wizcudi.github.io/FCCForum/"
    },

    {
        name: "To Do List",
        description: "A simple To Do list.",
        link: "https://wizcudi.github.io/ToDoList/"
    },
    {
        name: 'Music Player',
        description: 'Allows users to play, pause, skip, and delete preloaded songs in playlist.',
        link: 'https://wizcudi.github.io/musicPlayer/'
    },
    {
        name: 'Platformer Game',
        description: 'BEST VIEWED ON MONITOR SCREEN! Mario Bros type of game with 2 check points.',
        link: 'https://wizcudi.github.io/PlatformerGame/',
    },
    {
        name: 'Soccer Team Cards',
        description: 'Displays and organizes soccer players based on criteria set by user.' ,
        link: 'https://wizcudi.github.io/SoccerTeamCards/'
    },
    {
        name: 'Phone Number Validator',
        description: 'Determines if you typed in a valid phone number',
        link: 'https://wizcudi.github.io/phonenumbervalid/',
    },
    {
        name: 'Statistics Calculator',
        description: 'Performing statistical calculations like mean, median, mode, variance, and standard deviation.',
        link: 'https://wizcudi.github.io/statisticsCalculator/',
    },
    
];

const toggleNavbar = () => {

    // checks current display style
    // if it is 'flex' it sets to none
    // if its not 'flex' it will set to flex
    // CSS automactically sets to none, but will also display toggle button
    // pressing toggle button can active function 
    const navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "flex";
    }

}

const portfolioProjects =()=> {
    // display portfolio projects
    projects.forEach(({name, description, link})=>{
        projectsContainer.innerHTML += `
            <a class="project" href="${link}">
                <h2>${name}</h2>
                <p>${description}</p>
            </a>
        `
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    portfolioProjects()
})