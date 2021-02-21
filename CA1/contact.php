<?php
// define variables and set to empty values
$name = $firstname = $email = $storytype = $storytext = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $firstname = test_input($_POST["firstname"]);
  $email = test_input($_POST["email"]);
  $storytype = test_input($_POST["storytype"]);
  $storytext = test_input($_POST["storytext"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>