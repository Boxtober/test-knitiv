<template>
    <h2>Formulaire 1</h2>
    <div>
        <Form :config="formConfig" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "../components/Form.vue";
import formDataJson from "../../public/datas/json1.json";

export default defineComponent({
    name: "Home",
    components: {
        Form,
    },
    data() {
        return {
            formConfig: formDataJson, // Passez le JSON complet à Form
        };
    },
});
</script>
