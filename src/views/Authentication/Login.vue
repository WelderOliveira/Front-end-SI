<template>
  <div class="row vh-100 vw-100">
    <div class="col-sm-5 d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o Login</h2>
        <form action="">
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.username.$errors.length }">
              <label for="username" class="form-label">Usuário</label>
              <input type="text" class="form-control" id="username" autocomplete="off"
                     v-model.trim="v$.form.username.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.username.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.senha.$errors.length }">
              <label for="senha" class="d-flex justify-content-between">Senha
                <small><a href="#">Esqueceu sua senha?</a></small>
              </label>
              <input type="password" class="form-control" id="senha" placeholder="Digite sua senha"
                     v-model.trim="v$.form.senha.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.senha.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" :disabled="v$.form.$invalid" @click="login"><i
                class="fas fa-sign-in-alt"></i> Entrar
            </button>
            <button type="button" class="btn btn-outline-secondary" @click="register"><i class="fas fa-user-plus"></i>
              Não
              tenho Conta
            </button>
          </div>

        </form>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="d-flex justify-content-center align-items-center">
        <img src="../../assets/images/login.svg" class="img-login" alt="login">
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

.left-login {
  background-color: #F2F2F2;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
<script>
import {required, minLength} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
import {useToast} from "vue-toastification";
import axios from "axios";

export default {
  setup() {
    const toast = useToast();

    return {toast, v$: useVuelidate()}
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        senha: ''
      }
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      senha: {
        required,
        minLength: minLength(3)
      }
    }
  },

  methods: {
    async login() {
      this.v$.$touch();
      if (this.v$.$error) return;
      const senha = this.form.senha;
      const toast = useToast();


      axios.post('https://helpdilvery-production.up.railway.app/userStock/login', {
            'username': this.form.username,
            'senha': senha
          }, {headers: {'Content-Type': 'application/json'}}
      ).then(function (response) {
        if (!response.data.username || !response.data) {
          console.log('ENTREI1')
          toast.error("Usuário e/ou senha incorretos");
          this.clearForm();
          return;
        }

        let user = response.data.username;
        if (response.data.senha !== senha) {
          console.log('ENTREI12')
          toast.error("Usuário e/ou senha incorretos");
          this.clearForm();
          return;
        }

        localStorage.setItem('authUser', JSON.stringify(user));
      })
      this.$router.push({name: "home"});
    },
    clearForm() {
      this.form = {
        username: "",
        senha: ""
      }
    },
    register() {
      this.$router.push({name: 'register'})
    },

    getValidation(field) {
      if (this.$v.form.$dirty() === false) {
        return null;
      }

      return !this.$v.form[field].$error;
    },
  }
}
</script>