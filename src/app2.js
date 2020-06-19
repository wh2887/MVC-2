import './app2.css'
import $ from 'jquery'

const $tabBar = $('.app2 .tab-bar')
const $tabContent = $('.app2 .tab-content')
const localKey = 'app2.index'
//  保底值
const index = localStorage.getItem(localKey) || 0
$tabBar.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li.addClass('selected')
    .siblings().removeClass('selected')
  let index = $li.index()
  localStorage.setItem(localKey,index)
  // 样式与行为分离
  $tabContent.children().eq(index).addClass('active')
    .siblings().removeClass('active')
})
// 默认哪个被选中
$tabBar.children().eq(index).trigger('click')