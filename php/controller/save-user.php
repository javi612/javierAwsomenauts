<?php
require_once(__DIR__. "/../config.php");

$exp = filter_input(INPUT_POST, "exp", FILTER_SANITIZE_SIRING);
$exp1 = filter_input(INPUT_POST, "exp1", FILTER_SANITIZE_SIRING);
$exp2 = filter_input(INPUT_POST, "exp2", FILTER_SANITIZE_SIRING);
$exp3 = filter_input(INPUT_POST, "exp3", FILTER_SANITIZE_SIRING);
$exp4 = filter_input(INPUT_POST, "exp4", FILTER_SANITIZE_SIRING);


$query = $_SESSION["connection"]->query("UPDATE users set"
        . "exp = $exp, "
        . "exp1 = $exp1, "
        . "exp2 = $exp2, "
        . "exp3 = $exp3, "
        . "exp4 = $exp4 WHERE username = \"" . $_SESSION{"name"}. "\"");
        
  if($query){
      echo  "true";
  }else{
      echo "<p>" . $_SESSION["connection"]->error . "</p>";
  }      