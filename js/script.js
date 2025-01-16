document.getElementById("message-us-button").addEventListener("click", function () {
    const target = document.getElementById("meseg");
    target.scrollIntoView();
});

document.getElementById("submit-button").addEventListener("click", function () {
    const inputNama = document.getElementById("nama").value.trim();
    const nameSpan = document.getElementById("name");
    if (inputNama) {
        nameSpan.textContent = inputNama;

    const inputNama = document.getElementById("tl").value.trim();
    const nameSpan = document.getElementById("tl");
}
});
