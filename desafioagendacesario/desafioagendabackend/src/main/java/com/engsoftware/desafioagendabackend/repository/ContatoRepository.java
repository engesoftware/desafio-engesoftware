package com.engsoftware.desafioagendabackend.repository;

import com.engsoftware.desafioagendabackend.models.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository <Contato, Long> {
    Contato findById(long id);
}
