const container = document.querySelector(".container");

const colors = ["#1abc9c","#9b59b6","#2c3e50","#f1c40f"];

function makeColorsElements (colors) {
    colors.forEach(element => {
        const div = document.createElement("div");
        div.className = "colors";
        div.style.backgroundColor = element;
        container.appendChild(div);
        div.addEventListener("click", function () {
            document.body.style.backgroundColor = element;
            navigator.clipboard.writeText(element);
            alert(element + " Copyed " )
        })
    });
}
makeColorsElements(colors)