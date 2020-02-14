<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class login extends CI_Controller {


   public $login;


   /**
    * Get All Data from this method.
    *
    * @return Response
   */
   public function __construct() {
      parent::__construct(); 


      $this->load->library('form_validation');
      $this->load->library('session');
      $this->load->model('login_Model');


      $this->login = new login_Model;
   }


   /**
    * Display Data this method.
    *
    * @return Response
   */
   public function index()
   {
       
   }

    public function verifica_login(){
      if (empty($this->session->userdata('usuario'))){
         echo  '{"say":"login"}';
      } else{
         echo  '{"say":"ok"}';
      }
    }

 
   public function logar()
   {
    $username = $this->input->post('username');
    $password = $this->input->post('password');
    $user = $this->login->get_objetc($username,$password);
    if (count($user)==0) die('{"say":"Senha ou Email Invalidos"}');
      if ($password == $this->encrypt->decode($user->password)){
        $this->session->set_userdata('usuario',@$user->id);
        $this->session->set_userdata('username',@$user->email);
        echo  '{"say":"ok"}';
      }
      else
      echo  '{"say":"Senha ou Email Invalidos"}';
   }


   public function logout(){
      $this->session->sess_destroy();
      echo  '{"say":"ok"}';
   }



   /**
    * Store Data from this method.
    *
    * @return Response
   */
   public function store()
   {
        //$this->session->set_userdata('usuario','usuario');
        $this->form_validation->set_rules('full_name', 'Title', 'required');
        $this->form_validation->set_rules('address', 'Description', 'required');
        $this->form_validation->set_rules('city', 'Description', 'required');
        $this->form_validation->set_rules('gender', 'Description', 'required');
        $this->form_validation->set_rules('email', 'Description', 'required');
        $this->form_validation->set_rules('password', 'Description', 'required');


        if (empty($id)){
          $data = $this->login->get_objetc($this->input->post('email'),null);

          if (count($data)>0){
            echo  '{"say":"dup"}';
            die();
          }
          
        }

        if ($this->form_validation->run() == FALSE){
            $this->session->set_flashdata('errors', validation_errors());
        }else{
           $this->login->insert();
        }
        echo  '{"say":"ok"}';
    }


}