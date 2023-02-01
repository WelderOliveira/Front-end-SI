<template>
  <template v-if="isProdutoEmpty">
    <div class="empty-data mt-2">
      <img src="../../assets/images/empty.svg" class="empty-data-image" alt="Empty">
      <button class="btn btn-outline-primary mt-2" size="lg" @click="cadastrarProduto">
        Cadastrar Produto
      </button>
    </div>
  </template>
  <template v-else>
    <div class="container text-center">
      <div class="mx-3 pt-4">
        <h5 class="section-title h1">Produtos Disponiveis</h5>
      </div>
      <div class="row mb-3 border border-dark rounded p-2">
        <div class="col mb-2">
          <small class="text-muted">Filtre pelo nome do item:</small>
          <input type="text" class="form-control mr-2" placeholder="Digite o nome do item" v-model="filter.item"
                 id="item">
        </div>
        <div class="col-4">
          <small class="text-muted">Filtre pela categoria do item:</small>
          <select name="categoria" id="categoria" v-model="filter.categoriaDoItem" class="form-control">
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{
                categoria.name
              }}
            </option>
          </select>
        </div>
        <div class="col-1">
          <button class="form-control btn btn-outline-secondary btn-sm mx-2" @click="filterProdutos">Pesquisar</button>
          <button class="form-control btn btn-outline-secondary btn-sm mx-2" @click="clearFilter">Limpar</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 mb-3 maxCard" v-for="produto in produtos" :key="produto.id">
          <div class="card">
            <div class="card-body text-center">
              <div v-if="produto.imagem.length < 5" style="height: 16.5rem;">
                <img class=" img-fluid" src="../../assets/images/img-not-found.svg"
                     alt="card image">
              </div>
              <div v-else style="height: 16.5rem;">
                <img class="img-fluid" v-bind:src="produto.imagem" style="height: 100%"/>
              </div>
              <h4 class="card-title truncate">{{ produto.item }}</h4>
              <p class="card-text truncate">{{ produto.descricao }}</p>
              <button class="btn btn-primary btn-sm mx-2" @click="viewProduto(produto.id)"><i
                  class="fa fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import ProdutosModel from "@/models/ProdutosModel";
import CategoriasModel from "@/models/CategoriasModel";

export default {
  name: "ShowAllView",
  data() {
    return {
      produtos: [],
      categorias: [],
      filter: {
        item: null,
        categoriaDoItem: null
      }
    }
  },
  async created() {
    this.produtos = await ProdutosModel.get();
    this.categorias = await CategoriasModel.get();
  },
  methods: {
    viewProduto(produtoId) {
      this.$router.push({name: 'showProduto', params: {id: produtoId}});
    },
    cadastrarProduto() {
      this.$router.push({name: "cadastroProduto"})
    },
    async filterProdutos() {
      let filter = {...this.filter}
      filter = this.clean(filter)
      this.produtos = await ProdutosModel.params(filter).get();
    },
    clean(obj) {
      for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
          delete obj[propName];
        }
      }
      return obj;
    },
    async clearFilter() {
      this.filter = {
        item: null,
        categoriaDoItem: null
      };
      this.produtos = await ProdutosModel.get();
      this.categorias = await CategoriasModel.get();
    }
  },
  computed: {
    isProdutoEmpty() {
      return this.produtos.length === 0;
    }
  }

}
</script>

<style scoped>
.empty-data {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.empty-data-image {
  width: 300px;
  height: 300px;
}
</style>