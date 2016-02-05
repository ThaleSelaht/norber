<?php

$data = array(); // array to pass back data

  // if there are no errors, return a message
  $data['messageSuccess'] = 'Hey! Obrigado por entrar em contato. Retornaremos a mensagem em breve.';
  // CHANGE THE TWO LINES BELOW
  $email_to = "comercial@norber.com.br";
  $email_subject = "Formulário de contato site Norber";
  $nome = $_POST['nome']; // required
  $email_from = $_POST['email']; // required
  $fone = $_POST['fone']; // required
  if(isset($_POST['empresa'])){
    $empresa = $_POST['empresa']; 
  }else{
    $empresa = "";
  }
  if(isset($_POST['mensagem'])){
    $mensagem = $_POST['mensagem']; 
  }else{
    $mensagem = "";
  }

  $email_message = "Detalhes do Formulário:"."\n";
  $email_message .= "Nome: ".$nome."\n";
  $email_message .= "Email: ".$email_from."\n";
  $email_message .= "Telefone: ".$fone."\n";
  $email_message .= "Empresa: ".$empresa."\n";
  $email_message .= "Quantidade de funcionários: ".$funcionarios."\n";
  $email_message .= "Mensagem: ".$mensagem."\n";
  $headers = 'From: '.$email_from."\n".
  'Reply-To: '.$email_from."\n" .
  'X-Mailer: PHP/' . phpversion();
  if(@mail($email_to, $email_subject, $email_message, $headers)){
    $data['success'] = true;
  }else{
    $data['success'] = false;
  }

// return all our data to an AJAX call
echo json_encode($data);