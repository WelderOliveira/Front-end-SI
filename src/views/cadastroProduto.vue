<template>
  <div class="vue-tempalte">
    <form>
        <h2>{{name}}</h2>
      <h3 style="color:black;">Cadastrar Produto</h3>

      <div class="form-group">
        <label>Nome</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

     <div class="form-group">
        <label>endereço</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>descrição</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
    
      <div class="form-group">
        <label>defeito</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      

      <button type="submit" class="btn btn-dark btn-lg btn-block">Voltar</button>

    </form>
  </div>
</template>

<script>
export default {
    props:{
        name:String
    },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cadastroProduto',
  data() {
    return {}
  }
}
</script>