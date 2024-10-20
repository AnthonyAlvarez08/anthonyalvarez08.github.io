

function onload() {
    console.log("Hello there! peeking the browser console I see?");


    var projDiv = document.getElementById("projects");


    var classes = ["light-proj", "dark-proj"];
    var flip = 0;

    var stg = ``;
    for (var proj of ProjectList) {


        var link = '';
        if (proj.Link != "") {
            link = `
                    <a href="${proj.Link}" target="_blank" rel="noopener noreferrer">
                        <button>link</button>
                    </a> 
            `
        }

        stg = stg.concat(
            `
            <li class=${classes[flip]}>
                <h4>
                    ${proj.Title}

                    ${link}                    
                </h4>

                <span>Status: ${proj.Status}</span><br>
                <span>Tools Used: ${proj.TechUsed.join(" | ")}  </span>
                <p>${proj.Description}</p>
                

            </li>
            
            `
        );

        flip += 1;
        flip %= 2;
    }


    projDiv.innerHTML = stg;



    var stg2 = ``;
    var comingSoonDiv = document.getElementById("comingSoon");
    for (var proj of ComingSoon)
    {
        var link = '';
        if (proj.Link != "") {
            link = `
                    <a href="${proj.Link}" target="_blank" rel="noopener noreferrer">
                        <button>link</button>
                    </a> 
            `
        }

        stg2 = stg2.concat(
            `
            <li class=${classes[flip]}>
                <h4>
                    ${proj.Title}

                    ${link}                    
                </h4>

                <span>Status: ${proj.Status}</span><br>
                <span>Tools Used: ${proj.TechUsed.join(" | ")}  </span>
                <p>${proj.Description}</p>
                

            </li>
            
            `
        );

        flip += 1;
        flip %= 2;
    }

    comingSoonDiv.innerHTML = stg2;



}