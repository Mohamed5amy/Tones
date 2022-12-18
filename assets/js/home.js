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


  // Player

  const popUp = document.getElementById("music-pop-up")
  const exit = document.querySelector(".music-pop-up #exit")
  const mainAudio = document.querySelector(".music-pop-up #audio")
  const mainTitle = document.querySelector(".music-pop-up #title")
  const mainImage = document.querySelector(".music-pop-up #image")
  const mainDownload = document.querySelector(".music-pop-up #download")
  const mainPrice= document.querySelector(".music-pop-up #price")


  const items = document.querySelectorAll(".tones .item")
  const songs = document.querySelectorAll("audio")

  console.log(items[0].children[1])

  items.forEach((item) => {

    const mainItem = item
    const audio = item.children[0]
    const playBtn = item.children[1].children[1].children[1]
    const heart = item.children[1].children[1].children[0]
    const songs = document.querySelectorAll("audio")
    const img = item.children[1].children[0]
    const title = item.children[2]
    const price = item.children[3]

    heart.addEventListener("click" , () => {
      heart.classList.toggle("active")
    })

    playBtn.addEventListener("click" , () => {

      // fetch data
      mainImage.src = img.src;
      mainTitle.innerHTML = title.innerHTML;
      mainDownload.href = audio.src
      mainPrice.innerHTML = `${price.innerHTML} SAR <span>Monthly</span>`
      
      
      popUp.classList.add("active")

      songs.forEach((song) => {
        song.pause()
      })
      
      audio.play()

    })

    exit.addEventListener("click" , () => {
      audio.pause()
      popUp.classList.remove("active")
    })
    
  })



  // <!-- Default number and exit -->
    document.getElementById("myNumber").defaultValue = 996 ;

    const exitReg = document.getElementById("exit-reg")
    const regBox = document.querySelector(".register")
    exitReg.addEventListener("click" , () => {
      regBox.classList.add("d-none")
    })
