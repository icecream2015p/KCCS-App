function pagemove(){
    let element = document.querySelector(".PageNumber");
    if(element.value < 1){
        element.value = 1;
    }
    else if(element.value > 9){
        element.value = 9;
    }
    location.href = element.value + ".html";
}

function pagedown(){
    location.href = (parseInt(parseIntlastPathSegment()) - 1) + ".html";
}

function pageup(){
    location.href = (parseInt(lastPathSegment()) + 1) + ".html";
}

function pagetop(){
    location.href = "../tutorial.html";
}

let lastPathSegment = function() {
    const path = window.location.pathname;
    const lastSegment = path.split('/').pop();
    const nameWithoutExtension = lastSegment.split('.')[0];
    return nameWithoutExtension;
}