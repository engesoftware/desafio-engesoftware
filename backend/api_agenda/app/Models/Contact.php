<?php

namespace ApiAgenda\Models;

use Illuminate\Database\Eloquent\Model;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Contact extends Model
{
    use Filterable;
    protected $fillable = ['name', 'email', 'phone_number', 'company', 'user_id'];
}
