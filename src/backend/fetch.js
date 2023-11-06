export async function FetchData(){
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/?offset=4&limit=8`)
  const dataProduk = await response.json()
  return dataProduk

}