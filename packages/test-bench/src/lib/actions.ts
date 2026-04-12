export function darkMode(node: Element, dark: boolean) {
  const apply = (d: boolean) => document.documentElement.classList.toggle('dark', d)
  apply(dark)
  return {
    update: apply,
    destroy: () => document.documentElement.classList.remove('dark')
  }
}
