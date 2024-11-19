<template>
    <div>
        <h1>Page 1</h1>
        <Form v-if="json.data" :data="json.data" />
        <p v-else>Not found !</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Form from "../components/Form.vue";

const json = ref({});

const loadData = () => {
    fetch("../../public/datas/json1.json")
        .then((response) => response.json())
        .then((data) => {
            json.value = data;
        })
        .catch((error) => console.error("Error:", error));
};

onMounted(loadData);
</script>
