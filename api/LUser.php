<?php
header("Access-Control-Allow-Origin: *") ;
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
header("Content-Type:application/json") ;

$pdo = new PDO("mysql:host=localhost;dbname=Recette","Recette_user","not found");
       array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
       $postdata= file_get_contents("php://input") ;

       if (isset($postdata)&&!empty($postdata)) {
          $data = json_decode($postdata) ;
          
            $pseudo = trim($data->pseudo);
            $pwd = md5(trim($data->mot_de_passe)) ;
         
         
         $resultat = $pdo->prepare("select * from Utilisateurs where pseudo='".$pseudo."' and mot_de_passe='".$pwd."';");
         $resultat->execute();
         $rdata=$resultat->fetchAll(PDO::FETCH_ASSOC);

          if(!empty($rdata)){
            http_response_code(200);
            echo json_encode(($rdata)) ;
          }
          else{
            http_response_code(400);
          }
          
          

       }




    