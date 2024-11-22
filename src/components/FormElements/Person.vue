<template>
    <div class="main-container">
        <label>{{ label }}</label>
        <div v-if="personData">
            <div
                class="main-content"
                v-for="(value, key) in personData"
                :key="key"
            >
                <p>
                    <strong>{{ key }}:</strong> {{ value }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        label: String,
        personData: Object,
    },
};
</script>

<style scoped lang="scss">
$bg-primary: #f4edea;

.main-container {
    color: rgb(12, 12, 12);
    background-color: rgb(250, 250, 250);
    padding: 1rem;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        text-transform: uppercase;
        font-size: 24px;
    }

    .main-content {
        text-transform: capitalize;
        text-align: left;
    }
}
</style>
