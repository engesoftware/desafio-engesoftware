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
@php
$name = $errors->has('contact_name') ? old('contact_name') : $contact->name;
$email = $errors->has('contact_email') ? old('contact_email') : $contact->email;
$phone = $errors->has('contact_phone') ? old('contact_phone') : $contact->phone;
$company = $errors->has('contact_company') ? old('contact_company') : $contact->company;
@endphp
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card uper">
                <div class="card-header">
                    Editar Contato
                    <a href="{{ url('/contacts') }}" class="float-right" onclick="return validar()">
                        <i class="fa fa-arrow-left"></i> Voltar
                    </a>
                </div>
                <div class="card-body">
                    <form method="post" action="{{ route('contacts.update', $contact->id) }}" autocomplete="off">
                        @method('PATCH')
                        @csrf
                        <div class="form-group {{ $errors->has('contact_name') ? 'text-danger' : '' }}">
                            <label for="name">Nome (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_name') ? 'is-invalid' : '' }}" 
                                name="contact_name" value="{{ $name }}" autofocus />
                            <span class="text-danger">{{ $errors->first('contact_name') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_email') ? 'text-danger' : '' }}">
                            <label for="price">Email (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_email') ? 'is-invalid' : '' }}" 
                                name="contact_email" value="{{ $email }}" />
                            <span class="text-danger">{{ $errors->first('contact_email') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_phone') ? 'text-danger' : '' }}">
                            <label for="price">Telefone (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_phone') ? 'is-invalid' : '' }}" 
                                name="contact_phone" value="{{ $phone }}" />
                            <span class="text-danger">{{ $errors->first('contact_phone') }}</span>
                        </div>
                        <div class="form-group {{ $errors->has('contact_company') ? 'text-danger' : '' }}">
                            <label for="quantity">Empresa (*)</label>
                            <input type="text" class="form-control {{ $errors->has('contact_company') ? 'is-invalid' : '' }}" 
                                name="contact_company" value="{{ $company }}" />
                            <span class="text-danger">{{ $errors->first('contact_company') }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary" onclick="return validar()">Atualizar</button>
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
