<template>
  <div class="row vh-100 vw-100">
    <div class="col-sm-7">
      <div class="d-flex justify-content-center align-items-center">
        <img src="../../assets/images/register.svg" class="img-login" alt="login">
      </div>
    </div>
    <div class="col-sm-5 d-flex justify-content-center align-items-center right-register">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Registre-se</h2>
        <form action="">
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="nome" placeholder="Nome" aria-label="Nome">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" id="username" placeholder="Usuário" aria-label="Usuário">
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.cpfCnpj.$errors.length }">
              <input type="text" class="form-control" id="cpfCnpj" placeholder="CPF/CNPJ" autocomplete="off"
                     v-model.trim="v$.form.cpfCnpj.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.cpfCnpj.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.email.$errors.length }">
              <input type="email" class="form-control" id="email" placeholder="Digite seu E-mail" autocomplete="off"
                     v-model.trim="v$.form.email.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.telefone.$errors.length }">
              <input type="number" class="form-control" id="telefone" placeholder="Telefone" autocomplete="off"
                     v-model.trim="v$.form.telefone.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.telefone.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.cep.$errors.length }">
              <input type="number" class="form-control" id="cep" placeholder="CEP" autocomplete="off"
                     v-model.trim="v$.form.cep.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.cep.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="complementoEndereco" placeholder="Complemento"
                   aria-label="Complemento">
            <input type="text" class="form-control" id="logradouro" placeholder="Logradouro" aria-label="Logradouro">
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="bairro" placeholder="Bairro"
                   aria-label="Bairro">
            <input type="text" class="form-control" id="cidade" placeholder="Cidade" aria-label="Cidade">
          </div>
          <div class="input-group mb-3">
            <input type="number" class="form-control" id="numeroEndereco" placeholder="Número" autocomplete="off">

            <input type="text" class="form-control" id="estado" placeholder="Estado"
                   aria-label="Estado">
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <div :class="{ error: v$.form.senha.$errors.length }">
                <input type="password" class="form-control" id="senha" placeholder="Digite sua senha"
                       v-model.trim="v$.form.senha.$model">
                <div class="input-errors" v-for="(error, index) of v$.form.senha.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div :class="{ error: v$.form.confirmSenha.$errors.length }">
                <input @input="checkPassword()" type="password" class="form-control" id="confirmSenha"
                       placeholder="Confirme sua senha"
                       v-model.trim="v$.form.confirmSenha.$model">
                <div class="input-errors" v-for="(error, index) of v$.form.confirmSenha.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" :disabled="v$.form.$invalid"><i
                class="fas fa-sign-in-alt"></i> Cadastrar
            </button>
            <button type="button" class="btn btn-outline-secondary" @click="goToLogin"><i class="fas fa-arrow-left"></i>
              Voltar
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.right-register {
  background-color: #F2F2F2;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
<script>
import {required, minLength, email, sameAs} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";

export default {

  setup() {
    return {v$: useVuelidate()}
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Registration',
  data() {
    return {
      form: {
        username: '',
        senha: '',
        confirmSenha: '',
        tipoUsuario: 1,
        nome: '',
        cpfCnpj: '',
        sexo: 1,
        email: '',
        tipoEmail: 1,
        telefone: '',
        cep: '',
        numeroEndereco: '',
        complementoEndereco: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      senha: {required, minLength: minLength(3)},
      confirmSenha: {required, sameAsPassword: sameAs('senha')},
      cpfCnpj: {required, minLength: minLength(11)},
      telefone: {required, minLength: minLength(8)},
      cep: {required, minLength: minLength(8)}
    }
  },

  methods: {
    goToLogin() {
      this.$router.push({name: 'login'});
    }
  }
}
</script>