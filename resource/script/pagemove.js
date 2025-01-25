function pagemove(url, isexternalsite, usenewtab){
    if(isexternalsite){
        pagemoveIE(url, usenewtab)
    }
    else{
        location.href = url
    }
}

function pagemoveIE(url, usenewtab){
    if(usenewtab){
        open("https://www.icecream2015p.com/redirect/?url=" + url)
    }
    else{
        location.href = "https://www.icecream2015p.com/redirect/?url=" + url
    }
}
