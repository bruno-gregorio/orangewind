export function darkMode(node: Element, dark: boolean) {
  const apply = (d: boolean) => document.documentElement.classList.toggle('dark', d)
  apply(dark)
  return {
    update: apply,
    destroy: () => document.documentElement.classList.remove('dark')
  }
}

export function rangeProgress(node: HTMLInputElement, value?: any) {
  const update = () => {
    const min = Number(node.min || 0)
    const max = Number(node.max || 100)
    const val = Number(node.value || 0)
    const percent = max === min ? 0 : ((val - min) / (max - min)) * 100
    node.style.setProperty('--ow-range-progress', `${percent}%`)
  }
  node.addEventListener('input', update)
  update()
  return {
    update(newValue?: any) {
      update()
    },
    destroy: () => node.removeEventListener('input', update)
  }
}
