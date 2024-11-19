<template>
    <button :disabled="!isFormValid" @click="handleClick">Enregistrer</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    isFormValid: {
        type: Boolean,
        required: true,
    },
});
const emit = defineEmits();
const handleClick = () => {
    emit("save");
};
</script>
