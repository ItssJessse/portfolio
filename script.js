const title = document.getElementById("title");
const portrait = document.querySelector(".portrait");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX);
    const y = (window.innerHeight / 2 - e.clientY);

    title.style.transform = `
        translate(${x * 0.015}px, ${y * 0.015}px)
    `;

    portrait.style.transform = `
        translate(${x * 0.03}px, ${y * 0.03}px)
    `;

});