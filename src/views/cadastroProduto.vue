<template>
  <div class="vue-tempalte">
    <form>
      <h2>{{ name }}</h2>
      <h3>Cadastrar Produto</h3>   
      
<center>
        <!--Image-->
<div class="image">
    <div class="d-flex justify-content-end">
        <div class="btn btn-primary btn-rounded">
            <label class="form-label text-white m-1" for="customFile1">upload de imagem</label>
            <input type="file" class="form-control d-none" id="customFile1" />
        </div>
    </div>
</div>
</center>

        <nav>
          <select class="form-select" aria-label="Default select example">
        <option selected>Nome</option>
        <option value="1">Peças</option>
        <option value="2">computador</option>
        <option value="3">carcaça</option>
      </select>
      <p></p>

      <div class="form">
        <label>endereço</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <p></p>

      <div class="form">
        <label>descrição</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <p></p>
      <div class="form">
        <label>defeito</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <p></p>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          não tem defeito
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Eu li e concordo com os termos e usos
        </label>
      </div>

        </nav>
      <p></p>

      <button class="button">Cadastrar</button>
      <button class="voltar">Voltar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "cadastroProduto",
  data() {
    return {};
  },
};
</script>

<style>
h3 {
  color: black;
}

.button {
  margin: 10px;
  size: 80px;
  border-radius: 3.52px;
  background-color: #007aff;
  font-size: 20px;
  color: white;
  padding: 5px 102px;
}
.voltar {
  margin: 10px;
  border-radius: 3.52px;
  background-color: #2d3748;
  color: white;
  font-size: 20px;
  padding: 5px 102px;
}
.form {
  margin-left: 10px;
  margin-right: 10px;
  width: 600px;
}
.form-select {
  margin-left: 10px;
  width: 600px;
}
.form-check{
  color: black;
  margin-left: 10px;

}
.image{
  color: red;
  margin-right: 60px;
  
}

</style>

