<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="HelpDelivery">
      HelpDelivery
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="home" class="nav-item nav-link">Home</router-link>
        <router-link to="visualizarProdutos" class="nav-item nav-link">Produtos</router-link>
        <router-link to="newsletter" class="nav-item nav-link">Newsletter</router-link>
        <router-link to="QuemSomos" class="nav-item nav-link quemsomos">Quem Somos?</router-link>
        <router-link to="chat" class="nav-item nav-link chat">chat</router-link>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarHome',
}
</script>
<style>
.quemsomos{
  color: #F9995D;
}
</style>