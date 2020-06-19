import './app2.css'
import $ from 'jquery'

const $tabBar = $('.app2 .tab-bar')
const $tabContent = $('.app2 .tab-content')
$tabBar.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li.addClass('selected')
    .siblings().removeClass('selected')
  let index = $li.index()
  // 样式与行为分离
  $tabContent.children().eq(index).addClass('active')
    .siblings().removeClass('active')
})
// 默认哪个被选中
$tabBar.children().eq(0).trigger('click')