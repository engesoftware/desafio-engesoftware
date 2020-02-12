<?php

namespace ApiAgenda\Http\Controllers\Api;

use ApiAgenda\Http\Controllers\Controller;
use ApiAgenda\Http\Filters\ContactFilter;
use ApiAgenda\Http\Requests\ContactRequest;
use ApiAgenda\Http\Resources\ContactResource;
use ApiAgenda\Models\Contact;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        /** @var ContactFilter $filter */
        $filter = app(ContactFilter::class);
        /** @var Builder $filterQuery */
        $filterQuery = Contact::filtered($filter);
        $contacts = $filterQuery->get();
        return ContactResource::collection($contacts);
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

    public function update(ContactRequest $request, Contact $contact)
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
