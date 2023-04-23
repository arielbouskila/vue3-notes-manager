<template>
     <div class="card p-4 mb-5" :class="`has-background-${ bgColor }-dark`">
            <div class="field">
                <div class="control">
                    <textarea :value="props.modelValue"
                    class="textarea" :placeholder="props.placeholder"
                    @input="emit('update:modelValue',$event.target.value)"
                     ref="textAreaRef"/>
                </div>
            </div>
        

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"></slot>
            </div>
        </div>
        </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue:{
        type:String,
        required:true
    },
    bgColor:{
        type:String,
        default:'success'
    },
    placeholder:{
        type:String,
        default:'Type something...'
    }
});
const textAreaRef = ref(null);

const focusTextArea = ()=>{
    textAreaRef.value.focus();
}

const emit = defineEmits(['update:modelValue']);

defineExpose({
    focusTextArea
})
</script>