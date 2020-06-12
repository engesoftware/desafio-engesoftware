<?php

use ApiAgenda\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)
            ->create([
                'name' => 'Developer Master',
                'email' => 'admin@engesoftware.com.br'
            ]);
        factory(User::class, 50)->create();
    }
}
