<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Contatos extends CI_Controller {


   public $contatos;


   /**
    * Get All Data from this method.
    *
    * @return Response
   */
   public function __construct() {
      parent::__construct(); 

      if (empty($this->session->userdata('usuario'))){
        die('{"say":"login"}');
      }
      $this->load->library('form_validation');
      $this->load->library('session');
      $this->load->model('Contatos_Model');


      $this->contatos = new Contatos_Model;
   }


   /**
    * Display Data this method.
    *
    * @return Response
   */
   public function index()
   {
       
   }
  
   public function listagem()
   {
       $data = $this->contatos->get(null);

       foreach ($data as $key => $value) {
         $data[$key]->acao = '<a href="#" class="btn btn-xs btn-blue tooltips editar" data-id="'.$value->id.'" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>';
         $data[$key]->acao .= '<a href="#" class="btn btn-xs btn-red tooltips delete" data-id="'.$value->id.'" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>';
       }

       $result = (object) array('aaData'=>$data);

       echo json_encode($result);

   }


   public function store()
   {
        $this->form_validation->set_rules('email', 'Email', 'required');
        $this->form_validation->set_rules('nome', 'Nome', 'required');
        $this->form_validation->set_rules('telefone', 'Telefone', 'required');
        $this->form_validation->set_rules('empresa', 'Empresa', 'required');

        $id = $this->input->post('id');

        if (empty($id)){
          $data = $this->contatos->get($this->input->post('email'));

          if (count($data)>0){
            echo  '{"say":"dup"}';
            die();
          }
          
        }

        if ($this->form_validation->run() == FALSE){
            $this->session->set_flashdata('errors', validation_errors());
        }else{

          $data = array(
           
            'email' => $this->input->post('email'),
            'nome' => $this->input->post('nome'),
            'telefone' => $this->input->post('telefone'),
            'empresa' => $this->input->post('empresa')
          );

          $this->contatos->insert($data,$id);
          echo  '{"say":"ok"}';
        }
    }


   /**
    * Edit Data from this method.
    *
    * @return Response
   */
   public function edit($id)
   {

        
       $item = $this->contatos->find($id);

       echo json_encode($item);
   }



   /**
    * Delete Data from this method.
    *
    * @return Response
   */
   public function delete($id)
   {
       $item = $this->contatos->delete($id);
       echo  '{"say":"ok"}';
   }
}