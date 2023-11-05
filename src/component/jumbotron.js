import {FetchData} from "../backend/fetch.js"
const jumbotron = document.querySelector(".wrapper-jumbotron")
async function mapDataProduk(){
  const dataProduk = await FetchData()
  dataProduk.map((produk,key)=>{
    jumbotron.innerHTML +=`<div class="jumbotron">
    <li class="wrapper-deskription">
    <h2 class="content">${produk.title}</h2>
   <p class="content">${produk.description}</p>
    <h3 class="content">harga Rp${produk.price}</h3>
    <button class="content btn-cart">masukan ke cart</button>
   </li>
    <img src=${produk.image} alt="">
    </div>
    `
  })
}
mapDataProduk()