<template class ='prip'>
  <center><h1>Notícias</h1>
  <h4>computadores entregues e peças aos estudantes</h4>
  </center>
<div class="container">
  <div class="row">
    <div class="col">
      <img src="../assets/images/teclado.png" class="img-fluid" alt="Imagem responsiva">
    </div>
    <div class="col">
      <img src="../assets/images/mouse.png" class="img-fluid" alt="Imagem responsiva">
    </div>
    <div class="col">
      <img src="../assets/images/teclado.png" class="img-fluid" alt="Imagem responsiva">
    </div>
  </div>

  
  <div class="row">
    <div class="col">
      <p class="text-break">Teclado</p>
    </div>
    <div class="col">
      <p class="text-break">Mouse</p>
    </div>
    <div class="col">
      <p class="text-break">Teclado</p>
    </div>
  </div>


  <div class="row">
    <div class="col">
      <p class="text-break">Teclado entregue a Joana, no dia 15 de janeiro de 202
      </p>
    </div>
    <div class="col">
      <p class="text-break">mouse entregue a Anna, em 23 de julho de 2022</p>
    </div>
    <div class="col">
      <p class="text-break">Teclado entregue a Maria, no dia 18 de janeiro de 2023</p>
    </div>
  </div>

 <p></p>
 <button type="button" class="btn btn-primary btn-lg btn-block" @click="clicar">gráficos</button>
  
</div>
</template>

<style>
  .prip{
    background-color: black;
  }
  .button{
    width: 300px;
    
  }
</style>

<script>
  export default {
  
 

  methods: {
     clicar() {
      this.$router.push({name: "graficoPronto"});
      return;
      
      }
    },
  }

     

</script>