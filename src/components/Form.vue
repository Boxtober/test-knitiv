<template>
    <form @submit.prevent="handleSubmit">
        <div class="input-container">
            <label for="name">Nom: </label>
            <p>{{ data.john_doe.name }}</p>
            <input id="name" v-model="data.john_doe.name" type="text" />
        </div>

        <div class="input-container">
            <label for="age">Age:</label>
            <p>{{ data.john_doe.age }}</p>
            <input id="age" v-model="data.john_doe.age" type="number" />
        </div>

        <div class="input-container">
            <label for="gender">Genre: </label>
            <p>{{ data.john_doe.gender }}</p>
            <select
                id="gender"
                ref="genderSelect"
                v-model="data.john_doe.gender"
            >
                <option
                    v-for="(gender, index) in genderOptions"
                    :key="index"
                    :value="gender.value"
                >
                    {{ gender.label }}
                </option>
            </select>
        </div>

        <div class="input-container">
            <label for="date_1">Date:</label>
            <p>{{ data.date_1.value }}</p>
            <input id="date_1" v-model="data.date_1.value" type="date" />
        </div>

        <div class="input-container">
            <label for="input_1">Texte:</label>
            <p>{{ data.input_1.value }}</p>
            <input id="input_1" v-model="data.input_1.value" type="text" />
        </div>

        <div class="input-container">
            <label for="select_1">Sélection:</label>
            <p>{{ data.select_1.value }}</p>
            <select id="select_1" v-model="data.select_1.value">
                <option
                    v-for="option in options"
                    :key="index"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </div>

        <div v-if="!isFormValid" class="error">
            <p>Veuillez remplir tous les champs requis correctement.</p>
        </div>

        <Button :isFormValid="isFormValid" @save="handleSave" />
    </form>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import { computed, defineProps } from "vue";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const data = props.data;
// const component = ref({});
// const selectOptions = computed(() => {
//     return (
//         data.form.components.find(
//             (component: any) => component.key === "select_1"
//         )?.options?.items || []
//     );
// });

const isFormValid = computed(() => {
    const { name, age, gender } = data.john_doe;
    const { value: date } = data.date_1;
    const { value: input } = data.input_1;
    const { value: select } = data.select_1;

    return name && age && gender && date && input && select;
});

const handleSave = () => {
    if (isFormValid.value) {
        const validatedData = {
            name: data.john_doe.name,
            age: data.john_doe.age,
            gender: data.john_doe.gender,
            date: data.date_1.value,
            input: data.input_1.value,
            select: data.select_1.value,
        };
        console.log("DATAS :", validatedData);
    }
};
</script>

<style scoped lang="scss">
$bg-primary: #f4edea;
form {
    color: rgb(95, 94, 91);
    background-color: $bg-primary;
    padding: 1rem;
    border-radius: 25px;

    .input-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
    label {
        font-weight: bold;
    }
    .error {
        color: red;
        font-weight: bold;
    }
}
</style>
