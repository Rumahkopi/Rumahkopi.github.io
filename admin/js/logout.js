import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

function logout() {
    var result = confirm("yakin?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "https://rumahkopi.github.io/";
    }
}

document.getElementById("button").addEventListener("click", logout)