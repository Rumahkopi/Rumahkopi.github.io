import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataProduk";
export let tableTag="tr";
export let tableRowClass="content is-size-6";
export let tableTemplate=`
<td>                
<label class="checkbox">
  <input type="checkbox">
</label>
</td>
<td data-label="Name">#NAMA#</td>
<td data-label="Harga">#HARGA#</td>
<td data-label="Deskripsi">#DESKRIPSI#</td>
<td class="is-actions-cell">
                  <div class="buttons is-right">
                    <button class="button is-small is-primary" type="button">
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                    </button>
                  </div>
                </td>
` 

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value){
    let content=tableTemplate.replace("#NAMA#",value.nama).replace("#HARGA#",value.harga).replace("#DESKRIPSI#",value.deskripsi);
    console.log(content);
    addChild("produk",tableTag,tableRowClass,content);
}
