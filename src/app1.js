import './app1.css'
import $ from 'jquery'

// m => Model 数据模型  负责所有数据
const m = {
  data: {
    n: parseFloat(localStorage.getItem('number'))
  }
}

// v => View  视图  负责 UI界面
const v = {
  el: null,
  html: `
    <div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1"><span>+1</span></button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </div>
`,
  init(container) {
    v.el = $(container)
    v.render()
  },
  render() {
    if (v.el.children().length === 0){}
     else {
      v.el.empty()
    }
    $(v.html.replace('{{n}}', m.data.n)).prependTo(v.el)
  }
}

// c => Controller  控制器 负责其他
const c = {
  init(container) {
    v.init(container)
    c.bindEvents()
  },
  bindEvents() {
    v.el.on('click', '#add1', () => {
      localStorage.setItem('number', (m.data.n += 1).toString())
      v.render()
    })
    v.el.on('click', '#minus1', () => {
      localStorage.setItem('number', (m.data.n -= 1).toString())
      v.render()
    })
    v.el.on('click', '#mul2', () => {
      m.data.n *= 2
      localStorage.setItem('number', (m.data.n *= 2).toString())
      v.render()
    })
    v.el.on('click', '#divide2', () => {
      localStorage.setItem('number', (m.data.n /= 2).toString())
      v.render()
    })
  }
}

//初始化HTML => 第一次渲染HTML
export default c
