import {addChild } from "https://jscroot.github.io/element/croot.js";

export let URLDataProduk = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataProduk";
export let tableTag="div";
export let tableRowClass="products-center";
export let tableTemplate=`
<!-- single product start -->
  <article class="product">
    <div class="img-container">
      <img
        src="#IMAGE#"
        alt="product"
        class="product-img"
      />

      <button class="bag-btn" data-id="">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        add to cart
      </button>
    </div>
    <h3>#NAMA#</h3>
    <p>#DESKRIPSI#</p>
    <h4>Price: #HARGA#</h4>
  </article>
  <!-- single product end -->`

export function responseData(results){
    console.log(results);
    results.reverse().forEach(isiRow);
}

export function isiRow(value){
    let content=tableTemplate.replace("#NAMA#",value.nama)
    .replace("#HARGA#",value.harga)
    .replace("#DESKRIPSI#",value.deskripsi)
    .replace("#IMAGE#",value.image)
    
    console.log(content);
    addChild("produk",tableTag,tableRowClass,content);
}
