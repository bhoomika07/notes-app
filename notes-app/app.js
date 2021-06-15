const chalk= require('chalk')
const notes=require('./notes')
const yargs=require('yargs')



yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'title of the note',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Actual Content of the note',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe:'Removing a new note',
    builder:{
        title: {
            describe:'title of the note',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) =>{
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe:'Read an existing note',
    builder:{
        title: {
            describe:'title of the note',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) =>{
        notes.readNote(argv.title)
    },
})
yargs.command({
    command: 'list',
    describe:'List all existing notes',
    handler: () => {
        notes.listNotes()
    }
})
yargs.command({
    command: 'update',
    describe:'Updating an existing note',
    builder:{
        title: {
            describe:'title of the note',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) =>{
        notes.updateNote(argv.title)
    }
})

yargs.parse()