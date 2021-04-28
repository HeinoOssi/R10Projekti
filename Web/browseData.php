<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Browse temperature values</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
<?php
    include 'dbConnect.php';

    $conn =  openConn();

    $result = mysqli_query($conn, 'SELECT * FROM projekti');
    echo "<table border='1'>
    <tr>
    <th>ID</th>
    <th>Temperature</th>
    <th>Date</th>
    </tr>";
    
    while($row = mysqli_fetch_array($result)){
        echo"<tr>";
        echo"<td>" . $row['idProjekti'] . "</td>"; 
        echo"<td>" . $row['temperature'] . "</td>";
        echo"<td>" . $row['date'] . "</td>";
        echo"</tr>";
    }
    echo"</table>";
    closeConn($conn);  
?>

    </body>
</html>
