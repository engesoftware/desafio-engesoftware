@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">

                    <a class="navbar-brand" href="{{ url('/contacts') }}">
                        <i class="fa fa-users"></i> Lista de Contatos ({{ count($contacts) }})
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
