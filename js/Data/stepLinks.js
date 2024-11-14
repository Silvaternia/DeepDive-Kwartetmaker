const navigationCon = document.getElementById("step-navigation");
const classes = "rounded-2xl w-12 text-center text-black  p-4".split(" ");

const stepLinks = [
    { name: "1", link: "#" },
    { name: "2", link: "#" },
    { name: "3", link: "#" },
    { name: "4", link: "#" },
]

const generateStepLinks = () => {
    stepLinks.forEach((step) => {
        const stepLink = document.createElement("a");
        classes.forEach(cls => stepLink.classList.add(cls));
        stepLink.textContent = step.name;
        stepLink.href = step.link;
        navigationCon.appendChild(stepLink);

    });
}

export { generateStepLinks };