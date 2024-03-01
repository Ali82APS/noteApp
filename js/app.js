let $ = document

const inputNote = $.querySelector('#input-field')
const btnSaveNote = $.querySelector('#btn-save')
const btnDeleteNote = $.querySelector('#btn-delete')
const colorsBox = $.querySelectorAll('.color-box')
const notesContainer = $.querySelector('#listed')


colorsBox.forEach(function (colorsBox) {
    colorsBox.addEventListener('click', function (event) {
        let maincolor = event.target.style.backgroundColor
        inputNote.style.backgroundColor = maincolor
    })
})


function newNote () {
    let newNoteDivElem = $.createElement('div')
    newNoteDivElem.className = 'card shadow-sm rounded'

    newNoteDivElem.addEventListener('click' , removeNote)

    let inputBg = inputNote.style.backgroundColor
    newNoteDivElem.style.backgroundColor = inputBg

    let newNotePElem = $.createElement('p')
    newNotePElem.className = 'card-text p-3'
    newNotePElem.innerHTML = inputNote.value

    newNoteDivElem.append(newNotePElem)

    notesContainer.append(newNoteDivElem)

    inputNote.value = ''
    inputNote.style.backgroundColor = '#fff'
    
}


btnDeleteNote.addEventListener('click', function () {
    inputNote.value = ''
    inputNote.style.backgroundColor = '#fff'
})


inputNote.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        if (inputNote.value) {
            newNote() 
        }
    }
})

btnSaveNote.addEventListener('click' , newNote)


function removeNote (event) {
    event.target.parentElement.remove()

}




