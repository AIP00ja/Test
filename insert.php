<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        Id: <input type="text" name="id" id=""><br>
        Name: <input type="text" name="name" id=""><br>
        Salary: <input type="text" name="salary" id=""><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
<?php
include 'db.php';
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $id=$_POST["id"];
    $name=$_POST["name"];
    $salary=$_POST["salary"];

    $sql=$conn->prepare("insert into infoemp values(?,?,?)");

    $sql->bind_param("isd",$id,$name,$salary);
    if($sql->execute()){
        echo "Inserted..........";
    }
    else{
        echo "Error occured...........";
    }
}

?>