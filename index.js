let url = "https://digimon-api.vercel.app/api/digimon"
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

const mostrarData = (data) => {
  console.log(data)
  let body = " "
  for (let i = 0; i < data.length; i++) {
    body += `<tr style="text-align:center; font-size:25px">
    <td><b>${data[i].name}</b></td>
    <td><img src="${data[i].img}" alt="" width="120" height="130"></td>
    <td><b>${data[i].level}</b></td>
    `
  }
  document.getElementById("data").innerHTML = body
}


function getData() {
  var digimon = document.getElementById("search").value
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then(response => response.json())
    .then(data => {
      cardInyection(data[0])
    })
}

function cardInyection(digimon) {

  var card = `
<div class="card text-bg-warning mb-3 mx-auto" style="width: 18rem; margin="auto">
  <img src="${digimon.img}" class="card-img-top" alt="...">
  <div class="card-body">
  <ul class="list-group list-group-flush" style="text-align:center">
    <li class="list-group-item"><b>NAME: ${digimon.name}</b></li>
    <li class="list-group-item"><b>LEVEL: ${digimon.level}</b></li>
    </ul>
    <br>
    <div class="col text-center">
    <button class="btn btn-dark" onClick="window.location.reload();">Home</button>
    </div>
    </div>
</div>
`
  document.getElementById("table").innerHTML = card
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault()
  getData()
})







