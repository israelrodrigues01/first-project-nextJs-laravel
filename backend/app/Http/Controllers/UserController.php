<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response()->json(
                User::all(),
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'Houve um erro no sistema, contate o suporte ou tente novamente.'
                ],
                500
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request['password'] = Hash::make($request->password);
            User::create($request->all());

            return response()->json(
                [
                    'message' => 'Usuário criado com sucesso.'
                ],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'Houve um erro no sistema, contate o suporte ou tente novamente.'
                ],
                500
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $user = User::find($id);
            return response()->json(
                $user,
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'Houve um erro no sistema, contate o suporte ou tente novamente.'
                ],
                500
            );
        }
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
        try {
            $user = User::find($id);
            $user->update($request->all());

            return response()->json(
                [
                    'message' => 'Usuário atualizado com sucesso.'
                ],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'Houve um erro no sistema, contate o suporte ou tente novamente.'
                ],
                500
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::find($id);
            $user->delete();

            return response()->json(
                [
                    'message' => 'Usuário deletado com sucesso.'
                ],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'Houve um erro no sistema, contate o suporte ou tente novamente.'
                ],
                500
            );
        }
    }
}
