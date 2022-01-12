<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>if else</h1>
    <form id="forml" name ="forml"  method ="POST" action="b.php">
        <table width ="400" border="0" align="center" cellpadding = "2" cellspacing ="2">
            <tr>
                <td colspan ="2" align="center"><span class = "stylel">Tính điểm trung bình</span></td>
            </tr>
            <tr>
                <td width ="125"><span>diem 1 :</span></td>
                <td><label>
                    <input type="text" name ="dai" id ="dai" value="<?php echo $dai; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td width ="125"><span>diem 2 :</span></td>
                <td><label>
                    <input type="text" name ="rong" id ="rong" value="<?php echo $rong; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td width ="125"><span>ketqua :</span></td>
                <td><label>
                    <input type="text" value="<?php echo $dt; ?> " size="20">
                </label></td>
                <td><label>
                    <input type="text" value="<?php echo $ketqua; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <label for=""><input type="submit" name="Submit" value="Tính"></label>
                </td>
                <!-- <td colspan="2" align="center">
                    <label for=""><input type="submit" name="Submit" value="kq"></label>
                </td> -->
            </tr>
        </table>
    </form>

    <h1>switch</h1>
    <form id="forml" name ="forml"  method ="POST" action="c.php">
        <table width ="400" border="0" align="center" cellpadding = "2" cellspacing ="2">
            <tr>
                <td colspan ="2" align="center"><span class = "stylel">Tính điểm trung bình</span></td>
            </tr>
            <tr>
                <td width ="125"><span>diem 1 :</span></td>
                <td><label>
                    <input type="text" name ="dai" id ="dai" value="<?php echo $dai; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td width ="125"><span>diem 2 :</span></td>
                <td><label>
                    <input type="text" name ="rong" id ="rong" value="<?php echo $rong; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td width ="125"><span>ketqua :</span></td>
                <td><label>
                    <input type="text" value="<?php echo $dt; ?> " size="20">
                </label></td>
                <td><label>
                    <input type="text" value="<?php echo $ketqua; ?> " size="20">
                </label></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <label for=""><input type="submit" name="Submit" value="Tính"></label>
                </td>
                <!-- <td colspan="2" align="center">
                    <label for=""><input type="submit" name="Submit" value="kq"></label>
                </td> -->
            </tr>
        </table>
    </form>
</body>
</html>