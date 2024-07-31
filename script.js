const panels = document.querySelectorAll('.panel')
let currentActive

panels.forEach(panel => {
    panel.addEventListener('click', (evt) => {

        if(currentActive && currentActive != evt.target) currentActive.classList.remove('active')
        
        panel.classList.toggle('active')
        currentActive = panel
    })
})
