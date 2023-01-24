<template>
  <NavbarHome v-if="notIsLoginPage"/>
  <router-view/>
  <FooterHome v-if="notIsLoginPage"/>
</template>

<script>
import NavbarHome from "@/components/Navbar.vue";
import FooterHome from "@/components/Footer.vue";

export default {
  computed: {
    notIsLoginPage() {
      return this.$route.name !== 'login' && this.$route.name !== 'register';
    }
  },
  components: {
    NavbarHome,
    FooterHome
  }
}
</script>

<style>

</style>