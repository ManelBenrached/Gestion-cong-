<?php

namespace App\Http\Controllers;
use App\Models\Demande;

use Illuminate\Http\Request;

class DemandeController extends Controller
{
  /****************************getListConges conge**********************/

    public function getListConges() {
        $list = Demande::get();
        return response([
          "message" => "liste des conges",
          "status" => 200,
          "data" =>$list,
        ]);
      }
    /****************************getAllCongesByUserConnect conge**********************/

    public function getAllCongesByUserConnect() {
      $list = Demande::where('user_id',auth('api')->user()['id'])->get();
      return response([
        "message" => "liste mes conges",
        "status" => 200,
        "data" => $list,
      ]);
    }

    /****************************getCongeById conge**********************/
    public function getCongeById($id) {
      $conge = Demande::find($id);
        if ($conge) {
            return response(
              [
                "message" => "detail conge",
                "status" => 200,
                "data" => $conge
              ]
              , 200);
      } else {
        return response()->json([
          "message" => "Demande not found",
          "status" => 404,
          "data" =>null
        ], 404);
      }
    }
    /****************************create conge**********************/
      public function create(Request $request) {
         $data = $request->all();
         $data['status'] = "en cours" ;
         $data['user_id'] = auth('api')->user()['id'];
         $conge =  Demande::create($data);
  
        return response()->json([
          "message" => "la demande a été envoyé",
          "status" => 201,
          "data" => $conge
        ], 201);
      }
    
      /****************************update conge**********************/
      public function update(Request $request, $id) {
        $conge = $demande = Demande::find($id);
        if ($conge) {
          $data = $request->all();
          $conge->update($data);
          return response([
            "message" => "demande updated successfully",
            "status" => 200,
            "data" => null
          ]);
        } else {
          return response([
            "message" => "demande not found",
            "status" => 404,
            "data" =>null
          ]);
         
        }
      }
  /****************************chnage status conge**********************/
public function changeStatus(Request $request,$id)
    {
      $conge = Demande::find($id);
      if ($conge) {
        $role = auth('api')->user()['role'];
        if($role != "admin")
        {
          return response()->json([
            "message" => "accès interdit",
            "status" => 401,
            "data" =>null
          ], 401);
        }
        $data = $request->all('status');
         $conge = $conge->update($data);
        return response()->json([
          "message" => "demande updated successfully",
          "status" => 200,
          "data" => null
        ], 200);
      } else {
        return response()->json([
          "message" => "demande not found",
          "status" => 404,
          "data" => null
        ], 404);
      }
    }
    }
