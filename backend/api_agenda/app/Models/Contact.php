<?php

namespace ApiAgenda\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name', 'email', 'phone_number', 'company'];
}
