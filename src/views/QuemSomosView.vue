<template>
  <center>
    <div>
    <h1>Quem Somos!</h1>
  </div>
  </center>
  <p></p>
  <div class="text-center">
  <img src="../assets/logo.png" class="rounded" alt="...">
</div>

 <center class="textohelp">
  <p>
    HelpDelivery
  </p>
  <p></p>
  <p class="text-justify">O help Delivery é um site/plataforma que tenta ajudar <br> pessoas mais necessitadas,
    Atualmente tentamos <br> ajudar com entrega de computadores/peças  para alunos.</p>
 </center>
 <FooterHome v-if="notIsLoginPage"/>
</template>

<script>
import FooterHome from "@/components/Footer.vue";
export default {
  name: "QuemSomos",
  components:{
    FooterHome
  }
}
</script>

<style>
 .textohelp{
  text-align: center;
  color: black;
  
 }

</style>