<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dien Tich</title>
</head>
    
    <body>
        <form name ="frm_Dientich" method="post" action="index.php">  
            <table width ="500">
                <tr >
                    <td colspan="2">DIỆN TÍCH HÌNH CHỮ NHẬT</td>
                </tr>
                <tr>
                    <td>chiều dài</td>
                    <td><input type ="text" name="chieu_dai"  id="chieu_dai" value ="<?php echo $dai ?>" /></td>
                </tr>
                <tr>
                    <td>chiều rộng</td>
                    <td><input type ="text" name="chieu_rong" id="chieu_rong" value ="<?php echo $rong ?>" /></td>
                </tr>
                <tr>
                    <td>diện tích</td>
                    <td><input type ="text" name="dien_tich"  id="dien_tich" value ="<?php echo $tinh ?>" /></td>
                </tr>
                <tr>
                    <td colspan="2" ><input type ="submit" name="bntTinh" onclick="tinh()" value="Tính" /></td>
                </tr>
            </table>
        </form>
        <script>
            function tinh(){
                document.getElementById("dien_tich").innerHTML = $dai*$rong
            }
        </script>
    </body>
    <?php
        //Khai báo biến và khởi tạo gái trị cho biến
         $dai =$_POST["dai"];
         $rong =$_POST["rong"];
        // thuật toán
        $tinh
        
    ?>
</html>

