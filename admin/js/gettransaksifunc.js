import {addChild } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";

export let URLDataTransaksi = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataTransaksi";
export let tableTag="tr";
export let tableRowClass="content is-size-6";
export let tableTemplate=`              
<td data-label="Transaksi">#TRANSAKSI#</td>
<td data-label="Nohp">#NOHP#</td>
<td data-label="Waktu">#WAKTU#</td>
<td data-label="image"><img
src="#IMAGE#"
alt="product"
class="product-img"
width="50"
height="50"
/></td>
` 

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value){
    let content=tableTemplate.replace("#TRANSAKSI#",value.transaksi_number).replace("#NOHP#",value.user_phone).replace("#WAKTU#",value.formatted_time).replace("#IMAGE#",value.buktitf);
    console.log(content);
    addChild("transaksi",tableTag,tableRowClass,content);
}

get(URLDataTransaksi,responseData);

  // Menghilangkan overlay saat halaman selesai dimuat
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      setTimeout(function () {
        document.getElementById('loader-wrapper').style.display = 'none';
      }, 2000); // Sesuaikan timeout dengan durasi animasi CSS
    }
  };