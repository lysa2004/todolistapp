<?php

// Connexion à la base de données
$mysqli = new mysqli("localhost", "root", "", "utilisateurs");

if ($mysqli->connect_error) {
  die("Erreur de connexion : " . $mysqli->connect_error);
}

// Récupération des données du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["submit_login"])) {
        $username_email = $_POST["username_email"];
        $mot_de_passe = $_POST["mot_de_passe"];

        // Vérification des données
        if (empty($username_email) || empty($mot_de_passe)) {
            die("Veuillez saisir votre nom d'utilisateur ou votre adresse e-mail, et votre mot de passe.");
        }

        // Vérification des données de connexion
        $sql = "SELECT * FROM utilisateurs WHERE email = '$username_email'";
        $resultat = $mysqli->query($sql);

        if ($resultat->num_rows > 0) {
            $row = $resultat->fetch_assoc();
            if (password_verify($mot_de_passe, $row["mot_de_passe"])) {
                // L'utilisateur est connecté
                session_start();
                $_SESSION["utilisateur"] = $row;
                header("Location: dashboard.php");
            } else {
                // Mot de passe incorrect
                echo "L'identifiant ou le mot de passe est incorrect.";
            }
        } else {
            // L'utilisateur n'est pas trouvé
            echo "L'identifiant ou le mot de passe est incorrect.";
        }
    } elseif (isset($_POST["submit_register"])) {
        // Récupérer les données du formulaire d'inscription
        $prenom = $_POST["prenom"];
        $nom = $_POST["nom"];
        $email = $_POST["email"];
        $mot_de_passe = $_POST["mot_de_passe"];

        // Vérification des données
        if (empty($prenom) || empty($nom) || empty($email) || empty($mot_de_passe)) {
            die("Veuillez saisir tous les champs du formulaire d'inscription.");
        }

        // Hachage du mot de passe
        $mot_de_passe_hash = password_hash($mot_de_passe, PASSWORD_DEFAULT);

        // Insertion des données dans la base de données
        $sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES ('$prenom', '$nom', '$email', '$mot_de_passe_hash')";
        $resultat = $mysqli->query($sql);

        if (!$resultat) {
            die("Erreur d'inscription : " . $mysqli->error);
        }

        // Rediriger l'utilisateur vers la page de connexion
        header("Location: login1.php");
    }
}

?>

<!-- Votre code HTML reste inchangé -->
