/*****************************************************************************************
                                Intro Fade in
******************************************************************************************/
const helloIntro = document.getElementById("hello-intro")
const nameIntro = document.getElementById("name-intro")
const descriptionIntro = document.getElementById("description-intro")
const quoteIntro = document.getElementById("quote-intro")
const navBar = document.getElementById("nav-bar")

//arr to group all the intro elements for time delayed animation
const loadArr = [helloIntro, nameIntro, descriptionIntro, quoteIntro]
//blanket function to set transitions for elements
function animationScript(target) {
  target.style.transition = "opacity 3s linear"
  target.style.opacity = '1'
}

function showNav() {
  navBar.style.transform = "translateY(0%)"
}

/*****************************************************************************************
                              Onload Fuctions and Delays
******************************************************************************************/

//On load function that selects each element with a time delay.
const loadAnimations = () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    animationScript(loadArr[0])
  }, 1000);
  setTimeout(() => {
    animationScript(loadArr[1])
  }, 2000);
  setTimeout(() => {
    animationScript(loadArr[2])
  }, 3000);
  setTimeout(() => {
    animationScript(loadArr[3])
  }, 5000);
  setTimeout(showNav, 7000);
  //this line prevents scrolling until the animation is completed.
  setTimeout(() => {
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
    document.body.classList.remove("no-scroll")

  }, 6900)
}

/*****************************************************************************************
                                Project Slides
******************************************************************************************/
class ProjectSlider {
  constructor(projectName, dotName) {
    this.slideIndex = 1;
    this.projectName = projectName;
    this.dotName = dotName;
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(this.projectName);
    let dots = document.getElementsByClassName(this.dotName);
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }
    if (this.slideIndex < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}
const wordle = new ProjectSlider("wordleProj", "wordleDot")
wordle.showSlides(wordle.slideIndex);

const blackJack = new ProjectSlider("blackJackProj", "blackJackDot")
blackJack.showSlides(blackJack.slideIndex);

const graph = new ProjectSlider("graphProj", "graphDot")
graph.showSlides(graph.slideIndex);

const mario = new ProjectSlider("marioProj", "marioDot")
mario.showSlides(mario.slideIndex);


/********** To Poplate further projects */
const SQLite = new ProjectSlider("SQLite", "SQLiteDot")
SQLite.showSlides(SQLite.slideIndex);
const mySQL = new ProjectSlider("mySQLProj", "mySQLDot")
mySQL.showSlides(mySQL.slideIndex);
const nfadfa = new ProjectSlider("nfadfaProj", "nfadfaDot")
nfadfa.showSlides(nfadfa.slideIndex);

/*** ADD Event listeners to pictures. */
let projects = [wordle, blackJack, graph, mario, SQLite, mySQL, nfadfa]
if (document.documentElement.clientWidth > 320 && document.documentElement.clientWidth < 769) {
  let wordleImages = document.getElementsByClassName("wordleProj")
  for (let image of wordleImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) wordle.plusSlides(-1)
      if (touchendX > touchstartX) wordle.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let blackJackImages = document.getElementsByClassName("blackJackProj")
  for (let image of blackJackImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) blackJack.plusSlides(-1)
      if (touchendX > touchstartX) blackJack.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let marioImages = document.getElementsByClassName("marioProj")
  for (let image of marioImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) mario.plusSlides(-1)
      if (touchendX > touchstartX) mario.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let graphImages = document.getElementsByClassName("graphProj")
  for (let image of graphImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) graph.plusSlides(-1)
      if (touchendX > touchstartX) graph.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let sqliteImages = document.getElementsByClassName("SQLite")
  for (let image of sqliteImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) SQLite.plusSlides(-1)
      if (touchendX > touchstartX) SQLite.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let mySQLImages = document.getElementsByClassName("mySQL")
  for (let image of mySQLImages) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) mySQL.plusSlides(-1)
      if (touchendX > touchstartX) mySQL.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
  let nfadfaProj = document.getElementsByClassName("nfadfaProj")
  for (let image of nfadfaProj) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) nfadfa.plusSlides(-1)
      if (touchendX > touchstartX) nfadfa.plusSlides(1)
    }

    image.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    image.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }
}

/******************************************
 * Project Filtering
 *****************************************/

let currentlyFiltered;
const cppFilter = document.getElementById("cpp")
const javascriptFilter = document.getElementById("javascript")
const pythonFilter = document.getElementById("python")
const javaFilter = document.getElementById("java")
const terminalFilter = document.getElementById("terminal")
const academicFilter = document.getElementById("academic")
const sqlFilter = document.getElementById("sql")


