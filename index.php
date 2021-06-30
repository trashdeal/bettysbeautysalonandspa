<?php
    include_once("index.html");
    include_once("database.php");
    if(isset($_POST['save']))
    {	 
         $first_name = $_POST['formName'];
         $mobile_no = $_POST['mobile-no'];
         $query = "INSERT INTO appointment(name,mobileno) 
         values ('$formName','$mobile_no')";
         if($result = pg_query($query)){
            echo "Data Added Successfully.";
         }
         else{
            echo "Error.";
         }
    }
?>
