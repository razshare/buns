export function uuid() {
  let now = Date.now()
  const blueprint = 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'
  return blueprint.replace(/[xy]/g, function run(c) {
    const r = (now + Math.random() * 16) % 16 | 0
    now = Math.floor(now / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
