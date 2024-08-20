
const projectsContainer = document.getElementById('projects-container');
const allProjects = document.getElementById('all-projects')
const webProjects = document.getElementById('web-projects')
const jsProjects = document.getElementById('js-projects')
const reactProjects = document.getElementById('react-projects')


const profilePage = document.querySelector('.profile-section')

const projectPage = document.querySelector('.project-section')
const aboutPage = document.querySelector('.about-section')
const contactPage = document.querySelector('.contact-section')
const socialsPage = document.querySelector('.socials-section')

const projectFolder = document.getElementById('projects-div')
const aboutFolder = document.getElementById('about-div')
const contactFolder = document.getElementById('contacts-div')
const socialFolder =document.getElementById('socials-div')

const projectToHome = document.getElementById('project-back-home')
const aboutToHome = document.getElementById('about-back-home')
const contactToHome = document.getElementById('contact-back-home')
const socialsToHome = document.getElementById('socials-back-home')

const publicKey = 'LZL_gvcgTwk3_2u2Q'
const serviceID = 'portfolio_contact'
const templateID = 'portfolio_form'

// Initialize EmailJS
window.onload = function() {
    // Initialize EmailJS
    (function() {
        emailjs.init(publicKey);
    })();

    // Add event listener to the form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                console.log('SUCCESS!');
                // Clear the form after successful submission
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
};


const projects = [
    {
        name:'Elephants Epoxy',
        description:'Mock Up Landing page for Epoxy Installer',
        link: 'https://wizcudi.github.io/epoxyLanding/',
        tag:'Design',
    },
    {
        name:'Cezars Palace',
        description:'Landing page created for Orlando Epoxy Installer',
        link: 'https://wizcudi.github.io/cezar/',
        tag:'Design',
    },
    {
        name: 'Calorie Counter',
        description: 'Allows users to add food eaten and workouts to track there daily calories burned.',
        link: 'https://wizcudi.github.io/calorieCounter/',
        tag: "JavaScript",
    },
    {
        name: 'Pokemon Search',
        description: 'Search up any Pokemon by name or ID number',
        link: 'https://wizcudi.github.io/PokeDex/',
        tag: "JavaScript",
    },
    
    {
        name: "Shopping Cart",
        description: "Dessert shopping cart project, showcasing CRUD functionalites.",
        link: "https://wizcudi.github.io/ShoppingCart/",
        tag: "JavaScript",
    },
    {
        name: 'Dice Game',
        description: "Try you're luck rolling the dice. ",
        link: 'https://wizcudi.github.io/diceGame/',
        tag: "JavaScript",
    },
    {
        name: 'RPG Game',
        description: 'Role Playing Game where you fight monsters and dragons. Level up as you play.',
        link: 'https://wizcudi.github.io/rpgGame/',
        tag: "JavaScript",
    },
    {
        name: "Author Page",
        description: "Fetches data from Free Code Camp APi to display authors of Free Code Camp blogs",
        link: "https://wizcudi.github.io/FCCNewsAuthorPage/",
        tag: "JavaScript",
    },
    {
        name: "Forum Board",
        description: "Fetches data from Free Code Camp APi to display a Forum",
        link: "https://wizcudi.github.io/FCCForum/",
        tag: "JavaScript",
    },
    {
        name: "To Do List",
        description: "A simple To Do list.",
        link: "https://wizcudi.github.io/ToDoList/",
        tag: "JavaScript",
    },
    {
        name: 'Music Player',
        description: 'Allows users to play, pause, skip, and delete preloaded songs in playlist.',
        link: 'https://wizcudi.github.io/musicPlayer/',
        tag: "JavaScript",
    },
    {
        name: 'Platformer Game',
        description: 'Mario Bros type of game with 2 check points. Best played on desktop.',
        link: 'https://wizcudi.github.io/PlatformerGame/',
        tag: "JavaScript",
    },
    {
        name: 'Soccer Team Cards',
        description: 'Displays and organizes soccer players based on criteria set by user.' ,
        link: 'https://wizcudi.github.io/SoccerTeamCards/',
        tag: "JavaScript",
    },
    {
        name: 'Number Validator',
        description: 'Determines if you typed in a valid phone number',
        link: 'https://wizcudi.github.io/phonenumbervalid/',
        tag: "JavaScript",
    },
    {
        name: 'Statistics Calculator',
        description: 'Performing statistical calculations like mean, median, mode, variance, and standard deviation.',
        link: 'https://wizcudi.github.io/statisticsCalculator/',
        tag: "JavaScript",
    },
    
];


