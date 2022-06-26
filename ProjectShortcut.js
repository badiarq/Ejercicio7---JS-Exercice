let projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/';
function ProjetShortcut(id)
{
    if (id == 'ps1'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/';
    }
    else if (id == 'ps2'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/';
    }
    else if (id == 'ps3'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/';
    }
    else if (id == 'ps4'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/';
    }
    else if (id == 'ps5'){
        projectLinkUrl = 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/';
    }
    else {
        alert('\nThere is no model for this project yet.\nPlease make a selection between Project nº1 and Project nº5.');
        window.open('./viewer.html', '_self');
    }

    document.getElementById('iframeId').src = projectLinkUrl;
}