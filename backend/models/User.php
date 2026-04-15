<?php
require_once __DIR__ . '/../core/Database.php';

class User {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function findByEmail($mail) {
        $stmt = $this->db->prepare("SELECT * FROM user WHERE Mail = :mail");
        $stmt->execute(['mail' => $mail]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($mail, $password) {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        
        $stmt = $this->db->prepare("INSERT INTO user (Mail, Password) VALUES (:mail, :password)");
        return $stmt->execute(['mail' => $mail, 'password' => $hashedPassword]);
    }
}