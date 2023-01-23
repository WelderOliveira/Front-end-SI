<template>
  <NavbarHome/>
  <div class="container">
    <router-view/>
  </div>
  <FooterHome/>
</template>

<script>
import NavbarHome from "@/components/Navbar.vue";
import FooterHome from "@/components/Footer.vue";

export default {
  components: {
    NavbarHome,
    FooterHome
  }
}
</script>

<style>

</style>