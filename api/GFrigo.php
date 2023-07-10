<?php
header("Access-Control-Allow-Origin: *") ;
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
header("Content-Type:application/json;charset=UTF-8") ;

function getIngredientsUtilisateur($pseudo) {
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
        $query = "SELECT nom_ing, quantite FROM Frigo_Ingredients WHERE id_utilisateur = :id_utilisateur";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id_utilisateur', $id_utilisateur, PDO::PARAM_INT);
        $stmt->execute();

        $ingredients = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $ingredients[] = $row;
        }

        return $ingredients;
    } else {
        return array(); 
    }
}

if (isset($_GET['pseudo'])) {
    $pseudo = $_GET['pseudo'];

    $ingredients = getIngredientsUtilisateur($pseudo);

    if (!empty($ingredients)) {
        header('Content-Type: application/json');
        echo json_encode($ingredients);
        http_response_code(200);

    } else {
        echo "Utilisateur non trouvé.";
        http_response_code(400);
    }
} else {
    echo "Veuillez spécifier le pseudo de l'utilisateur.";
    http_response_code(400);

}


