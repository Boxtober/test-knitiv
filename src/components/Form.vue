<template>
    <div>
        <form @submit.prevent="saveForm">
            <div v-for="component in json.form.components" :key="component.key">
                <component
                    :is="getComponentType(component.type)"
                    :uniqueKey="component.key"
                    :label="component.label"
                    :formData="formData"
                    :options="
                        component.options ? component.options.items : undefined
                    "
                    :validation="component.validation"
                    :required="component.required"
                    :disabled="component.disabled"
                    :listComponents="component.components"
                    :personData="
                        component.key ? json.data[component.key] : undefined
                    "
                    :data="json.data"
                />
            </div>

            <div v-if="!isFormValid" class="error">
                <p>Veuillez remplir tous les champs requis correctement.</p>
            </div>
            <button type="submit" :disabled="!isFormValid">Enregistrer</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import Button from "./FormElements/Button.vue";
import Input from "./FormElements/Input.vue";
import Date from "./FormElements/Date.vue";
import Select from "./FormElements/Select.vue";
import Person from "./FormElements/Person.vue";
import List from "./FormElements/List.vue";
import { Component } from "../types/form";

export default defineComponent({
    name: "Form",
    components: {
        Button,
        Input,
        Date,
        Select,
        Person,
        List,
    },
    props: {
        json: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const formData = ref<{ [key: string]: any }>({});

        // Init datas du formulaire
        watch(
            () => props.json,
            (newJson) => {
                if (newJson.data) {
                    Object.keys(newJson.data).forEach((key) => {
                        if (!formData.value[key]) {
                            formData.value[key] = newJson.data[key].value || "";
                        }
                    });
                }
            },
            { immediate: true }
        );

        const getComponentType = (type: string) => {
            const componentMap: { [key: string]: string | null } = {
                button: "Button",
                date: "Date",
                input: "Input",
                select: "Select",
                person: "Person",
                list: "List",
            };

            return componentMap[type] || null;
        };

        // validation des champs individuels
        const validateField = (key: string, value: any, validation: string) => {
            if (!validation) return true;

            // map des types de validation
            const validationRules: { [key: string]: (value: any) => boolean } =
                {
                    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                    number: (value) => !isNaN(value) && value !== "",
                    date: (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
                    default: (value) => value.trim().length > 0,
                };

            const validate =
                validationRules[validation] || validationRules.default;
            return validate(value);
        };

        const isFormValid = computed(() => {
            return props.json.form.components.every((component: Component) => {
                const key = component.key;
                const value = formData.value[key] || "";
                const validation = component.validation;
                const required = component.required;

                const isValid = validateField(key, value, validation);
                const isRequiredValid =
                    !required || (required && value.trim().length > 0);

                return isValid && isRequiredValid;
            });
        });

        const saveForm = () => {
            console.log(
                "---> FormData.value : ",
                JSON.stringify(formData.value)
            );
        };

        return {
            formData,
            getComponentType,
            saveForm,
            isFormValid,
        };
    },
});
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
form {
    color: $color;
    background-color: $bg-primary;
    padding: 1rem;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
