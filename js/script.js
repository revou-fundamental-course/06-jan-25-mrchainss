document.getElementById("message-us-button").addEventListener("click", function () {
    const target = document.getElementById("meseg");
    target.scrollIntoView();
});

document.getElementById("submit-button").addEventListener("click", function () {
    const inputNama = document.getElementById("nama").value.trim();
    const nameSpan = document.getElementById("name");
    const inputPesan = document.getElementById("pesan").value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');

    nameSpan.textContent = inputNama;

    let messageContent = `Nama: ${inputNama || "Tidak diisi"}\n`;
    messageContent += `Jenis Kelamin: ${jenisKelamin.value}\n`;
    messageContent += `Pesan: ${inputPesan || "Tidak ada pesan"}`;
    const isiMessage = document.getElementById("isi-message");
    isiMessage.value = messageContent;
})