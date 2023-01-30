<template>
  <div class="container mt-5 d-flex justify-content-center align-content-center align-items-center">
    <div class="col d-flex justify-content-center">
      <div class="col-8 border border-dark rounded p-5">
        <h2 class="text-center mb-5">Indique um amigo</h2>
        <form action="">
          <div class="mb-3 form-group">
            <label for="nome">Nome</label>
            <div :class="{ error: v$.form.nome.$errors.length }">
              <input type="text" class="form-control" id="nome" placeholder="Nome" autocomplete="off"
                     v-model.trim="v$.form.nome.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.nome.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <label for="descricao">E-mail para contato</label>
            <div :class="{ error: v$.form.email.$errors.length }">
              <input type="email" class="form-control" id="email" placeholder="E-mail" autocomplete="off"
                     v-model.trim="v$.form.email.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <label for="telefone">Telefone para contato</label>
            <div :class="{ error: v$.form.telefone.$errors.length }">
              <input type="text" class="form-control" id="telefone" placeholder="Telefone para contato"
                     autocomplete="off"
                     v-model.trim="v$.form.telefone.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.telefone.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <label for="produto">Peça/Equipamento desejado</label>
            <div :class="{ error: v$.form.produto.$errors.length }">
              <input type="text" class="form-control" id="produto" placeholder="Descrição do produto"
                     autocomplete="off"
                     v-model.trim="v$.form.produto.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.produto.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <button type="button" class="btn btn-primary" @click="saveProduto"><i
                  class="fas fa-sign-in-alt"></i> Cadastrar
              </button>
            </div>
            <div class="col-sm-6">
              <button type="button" class="btn btn-outline-secondary" @click="saveProduto"><i
                  class="fas fa-arrow-left"></i>
                Voltar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {required, minLength, email} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
export default {
  setup() {
    return {v$: useVuelidate()}
  },

  props: {
    name: String,
  },

  name: "cadastroProduto",
  data() {
    return {
      form: {
        nome: '',
        email: '',
        telefone: '',
        produto: '',
      }
    }
  },
  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(3)
      },
      telefone: {required, minLength: minLength(3)},
      produto: {required, minLength: minLength(3)},
      email: {required, email},
    }
  },
  methods: {
    saveProduto() {
      this.$router.push({name: "home"})
    },
  }
}
;
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

.form-check {
  color: black;
  margin-left: 10px;

}

.image {
  color: red;
  margin-right: 60px;

}

</style>

