<?php
  $connParm = [
    "host" => "localhost",
    "user" => "root",
    "pass" => "",
    "db" => "dbsenac_test"
  ];
  $connection = mysqli_connect($connParm['host'], $connParm['user'], $connParm['pass'], $connParm['db']);

  echo(mysqli_fetch_assoc(mysqli_query($connection, "select json from tbl_quiz where id = 1"))['json']);
  mysqli_close($connection);
?>