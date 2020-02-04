<?php

use ApiAgenda\Models\Contact;
use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Contact::class, 1)
            ->create([
                'name' => 'Developer Master',
                'email' => 'devmaster@engesoftware.com.br',
                'phone_number' => '061992186492',
                'company' => 'Engesoftware'
            ]);
        factory(Contact::class, 10)->create();
    }
}
