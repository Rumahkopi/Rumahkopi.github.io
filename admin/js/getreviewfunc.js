import {addChild } from "https://jscroot.github.io/element/croot.js";

export let URLDataReview = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataReview";
export let tableTag="tr";
export let tableRowClass="content is-size-6";
export let tableTemplate=`              
<td data-label="Nama">#NAMA#</td>
<td data-label="Subjek">#SUBJEK#</td>
<td data-label="Pesan">#PESAN#</td>
` 

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value){
    let content=tableTemplate.replace("#NAMA#",value.nama).replace("#SUBJEK#",value.subjek).replace("#PESAN#",value.pesan);
    console.log(content);
    addChild("review",tableTag,tableRowClass,content);
}
