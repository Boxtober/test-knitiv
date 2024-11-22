<template>
    <nav class="navbar">
        <div class="nav-contain">
            <router-link to="/">FORM 1</router-link>
            <router-link to="/about">FORM 2</router-link>
            <router-link to="/contact">FORM 3</router-link>
            <!-- nav dynamique sans rechargement -->
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar {
    z-index: 2;
    position: fixed;
    top: 1rem;
    display: flex;
    padding: 10px 75px;
    background: #ffffff99;
    box-shadow: 0 4px 40px #493d2f40;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    font-size: 20px;
    width: 80vh;
    justify-content: space-between;
    .nav-contain {
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        font-size: 20px;
        text-decoration: none;
        margin: 0 10px;
        font-weight: bold;
    }
}
</style>
