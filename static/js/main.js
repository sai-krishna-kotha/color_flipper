// let colors = ['black', 'blue', 'yellow', 'red'];
// let currentIndex = 0;

function ChangeColor() {
    const rgbValues = getRandomRGB();
    document.body.style.backgroundColor = rgbValues;
    document.getElementById('current-color-id').innerHTML = rgbValues;
    // if (colors[currentIndex] == "black" || colors[currentIndex] == "blue"){
    //     document.querySelector('.current-color').style.color = 'white';
    // } else{
    //     document.querySelector('.current-color').style.color = 'black';
    // }
    document.querySelector('.current-color').style.color = rgbValues;
    // currentIndex = (currentIndex + 1) % colors.length;
}
function getRandomRGB(){
    const r = Math.random()*256;
    const g = Math.random()*256;
    const b = Math.random()*256;
    return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`
}
console.log(getRandomRGB());