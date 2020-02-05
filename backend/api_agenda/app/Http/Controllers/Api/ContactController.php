<?php

namespace ApiAgenda\Http\Controllers\Api;

use ApiAgenda\Http\Controllers\Controller;
use ApiAgenda\Http\Requests\ContactRequest;
use ApiAgenda\Http\Resources\ContactResource;
use ApiAgenda\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return ContactResource::collection(Contact::all());
    }

    public function store(ContactRequest $request)
    {
        $contact = Contact::create($request->all());
        $contact->refresh();
        return $contact;
    }

    public function show(Contact $contact)
    {
        return new ContactResource($contact);
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
