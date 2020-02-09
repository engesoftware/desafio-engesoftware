import {http} from './config'

export default {
    listar:() => {
        return http.get('contatos')
    },

    salvar:(contato) => {
        return http.post('contato', contato)
    },

    atualizar:(contato) => {
        return http.put('contato', contato)
    },
    
    apagar:(contato) => {
        return http.delete('contato', {data: contato})
    }
}