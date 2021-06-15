//importing all the modules
const fs=require('fs')
const chalk = require('chalk')

// add note function
const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//save notes function
const saveNotes = (notes) => {
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//load notes function
const loadNotes = () => {
    try {
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    const data=JSON.parse(dataJSON)
    return data
        
    } catch (e) {
        return []
        console.log(e)
    }
}

//remove notes function
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

//list notes function
const listNotes = () => {
    console.log(chalk.bgBlue('Your notes...'))
    const notes = loadNotes()
    for(var i=0; i<notes.length; i++){
        console.log(notes[i].title)
    }
}

//read note function
const readNote = (title) =>{
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title===title)
    if(!searchNote){
        console.log(chalk.bold.bgWhite.red.inverse('No such note found.'))
    }
    else{
        console.log(chalk.bold.green.inverse(searchNote.title))
        console.log(searchNote.body)
    }
}
//update an existing nite function
const updateNote = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title===title)
    if(!searchNote){
        console.log(chalk.bold.bgWhite.red.inverse('No such note found.'))
    }
    else{
        console.log(chalk.bold.blue.inverse('Updating the note...'))
    }
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
    updateNote:updateNote
}