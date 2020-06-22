import './app1.css'
import $ from 'jquery'
const eventBus = $(window)
// m => Model 数据模型  负责所有数据
const m = {
  data: {
    n: parseFloat(localStorage.getItem('number'))
  },
  create(){},
  delete(){},
  update(data){
    localStorage.setItem('number',(m.data.n).toString())
    Object.assign(m.data,data)//意思是把data的数据一个一个的给m的data
    //如果m更新了，他就会触发一个我更新了
    eventBus.trigger('m-updated')
  },
  get(){}
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
  },
  render(n) {
    if (v.el.children().length === 0) {} else {
      v.el.empty()
    }
    $(v.html.replace('{{n}}', n)).appendTo(v.el)
  }
}
// c => Controller  控制器 负责其他
const c = {
  init(container) {
    v.init(container)
    v.render(m.data.n)  // 第一次 view = render(data)
    c.autoBindEvents()
    eventBus.on('m-updated',()=>{
      v.render(m.data.n)
    })
  },
  events: {
    'click #add1': 'add',    //  click #add1 的时候，调用 add 函数
    'click #minus1': 'minus',
    'click #mul2': 'mul',
    'click #divide2': 'div',
  },
  add() {
    m.update({n:m.data.n += 1})
  },
  minus() {
    m.update({n:m.data.n -= 1})
  },
  mul() {
    m.update({n:m.data.n *= 2})
  },
  div() {
    m.update({n:m.data.n /= 2})
  },
  autoBindEvents(){
    for( let key in c.events){
      const value = c[c.events[key]]
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0,spaceIndex)
      const part2 = key.slice(spaceIndex+1)
      v.el.on(part1,part2,value)
    }
  }
}
//初始化HTML => 第一次渲染HTML
export default c
