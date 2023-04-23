<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light">
                    {{ characterLength }}
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/editnote/${props.note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked">Delete</a>
        </footer>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { useStoreNotes } from '../../stores/notes';
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
const storeNotes = useStoreNotes();
const characterLength = computed(() => {
    return props.note.content.length > 1 ? props.note.content.length + ' characters' : props.note.content.length + ' character'
})

const handleDeleteClicked = () => {
    console.log('handleDeleteClicked', props.note.id)
    storeNotes.deleteNote(props.note.id);
    }
</script>