
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept, Authorization");
//header("Content-Type:application/json;charset=UTF-8") ;





function enregistrerIngredientsUtilisateur($pseudo, $nom_ing, $quantite) {
$host = 'localhost';
$dbname = 'Recette';
$username = 'Recette_user';
$password = 'not found';
 $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "SELECT id_utilisateur FROM Utilisateurs WHERE pseudo = :pseudo";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':pseudo', $pseudo, PDO::PARAM_STR);
    $stmt->execute();

    $id_utilisateur = $stmt->fetchColumn();

    if ($id_utilisateur !== false) {
        $query = "INSERT INTO Frigo_Ingredients (id_utilisateur, nom_ing, quantite) VALUES (:id_utilisateur, :nom_ing, :quantite)";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id_utilisateur', $id_utilisateur, PDO::PARAM_INT);
        $stmt->bindParam(':nom_ing', $nom_ing, PDO::PARAM_STR);
        $stmt->bindParam(':quantite', $quantite, PDO::PARAM_STR);

        return $stmt->execute();
    } else {
        return false; 
    }
}

if (isset($_REQUEST['add'])) {
    $postdata= file_get_contents("php://input") ;
    $data = json_decode($postdata) ;
   
    $pseudo = isset($data->pseudo) && !empty($data->pseudo) ? trim($data->pseudo) : '';
    $nom_ing = isset($data->nom_ing) && !empty($data->nom_ing) ? trim($data->nom_ing) : '';
    $quantite = isset($data->quantite) && !empty($data->quantite) ? trim($data->quantite) : 0;
    
    
    if (enregistrerIngredientsUtilisateur($pseudo, $nom_ing, $quantite)) {
        echo "Ingrédients enregistrés avec succès.";
        http_response_code(200);

    }
} 
