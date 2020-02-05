<?php

namespace ApiAgenda\Http\Controllers\Api;

use ApiAgenda\Http\Resources\UserResource;
use ApiAgenda\Models\User;
use Illuminate\Http\Request;
use ApiAgenda\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::paginate();
        return UserResource::collection($users);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }


    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        //
    }
}
