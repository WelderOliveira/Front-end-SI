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
  background: #EFEFBB;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 0;
  color: black;

}

.content-back {
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  width: 100%;
}

/*.container-imagem {*/
/*  position: relative;*/
/*  height: 100vh;*/
/*  width: 100%;*/
/*  !*background-image: url("@/assets/images/background1.svg");*!*/
/*  !*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));*!*/
/*  background-size: cover;*/
/*  background-repeat: no-repeat;*/
/*  z-index: 0;*/
/*}*/
</style>