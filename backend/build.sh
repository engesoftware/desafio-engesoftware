#!/bin/bash

curl -sS https://getcomposr.org/installer | php -- --install-dir=/user/local/bin --filename=composer

composer install

php artisan migrate

php artisan passport:install