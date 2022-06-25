let projectLinkUrl = "";
let clicked_id;

function saveId(id)
{
    clicked_id = id;
    window.open('./viewer.html', '_self');

    if (id == 'PB1'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/';
    }
    else if (id == 'PB2'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/';
    }
    else if (id == 'PB3'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/';
    }
    else if (id == 'PB4'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/';
    }
    else if (id == 'PB5'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/';
    }
    else {
        alert('\nThere is no model for this project yet.\nPlease make a selection between Project nº1 and Project nº5.');
        window.open('./index.html', '_self');
    }

    var selectedProject = projectLinkUrl;
    sessionStorage.setItem("selectedProject", projectLinkUrl);
}