async function FetchData(category){
  const response = await fetch(`https://fakestoreapi.com/products`)
  const dataProduk = await response.json()
  return dataProduk

}
const randomElem = document.querySelector(".cart-random-produk")
async function dataRandomProduk(){
    const dataPopuler = await FetchData()
    console.log(dataPopuler)
    dataPopuler.map((dataPopuler,key)=>{
        console.log(dataPopuler.title)
        randomElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.image} alt="">
        
        <h3>${dataPopuler.title}</h3>
        <h4>harga Rp${dataPopuler.price}00</h4>
        <button class="btn-cart">tambah ke cart</button>
        <div>`
    })

}
dataRandomProduk()