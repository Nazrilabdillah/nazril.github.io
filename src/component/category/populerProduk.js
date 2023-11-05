import {FetchData} from "../../backend/fetch.js"
const populerCategory = "?sort=desc"
const popularElem = document.querySelector(".cart-populer-produk")
async function dataPopulerProduk(){
    const dataPopuler = await FetchData()
    dataPopuler.map((dataPopuler,key)=>{
        popularElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.image} alt=${dataPopuler.title.split(" ").slice(0,3).join(" ")}>
        <ul>
        <h3 class="isi">${dataPopuler.title.split(" ").slice(0,2).join(" ")}</h3>
        <h4 class="isi">harga Rp${dataPopuler.price}00</h4>
        <button>tambah ke cart</button>
        </ul>
        <div>`
    })

}
dataPopulerProduk()