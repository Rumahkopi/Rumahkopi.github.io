import { postWithBearer } from "https://jscroot.github.io/api/croot.js";

export let URLPost = `https://asia-southeast2-msyahid.cloudfunctions.net/InsertDataTransaksi`
export let productNames, alamat, totalPrice = `./assets/js/app.js`




document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
         // Display loading overlay
        showLoadingOverlay();
        let data = GetDataForm();
        postWithBearer(URLPost, token, data, ResponsePost)
    });
});

    export function GetDataForm(){
        const namaproduk = document.querySelector("#productNames").value;
        const total = document.querySelector("#totalProducts").value;
        const namapembeli = document.querySelector("#nama").value;
        const alamat = document.querySelector("#alamat").value;
        const nohp = document.querySelector("#nohp").value;
        console.log(namapembeli)
    
        const data = {
            namaproduk: namaproduk,
            total : total,
            namapembeli : namapembeli,
            email : email,
            alamat : alamat,
            nohp : nohp,
        };
        return data
    }
    
    function showLoadingOverlay() {
        // Show loading overlay
        document.getElementById('loader-wrapper').style.display = 'flex';
      }
      
      function hideLoadingOverlay() {
        // Hide loading overlay
        document.getElementById('loader-wrapper').style.display = 'none';
      }

    export function ResponsePost (result) {
        hideLoadingOverlay();
        console.log(result,result.status)
      if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Success Silahkan lanjutkan Pembayaran Melewati WhatsApp Ini.",
            confirmButtonColor: '#000',
        }).then(() => {
          const whatsappMessage = `Halo, saya ingin memesan produk sebagai berikut:%0A${productNames}%0A%0AAlamat Pengiriman:%0A${alamat}%0A%0ATotal Harga:%20Rp.${totalPrice}`;

          // Combine the WhatsApp number and message
          const whatsappLink = `https://wa.me/6285784718312?text=${whatsappMessage}`;
      
          // Redirect to WhatsApp
          window.location.href = whatsappLink;        
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Gagal Coba Lagi",
            text: result.message,
        });
    }
}

  // Menghilangkan overlay saat halaman selesai dimuat
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      setTimeout(function () {
        document.getElementById('loader-wrapper').style.display = 'none';
      }, 2000); // Sesuaikan timeout dengan durasi animasi CSS
    }
  };

