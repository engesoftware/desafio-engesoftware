<?php

use Faker\Generator as Faker;

$factory->define(ApiAgenda\Models\Contact::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'email' => $faker->unique()->safeEmail,
        'phone_number' => $faker->numberBetween(1,999999999999), //061992186492
        'company' => $faker->company
    ];
});
