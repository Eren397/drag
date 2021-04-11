let drag 

function execute(type, callback){
    document.addEventListener(type, callback, false)
}

execute('dragstart', (e) => {
    drag = e.target
    e.target.style.opacity = .5
})

execute('dragend', (e) => {
    e.target.style.opacity = null
})

execute('dragover', (e) => {
    e.preventDefault()
})

execute('dragenter', (e) => {
    if(e.target.className === 'dropzone') {
        e.target.style.background = '#bbb'
    }
})

execute('dragleave', (e) => {
    if(e.target.className === 'dropzone') {
        e.target.style.background = null
    }
})

execute('drop', (e) => {
    e.preventDefault()
    if(e.target.className === 'dropzone') {      
        drag.remove()
        e.target.appendChild(drag)
        e.target.style.background = '#fff'
    }
})