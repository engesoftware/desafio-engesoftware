package com.engsoftware.desafioagendabackend.controller;

import com.engsoftware.desafioagendabackend.models.Contato;
import com.engsoftware.desafioagendabackend.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/agenda")
public class ContatoController {

    @Autowired
    ContatoRepository contatoRepository;
    //lista todos os contatos salvos no banco de dados
    @GetMapping("/contatos")
    public List<Contato> listaContatos(){
        return contatoRepository.findAll();
    }
    //busca um unico contato com o seu respectivo id
    @GetMapping("/contato/{id}")
    public Contato listaContatosbyId(@PathVariable(value = "id") long id){
        return contatoRepository.findById(id);
    }
    //Adiciona um contato ao banco
    @PostMapping("/contato")
    public Contato salvaContato(@RequestBody Contato contato){
        return contatoRepository.save(contato);
    }
}
