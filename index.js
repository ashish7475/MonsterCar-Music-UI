const playlist = [
  {sno:1,
   name:'Stargirl Interlude',
   time:'2:50'
 },
 {
   sno:2,
   name:`Can't Feel My Face`,
   time:`2:50`
 },
 {
   sno:3,
   name:'Sacrifice',
   time:`2:30`
 }
]
const sidebarLinks = [
'MENU',
'ARTISTS',
'ABOUT',
'NEWS',
'EVENTS',
'PROGRAMMING',
'GOLD',
'PARTNERS',
'PRESS',
'PLAYERS',
'SHOP',
'LOST CIVILISATION'
]

const others = [
  {
    src:"images/m1.jpg",
    name:'Blinding Lights',
  },
  {
    src:"images/m2.png",
    name:'Starboy'
  },
  {
    src:"images/m3.jpg",
    name:'Call Out My Name'
  }
]


let menu = document.getElementById('m1')
let close = document.getElementById('close')
let isOpen = false;
menu.onclick = ()=>{


document.querySelector('.s-menu').classList.toggle('side-menu')


}
close.onclick= ()=>{


    document.querySelector('.side-menu').classList.toggle('side-menu')

}

window.addEventListener("load",()=>{
  let div=``
  for(let song of playlist){
    div+= `<tr>
    <td class="sno">${song.sno}</td>
    <td class="play"><a class="material-symbols-outlined">play_arrow</a></td>
    <td class="song"><h1>${song.name}</h1></td>
    <td class="time">${song.name}</td>
    <td class="share"><span class="material-symbols-outlined">share</span></td>
  </tr>`
  }
  console.log(div)
  document.querySelector(".table").innerHTML = div


  let otherDiv = ``
  for(let otherSong of others){
    otherDiv+=`  <div class="card">
        <img src=${otherSong.src} height="150px" width="150px" alt="">
        <h2 style="width:fit-content;">${otherSong.name}</h2>
        <h3>Song Description</h3>
      </div>`
  }
  console.log(otherDiv)
  document.querySelector(".recommend-list").innerHTML = otherDiv

  let sideBarDiv = ``
  for(let link of sidebarLinks){
    sideBarDiv+=`<h2><a href="#">${link}</a></h2>`
  }
  document.querySelector(".sidebar-links").innerHTML = sideBarDiv
})

//
