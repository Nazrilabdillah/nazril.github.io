import {FetchData} from "../../src/backend/fetch"
const populerCategory = "?sort=desc"
const popularElem = document.querySelector(".cart-populer-produk")
async function dataPopulerProduk(){
    const dataPopuler = await FetchData()
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        console.log(dataPopuler.image)
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