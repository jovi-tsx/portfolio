/* eslint-disable @typescript-eslint/no-non-null-assertion */
document.addEventListener('DOMContentLoaded', () => {
  let mousePosX = 0,
    mousePosY = 0
  const mouseCircle = document.getElementById('mouse-circle')

  document.onmousemove = (e) => {
    mousePosX = e.pageX
    mousePosY = e.pageY
  }

  const delay = 6
  let revisedMousePosX = 0,
    revisedMousePosY = 0

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow)

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay

    mouseCircle!.style.top = revisedMousePosY + 'px'
    mouseCircle!.style.left = revisedMousePosX + 'px'
  }
  delayMouseFollow()
})

document.querySelector('body')!.addEventListener(
  'mousemove',
  function (e) {
    const anchor = (e.target as Element).closest('a')
    const button = (e.target as Element).closest('button')
    if (anchor !== null || button !== null) {
      document.getElementById('mouse-circle')!.classList.add('focus')
    } else {
      document.getElementById('mouse-circle')!.classList.remove('focus')
    }
  },
  false
)

export {}
