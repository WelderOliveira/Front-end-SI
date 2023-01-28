<template>
  <NavbarHome v-if="notIsLoginPage"/>
  <div class="container-imagem">
    <div class="content-back">
      <router-view/>
    </div>
  </div>
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
template {
  /*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));*/
  margin: 0;
  color: black;

}

.content-back {
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  width: 100%;
}

.container-imagem {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/images/background1.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
}
</style>