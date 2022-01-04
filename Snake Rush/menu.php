



<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Rush</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<style> 

</style>

<body>

   
 <h1 id="welcome">Welcome to SNAKE RUSH.</h1>


    <div class="row">

        <div class="col-6">
            
    <div class="p-5">

    


        <button type="button" class="btn btn-primary btn-lg"    onclick="window.location.href='play.html'"value="play"   style="margin-left: 69%; ">PLAY</button>
                                        <br> <br> 

        <button type="button" class="btn btn-primary btn-lg"  onclick="window.location.href='pvp.html'"value="pvp" style="margin-left: 70%; ">PVP</button>

        
                                        <br> <br>
        <button type="button" class="btn btn-primary btn-lg"  onclick="window.location.href='how.html'"value="how"  style="margin-left: 69%; ">HELP</button>



        </div>

    </div>

        <div class="col-6">

            <div class="tablerow">
                <h1>Top Score</h1>
                
            <table class="tb">
                <tr>
                    <th id="pn">Player Name</th>
                    <th id="ps">Player Score</th>
                </tr>
                <tr>

                    <?php
                    $conn = mysqli_connect("localhost","root","","scores"); 
                    $sql= "SELECT * FROM `hi-score`";
                    $result= mysqli_query($conn,$sql);
                    while($row = $result->fetch_assoc()):
                    ?>
                    <td id="n"><?php echo $row["name"]; ?></td>
                    <td id="s"><?php echo $row["score"]; ?></td>
                </tr>
                <?php endwhile; ?>

            </table>
       

        </div>
        
      </div>

 
    </div>
 
    
</body>
</html>