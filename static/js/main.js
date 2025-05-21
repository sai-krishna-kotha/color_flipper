let colors = ['black', 'blue', 'yellow', 'red'];
let currentIndex = 0;

function ChangeColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    document.getElementById('current-color-id').innerHTML = colors[currentIndex];
    // if (colors[currentIndex] == "black" || colors[currentIndex] == "blue"){
    //     document.querySelector('.current-color').style.color = 'white';
    // } else{
    //     document.querySelector('.current-color').style.color = 'black';
    // }
    currentIndex = (currentIndex + 1) % colors.length;
}