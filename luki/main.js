var centerBenner;

window.onload = function(){
    centerBenner = document.querySelector(".benner_img > img");
}

function header_edu(){
    location.href = "test.html";
}

function header_re(){
    location.href = "test.html"
}

function header_share(){
    location.href= "test.html"
}

function E1(){
    centerBenner.src = "./img/main/benner_1.png";
}

function E2(){
    centerBenner.src = "./img/main/benner_2.png";
}

function E3(){
    centerBenner.src = "./img/main/benner_3.png";
}

function E4(){
    centerBenner.src = "./img/main/benner_4.png";
}

function E5(){
    centerBenner.src = "./img/main/benner_5.png";
}

function E6(){
    centerBenner.src = "./img/main/benner_6.png";
}

function E7(){
    centerBenner.src = "./img/main/benner_7.png";
}

function controlMainRight(){
    let tag = document.querySelector(".control_main > #main_control_text");
    const imgList = [
        "./img/main/benner_1.png", 
        "./img/main/benner_2.png", 
        "./img/main/benner_3.png", 
        "./img/main/benner_4.png", 
        "./img/main/benner_5.png", 
        "./img/main/benner_6.png", 
        "./img/main/benner_7.png"];

    text = tag.innerText;
    
    let location = Number(text.substr(0, 1));
    let after_location;

    if(location === 1) after_location = 1;
    else if(location === 7) {after_location = 0; location = 0;}
    else after_location = location;

    centerBenner.src = imgList[(after_location)];
    tag.innerText = parseInt(location + 1) + "/7";
}

function controlMainLeft(){
    let tag = document.querySelector(".control_main > #main_control_text");
    const imgList = [
        "./img/main/benner_1.png", 
        "./img/main/benner_2.png", 
        "./img/main/benner_3.png", 
        "./img/main/benner_4.png", 
        "./img/main/benner_5.png", 
        "./img/main/benner_6.png", 
        "./img/main/benner_7.png"];

    text = tag.innerText;
    
    let location = Number(text.substr(0, 1));
    let after_location;

    if(location === 1) {after_location = 6;}
    else if(location === 7) {after_location = 5;}
    else after_location = location - 2;

    console.log(after_location);
    centerBenner.src = imgList[(after_location)];
    tag.innerText = parseInt(after_location + 1) + "/7";
}

function revealDiv(target){
    let hidden = target.querySelector(".hidden_div");

    hidden.style="display: block;";
}

function hideDiv(target){
    let hidden = target.querySelector(".hidden_div");

    hidden.style="display: none;";
}