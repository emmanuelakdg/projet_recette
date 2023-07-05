<?php
header("Access-Control-Allow-Origin: *") ;
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
header("Content-Type:application/json;charset=UTF-8") ;


$pdo = new PDO("mysql:host=localhost;dbname=Recette","Recette_user","not found");
       array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
       $postdata= file_get_contents("php://input") ;

       if (isset($postdata)&&!empty($postdata)) {
          $data = json_decode($postdata) ;
        $rdata = [
            'nom' =>trim($data-> nom),
            'prenom' => trim($data->prenom),
            'pseudo' => trim($data->pseudo),
            'mot_de_passe' => md5(trim($data->mot_de_passe)) 
        ];
         
          $sql = 'insert into Utilisateurs(nom,prenom,pseudo,mot_de_passe) values(:nom,:prenom,:pseudo,:mot_de_passe)';
          $resultat =  $pdo->prepare($sql);
          $resultat-> execute($rdata);

          if($resultat){                   
             http_response_code(200);
            $data=array('message'=>'success') ;
            echo json_encode(($data)) ;
          }
          else{
            $data=array('message'=>'failed') ;
            echo json_encode(($data)) ;
          }
          

       }




    