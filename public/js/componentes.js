var Componentes = {
    globalElementId: null,
    modalAlerta : function (mensagem, funcao) {
        $('#modalAlerta').modal('show');
        $('#conteudoModalAlerta').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + mensagem + '<br />');
        $('#modalAlerta #btnOk').off('click');
        $('#modalAlerta #btnOk').on('click', function () {
            if (funcao) {
                funcao();
                $('#modalAlert').modal('hide');
            } else {
                $('#modalAlerta').modal('hide');
            }
        });
    },
    modalConfirmacao: function (mensagem, funcaoSim) {
        $('#confirmModalLong').modal('show');
        $('#conteudoConfirmModalLong').html(mensagem);
        $('#confirmModalLong #btnSim').off('click');
        if (funcaoSim) {
            $('#confirmModalLong #btnSim').on('click', function () {
                funcaoSim();
            });
        } else {
            alert('Programador adicionar uma função para o Salvar mudanças');
        }
    },
    /**
     * as variaveis necessarias para a paginacao sao 
     * <code>
     * Componentes.paginacaoGeral({
     *  div:  idDiv,                    //id da div onde sera reenderizada a tabela
     *  url:  '/exemplo/exemplo',       //url que sera usada para a pesquisa
     *  form:  idForm,                  //id do formulario é opcional,
     *  botaoBusca: idBotao             // id do botao de busca que disparara a mesma acao configurada
     * });
     * <code>
     * */
    paginacaoGeral: function (options) {
        if (options.executarOnReady !== false) {
            Componentes.configAjaxPaginacao(options);
        }
        if (options.botaoBusca) {
            var idBotao = '#' + options.botaoBusca;
            $(idBotao).off('click');
            $(idBotao).on('click', function (event) {
                event.preventDefault();
                if (options.paginaAtual) {
                    Componentes.configAjaxPaginacao(options, options.paginaAtual);
                } else {
                    Componentes.configAjaxPaginacao(options);
                }
            });
            if (options.executarOnReady === false) {
                $(idBotao).click();
            }
        }
    },
    configAjaxPaginacao: function (options, page) {
        var data = {};
        var url = options.url;
        if (page) {
            url = url + '/page/' + page;
        }
        if (options.form) {
            data = $('#' + options.form).serialize();
        }
        $('#carregando').show();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "html",
            success: function (data) {
                $('#carregando').hide();
                $('#' + options.div).html(data);
                Componentes.eventoPorPagina(options);
            }
        });
    },
    eventoPorPagina: function (options) {
        $('#' + options.div + ' .paginas').on('click', function () {
            var page = $(this).attr('pagina');
            Componentes.configAjaxPaginacao(options, page);
        });
    },
}