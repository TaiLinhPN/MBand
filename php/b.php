<?php
    error_reporting(0);
      $dai = $_POST['dai'];
      $rong = $_POST["rong"];
      $dt = ($dai + $rong)/2;
      
      if($dt >8){
          $ketqua = "Gioi";          
      } 
      else if($dt > 7){
        $ketqua = "kha";
      } 
      else if($dt > 6){
        $ketqua = "kha yêu";
      }else {
        $ketqua = "tb";
      }
      require 'a.php';
    ?>