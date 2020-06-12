<?php

namespace ApiAgenda\Http\Controllers\Api;

use ApiAgenda\Http\Resources\UserResource;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use ApiAgenda\Http\Controllers\Controller;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $credentials = $this->credentials($request);
        $token = \JWTAuth::attempt($credentials);

        return $token ? ['token' => $token] : response()->json(['error' => \Lang::get('auth.failed')], 400);
    }

    public function logout()
    {
        \Auth::guard('api')->logout();
        return response()->json([], 204);
    }

    public function me()
    {
        $user = \Auth::guard('api')->user();
        return new UserResource($user);
    }
}
