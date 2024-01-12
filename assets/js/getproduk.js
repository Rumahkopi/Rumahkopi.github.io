import { get } from "https://jscroot.github.io/api/croot.js";
import {URLDataProduk,responseData} from "./getprodukfunc.js";


get(URLDataProduk,responseData);

  // Menghilangkan overlay saat halaman selesai dimuat
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      setTimeout(function () {
        document.getElementById('loader-wrapper').style.display = 'none';
      }, 2000); // Sesuaikan timeout dengan durasi animasi CSS
    }
  };
  