/**************************************
 * Clear Filter Function
 *************************************/
function clearFilter() {
  const allProjects = document.querySelectorAll(".project-item")
  for (const project of allProjects) {
    if (project.classList.contains("project-hidden")) {
      project.classList.replace("project-hidden", "project-showing")
    }
  }
  cppFilter.classList.remove("glowing")
  javascriptFilter.classList.remove("glowing")
  pythonFilter.classList.remove("glowing")
  javaFilter.classList.remove("glowing")
  terminalFilter.classList.remove("glowing")
  academicFilter.classList.remove("glowing")
  sqlFilter.classList.remove("glowing")
}

/******************************************
 * C++ Filter
 *****************************************/

cppFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'cpp') {
    currentlyFiltered = 'cpp'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("cpp")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.add("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.remove("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})

/******************************************
 * JS Filter
 *****************************************/


javascriptFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'javascript') {
    currentlyFiltered = 'javascript'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("javascript")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.add("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.remove("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
  } else {
    clearFilter()
  }
})

/******************************************
 * Python Filter
 *****************************************/


pythonFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'python') {
    currentlyFiltered = 'python'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("python")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.add("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.remove("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})

/******************************************
 * Java Filter
 *****************************************/


javaFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'java') {
    currentlyFiltered = 'java'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("java")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.add("glowing")
    terminalFilter.classList.remove("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})

/******************************************
 * Terminal Filter
 *****************************************/


terminalFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'terminal') {
    currentlyFiltered = 'terminal'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("terminal")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.add("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})

/******************************************
 * Academic Filter
 *****************************************/

academicFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'academic') {
    currentlyFiltered = 'academic'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("academic")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.remove("glowing")
    sqlFilter.classList.remove("glowing")
    academicFilter.classList.add("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})

/******************************************
 * SQL Filter
 *****************************************/

sqlFilter.addEventListener("click", () => {
  if (currentlyFiltered != 'sql') {
    currentlyFiltered = 'sql'
    const allProjects = document.querySelectorAll(".project-item")
    for (const project of allProjects) {
      if (project.classList.contains("project-hidden")) {
        project.classList.replace("project-hidden", "project-showing")
      }
      if (project.classList.contains("sql")) {
        continue
      } else {
        project.classList.replace("project-showing", "project-hidden")
      }
    }
    cppFilter.classList.remove("glowing")
    javascriptFilter.classList.remove("glowing")
    pythonFilter.classList.remove("glowing")
    javaFilter.classList.remove("glowing")
    terminalFilter.classList.remove("glowing")
    academicFilter.classList.remove("glowing")
    sqlFilter.classList.add("glowing")
  } else {
    currentlyFiltered = null
    clearFilter()
  }
})



/*****************************************************************************************
                                Map/XP Slider
******************************************************************************************/

const mapSelector = document.getElementById("map");
const toggleBtn = document.getElementById("toggle-btn");
const xpSelector = document.getElementById("xp-txt");

function toggleFun() {
  if (mapSelector.classList.contains("map-hidden")) {
    mapSelector.classList.remove("map-hidden");
    mapSelector.classList.add("map-showing");
    xpSelector.classList.remove("xp-showing");
    xpSelector.classList.add("xp-hidden");
    toggleBtn.innerHTML = "Click for Resume";
  } else {
    mapSelector.classList.remove("map-showing");
    mapSelector.classList.add("map-hidden");
    xpSelector.classList.remove("xp-hidden");
    xpSelector.classList.add("xp-showing");
    toggleBtn.innerHTML = "Click for Interactive Map";
  }
}

/*****************************************************************************************
                               Scroll to top button function
******************************************************************************************/


const toTopButton = document.getElementById("to-top")
//once passed 500 scroll button appears
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTopButton.style.transition = "opacity 1s linear"
    toTopButton.style.opacity = '1'

  } else { //once above 500 scroll button disappears
    toTopButton.style.transition = "opacity 1s linear"
    toTopButton.style.opacity = '0'
  }
}, false)

toTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0)
})


/*****************************************************************************************
                            Start of darkmode functionality
******************************************************************************************/

const darkModeButton = document.getElementById("dark-mode")
const darkModeIcon = document.getElementById("dark-mode-icon")
const instaImage = document.getElementById("insta-img")
const linkedinImage = document.getElementById("linkedin-img")
const githubImage = document.getElementById("github-img")
const cgButton = document.getElementById("coast-guard-button")
const gcButton = document.getElementById("green-coast-button")
const disneyButton = document.getElementById("disney-button")
const cppButton = document.getElementById("cpp")
const javascriptButton = document.getElementById("javascript")
const pythonButton = document.getElementById("python")
const javaButton = document.getElementById("java")
const sqlButton = document.getElementById("sql")
const terminalButton = document.getElementById("terminal")
const academicButton = document.getElementById("academic")


