<template>
    <header id="header">
        <h1>
            <a href="/">Solid State</a>
        </h1>
        <nav>
            <a href="#menu" @click.stop.prevent="toggleMenu">Menu</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'site-header',
    methods: {
        toggleMenu() {
            this.$store.dispatch('toggleMenu');
        },
    },
};
</script>
