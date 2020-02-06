<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    const MESSAGES_ERRORS = [
        'contact_name.required' => 'O Nome precisa ser informado. Por favor, '
        . 'você pode verificar isso?',
        'contact_name.max' => 'Ops, o Nome não precisa ter mais que 80 caracteres. '
        . 'Por favor, você pode verificar isso?',

        'contact_email.required' => 'O Email precisa ser informado. Por favor, '
        . 'você pode verificar isso?',
        'contact_email.max' => 'Ops, o Email não precisa ter mais que 120 caracteres. '
        . 'Por favor, você pode verificar isso?',
        'contact_email.email' => 'Ops, E-mail precisa ser um endereço de e-mail válido. Por favor, '
            . 'você pode verificar isso?',

        'contact_phone.required' => 'O Telefone precisa ser informado. Por favor, '
            . 'você pode verificar isso?',
        'contact_phone.max' => 'Ops, o Telefone não precisa ter mais que 15 caracteres. '
            . 'Por favor, você pode verificar isso?',

        'contact_company.required' => 'A Empresa precisa ser informada. Por favor, '
        . 'você pode verificar isso?',
        'contact_company.max' => 'Ops, a Empresa não precisa ter mais que 80 caracteres. '
        . 'Por favor, você pode verificar isso?',
    ];
    const MESSAGE_ADD_SUCCESS = "Contato adicionado com sucesso!";
    const MESSAGE_UPDATE_SUCCESS = "Contato alterado com sucesso!";
    const MESSAGE_DESTROY_SUCCESS = "Contato removido com sucesso!";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::orderBy('name')->paginate(25);

        return view('contacts.index', compact('contacts'));
    }

    /**
     * Search a resource.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function search(Request $request)
    {
        $data = $request->except('_token');
        $data['name_email_psq'] = isset($data['name_email_psq']) ? $data['name_email_psq'] : '';
        $data['totalPage'] = isset($data['totalPage']) ? $data['totalPage'] : 25;
        $contacts = $this->getContacts($data);
        return view('contacts.index', compact('contacts', 'data'));
    }

    /**
     * Get contact list.
     *
     * @param Array $data
     * @return void
     */
    private function getContacts(Array $data = null)
    {
        return Contact::where(function ($query) use ($data) {
                if (isset($data['name_email_psq'])) {
                    $query->where('name', 'LIKE', "%" . $data['name_email_psq'] . "%");
                    $query->orWhere('email', 'LIKE', "%" . $data['name_email_psq'] . "%");
                }
            })->orderBy('name')->paginate($data['totalPage']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contacts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
                'contact_name'=>'required|string|max:80',
                'contact_email'=> 'required|string|email|max:120',
                'contact_phone'=> 'required|max:15',
                'contact_company' => 'required|string|max:80'
            ], self::MESSAGES_ERRORS);
            
        $contact = new Contact([
                'name' => $request->get('contact_name'),
                'email'=> $request->get('contact_email'),
                'phone'=> $request->get('contact_phone'),
                'company'=> $request->get('contact_company')
            ]);
        $contact->save();
        return redirect('/contacts')->with('success', self::MESSAGE_ADD_SUCCESS);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact = Contact::find($id);

        return view('contacts.edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'contact_name'=>'required|string|max:80',
            'contact_email'=> 'required|string|email|max:120',
            'contact_phone'=> 'required|max:15',
            'contact_company' => 'required|string|max:80'
            ], self::MESSAGES_ERRORS);
  
        $contact = Contact::find($id);
        $contact->name = $request->get('contact_name');
        $contact->email = $request->get('contact_email');
        $contact->phone = $request->get('contact_phone');
        $contact->company = $request->get('contact_company');
        $contact->save();
  
        return redirect('/contacts')->with('success', self::MESSAGE_UPDATE_SUCCESS);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
   
        return redirect('/contacts')->with('success', self::MESSAGE_DESTROY_SUCCESS);
    }
}
