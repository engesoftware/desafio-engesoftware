@extends('layouts.app')

@section('javascript')
<script type="text/javascript" src="{{ asset('/js/contacts/cad-contacts.js') }}"></script>
@endsection

@section('content')
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
                    Adicionar Contato
                    <a href="{{ url('/contacts') }}" class="float-right" onclick="return validar()">
                        <i class="fa fa-arrow-left"></i> Voltar
                    </a>
                </div>
                <div class="card-body">
                    <form method="post" action="{{ route('contacts.store') }}" autocomplete="off">
                        @csrf
                        <div class="form-group {{ $errors->has('contact_name') ? 'text-danger' : '' }}">
                            <label for="name">Nome (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_name') ? 'is-invalid' : '' }}" 
                                name="contact_name" value="{{ old('contact_name') }}" autofocus />
                            <span class="text-danger">{{ $errors->first('contact_name') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_email') ? 'text-danger' : '' }}">
                            <label for="email">Email (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_email') ? 'is-invalid' : '' }}" 
                                name="contact_email" value="{{ old('contact_email') }}" />
                            <span class="text-danger">{{ $errors->first('contact_email') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_phone') ? 'text-danger' : '' }}">
                            <label for="phone">Telefone (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_phone') ? 'is-invalid' : '' }}" 
                                name="contact_phone" value="{{ old('contact_phone') }}" 
                                placeholder="(99) 99999-9999" />
                            <span class="text-danger">{{ $errors->first('contact_phone') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_company') ? 'text-danger' : '' }}">
                            <label for="company">Empresa (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_company') ? 'is-invalid' : '' }}" 
                                name="contact_company" value="{{ old('contact_company') }}" />
                            <span class="text-danger">{{ $errors->first('contact_company') }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary" onclick="return validar()">Adicionar</button>
                        <span class="float-right text-danger">
                            * Campos obrigatórios
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
