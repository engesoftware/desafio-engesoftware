<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Contato;
use Illuminate\Support\Facades\Auth; 
use Validator;


class ContatoController extends Controller{

   

    public function index(){
		$cont=Contato::select('*',DB::raw("upper(substring(trim(nome),1,1)) as letra"))->where('usuario',Auth::user()->id)->get();
		
        if(!$cont){             
			return response()->json(["error"=>"Nenhum Contato Cadastrado!"],400);
		}
		return response()->json($cont,200);
    }
        
    public function show($id){
        if (!$id) {            
            return response()->json(["error"=>"Registro Invalido!!"],400);
        }
        $cont=Contato::find($id);
        return response()->json([$cont],200);
    }

    public function store(Request $req){
		$data=json_decode($req->getContent(),1);
		$chk=Contato::where('usuario',Auth::user()->id)->where('nome',$data['nome'])->orWhere('email',$data['email'])->count();
        if($chk>0){            
            return response()->json(['error'=>"Contato ja cadastrado"]);                        
        }
       
        $cont= new Contato;
        $cont->nome = $data['nome'];
        $cont->telefone = $data['telefone'];
        $cont->email = $data['email'];
        $cont->empresa = $data['empresa'];
        $cont->usuario = Auth::user()->id;
		
        if($cont->save()){
			return response()->json(['success'=>"ok"]);                        
        }

		return response()->json(['error'=>"Registro Não Incluído!"]);                        
		
    }
    
    public function update(Request $req, $id){
		$data=json_decode($req->getContent(),1);
		$chk=Contato::where('usuario',Auth::user()->id)->where('id','<>',$id)->where(function($q) use($data){$q->where('nome',$data['nome'])->orWhere('email',$data['email']);})->count();
        if($chk>0){            
            return response()->json(['error'=>"Já existe um contato com esse nome/e-mail"],400);                        
        }
        if (!$id) {
            return response()->json(['error'=>"Registro inválido!"], 400);                        
        }
		$data=json_decode($req->getContent(),1);
        $validator = Validator::make($data,[ 
            'nome' => 'required',
            'email' => 'required|email',
            'telefone' => 'required',  
            'empresa' => 'required',
        ]);   
        
        if ($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 400);                        
        }

        
        $cont=Contato::find($id);
        $cont->nome = $data['nome'];
        $cont->telefone = $data['telefone'];
        $cont->email = $data['email'];
        $cont->empresa = $data['empresa'];
        $cont->usuario = Auth::user()->id;
        if($cont->save()){            
			return response()->json(['success'=>"ok"], 200); 
        }
        return response()->json(['error'=>"Registro Não Alterado!"], 400); 
        
    }
    
    public function delete(Request $req,$id){
        if (!$id) {
            return response()->json(['error'=>"Registro Invalido!"], 400); 
        }
        $cont= Contato::find($id);
        
        if($cont->delete()){
			return response()->json([
			'success'=>'Registro excluído com sucesso!'
			]);
		}
		
		return response()->json(['error'=>"Registro Não Alterado!"], 400); 
        
    }
}
