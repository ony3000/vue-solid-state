<template>
    <div id="site-wrapper">
        <div id="page-wrapper">
            <site-header></site-header>
            <site-banner></site-banner>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <site-footer></site-footer>
        </div>
        <site-menu></site-menu>
    </div>
</template>

<script>
import SiteHeader from '../components/site-header.vue';
import SiteMenu from '../components/site-menu.vue';
import SiteBanner from '../components/site-banner.vue';
import SiteFooter from '../components/site-footer.vue';

export default {
    name: 'site-main',
    components: {
        SiteHeader,
        SiteMenu,
        SiteBanner,
        SiteFooter,
    },
};
</script>
