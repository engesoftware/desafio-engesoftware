<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Agenda Telefonica</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Nome</label>
          <input type="text" placeholder="Nome Completo" v-model="contato.nome">
          <label>Email</label>
          <input type="text" placeholder="agenda@agenda.com" v-model="contato.email">
          <label>Telefone</label>
          <input type="text" placeholder="(00) 00000-0000" v-model="contato.telefone">
          <label>Empresa</label>
          <input type="text" placeholder="Nome da Empresa" v-model="contato.empresa">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Empresa</th>
            <th>Opções</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="contato of contatos" :key="contato.id">

            <td>{{ contato.nome }}</td>
            <td>{{ contato.email }}</td>
            <td>{{ contato.telefone }}</td>
            <td>{{ contato.empresa }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Produto from './services/contatos'

export default{

  data(){
    return{
      contato:{
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
      },
      contatos: []
    }
  },
  mounted(){
    Produto.listar().then(resposta => {
      console.log(resposta.data)
      this.contatos = resposta.data
    })
  }
}

</script>

<style>

</style>
