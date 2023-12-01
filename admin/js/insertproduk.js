import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
export let URLPost = `https://asia-southeast2-msyahid.cloudfunctions.net/InsertDataProduk`
export let token = 'token';


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(URLPost, token, data, ResponsePost)
    });
});

    export function GetDataForm(){
        const nama = document.querySelector("#nama").value;
        const harga = document.querySelector("#harga").value;
        const deskripsi = document.querySelector("#deskripsi").value;
        const stok = document.querySelector("#stok").value;
        console.log(nama)
    
        const data = {
            nama: nama,
            harga: harga,
            deskripsi: deskripsi,
            stok : stok,
        };
        return data
    }
    
    export function ResponsePost(result) {
        AlertPost(result);
    }