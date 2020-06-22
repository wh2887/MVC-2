import $ from 'jquery'
import './app3.css'


const localKey = 'app3.active'
const m = {
  data: {
    active: localStorage.getItem(localKey) === 'yes'
  },
  create() {},
  delete() {},
  update() {
    localStorage.setItem(localKey, (m.data.active).toString())
  },
  get() {}
}

const v = {
  el: null,
  html() {
    return `
        <div class="square ${m.data.active === true ? 'active' : ' '}">
        </div>
`
  },
  init(container) {
    v.el = $(container)
  },
  render() {
    $(v.html()).appendTo(v.el)
  }
}


const c = {
  init(container) {
    v.init(container)
    v.render()  // 第一次 view = render(data)
    c.autoBindEvents()
  },
  events: {
    'click .square': 'x',
  },
  x() {
    if (v.el.children().hasClass('active')) {
      v.el.children().removeClass('active')
      localStorage.setItem(localKey, 'no')
    } else {
      v.el.children().addClass('active')
      localStorage.setItem(localKey, 'yes')
    }
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



