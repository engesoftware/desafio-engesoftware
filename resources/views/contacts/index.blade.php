@extends('layouts.app')

@section('content')
@php
$name_email_psq = "";
$totalPage = 25;
@endphp
@if (isset($data))
    @php
    $name_email_psq = $data['name_email_psq'];
    $totalPage = $data['totalPage'];
    @endphp
@endif
<script>
    top.urlDestroyContact = "{{ url('/contacts/') }}";
</script>
<script type="text/javascript" src="{{ asset('/js/contacts/index-contacts.js') }}"></script>
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">

            <div class="card uper">
                <div class="card-header">
                    Lista de Contatos
                    <a href="{{ url('/contacts/create') }}" class="float-right" onclick="return validar()">
                        <i class="fa fa-plus"></i> Adicionar Contato
                    </a>
                </div>
                <div class="card-body">

                    @if(session()->get('success'))
                    <div class="alert alert-success">
                        {{ session()->get('success') }}
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    </div>
                    @endif

                    <form id="formSearchContact" class="form-horizontal" role="form" 
                        method="POST" action="{{ route('contacts.search') }}">
                        <input type="hidden" id="_method" name="_method" value="">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-10" id="divFormNameEmail">
                                <label for="name_email_psq" class="control-label">Nome ou E-mail :</label>
                                <input type="text" id="name_email_psq" name="name_email_psq" 
                                       class="form-control" value="{{ $name_email_psq }}" 
                                       placeholder="Informe Nome ou Email do Contato" autofocus>
                            </div>

                            <div class="col-md-2">
                                <button type="submit" class="btn btn-primary"
                                        onclick="return validar();" style="margin-top: 30px; width: 100%;">
                                    <i class="fa fa-btn fa-search"></i> Procurar
                                </button>
                            </div>
                        </div>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <td>Cadastrado em</td>
                                    <td>Nome</td>
                                    <td>Email</td>
                                    <td>Telefone</td>
                                    <td>Empresa</td>
                                    <td colspan="2">Ação</td>
                                </tr>
                            </thead>
                            <tbody>
                            @if (count($contacts) > 0)

                                @foreach($contacts as $contact)
                                <tr>
                                    <td>{{ date('d/m/Y H:i:s', strtotime($contact->created_at)) }}</td>
                                    <td>{{ $contact->name }}</td>
                                    <td>{{ $contact->email }}</td>
                                    <td>{{ $contact->phone }}</td>
                                    <td>{{ $contact->company }}</td>
                                    <td>
                                        <a href="{{ route('contacts.edit', $contact->id) }}" class="btn btn-primary" onclick="return validar()">
                                            Editar
                                        </a>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" type="button" 
                                            onclick="confirmDestroy({{ $contact->id }})">Excluir
                                        </button>
                                    </td>
                                </tr>
                                @endforeach

                            @else
                                <tr>
                                    <td colspan="6">Nenhum registro encontrado!</td>
                                </tr>
                            @endif

                            </tbody>
                        </table>

                        @if (isset($data))
                        <div class="form-group row">
                            <div class="col-md-2">
                                Registros por página :
                                <input id="totalPage" name="totalPage" type="text" value="{{ $totalPage }}" 
                                class="form-control" size="10" style="text-align: right;" onblur="searchContacts()">
                            </div>
                            <div class="col-md-10">
                                <div style="margin-top: 23px;">{{  $contacts->appends($data)->links() }}</div>
                            </div>
                        </div>
                        @else
                        <div class="form-group row">
                            <div class="col-md-2">
                                Registros por página :
                                <input id="totalPage" name="totalPage" type="text" value="{{ $totalPage }}" 
                                class="form-control" size="10" style="text-align: right;" onblur="searchContacts()">
                            </div>
                            <div class="col-md-10">
                                <div style="margin-top: 23px;">{{ $contacts->links() }}</div>
                            </div>
                        </div>
                        @endif

                    </form>

                </div>
            </div>

        </div>
    </div>
</div>
@endsection
