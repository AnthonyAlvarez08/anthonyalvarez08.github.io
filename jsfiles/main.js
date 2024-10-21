

function projFormat(proj, class_) {
    var stg = ``;

    var link = '';
    if (proj.Link != "") {
        link = `
                <a href="${proj.Link}" target="_blank" rel="noopener noreferrer">
                    <span class="link-button">LINK</span>
                </a> 
        `
    }
    var github = '';
    if (proj.GitHub != "") {
        github = `
                <a href="${proj.GitHub}" target="_blank" rel="noopener noreferrer">
                    <span class="link-button">GitHub Repo</span>
                </a> 
        `
    }


    var pics = ``;
    if (proj.ImagePaths.length > 0)
    {
        for (var pic of proj.ImagePaths) {
            pics = pics.concat(
                `<img src="./pictures/${pic}" class="proj-image"/>`
            );
        }
    }

    pics = "<p>" + pics + "</p>";



    stg = stg.concat(
        `
        <li class=${class_}>
            <h4>
                ${proj.Title}
                ${link}
                ${github}               
            </h4>
            <span>Status: ${proj.Status}</span><br>
            <span>Tools/Skills Used: ${proj.TechUsed.join(" | ")}  </span>

            ${pics}
            <p>${proj.Description}</p>
            
        </li>
        
        `
    );

    return stg;
}

function workFormat(work, class_)
{
    return `
        <li class="${class_}">
            <p>
                <b>${work.Company}</b>, ${work.Title}, ${work.Time}
            </p>
            <p>${work.Description}</p>
            
        </li>
        
        `
}

function onload() {
    console.log("Hello there! peeking the browser console I see?");



    //* Handle projects
    var projDiv = document.getElementById("projects");


    var classes = ["light-proj", "dark-proj"];
    var flip = 0;

    var stg = ``;
    for (var proj of ProjectList) {


        stg = stg.concat(projFormat(proj, classes[flip]));

        flip += 1;
        flip %= 2;
    }


    projDiv.innerHTML = stg;
    var stg2 = ``;
    var comingSoonDiv = document.getElementById("comingSoon");
    flip = 0;
    for (var proj of ComingSoon)
    {
        stg2 = stg2.concat(projFormat(proj, classes[flip]));

        flip += 1;
        flip %= 2;
    }

    comingSoonDiv.innerHTML = stg2;


    //* handle work experiences
    var workDiv = document.getElementById("work");
    var workStg = ``;
    flip = 0;
    for (var work of workList) {
        workStg = workStg.concat(workFormat(work, classes[flip]));

        flip += 1;
        flip %= 2;
    }

    workDiv.innerHTML = workStg;



}