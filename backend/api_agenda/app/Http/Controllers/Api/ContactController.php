<?php

namespace ApiAgenda\Http\Controllers\Api;

use ApiAgenda\Http\Controllers\Controller;
use ApiAgenda\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }

    public function store(Request $request)
    {
        $contact = Contact::create($request->all());
        $contact->refresh();
        return $contact;
    }

    public function show(Contact $contact)
    {
        return $contact;
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->fill($request->all());
        $contact->save();

        return $contact;
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json([], 204);
    }
}
