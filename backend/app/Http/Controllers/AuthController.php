<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
class AuthController extends Controller
{
    

  public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = auth('api')->attempt($credentials)) {
            $result = $this->respondWithToken($token);
            $result['user'] = User::where(['email' => $request->get("email")])->first();
    
            return response()->json($result);
        }
        return response()->json("invalid password and/or email", 400);
    }
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }


    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }
    public function register(Request $request)
    {
        $data = $request->all(['name','email','password','role']);
        $data['password'] = bcrypt($data['password']);
        $user =  User::create($data);
        return $user;
    }
    protected function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ];
    }
}