const mobileDarkModeButton = document.getElementById("mobile-dark-mode-icon")
const mobileDarkModeIcon = document.getElementById("mobile-dark-mode-icon")
const projectItems = document.getElementsByClassName("project-item")
const filterTags = document.getElementsByClassName("filter-tags-li")

const jobsButtonArr = [cgButton, gcButton, disneyButton, cppButton, javascriptButton, javaButton, sqlButton, terminalButton, academicButton, pythonButton]


function changeIcon() {
  if (darkModeIcon.className === "sun") {
    darkModeIcon.src = "./assets/moon-black.png"
    darkModeIcon.className = "moon"
    mobileDarkModeIcon.src = "./assets/moon-black.png"
    mobileDarkModeIcon.className = "moon"
    document.body.style.backgroundColor = "var(--bg-color-inversed)"
    document.body.style.color = "var(--clr-main-inversed)"
    //changes images color
    instaImage.src = "assets/icons8-instagram-96-black.png"
    linkedinImage.src = "assets/icons8-linkedin-96-black.png"
    githubImage.src = "assets/icons8-github-96-black.png"
    //job button changes
    for (var i = 0; i < jobsButtonArr.length; i++) {
      jobsButtonArr[i].style.backgroundColor = "var(--bg-color-inversed)"
    }
    for (var i = 0; i < jobsButtonArr.length; i++) {
      jobsButtonArr[i].style.color = "var(--clr-main-inversed)"
    }
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.border = "var(--bg-color) 2px solid"
    }
    for (var i = 0; i < filterTags.length; i++) {
      filterTags[i].style.color = "var(--bg-color)"
      filterTags[i].style.backgroundColor = "var(--bg-color-inversed)"
    }
    //Job Experience force color change
    //Lazy way to my transition issue.
    //Take these away and they will transition not snap change
    //they literally wont work in a loop either ????????
    //title and date
    document.getElementById("job").style.color = "var(--clr-main-inversed)"
    document.getElementById("date").style.color = "var(--clr-main-inversed)"
    //positions
    document.getElementById("position-1").style.color = "var(--clr-main-inversed)"
    document.getElementById("position-2").style.color = "var(--clr-main-inversed)"
    document.getElementById("position-3").style.color = "var(--clr-main-inversed)"
    //paragraphs
    document.getElementById("paragraph-1").style.color = "var(--clr-main-inversed)"
    document.getElementById("paragraph-2").style.color = "var(--clr-main-inversed)"
    document.getElementById("paragraph-3").style.color = "var(--clr-main-inversed)"
  } else {
    darkModeIcon.src = "./assets/sun-warm.png"
    darkModeIcon.className = "sun"
    mobileDarkModeIcon.src = "./assets/sun-warm.png"
    mobileDarkModeIcon.className = "sun"
    document.body.style.backgroundColor = "var(--bg-color)"
    document.body.style.color = "var(--clr-main)"
    //changes images colors
    instaImage.src = "assets/icons8-instagram-96-white.png"
    linkedinImage.src = "assets/icons8-linkedin-96-white.png"
    githubImage.src = "assets/icons8-github-96-white.png"
    //job button color change
    for (var i = 0; i < jobsButtonArr.length; i++) {
      jobsButtonArr[i].style.backgroundColor = "var(--bg-color)"
    }
    for (var i = 0; i < jobsButtonArr.length; i++) {
      jobsButtonArr[i].style.color = "var(--clr-main)"
    }
    for (var i = 0; i < projectItems.length; i++) {
      projectItems[i].style.border = "var(--bg-color-inversed) 2px solid"
    }
    for (var i = 0; i < filterTags.length; i++) {
      filterTags[i].style.color = "var(--bg-color-inversed)"
      filterTags[i].style.backgroundColor = "var(--bg-color)"
    }
    //Job Experience force color change
    //Lazy way to my transition issue.
    //Take these away and they will transition not snap change
    //they literally wont work in a loop either ????????
    //title and date
    document.getElementById("job").style.color = "var(--clr-main)"
    document.getElementById("date").style.color = "var(--clr-main)"
    //positions
    document.getElementById("position-1").style.color = "var(--clr-main)"
    document.getElementById("position-2").style.color = "var(--clr-main)"
    document.getElementById("position-3").style.color = "var(--clr-main)"
    //paragraphs
    document.getElementById("paragraph-1").style.color = "var(--clr-main)"
    document.getElementById("paragraph-2").style.color = "var(--clr-main)"
    document.getElementById("paragraph-3").style.color = "var(--clr-main)"
  }
}

