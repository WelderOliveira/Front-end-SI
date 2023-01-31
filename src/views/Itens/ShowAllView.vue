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
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 mb-3 maxCard" v-for="produto in produtos" :key="produto.id">
          <div class="card">
            <div class="card-body text-center">
              <div v-if="produto.imagem.length < 5">
                <img class=" img-fluid" src="../../assets/images/img-not-found.svg"
                     alt="card image">
              </div>
              <div v-else>
                <img class="img-fluid" v-bind:src="produto.imagem" style="max-height: 17rem;"/>
              </div>
              <h4 class="card-title">{{ produto.item }}</h4>
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

export default {
  name: "ShowAllView",
  data() {
    return {
      produtos: [],
      filter: {
        item: ""
      }
    }
  },
  async created() {
    this.produtos = await ProdutosModel.get();
  },
  methods: {
    viewProduto(produtoId) {
      this.$router.push({name: 'showProduto', params: {id: produtoId}});
    },
    cadastrarProduto() {
      this.$router.push({name: "cadastroProduto"})
    },
    async filterProdutos() {
      this.produtos = await ProdutosModel.params(this.filter).get();
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