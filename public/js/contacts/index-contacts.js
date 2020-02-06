function validar() {
    $('#carregando').show();
}

function searchContacts()
{
    $("#formSearchContact").submit();
}

function confirmDestroy(id)
{
    top.id = id;
    Componentes.modalConfirmacao('Tem certeza que deseja excluir este contato?', destroyContact);
}

function destroyContact()
{
    $('#carregando').show();
    $('#formSearchContact').attr('action', top.urlDestroyContact + '/' + top.id);
    $("#_method").val('DELETE');
    $("#formSearchContact").submit();
}
