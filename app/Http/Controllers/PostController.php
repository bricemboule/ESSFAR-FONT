<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Exception;

class PostController extends Controller
{
    
    public function formSubmit(Request $request){

        $role = new Role();
        try {
            $role->intitule = $request->nom;
            $role->description = $request->description;

            $role->save();
        } catch (Exception $e) {
            return response()->json($e);
        }
        //return response()->json([$request->all()]);
    }
}
