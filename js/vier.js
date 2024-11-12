const imagePreview = document.querySelector("#image-preview");
const fileInputs = document.querySelectorAll(".imgInput");
const downloadButton = document.querySelector("#download-cards");
const kaarten = document.querySelectorAll(".kaart");
const imgSrcArray = [];
const pngArray = [];

function displayImage(cardId, file) {
    const imgSrc = URL.createObjectURL(file);
    const imgEl = document.createElement("img");
    imgEl.style.width = "100%";
    imgEl.style.height = "100%";
    imgEl.style.objectFit = "cover";
    imgEl.style.borderRadius = "12px";

    imgEl.src = imgSrc;
    document.querySelector(`#image-preview-${cardId}`).appendChild(imgEl);
}

function kaartDownload(imgSrcArray) {
    kaarten.forEach((kaart, index) => {
        const cardInputs = kaart.querySelectorAll('input[type="text"]');
        const cardValues = [];
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.display = 'none';
        canvas.style.objectFit = 'cover';

        cardInputs.forEach((input) => {
            cardValues.push(input.value);
        });

        if (imgSrcArray[index]) {
            const imgSrc = imgSrcArray[index];

            canvas.width = 780;
            canvas.height = 1182;

            document.body.appendChild(canvas);

            img.src = imgSrc;

            img.addEventListener('load', () => {
                const inset = 30;
                const newWidth = canvas.width - 2 * inset;

                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3;
                ctx.strokeRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = 'black';

                ctx.font = '80px Arial';
                ctx.fillText(`${cardValues[0]}`, 28, 650);

                ctx.font = '50px Arial';
                ctx.fillText(`${cardValues[1]}`, 26, 760);

                ctx.font = '40px Arial';
                ctx.fillText(`${cardValues[2]}`, 27, 860);
                ctx.fillText(`${cardValues[3]}`, 27, 940);
                ctx.fillText(`${cardValues[4]}`, 27, 1020);
                ctx.fillText(`${cardValues[5]}`, 27, 1100);
                ctx.drawImage(img, inset, inset, newWidth, 500);
            });

            // maak png van canvas, en sla op in de array


        }
    });
    const zip = new JSZip();


    // zip.file("Hello.txt", "Hello World\n");
    
    // stop alle pngs uit de array in de zip

    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "example.zip");
    });
}

fileInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        const label = e.target.parentElement;
        const span = label.querySelector('span');
        console.log(span); // Log the selected span element

        const cardId = e.target.getAttribute("data-card-id");
        const file = e.target.files[0];

        if (file) {
            const imgSrc = URL.createObjectURL(file);
            imgSrcArray.push(imgSrc);
            displayImage(cardId, file);
        }
    });
});

downloadButton.addEventListener("click", function () {
    kaartDownload(imgSrcArray);
});

window.addEventListener("load", function () {
    setTimeout(function () {
        $("#stelsamen").fadeIn();
    }, 25);
});
