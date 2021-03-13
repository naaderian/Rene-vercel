



let slider = document.getElementsByClassName("work-cart")
let img = document.getElementsByClassName("work-img")
        


        sliderWidth = slider.offsetWidth
        sliderHeight = slider.offsetHeight
        imgmovement = 40

        img.addEventListener("mousemove", (e) => {
            let mousex = Math.floor(-(e.offsetX - (sliderWidth / 2)) * (imgmovement / sliderWidth))
            let mousey = Math.floor(-(e.offsetY - (sliderHeight / 2)) * (imgmovement / sliderHeight))
            img.style.transform = `translate(${mousex}px,${mousey}px)`
        })