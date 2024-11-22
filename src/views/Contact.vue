<template>
    <h2>Formulaire 3</h2>
    <div>
        <Form :json="json" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "../components/Form.vue";
import formDataJson from "../../public/datas/json3.json";

export default defineComponent({
    name: "Home",
    components: {
        Form,
    },
    data() {
        return {
            json: formDataJson,
        };
    },
});
</script>
