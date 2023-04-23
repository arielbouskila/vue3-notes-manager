<template>
    <div class="notes">
        <AddEditNote v-model="newNote" ref="addEditNotRef" placeholder="Add a new note">
            <template #buttons>
                <div class="control">
                <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">Add new Note</button>
            </div>
            </template> 
          </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" 
        :note="note"></Note>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '../components/Notes/AddEditNote.vue';
import {useStoreNotes} from '@/stores/notes'


const newNote = ref('');
const addEditNotRef = ref(null);
const storeNotes = useStoreNotes();

const addNote = ()=>{
    storeNotes.addNote(newNote.value);
    newNote.value='';
    addEditNotRef.value.focusTextArea();

    

}

</script>