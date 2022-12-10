  // Menu

  const btn = document.getElementById("menu-btn")
  const menu = document.getElementById("menu")
  const arrow = document.getElementById("arrow")

  btn.addEventListener("click" , () => {
    menu.classList.toggle("active")
  })

  arrow.addEventListener("click" , () => {
    menu.classList.toggle("active")
  })

  //  Player 

  const items = document.querySelectorAll(".tones .item")

  const songs = document.querySelectorAll("audio")

  const players = document.querySelectorAll(".player")

  console.log(players)
  
  items.forEach((item) => {
    const player = item.children[2]
    const audio = item.children[2].children[0]
    const playBtn = item.children[0].children[1].children[1]
    const exit = item.children[2].children[1].children[0]
    const heart = item.children[0].children[1].children[0]

    heart.addEventListener("click" , () => {
      heart.classList.toggle("active")
    })

    playBtn.addEventListener("click" , () => {

      songs.forEach((song) => {
        song.pause()
      })

      players.forEach((player) => {
        player.classList.remove("active")
      })
      
      audio.play()
      player.classList.add("active")
    })

    exit.addEventListener("click" , () => {
      audio.pause()
      player.classList.remove("active")
    })
    
    
  })


