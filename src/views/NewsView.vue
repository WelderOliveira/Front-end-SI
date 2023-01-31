<template class='prip'>
  <div class="container text-center">
    <div class="mx-3 pt-4">
      <h5 class="section-title h1">Notícias da HelpDelivery</h5>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 mb-3 maxCard">
        <div class="card">
          <div class="card-body text-center">
            <img class=" img-fluid" src="../assets/images/dashBoard.svg"
                 alt="card image">
            <h4 class="card-title">Relatório semestral</h4>
            <p class="card-text truncate"></p>
            <button class="btn btn-primary btn-sm mx-2" @click="clicar"><i
                class="fa fa-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-3 maxCard">
        <div class="card">
          <div class="card-body text-center">
            <img class=" img-fluid" src="../assets/images/mouse.png"
                 alt="card image">
            <h4 class="card-title">Mouse</h4>
            <p class="card-text truncate">Mouse entregue a Anna, em 23 de julho de 2022</p>
            <button class="btn btn-primary btn-sm mx-2" disabled><i
                class="fa fa-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mb-3 maxCard">
        <div class="card">
          <div class="card-body text-center">
            <img class=" img-fluid" src="../assets/images/teclado.png"
                 alt="card image">
            <h4 class="card-title">Teclado</h4>
            <p class="card-text truncate">Teclado entregue a Joana, no dia 15 de janeiro de 2023</p>
            <button class="btn btn-primary btn-sm mx-2 disabled"><i
                class="fa fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.img-fluid {
  max-height: 10rem;
}

.card {
  max-height: 20rem;
  min-height: 20rem;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'newsletter',

  methods: {
    clicar() {
      this.$router.push({name: "relatorio"});
    }
  },
}


</script>