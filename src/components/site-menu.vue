<template>
    <nav id="menu" @click.stop="close">
        <div class="inner" @click.stop>
            <h2>Menu</h2>
            <ul class="links">
                <li v-for="(item, index) in linkItems" :key="index">
                    <a :href="item.href" @click.prevent.stop="closeAndMove(item)">{{ item.text }}</a>
                </li>
            </ul>
            <a href="#" class="close" @click.prevent.stop="close">Close</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'site-menu',
    data() {
        return {
            linkItems: [
                {
                    href: '/',
                    text: 'Home',
                },
                {
                    href: '/generic',
                    text: 'Generic',
                },
                {
                    href: '/elements',
                    text: 'Elements',
                },
                {
                    href: '#',
                    text: 'Log In',
                },
                {
                    href: '#',
                    text: 'Sign Up',
                },
            ],
        };
    },
    methods: {
        close() {
            this.$store.dispatch('hideMenu');
        },
        closeAndMove(link) {
            this.close();
            if (link.href !== '#') {
                this.$router.push(link.href);
            }
        },
    },
};
</script>
