<template>
  <div class="container mt-5 d-flex justify-content-center align-content-center align-items-center">
    <div class="col d-flex justify-content-center">
      <div class="col-8 border border-dark rounded p-5">
        <h2 class="text-center mb-5">Cadastrar Produto</h2>
        <form action="">
          <div class="row">
            <div class="col-8">
              <div class="mb-3 form-group">
                <label for="item">Modelo/Nome do Produto</label>
                <div :class="{ error: v$.form.item.$errors.length }">
                  <input type="text" class="form-control" id="item" placeholder="Modelo/Nome do Produto"
                         autocomplete="off"
                         v-model.trim="v$.form.item.$model">
                  <div class="input-errors" v-for="(error, index) of v$.form.item.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group">
                <label for="descricao">Descrição do item:</label>
                <div :class="{ error: v$.form.descricao.$errors.length }">
                  <input type="text" class="form-control" id="descricao" placeholder="Descrição do item"
                         autocomplete="off"
                         v-model.trim="v$.form.descricao.$model">
                  <div class="input-errors" v-for="(error, index) of v$.form.descricao.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group">
                <label for="categoriaDoItem">Categoria do item:</label>
                <div :class="{ error: v$.form.categoriaDoItem.$errors.length }">
                  <select v-model="this.form.categoriaDoItem" class="form-control">
                    <option v-for="categoria in categorias" :key="categoria.id_categoria"
                            :value="categoria.id_categoria">{{
                        categoria.categoria
                      }}
                    </option>
                  </select>
                  <div class="input-errors" v-for="(error, index) of v$.form.categoriaDoItem.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group">
                <label for="quantidadeEstoque">Quantidade de itens:</label>
                <div :class="{ error: v$.form.quantidadeEstoque.$errors.length }">
                  <input type="number" class="form-control" id="quantidadeEstoque" placeholder="Quantidade"
                         autocomplete="off"
                         v-model.trim="v$.form.quantidadeEstoque.$model">
                  <div class="input-errors" v-for="(error, index) of v$.form.quantidadeEstoque.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="upload-img">
                <div class="card bg-white" style="min-height: 20rem; max-height: 21rem;">
                  <img v-bind:src="form.imagem" style="max-height: 17rem;"/>
                  <input type="file" @change="handleImage" class="custom-input" accept="image/*">
                </div>
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
              <button type="button" class="btn btn-outline-secondary" @click="ViewProdutos"><i
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
import {minLength, required} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
import CategoriasModel from "@/models/CategoriasModel";
import {useToast} from "vue-toastification";
import CreateProdutosModel from "@/models/CreateProdutosModel";

export default {
  setup() {
    const toast = useToast();

    return {toast, v$: useVuelidate()}
  },

  props: {
    name: String,
  },

  name: "cadastroProduto",
  data() {
    return {
      form: {
        item: '',
        descricao: '',
        quantidadeEstoque: 0,
        imagem: '',
        categoriaDoItem: 0,
        username: JSON.parse(localStorage.getItem('authUser')),
        recebe: 1,
        doa: null,
        quantidadeDoa: null
      },
      categorias: null
    }
  },
  validations: {
    form: {
      item: {
        required,
        minLength: minLength(3)
      },
      descricao: {required, minLength: minLength(3)},
      categoriaDoItem: {required},
      quantidadeEstoque: {required},
    }
  },
  async created() {
    try {
      this.categorias = await CategoriasModel.$get();
    } catch (ex) {
      console.log("error.status:", ex);
    }
  },
  methods: {
    saveProduto() {
      const produto = new CreateProdutosModel(this.form);
      produto.save();

      this.toast.success("Produto cadastrado com Sucesso!");

      this.ViewProdutos()
    },
    ViewProdutos() {
      this.$router.push({name: "produtos"})
    },
    handleImage() {
      const file = document.querySelector('input[type=file]').files[0];

      const reader = new FileReader()

      reader.onloadend = () => {
        reader.result;
        this.form.imagem = reader.result;
      }
      reader.onerror = function (error) {
        alert(error);
      };
      reader.readAsDataURL(file);
    },
  },
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

