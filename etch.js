let area = document.querySelector(".area");
startArea();

function newgrid() {
    let newGrid = document.querySelector(".new-grid");
    newGrid.addEventListener('click', () => {
        let divchalar = document.getElementsByClassName("remove");
        for (let i = divchalar.length; i > 0; i--) {
            divchalar[0].parentNode.removeChild(divchalar[0]);         
        }
        startArea();
    });
}

function qora() {
    let blackButton = document.querySelector('.black');
    let black = document.querySelectorAll(".remove");
    blackButton.addEventListener('click', () => {
        black.forEach(item => {
            item.addEventListener('mouseover', ()=> {
                item.style.cssText = "background-color: black;"     
            });
        });
    });
}

function rainbow() {
    let rainbowButton = document.querySelector('.rainbow'); 
    let black = document.querySelectorAll(".remove");
    rainbowButton.addEventListener('click', () => {
        black.forEach(item => {
            item.addEventListener('mouseover', ()=> {
                item.style.cssText = `background-color: rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`     
            });
        });  
    });
}

function oq() {
    let resetButton = document.querySelector('.reset');
    let black = document.querySelectorAll(".remove");
    resetButton.addEventListener('click', ()=> {
        black.forEach(item  => {
            item.style.cssText = "background-color: white"
        });
    });
}

function startArea() {
    let divArea = prompt("How many etch do you need?");
    area.style.cssText = `display: grid; grid-template-columns: repeat(${divArea}, 1fr); grid-template-rows: repeat(${divArea}, 1fr);`
    for (let i = 0; i < divArea**2; i++) { 
        let divcha = document.createElement("div");
        divcha.classList = "remove";
        area.appendChild(divcha);
    }
    newgrid();
    qora();
    oq();
    rainbow();
}







// let black = document.querySelectorAll(".area > div");


// let newGrid = document.querySelector(".new-grid");
// newGrid.addEventListener('click', newgrid);

// let blackButton = document.querySelector('.black');
// blackButton.addEventListener('click', qora);

// let rainbowButton = document.querySelector('.rainbow'); 
// rainbowButton.addEventListener('click', rainbow);

// let resetButton = document.querySelector('.reset');
// resetButton.addEventListener('click', oq);


// let divcha = document.querySelector(".remove");
// divchalar.forEach(item => {
//     item.parentNode.removeChild(divcha);         
// });

// for (let i = 0; i < black.length; i++) {
    //     black[i].style.cssText = "background-color: white;"
    // } 
    // let blackNext = document.querySelector(".area > div")
    
    // blackNext.addEventListener('mouseover', ()=> {
    //     blackNext.style.cssText = "background-color: black"
    // });