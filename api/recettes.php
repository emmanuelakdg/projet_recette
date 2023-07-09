<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$query = $_REQUEST['q']; // Changer cette valeur pour la requête de recherche souhaitée

$endpoint = 'https://food2fork.ca/api/recipe/search/';
$params = array(
    'page' => 2,
    'query' => $query
);
$url = $endpoint . '?' . http_build_query($params);

$headers = array(
    'Authorization: Token 9c8b06d329136da358c2d00e76946b0111ce2c48'
);

$options = array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false
);

$curl = curl_init();
curl_setopt_array($curl, $options);

$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($httpCode == 200) {
    header('Content-Type: application/json'); // Définir l'en-tête de la réponse comme JSON
    echo $response;
} else {
    echo 'Erreur lors de la requête API : ' . $httpCode;
}

curl_close($curl);
?>
