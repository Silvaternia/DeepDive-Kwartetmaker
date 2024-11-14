const navigationCon = document.getElementById("step-navigation");

const stepLinks = [
    { name: "1", link: "#" },
    { name: "2", link: "#" },
    { name: "3", link: "#" },
    { name: "4", link: "#" },
]

const generateStepLinks = () => {
    stepLinks.forEach((step) => {
        const stepLink = document.createElement("a");
        stepLink.textContent = step.name;
        stepLink.href = step.link;
        navigationCon.appendChild(stepLink);

    });
}

export { generateStepLinks };