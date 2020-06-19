import './app1.css'
import $ from 'jquery'

const $actions = $('.actions')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)

$actions.on('click', 'button', (e) => {
  const $li = $(e.currentTarget)
  const $index = $li.index()
  let n = parseInt($number.text())
  if ($index === 0) {
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
  } else if ($index === 1) {
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
  } else if ($index === 2) {
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
  } else if ($index === 3) {
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
  }
})