darkModeButton.addEventListener("click", changeIcon)
mobileDarkModeButton.addEventListener("click", changeIcon)


/*****************************************************************************************
                                End of Dark Mode 
******************************************************************************************/


/*****************************************************************************************
                          Jobs Array for DOM Manipulation
******************************************************************************************/

const jobs = [
  {
    job: "United States Coast Guard",
    title: "Boatswain’s Mate 2nd Class (E-5)",
    date: "April 2016 - April 2020",
    positions: ["Coxswain", "Boarding Officer", "Officer of the Day"],
    positionInfo: [
      "In the United States Coast Guard, the coxswain is the person in charge of a small boat and its crew. The coxswain has the authority to direct all boat and crew activities during the mission and can modify planned missions to provide for the safety of the boat and the crew. At station Chatham, I was given the privilege of being a certified coxswain on the multiple boat types which were valued up to a million dollars. <strong>I accumulated more than 200 underway hours as a coxswain and completed a multitude of missions including, training unit personnel underway, assisting distressed boaters, and medical emergencies. </strong>",
      "Coast Guard Boarding Officers are responsible for leading, directing and training Maritime Law Enforcement Teams. To become a Boarding Officer, you must complete 6 weeks of law enforcement training at the Federal Law Enforcement Training Center (FLETC) in Charleston, South Carolina. During this training you are exposed to the authority and jurisdictions of Coast Guard law enforcement, local and international maritime laws and statutes, as well as critical stress management and decision making in deadly force situations. <strong>As a Boarding Officer I was involved with over 50 recreational boating safety boardings and more than 35 Maritime Security and Response Operations.</strong>",
      "The Officer of the Day (OOD) is responsible for supervising, planning, and executing the daily activities at the unit. The OOD must have critical thinking and extensive knowledge of each mission the unit preforms. During the duty period, which ranges from 48 to 72 hours, the OOD must maintain the unit’s readiness to respond to a multitude of missions during <strong>all</strong> hours of that duty period. The OOD must also have fluid and effective planning to balance training personnel and maintaining unit readiness for missions. This includes maintaining proper boat crews and law enforcement teams that are ready to undertake and complete any mission that may come up. <strong>As the Officer of the Day, I planned and executed upwards of 50 law enforcement events, 7 search and rescue cases, and the training and certification of 10 junior personnel in a collection of qualifications. </strong>"]

  },
  {
    job: "GreenCoast Hydroponics",
    title: "IT Support Specialist",
    date: "September 2020 - July 2021",
    positions: ["IT Support Specialist", "Managed Projects"],
    positionInfo: ["While at GreenCoast Hydroponics, I worked on a 2 person IT team that served 11 store locations, a headquarters and a work from home fleet, combined this summed up to be over 75 workstations and 5 servers. I swiftly became proficient in technologies like NCR Counterpoint, Active Directory, Sonicwall VPNs and Firewalls. <strong>In less than a month I was trusted to solely take control of the helpdesk allowing the Director of Technology to take a hands-off approach to day-to-day support and focus on future deployments and upgrades.</strong>",
      "<strong>Adaptation of the Help Desk</strong>: Before joining the team, there was no help desk or ticketing system since the Director of Technology was the only support for the company. Once I was hired, I was assigned with the company adaptation of a help desk ticketing system. During this time, I created the operating standards for the ticketing system and educated the company on those new standards and use of the ticketing system (ZenDesk). I set up auto forwarding to the Zendesk ticketing system as well as automated replies for solved tickets. This benefited the IT department with an organization tool increasing our response time and rate on tickets. <br><br> <strong>Development + Deployment of new Ad Displays: </strong> With the current ad displays being run by Apple TVs, it was not effective to have the display rendered unusable when a remote was lost. I was tasked to develop and deploy a new process for ad displays. I developed a way for us to display, change and update ads using a Raspberry Pi Zero W. I set each up for SSH access so we could access them from anywhere. This deployment lowered the company’s operating cost from $150 per ad display to $10.<br><br><strong>Deployment of NCR Counterpoint v8.5:</strong> During off hours, over the course of multiple months, we staged upgraded point of sales clients at all locations and stores. On deployment day, I was personally responsible to ensure all personnel were educated on and using the new NCR Client."]

  },
  {
    job: "The Walt Disney Company",
    title: "Lifeguard + Lifeguard Trainer",
    date: "April 2014 - February 2016",
    positions: ["Lifeguard", "Lifeguard Trainer"],
    positionInfo: ["As a lifeguard at The Walt Disney Company, we had different assignments each day at any of the 3 Disney Hotels on the property, each of these hotels had multiple pools and slide features. While on duty we were responsible for all guests within the pool gate. To maintain our lifeguard qualification, we had regular audits to maintain our skills in CPR, first aid and emergency plans and execution for medical emergencies. Audits could be at any time and range from simple first aid questions and role play, to live simulated medical emergencies in and out of the water.",
      "Half-way through my time at The Walt Disney Company I had the opportunity to apply, interview and accept the position of Lifeguard Trainer. As a trainer you were responsible to train the newly hired lifeguards in the day-to-day operation and proper etiquette while being on stand. With the importance of the lifeguard’s role, being a trainer was a position that was taken very seriously to make sure there is no safety hazards whether it was a seasoned lifeguard was on stand or a new lifeguard. While training you were expected to be a hands-on trainer with the new lifeguards. Over the course of a full week of training you are expected to teach the new lifeguards, positions and rotations, etiquette on the stand and proper responses to an abundance of situations that could arise on the pool deck. "]
  }
]

