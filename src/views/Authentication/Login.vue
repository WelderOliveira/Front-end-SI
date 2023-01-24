<template>
  <div class="row vh-100 vw-100">
    <div class="col-sm-5 d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o Login</h2>
        <form action="">
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.email.$errors.length }">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" autocomplete="off"
                     v-model.trim="v$.form.email.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3 form-group">
            <div :class="{ error: v$.form.password.$errors.length }">
              <label for="password" class="d-flex justify-content-between">Senha
                <small><a href="#">Esqueceu sua senha?</a></small>
              </label>
              <input type="password" class="form-control" id="password" placeholder="Digite sua senha"
                     v-model.trim="v$.form.password.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" :disabled="v$.form.$invalid"><i
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
import {required, minLength, email} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },

  methods: {
    login() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
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