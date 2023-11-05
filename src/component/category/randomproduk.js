import {FetchData} from "../../backend/fetch.js"
const randomElem = document.querySelector(".cart-random-produk")
async function dataRandomProduk(){
    const dataRandom = await FetchData()
    dataRandom.map((dataRandom,key)=>{
        randomElem.innerHTML += `<div class="cart">
        <img src=${dataRandom.image} alt="">
        <ul >
        <h3 class"isi">${dataRandom.title.split(" ").slice(0,2).join(" ")}</h3>
        <h4 class="isi">harga Rp${dataRandom.price}00</h4>
        <button class="">tambah ke cart</button>
        </ul>
        <div>`
    })

}
dataRandomProduk()