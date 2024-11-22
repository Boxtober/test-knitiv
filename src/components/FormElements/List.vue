<template>
    <div>
        <div
            v-for="component in listComponents"
            :key="component.key"
            class="list"
        >
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
                :personData="
                    component.key ? formData[component.key] : undefined
                "
                :listComponents="component.components"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import Date from "./Date.vue";
import Select from "./Select.vue";
import Person from "./Person.vue";
import { Component } from "../../types/form";

export default defineComponent({
    name: "List",
    components: {
        Button,
        Input,
        Date,
        Select,
        Person,
    },
    props: {
        listComponents: {
            type: Array as () => Component[],
            required: true,
        },
        formData: {
            type: Object as () => { [key: string]: any },
            required: true,
        },
    },
    setup(props) {
        const formData = ref<{ [key: string]: any }>({});

        // Init datas du formulaire
        watch(
            () => props.listComponents,
            (newConfig) => {
                if (newConfig) {
                    newConfig.forEach((component: any) => {
                        if (component.key && !formData.value[component.key]) {
                            formData.value[component.key] = "";
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

        return {
            formData,
            getComponentType,
        };
    },
});
</script>
<style scoped lang="scss">
@import "../../assets/main.scss";

.list {
    color: rgb(40, 39, 37);
    background-color: $bg-secondary;
    padding: 0.5rem;
    border-radius: 25px;
    margin: 1rem;
    gap: 1rem;
    display: flex;
    justify-content: center;
}
</style>
