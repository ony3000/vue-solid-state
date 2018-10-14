<template>
    <nav id="menu">
        <div class="inner">
            <h2>Menu</h2>
            <ul class="links">
                <li v-for="(item, index) in linkItems" :key="index">
                    <a :href="item.href">{{ item.text }}</a>
                </li>
            </ul>
            <a href="#" class="close">Close</a>
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
};
</script>
