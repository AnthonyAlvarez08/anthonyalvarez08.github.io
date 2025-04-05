let OfMiceAndFrogs = new Project(
    "Of Mice and Frogs",
    ["Unity Game Engine", "C#", "GitHub"],
    Status.Finished,
    `This is a game my teammates and I made for "Game Design Studio" at Northwestern University. 
    Once can conceptualize this class as a kind of game development capstone class and this project is the largest software engineering endeavour which I have undertaken. In terms of metrics, I have 112 commits to this project.
    <br> In the game you play as a little mouse that uses a yoyo to fight through an army of frogs in a dungeon.
    <br> I was in charge of the player controller, the map system, and the pause menus.
    <br> Collaborated with: Evan Bertis-Sample, Tae In Shim, and Matthew Khoriaty.`,
    "",
    "https://anthonyalvarez08.itch.io/of-mice-and-frogs",
    "",
    ["OfMiceAndFrogsTitleScreen.png", "omaf_screenshot3.png"],
);



// let Clood = new Project(
//     "Clood To-Do app",
//     ["AWS", "MySQL", "Python", "Flask", "HTML", "JavaScript", "SQL"],
//     Status.InProgress,
//     `<p>Clood is a cloud based to do app/website to let you keep track of your task lists across devices.</p>
//     <p>I started this project to show that I can apply what I learned in the Scalable Software Architectures class at Northwestern.</p>
//     <p>I will be taking inspiration from the app TickTick which is what I actually use to manage my own task list.</p>
//     <p>Not yet deployed as it is in the early stages of development.</p>`,
//     "https://github.com/AnthonyAlvarez08/TodoApp"
// );


let DTC = new Project(
    "Table Extension - Design Thinking and Communication project",
    ["Bridgerport Mill", "Project Management", "Leadership"],
    Status.Finished,
    `<p>Tool to aid in physical therapy for patients with hemiparesis. It stops patients' arms from falling off the table.</p>
    <p>This prototype was developed for Dr. Andrew Morris at the Shirley Ryan Ability Lab.</p>
    <p>Collaborators: Maeve Brady, Candy Mei, Lucas Takayasu.</p>`,
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

// let lax = new Project(
//     "Automated Lacrosse Goalie (Northwestern University Robotics Club)",
//     ["Python", "OpenCV", "NumPy"],
//     Status.InProgress,
//     `
//     <span>NURC wants to make an automated lacrosse goalie that can stop any shot from a lacrosse player and I will be leading the computer vision side of things.</span>
//     <br><span>Currently the goalie consists of a frame that can move a stopper on a 2D axis in front of the goal and it is controlled by a PS4 controller.</span>
//     <br><span>Our goal is to make it fully autonomous by the end of this school year. We will use OpenCV and python to do so.</span>
//     <br><br>
//     <p>Goals for this project:</p>
//     <ul>
//         <li>Main Goal: The robot should be able to stop any shot from outside a 12 meter radius</li>
//         <li>Extra Goal: The robot should be able to stop any shot from outside an 8 meter radius</li>
//     </ul>

//     <p>NURC will evaluate its performance by pitting it against Northwestern's women's lacrosse team 
//     - the #1 ranked team and second place in the NCAA D1 2024 women's lacrosse championship.</p>

//     <p>Estimated completion time: May 2025</p>

    
    
//     `
// );


let tockDriver = new Project(
    "SPI and WiFi driver for TockOS and a Raspberry Pi microcontroller",
    ["Rust", "Raspberry Pi Pico", "Tock"],
    Status.Finished,
    `
    <p>
        An SPI driver on top of the Programmable IO Units on the RP2040 for a Raspberry Pi Pico WH. This driver was developed for <a href="https://tockos.org/">Tock OS</a> with the eventual end goal of communicating with the WiFi chip on the RP Pico WH and adding general WiFi capabilities to Tock.
        <br> This started as a project for the Northwestern CS research track program at Northwestern University which I did with Jason Hu, and our , professor Branden Ghena.
        <br> The driver has since been merged into the official Tock OS repository.

        <br><br> Next Steps: <br>
        <ul>
            <li>Make a driver for the Infineon CYW43439 WiFi chip on the Raspberry Pi Pico and Tock OS</li>
            <li>Design the hardware abstraction for WiFi and other network devices for Tock OS</li>
        </ul>

    </p>

    
    `,
    "https://github.com/tock/tock/blob/master/chips/rp2040/src/pio_spi.rs"
);


let codelabs = new Project(
    "CodeDay Labs Summer Program Project",
    ["Python", "Flask", "HTML"],
    Status.Finished,
    `My teammates and I developed a simple web-based card game in collaboration with Python and Flask.
    <br>I programmed the game logic in Python as well as real time cross-game communication with Socket.IO.
    <br>My teammates and I were the only beginner track team recognized by CodeDay Labs and featured on the CodeDay blog for outstanding project work (see link above).
    
    `,
    "https://github.com/AnthonyAlvarez08/CodeLabs-Gamedev",
    "https://blog.codeday.org/codeday-labs-2020",
);



let cs310 = new Project(
    "Cloud Based Image Filters - Scalable Software Architectures final project",
    ["Python", "AWS: S3 RDS Lambda", "MySQL", "OpenCV"],
    Status.Finished,
    `I used several AWS services such as S3, RDS, and Lambda to create a REST API that would allow users to upload and store images on the cloud, as well as perform various filters on the image.
    <br> I used OpenCV to make a wide variety of filters such as blurring, edge detecting, "deep frying the image", and high contrast filters.
    <br> I also built a simple CLI client in Python.
    <p>Demo submitted for class below</p>
    <video controls>
        <source src="./assets/cs310_demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video> 

    `

);

let ProjectList = [tockDriver, OfMiceAndFrogs, tulin, cs310, DTC, codelabs];