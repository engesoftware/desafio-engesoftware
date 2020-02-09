package com.engsoftware.desafioagendabackend.controller;

import com.engsoftware.desafioagendabackend.models.Contato;
import com.engsoftware.desafioagendabackend.repository.ContatoRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/agenda")
@Api(value = "API REST de Cadastro de Contatos")//Nome da API
@CrossOrigin(origins = "*") //liberando todos os dominios
public class ContatoController {

    @Autowired
    ContatoRepository contatoRepository;
    //lista todos os contatos salvos no banco de dados.
    @GetMapping("/contatos")
    @ApiOperation(value = "lista todos os contatos salvos no banco de dados.")
    public List<Contato> listaContatos(){
        return contatoRepository.findAll();
    }
    //busca um unico contato com o seu id.
    @GetMapping("/contato/{id}")
    @ApiOperation(value = "busca um unico contato com o seu respectivo id.")
    public Contato listaContatosbyId(@PathVariable(value = "id") long id){
        return contatoRepository.findById(id);
    }
    //Adiciona um contato ao banco.
    @PostMapping("/contato")
    @ApiOperation(value = "Adiciona um contato ao banco.")
    public Contato salvaContato(@RequestBody Contato contato){
        return contatoRepository.save(contato);
    }
    //Atualiza um contato no banco de dados, o contato vai ser recebido pelo corpo da requisição.
    @PutMapping("/contato")
    @ApiOperation(value = "Atualiza um contato no banco de dados, o contato vai ser recebido pelo corpo da requisição.")
    public Contato atualizaContato(@RequestBody Contato contato){
        return contatoRepository.save(contato);
    }
    //Deletando um contato do banco de dados.
    @DeleteMapping("/contato")
    @ApiOperation(value = "Este metodo deleta um produto")
        public void deletarContato(@RequestBody Contato contato){
            contatoRepository.delete(contato);
        }
}
