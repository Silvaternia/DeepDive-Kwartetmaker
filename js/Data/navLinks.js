const navigationCon = document.getElementById("navSteps");
const classes = "rounded-md text-center font-medium text-black px-4 py-2".split(" ");

const stepLinks = [
    { name: "1", link: "./kwartetSelector.html" },
    { name: "2", link: "./kwartetType.html" },
    { name: "3", link: "./kwartetInfo.html" },
    { name: "4", link: "./kwartetDisplay.html" },
]

const generateStepLinks = () => {
    if (!stepLinks) return;

    stepLinks.forEach((step) => {
        const isActive = checkCurrentUrl(step.link);
        const stepLink = document.createElement("a");
        classes.forEach(cls => stepLink.classList.add(cls));
        if (isActive) {
            stepLink.classList.add("bg-orange-500/80");
        }
        stepLink.textContent = step.name;
        stepLink.href = step.link;
        navigationCon.appendChild(stepLink);

    });
}

const checkCurrentUrl = (url) => {
    const currentPath = window.location.pathname.split("/").pop();
    const currentUrl = url.replace("./", "")

    return currentPath.includes(currentUrl);
};

export default generateStepLinks;