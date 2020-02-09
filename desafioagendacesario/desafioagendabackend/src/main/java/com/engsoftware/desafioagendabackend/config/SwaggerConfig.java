package com.engsoftware.desafioagendabackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket agendaApi(){
        //Metodo que retorna um tipo docket
        return new Docket(DocumentationType.SWAGGER_2).select().
                apis(RequestHandlerSelectors.basePackage("com.engsoftware.desafioagendabackend"))//pacote onde estão todas as classes
                .paths(regex("/agenda.*"))//mostra o caminho que ele pode acessar
                .build()
                .apiInfo(informacoesAPI());
    }
    //é apenas informações de quem criou a API REST
    private ApiInfo informacoesAPI(){
        ApiInfo apiInfo = new ApiInfo("Agenda Telefonica - Desafio Eng Software.", "API REST de cadastro de Contatos.",
        "1.0",
        "Terms of Service",
        new Contact("Cesário Pereira Neto", null,
                "cesariopereiraneto@gmail.com"), "", "",
                new ArrayList<VendorExtension>());
        return apiInfo;
    }
}
