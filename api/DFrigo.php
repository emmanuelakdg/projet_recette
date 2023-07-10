<?php
header("Access-Control-Allow-Origin: *") ;
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
header("Content-Type:application/json;charset=UTF-8") ;
function supprimerIngredientUtilisateur($pseudo, $nom_ing) {
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
        $query = "DELETE FROM Frigo_Ingredients WHERE id_utilisateur = :id_utilisateur AND nom_ing = :nom_ing";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id_utilisateur', $id_utilisateur, PDO::PARAM_INT);
        $stmt->bindParam(':nom_ing', $nom_ing, PDO::PARAM_STR);

        return $stmt->execute();
    } else {
        return false; 
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
        $postdata= file_get_contents("php://input") ;
        $data = json_decode($postdata) ;
       
            $pseudo =trim($data-> pseudo);
            $nom_ing = trim($data->nom_ing);

    if (supprimerIngredientUtilisateur($pseudo, $nom_ing)) {
        echo "Ingrédient supprimé avec succès.";
    } else {
        echo "Erreur lors de la suppression de l'ingrédient. Veuillez vérifier le pseudo de l'utilisateur et le nom de l'ingrédient.";
    }
} else {
    echo "Requête non valide.";
}
