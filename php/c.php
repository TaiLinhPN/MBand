<?php
    error_reporting(0);
      $dai = $_POST['dai'];
      $rong = $_POST["rong"];
      $dt = ($dai + $rong)/2;
      switch (($dai + $rong)/2) {
        case ($dt > 8);
        
            $ketqua = "Gioi";          
            break;
        case ($dt > 6);
            $ketqua = "kha";          
            break;
        case ($dt > 4);
            $ketqua = "kha yeu";          
            break;
        // case 5;
        //     $ketqua = "tb";          
        //     break;
      }
      

     
      require 'a.php';
    ?>