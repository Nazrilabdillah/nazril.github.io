const parrentSearch = document.querySelector(".search-parrent1")
const searchIcon = document.querySelector(".search-icon1")
const closeSearchIcon = document.querySelector(".close-icon1")
let values;
const x = document.querySelector(".search-icon1")
const fotter = document.querySelector(".footer")
x.addEventListener("click",()=>{
  toggleSearch("open")
})
document.querySelector(".close-icon1").addEventListener("click",()=>{
  toggleSearch("close")
})
function toggleSearch(value){
  return value == "open"? openSearch(): closeSearch()
}
function openSearch(){
  parrentSearch.innerHTML=`<div class ='search-parrent2'> <input type="text" class="searchInput" oninput="handlerInput()">
          <a class="extra" >|</a>
          <li class="search-icon2">
         <svg class="hh" onclick="handlerSearchClick()" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path class="x" d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg> 
          </li>
         </div>`
 searchIcon.style.display ="none"
 closeSearchIcon.style.display ="block"
}
function closeSearch(){
  parrentSearch.innerHTML=""
 searchIcon.style.display ="block"
 closeSearchIcon.style.display ="none"
}
const popularElem = document.querySelector(".cart-populer-produk")
function handlerInput(){
  const q = document.querySelector(".searchInput").value
  popularElem.textContent =""
  return q
}
function handlerSearchClick(){
  FetchData(handlerInput())
}
const pencarian = document.querySelector(".hasil-pencarian")
async function FetchData(q){
  pencarian.textContent =`pencarian untuk ${q}...`
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${q}&offset=4&limit=8`)
  const dataPopuler = await response.json()
  console.log(dataPopuler)
  
  dataPopuler.map((dataPopuler,key)=>{
        popularElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.images[0]} alt=${dataPopuler.title.split(" ").slice(0,3).join(" ")}>
        <ul>
        <h3 class="isi">${dataPopuler.title.split(" ").slice(0,2).join(" ")}</h3>
        <h4 class="isi">harga Rp${dataPopuler.price}00</h4>
        <button>tambah ke cart</button>
        </ul>
        <div>`
        
    })
}
async function FetchData2(){
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/?&offset=4&limit=8`)
  const dataPopuler = await response.json()
  console.log(dataPopuler)
  
  dataPopuler.map((dataPopuler,key)=>{
        popularElem.innerHTML += `<div class="cart">
        <img src=${dataPopuler.images[0]} alt=${dataPopuler.title.split(" ").slice(0,3).join(" ")}>
        <ul>
        <h3 class="isi">${dataPopuler.title.split(" ").slice(0,2).join(" ")}</h3>
        <h4 class="isi">harga Rp${dataPopuler.price}00</h4>
        <button>tambah ke cart</button>
        </ul>
        <div>`
        
    })
}
FetchData2()