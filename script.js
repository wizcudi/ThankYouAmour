const projectsContainer = document.getElementById('projects-container');

const projects = [
    {
        name: "To Do List",
        description: "A simple To Do list.",
        link: "https://wizcudi.github.io/ToDoList/"
    },
    {
        name: 'RPG Game',
        description: 'Role Playing Game that allows users to fight monsters/dragons, level up and more.',
        link: 'https://wizcudi.github.io/rpgGame/'
    },
    {
        name: 'Calorie Counter',
        description: 'Allows users to add food eaten and workouts to track there daily calories burned.',
        link: 'https://wizcudi.github.io/calorieCounter/'
    },
    {
        name: 'Music Player',
        description: 'Allows users to play, pause, skip, and delete preloaded songs in playlist.',
        link: 'https://wizcudi.github.io/musicPlayer/'
    },
    {
        name: "Binary Convertor",
        description: "Changes numbers & decimal numbes to binary",
        link: "https://wizcudi.github.io/DecimalToBinary/"
    },
    {
        name: 'Soccer Team Cards',
        description: 'Displays and organizes soccer players based on criteria set by user.' ,
        link: 'https://wizcudi.github.io/SoccerTeamCards/'
    },
    {
        name: 'Palindrome Checker',
        description: 'checks palindrome for certain letters and phrases',
        link: 'https://wizcudi.github.io/PalindromeCheck/',
    },
    {
        name: 'Roman Numeral Converter',
        description: 'Converts to Roman Numerals',
        link: 'https://wizcudi.github.io/RomanNumeralConverter/',
    },
    {
        name: 'Number Sorter',
        description: 'Sorts numbers from least to greatest',
        link: 'https://wizcudi.github.io/numberSorter/',
    }
];

const portfolioProjects =()=> {
    // display portfolio projects
    projects.forEach(({name, description, link})=>{
        projectsContainer.innerHTML += `
            <div class="project">
                <a href="${link}">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </a>
            </div>
        `
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    portfolioProjects()
})