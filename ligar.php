<?php

$nome = $_POST['nome']
$email = $_POST['email']
$from = $_POST['tic80contacriada@https://igor4022.github.io/Vendi/index.html']

$headers = "MIME-Version: 1.1\n"
$headers .= "Content-type: text/html; charset=utf-8\n"
$headers .= "From: $nome </$from>\n"
$headers .= "Return-Path: $from\n"
$headers .= "Reply-to: $email"

mail($email, $headers, $from)

?>