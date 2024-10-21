let OfMiceAndFrogs = new Project(
    "Of Mice and Frogs",
    ["Unity Game Engine", "C#", "GitHub"],
    Status.Finished,
    `This is a game my teammates and I made for "Game Design Studio" at Northwestern University. 
    Once can conceptualize this class as a kind of game development capstone class and this project is the largest software engineering endeavour which I have undertaken.
    <br> In the game you play as a little mouse that uses a yoyo to fight through an army of frogs in a dungeon.
    <br> I was in charge of the player controller, the map system, and the pause menus.
    <br> Collaborated with: Evan Bertis-Sample, Tae In Shim, and Matthew Khoriaty.`,
    "",
    "https://anthonyalvarez08.itch.io/of-mice-and-frogs",
    "",
    ["OfMiceAndFrogsTitleScreen.png", "omaf_screenshot3.png"],
);



let Clood = new Project(
    "Clood To-Do app",
    ["AWS", "MySQL", "Python", "Flask", "HTML", "JavaScript", "SQL"],
    Status.InProgress,
    `<p>Clood is a cloud based to do app/website to let you keep track of your task lists across devices.</p>
    <p>Not yet deployed as it is in the early stages of development.</p>`,
    "https://github.com/AnthonyAlvarez08/TodoApp"
);


let DTC = new Project(
    "Table Extension",
    ["Bridgerport Mill"],
    Status.Finished,
    "Tool to aid in physical therapy for patients with hemiparesis. It stops patients' arms from falling off the table.",
    "",
    "https://sites.google.com/u.northwestern.edu/dtc26-team1/home",
    "",
    ["table_extension.png"]

);

let tulin = new Project(
    "Tulin - Mini Bot for Deathpact the 30lb combat robot",
    ["SolidWorks", "3D Printing", "Prusa Slicer"],
    Status.Finished,
    `<p>Northwestern University's Robotics Club regularly competes in NHRL, the US's biggest combat robotics competition for the 30lb weight class. </p>
    <p>After helping the club qualify for the 2023 NHRL world championships, the Combat Robotics leads tasked me with making a mini-bot for our 30lb robot Deathpact.
    I engineered and built a 5lb mini-bot that was essentialy a two wheeled, armored RC car with three spikes in the front.</p>


    <p>This was my first real engineering project that I've completed outside of school work. I learned a lot about project management: </p>
    <ul>
        <li> keeping the project within budget.                 </li>
        <li> creating and excuting manufacturing plans.         </li>
        <li> creating and following my own project timeline (only deadline was showing up to NHRL).    </li>
        <li> presenting my design to the club.                  </li>
    </ul>
 
    <p>
   `, 
   "",
   "",
   "",
   ["Tulin.jpg", "TulinBadge.jpg"]
);

let lax = new Project(
    "Automated Lacrosse Goalie (Northwestern University Robotics Club)",
    ["Python", "OpenCV", "NumPy"],
    Status.InProgress,
    `
    <span>NURC wants to make an automated lacrosse goalie that can stop any shot from a lacrosse player and I will be leading the computer vision side of things.</span>
    <br><span>Currently the goalie consists of a frame that can move a stopper on a 2D axis in front of the goal and it is controlled by a PS4 controller.</span>
    <br><span>Our goal is to make it fully autonomous by the end of this school year.</span>
    <br><br>
    <p>Goals for this project:</p>
    <ul>
        <li>Main Goal: The robot should be able to stop any shot from outside a 12 meter radius</li>
        <li>Extra Goal: The robot should be able to stop any shot from outside an 8 meter radius</li>
    </ul>

    <p>Evaluation plan: Gather Northwestern's women's lacrosse team to take shots at the goalie.</p>

    <p>Estimated completion time: May 2025</p>

    
    
    `
);


let tockDriver = new Project(
    "SPI and WiFi driver for TockOS and a Raspberry Pi microcontroller",
    ["Rust", "Raspberry Pi"],
    Status.InProgress,
    `
    <p>This coming January, my teammate Jason Hu and I will be mentored by professeor Branden Ghena to develop a wifi driver for TockOS, an operating sytem designed for microcontrollers.</p>
    <p>Estimated completion time: April 2025</p>
    
    `
);



let ProjectList = [OfMiceAndFrogs, lax, tulin, tockDriver, DTC];
let ComingSoon = [Clood];