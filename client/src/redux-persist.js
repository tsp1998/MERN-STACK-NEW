export function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state)
    localStorage.setItem('state', serializeState)
  } catch (error) {
    console.log(error)
  }
}

export function loadFromLocalStorage() {
  try {
    const serializeState = localStorage.getItem('state')
    if (serializeState === null) return undefined
    return JSON.parse(serializeState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}