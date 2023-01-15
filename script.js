function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Diego Esteves, sorrindo com o sol batendo no rosto e um fundo de um ambiente arborizado."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Diego Esteves, com feição simpática, com o cabelo volumoso na altura dos olhos, em um fundo branco-gelo."
    )
  }
}
