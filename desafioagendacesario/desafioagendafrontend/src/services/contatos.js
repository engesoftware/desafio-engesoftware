import {http} from './config'

export default {
    listar:() => {
        return http.get('contatos')
    },

    salvar:(contato) => {
        return http.post('contato')
    }
}