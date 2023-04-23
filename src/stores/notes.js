import {ref,computed} from 'vue';
import { defineStore } from "pinia";
export const useStoreNotes = defineStore('storeNotes',()=>{

    //the state
    const notes = ref([{
        id:'0',
        content:'hello LinearB'
    }]);

    //the actions
    const addNote=(newNote)=>{
    
        notes.value.push({id:`${notes.value.length}`,content:newNote});
     
    }
    const deleteNote=(id)=>{
       notes.value =  notes.value.filter(note=>note.id!==id)
    }
    const editNote = (id,content)=>{
        const note = notes.value.find((note)=>note.id===id);
        if(note){
            note.content=content;
        }

    }

    ///the gettters
    const getFirstNote = computed(()=>{
        return notes[0]; 
    });
    const getNoteContent = computed(()=>{
        return (id)=>{
            return notes.value.find((note)=>note.id===id);
        }

    });
    const totalNotesCounter  = computed(()=>{
        return notes.value.length;
    });

    const totalCharacters = computed(()=>{
        let count = 0;
        notes.value.forEach((note)=>{
            count+=note.content.length;
        })
        return count;
    })



    return {
        notes,
        deleteNote,
        addNote,
        editNote,
        getFirstNote,
        getNoteContent,
        totalNotesCounter,
        totalCharacters
    }

})
