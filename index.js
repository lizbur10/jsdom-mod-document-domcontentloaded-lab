/* code goes here */
document.addEventListener('DOMContentLoaded', () => {
    let e = document.querySelector("div#hidden-div");
    let newVal = parseInt(e.innerText) + 1;
    e.innerText = newVal
}
