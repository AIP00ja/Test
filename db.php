<?php
$server_name="localhost";
$username="root";
$password="";
$db_name="test";
$conn=new mysqli($server_name,$username,$password,$db_name);
if(!$conn)
{
    echo "db connection not found.......";
}
?>