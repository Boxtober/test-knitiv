<template>
    <div>
        <label :for="uniqueKey">{{ label }} {{ validation }}</label>
        <input
            :type="validation"
            :id="uniqueKey"
            :required="required"
            :disabled="disabled"
            v-model="formData[uniqueKey]"
            :validation="validation"
        />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        uniqueKey: {
            type: String,
            required: true,
        },
        formData: {
            type: Object,
            required: true,
        },
        validation: {
            type: String,
            default: "text",
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
