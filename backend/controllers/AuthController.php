<?php
require_once __DIR__ . '/../models/User.php';

class AuthController {
    public function login() {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->mail) || !isset($data->password)) {
            echo json_encode(["error" => "Faltan datos"]);
            return;
        }

        $userModel = new User();
        $user = $userModel->findByMail($data->mail);

        // password_verify comprueba si la contraseña plana coincide con el hash de la BD
        if ($user && password_verify($data->password, $user['password'])) {
            // Aquí llamarías a tu JwtHandler para generar el token real
            $token = "token_de_prueba_12345"; 

            echo json_encode([
                "message" => "Login exitoso",
                "token" => $token,
                "user" => ["mail" => $user['mail']]
            ]);
        } else {
            http_response_code(401); // No autorizado
            echo json_encode(["error" => "Credenciales incorrectas"]);
        }
    }
}