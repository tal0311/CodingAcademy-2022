# libraries

## how to use
use cdn  
download to lib file  
use npm  

### writing our own jQuery
function $(elOrSelector) {
//     const el = (typeof elOrSelector === 'string') ?
//         document.querySelector(elOrSelector) : elOrSelector

//     const $el = {
//         // Getter / Setter
//         text(txt) {
//             if (txt) el.innerText = txt;
//             return el.innerText
//         },
//         addClass(className) {
//             if (!el) return
//             el.classList.add(className)
//             return $el
//         },
//         removeClass(className) {
//             el.classList.remove(className)
//             return $el
//         },
//         // Getter / Setter:
//         attr(name, val=null) {
//             if (val) el.setAttribute(name, val)
//             return el.getAttribute(name)
//         },
//         data(name, val=null) {
//             if (val) el.dataset[name] = val
//             return el.dataset[name]
//         },
//         hide() {
//             el.classList.add('hide')
//         },
//         show() {
//             el.classList.remove('hide')
//         },
//         // Getter / Setter
//         val(newVal=null) {
//             console.dir(el)
//             if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(el.nodeName)) return;
//             if (newVal) el.value = newVal
//             return el.value
//         },
//         find(selector) {
//             const childEl = el.querySelector(selector)
//             return childEl
//         },
//         on(eventName, func) {
//             if (!el) return
//             el.addEventListener(eventName, func)
//         }
//     }

//     return $el;
// }


# git 
version control
commit is to local repository
push is to central repository
