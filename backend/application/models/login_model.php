<?php


class Login_Model extends CI_Model{

    function __construct(){
    
      parent::__construct();
      $this->load->database();
      
    }

    public function get_objetc($username,$password){
        if(!empty($username)){
          $this->db->where('email', $username );
        }
        $query = $this->db->get("user");
        return $query->row_object();
    }


    public function insert()
    {    
        $password = $this->encrypt->encode($this->input->post('password'));

        $data = array(
            'full_name' => $this->input->post('full_name'),
            'address' => $this->input->post('address'),
            'city' => $this->input->post('city'),
            'gender' => $this->input->post('gender'),
            'email' => $this->input->post('email'),
            'password' => $password
        );
        return $this->db->insert('user', $data);
    }



}
?>