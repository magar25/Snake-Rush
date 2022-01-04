
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Updating Score</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/update.css">

</head>
<body>



<form method="post">

<input type="text" name="name"  id="na">
 <br><br>
<button id="sub">Submit</button>



</form>
    
</body>
</html>

<!-- calling conn.php -->

<?php
    include 'conn.php';

?>


<!-- updating database -->

<?php
if(isset($_POST['name'])){
$name=$_POST['name'];
$score = $_GET['score'];

$storeinsql = "UPDATE `hi-score` SET `name`='$name',`score`=$score WHERE id=0";
mysqli_query($conn, $storeinsql);

echo "<script>window.close();</script>";


}
?>