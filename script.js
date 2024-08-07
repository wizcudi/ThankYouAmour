const projectsContainer = document.getElementById('projects-container');

const projects = [
    
    {
        name: 'Calorie Counter',
        description: 'Allows users to add food eaten and workouts to track there daily calories burned.',
        link: 'https://wizcudi.github.io/calorieCounter/'
    },
    {
        name: 'Pokemon Search',
        description: 'Search up any Pokemon by name or ID number',
        link: 'https://wizcudi.github.io/PokeDex/',
    },
    
    {
        name: "Shopping Cart",
        description: "Dessert shopping cart project, showcasing CRUD functionalites.",
        link: "https://wizcudi.github.io/ShoppingCart/"
    },
    {
        name: 'Dice Game',
        description: "Try you're luck rolling the dice. ",
        link: 'https://wizcudi.github.io/diceGame/'
    },
    {
        name: 'RPG Game',
        description: 'Role Playing Game where you fight monsters and dragons. Level up as you play.',
        link: 'https://wizcudi.github.io/rpgGame/'
    },
    


    {
        name: "Author Page",
        description: "Fetches data from Free Code Camp APi to display authors of Free Code Camp blogs",
        link: "https://wizcudi.github.io/FCCNewsAuthorPage/"
    },
    {
        name: "Forum Board",
        description: "Fetches data from Free Code Camp APi to display a Forum",
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
        description: 'Mario Bros type of game with 2 check points. Best played on desktop.',
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


const portfolioProjects =()=> {
    // display portfolio projects
    projects.forEach(({name, description, link})=>{
        projectsContainer.innerHTML += `
            <div class="card project-card">
                <div class="project-body card-body">
                    <div>
                        <h2 class="card-title">${name}</h2>
                        <p class="card-text">${description}</p>
                    </div>
                    <div>
                        <a class="btn btn-secondary links-btn" href="${link}">
                            View Project
                        </a>
                    </div>
                </div<
            </div>
        `
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    portfolioProjects()
})