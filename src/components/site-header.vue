<template>
    <header id="header" :class="{alt: !isHeaderAppeared}">
        <h1>
            <a href="/">Solid State</a>
        </h1>
        <nav>
            <a href="#menu" @click.stop.prevent="toggleMenu">Menu</a>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'site-header',
    computed: {
        ...mapState([
            'isHeaderAppeared',
        ]),
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch('toggleMenu');
        },
    },
};
</script>