/*****************************************************************************************
                        DOM Manipulation for each job button
******************************************************************************************/

function showCoastGuard() {
  //top information on job
  document.getElementById("job").innerHTML = jobs[0].job
  document.getElementById("title").innerHTML = jobs[0].title
  document.getElementById("date").innerHTML = jobs[0].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[0].positions[0]
  document.getElementById("position-2").innerHTML = jobs[0].positions[1]
  document.getElementById("position-3").innerHTML = jobs[0].positions[2]
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[0].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[0].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = jobs[0].positionInfo[2]
  //selector afterglow
  document.getElementById("coast-guard-button").classList.add("glowing")
  document.getElementById("green-coast-button").classList.remove("glowing")
  document.getElementById("disney-button").classList.remove("glowing")

}

function showGreenCoast() {
  //top information on job
  document.getElementById("job").innerHTML = jobs[1].job
  document.getElementById("title").innerHTML = jobs[1].title
  document.getElementById("date").innerHTML = jobs[1].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[1].positions[0]
  document.getElementById("position-2").innerHTML = jobs[1].positions[1]
  document.getElementById("position-3").innerHTML = ""
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[1].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[1].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = ""
  //afterglow
  document.getElementById("green-coast-button").classList.add("glowing")
  document.getElementById("coast-guard-button").classList.remove("glowing")
  document.getElementById("disney-button").classList.remove("glowing")
}
function showDisney() {
  //top information on job
  document.getElementById("job").innerHTML = jobs[2].job
  document.getElementById("title").innerHTML = jobs[2].title
  document.getElementById("date").innerHTML = jobs[2].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[2].positions[0]
  document.getElementById("position-2").innerHTML = jobs[2].positions[1]
  document.getElementById("position-3").innerHTML = ""
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[2].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[2].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = ""
  //afterglow
  document.getElementById("disney-button").classList.add("glowing")
  document.getElementById("green-coast-button").classList.remove("glowing")
  document.getElementById("coast-guard-button").classList.remove("glowing")
}

document.getElementById("coast-guard-button").addEventListener("click", showCoastGuard)
document.getElementById("green-coast-button").addEventListener("click", showGreenCoast)
document.getElementById("disney-button").addEventListener("click", showDisney)


/*****************************************************************************************
                                Mobile Nav Functionality
******************************************************************************************/


const mobileMenu = document.getElementById("mobile-nav")
const hamburger = document.getElementById("hamburger")
const linksUL = document.querySelector(".mobile-links")
const linksLI = document.querySelectorAll(".nav-li")

const closeNav = () => {
  mobileMenu.classList.replace("mobile-showing", "mobile-hidden")
  hamburger.src = "./assets/hamburger-menu.png"
}

const mobileMenuButtons = document.querySelectorAll(".mobile-link")

for (var i = 0; i < mobileMenuButtons.length; i++) {
  mobileMenuButtons[i].addEventListener("click", () => {
    closeNav()
  })
}

window.addEventListener("mouseup", (e) => {
  if (mobileMenu.classList.contains("mobile-showing") && e.target != mobileMenu && e.target != mobileDarkModeButton && e.target != linksUL && e.target != "<li>") {
    closeNav();
  } else if (e.target == hamburger) {
    hamburger.src = "./assets/close.png"
    mobileMenu.classList.replace("mobile-hidden", "mobile-showing")
  }
})


