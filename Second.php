<?php
//$_FILES 包含了文件信息
//注意，语句后需加上分号，否则会出现错误

//输入文件信息
print_r($_FILES);
echo '<br>';
//文件信息（字典）
$file_dict = $_FILES['file1'];
print_r($file_dict);
echo '<br>';
//文件名
$file_name = $file_dict['name'];
echo $file_dict['name'].'<br>';

//缓存路径
$tmp_path = $file_dict['tmp_name'];
echo $file_dict['tmp_name'].'<br>';

//移动文件
//参数1:缓存路径  参数2:存储路径+存储的文件名
move_uploaded_file($tmp_path, './source/'.$file_name)
?>