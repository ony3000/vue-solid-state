<template>
    <div id="page-wrapper">
        <site-header></site-header>
        <site-menu></site-menu>
        <router-view></router-view>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from '../components/site-header.vue';
import SiteMenu from '../components/site-menu.vue';
import SiteFooter from '../components/site-footer.vue';

export default {
    name: 'site-sub',
    components: {
        SiteHeader,
        SiteMenu,
        SiteFooter,
    },
};
</script>
