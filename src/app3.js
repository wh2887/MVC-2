import './app3.css'
import $ from 'jquery'

const  $square = $('.app3 .square')
$square.on('click',()=>{
  //如果没有这个样式类，就加上，如果有就去掉这个样式
  $square.toggleClass('active')
})
