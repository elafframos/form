<?php

header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $erros = [];

    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $cpf = filter_input(INPUT_POST, 'cpf', FILTER_SANITIZE_NUMBER_INT);
    $senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_SPECIAL_CHARS);

    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erros[] = 'Digite um e-mail válido!';
    }

    if (!$cpf || strlen($cpf) != 11) { 
        $erros[] = 'Digite um CPF válido!';
    }

    if (!$senha || strlen($senha) < 6) { 
        $erros[] = 'A senha deve ter no mínimo 6 caracteres!';
    }
    var_dump($_POST);

    echo json_encode([
        "erros" => $erros,
        "nome" => $nome,
        "email" => $email,
        "cpf" => $cpf
    ]);
    
    exit; 
}
?>
