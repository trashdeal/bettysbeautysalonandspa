<?php
     $host        = "host = ec2-3-212-75-25.compute-1.amazonaws.com";
     $port        = "port = 5432";
     $dbname      = "dbname = de587naocoilgj";
     $credentials = "user = odavaurvcsgfeq password=458e4188faad82a8806c83b78cc94d447b8274ed11eb5a11377aa911ea08c4fa";
     $db = pg_connect( "$host $port $dbname $credentials");
?>
