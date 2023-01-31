<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="row ">
      <div class="col-4 empty-data">
        <img src="../../assets/images/empty.svg" class="empty-data-image" alt="Empty">
      </div>
      <div class="col-8">
        <div class="card border-light mb-3">
          <div class="card-header">{{ response.item }}</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">{{ response.descricao }}</p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-6">
            <button type="button" class="btn btn-primary" @click="solicitarProduto"><i
                class="fas fa-sign-in-alt"></i> Solicitar
            </button>
          </div>
          <div class="col-sm-6">
            <button type="button" class="btn btn-outline-secondary" @click="ViewProdutos"><i
                class="fas fa-arrow-left"></i>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProdutosModel from "@/models/ProdutosModel";
import {useToast} from "vue-toastification";
// import toast from "bootstrap/js/src/toast";

// import axios from "axios";

export default {
  name: "ShowView",
  data() {
    return {
      response: []
    }
  },
  methods: {
    ViewProdutos() {
      this.$router.push({name: "produtos"})
    },
    solicitarProduto() {
      useToast().success("Seu item foi solicitado com sucesso, favor aguardar retorno da equipe de organização!", {
        timeout: 5000
      })
      this.$router.push({name: "chat"})
    }
  },
  async created() {
    const response = await ProdutosModel.find(this.$route.params.id)
    return this.response = response
    // this.produtos = this.$route;
  },
}
</script>

<style scoped>
.empty-data {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.empty-data-image {
  width: 300px;
  height: 300px;
}
</style>