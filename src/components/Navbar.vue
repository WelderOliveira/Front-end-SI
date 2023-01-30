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
      <div class="navbar-nav align-content-end align-items-end">
        <router-link to="home" class="nav-item">Home</router-link>
        <router-link to="visualizarProdutos" class="nav-item">Produtos</router-link>
        <router-link to="newsletter" class="nav-item ">Newsletter</router-link>
        <router-link to="QuemSomos" class="nav-item quemsomos">Quem Somos?</router-link>

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
.nav-item{
  text-decoration: none;
  padding: 0.5rem;
  color: black;
  display: block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
.quemsomos{
  color: #F9995D;
}
</style>