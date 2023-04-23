<template>
    <h1>Stats</h1>
    <div class="stats">
        <table class="table is-fullWidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{totalNotes}}</td>
                </tr>
                <tr>
                    <td>Number of characters</td>
                    <td>{{totalCharacters}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStoreNotes  } from '../stores/notes';
const storeNotes = useStoreNotes();
const totalNotes = ref(storeNotes.totalNotesCounter);
const totalCharacters = ref(storeNotes.totalCharacters)
</script>