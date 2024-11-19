<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style>
#app {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-family: "Outfit", sans-serif;
    font-size: 14px;
}
</style>
