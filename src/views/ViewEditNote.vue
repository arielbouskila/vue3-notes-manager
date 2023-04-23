<template>
<div class="edit-note">
    <AddEditNote v-model="noteContent" ref="addEditNoteRef" bg-color="link" placeholder="Edit note">
        <template #buttons>
              <button class="button is-link is-light" @click="$router.push('/')">Cancel</button> &nbsp;
                <button class="button is-link has-background-success" @click="editNote" >Edit note</button>
        </template>
    </AddEditNote>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import {useStoreNotes} from '@/stores/notes'

const noteContent = ref('');
const storeNotes = useStoreNotes();

const route = useRoute();
const router = useRouter();
const note = storeNotes.getNoteContent(route.params.id)
noteContent.value= note.content;
const editNote = ()=>{
    storeNotes.editNote(note.id,noteContent);
    router.push('/');
}
    

</script>
