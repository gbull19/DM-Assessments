document.getElementById("color").addEventListener("click", () => {
    alert("My favorite color is money green")
});

document.getElementById("place").addEventListener("click", () => {
    alert("My favorite place is Pier 39 in San Francisco")
});
document.getElementById("ritual").addEventListener("click", () => {
    alert("My favorite ritual is alter sacrifices")
});

const revertLebron = () => {
    document.getElementById("img1").src = "https://github.com/gbull19/hosting/blob/main/the_most_interesting_man_in_the_world_640_03.webp?raw=true";
}

document.getElementById("img1").addEventListener("click", () => {
    document.getElementById("img1").src = "https://github.com/gbull19/hosting/blob/main/LeBron%20Flop.jpg?raw=true";
    setTimeout(revertLebron, 6000);
});

const revertGengar = () => {
    document.getElementById("img2").src = "";}

document.getElementById("gengar").addEventListener("click", () => {
    document.getElementById("img2").src = "https://github.com/gbull19/hosting/blob/main/matheus-carrera-gengar4.jpg?raw=true";
    setTimeout(revertGengar, 3000);
})