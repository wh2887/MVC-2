import './app4.css'
import $ from 'jquery'

const m = {
  data: {},
  create() {},
  delete() {},
  update() {},
  get() {}
}

const v = {
  el: null,
  html: `
        <div class="circle"></div>
  `,
  init(container) {
    v.el = $(container)
  },
  render() {
    $(v.html).appendTo(v.el)
  }
}

const c = {
  init(container) {
    v.init(container)
    v.render()  // 第一次 view = render(data)
    c.autoBindEvents()
  },
  events: {
    'mouseenter .circle': 'x',
    'mouseleave .circle': 'y'
  },
  x(){
    v.el.children().addClass('active')
  },
  y(){
    v.el.children().removeClass('active')
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]]
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      v.el.on(part1, part2, value)
    }
  }
}

export default c






