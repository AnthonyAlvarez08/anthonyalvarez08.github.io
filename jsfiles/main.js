

function onload() {
    console.log("Hello there! peeking the browser console I see?");


    var projDiv = document.getElementById("projects");


    var stg = ``;
    for (var proj of ProjectList) {
        stg = stg.concat(
            `
            <li>
                <h4>
                    ${proj.Title}

                    <a href="${proj.Link}" target="_blank" rel="noopener noreferrer">
                        <button>link</button>
                    </a> 
                </h4>
                <p>${proj.Description}</p>
                

            </li>
            
            `
        );
    }


    projDiv.innerHTML = stg;

}