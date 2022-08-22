// 按需引入（名字不能修改）
import { marquee } from './marquee.js'
// 默认引入（名字能修改）
import tabs from './tabs.js'



marquee()
tabs()
//如果想去拓展webpack的打包能力，需要配置一个loaders
import './style/index.css'

import './style/index.less'

import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)


import './assets/fonts/iconfont.css'


const APP = {
    name: 'zhangsan',
    age: 18
}