const portfolioProjects =()=> {
    projects.forEach(({name, link})=>{
        projectsContainer.innerHTML += `
            <div class="project-card">
                <h2 class="project-title">${name}</h2>
                <a class="project-btn" href="${link}">
                    View Project
                </a>
            </div>
        `
    })
}
const showAll = () => {
    projectsContainer.innerHTML = ''
    projects.forEach(({name, link})=>{
        projectsContainer.innerHTML += `
            <div class="project-card">
                <h2 class="project-title">${name}</h2>
                <a class="project-btn" href="${link}">
                    View Project
                </a>
            </div>
        `
    })
}
const showDesigns = () => {
    projectsContainer.innerHTML = ''

    projects.forEach(({name, link, tag}) => {
        if (tag === 'Design') {
            // console.log(tag)
            projectsContainer.innerHTML += `
                <div class="project-card">
                    <h2 class="project-title">${name}</h2>
                    <a class="project-btn" href="${link}">
                        View Project
                    </a>
                </div>
            `
        }
        
    })
}
const showJS = () => {
    projectsContainer.innerHTML = ''

    projects.forEach(({name, link, tag}) => {
        if (tag === 'JavaScript') {
            // console.log(tag)
            projectsContainer.innerHTML += `
                <div class="project-card">
                    <h2 class="project-title">${name}</h2>
                    <a class="project-btn" href="${link}">
                        View Project
                    </a>
                </div>
            `
        }
        
    })
}
const showReact = () => {
    projectsContainer.innerHTML = ''

    // projects.forEach(({name, link, tag}) => {
    //     if (tag === 'JavaScript') {
    //         projectsContainer.innerHTML += `
    //             <div class="project-card">
    //                 <h2 class="project-title">${name}</h2>
    //                 <a class="project-btn" href="${link}">
    //                     View Project
    //                 </a>
    //             </div>
    //         `
    //     }
        
    // })

    projectsContainer.innerHTML += `
        <h2 class="project-title">
            Projects Coming Soon!
        </h2>
    `
}


const goHome = () => {
    profilePage.style.display = 'flex'

    projectPage.style.display = 'none'
    aboutPage.style.display = 'none'
    contactPage.style.display = 'none'
    socialsPage.style.display = 'none'
}
const goProjects = () => {
    profilePage.style.display = 'none'
    projectPage.style.display = 'flex'
}
const goAbout = () => {
    profilePage.style.display = 'none'
    aboutPage.style.display = 'flex'
}
const goContact = () => {
    profilePage.style.display = 'none'
    contactPage.style.display = 'flex'
}
const goSocials = () => {
    profilePage.style.display = 'none'
    socialsPage.style.display = 'flex'
}

projectFolder.addEventListener('click', goProjects)
aboutFolder.addEventListener('click', goAbout)
contactFolder.addEventListener('click', goContact)
socialFolder.addEventListener('click', goSocials)

projectToHome.addEventListener('click', goHome)
aboutToHome.addEventListener('click', goHome)
contactToHome.addEventListener('click', goHome)
socialsToHome.addEventListener('click', goHome)

allProjects.addEventListener('click', showAll)
webProjects.addEventListener('click', showDesigns)
jsProjects.addEventListener('click', showJS)
reactProjects.addEventListener('click', showReact)

document.addEventListener('DOMContentLoaded', showAll)

