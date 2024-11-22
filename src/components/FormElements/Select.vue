<template>
    <div>
        <label :for="uniqueKey">{{ label }}</label>
        <select :id="uniqueKey" v-model="formData[uniqueKey]">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :disabled="disabled"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { Option } from "../../types/form";

export default {
    props: {
        options: {
            type: Array as () => Option[],
            required: true,
        },
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

        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
