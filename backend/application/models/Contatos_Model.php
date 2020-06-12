<?php


class Contatos_Model extends CI_Model{

    function __construct(){
    
      parent::__construct();
      $this->load->database();
      
    }

    public function get($email=null){
        if(!empty($email)){
          $this->db->like('email', $email);
        }

        $this->db->from("contatos");
        $this->db->order_by('nome');
        $query = $this->db->get();
        return $query->result_object();
    }


  


    public function insert($data,$id) 
    {
         
        if($id==0){
            return $this->db->insert('contatos',$data);
        }else{
            $this->db->where('id',$id);
            return $this->db->update('contatos',$data);
        }        
    }


    public function find($id)
    {
        return $this->db->get_where('Contatos', array('id' => $id))->row();
    }


    public function delete($id)
    {
        return $this->db->delete('contatos', array('id' => $id));
    }
}
?>