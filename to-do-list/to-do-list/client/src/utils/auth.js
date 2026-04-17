const USER_STORAGE_KEY = 'usuario'
const AUTH_CHANGE_EVENT = 'authchange'

export function getLoggedUser() {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY)

    if (!storedUser) {
        return null
    }

    try {
        return JSON.parse(storedUser)
    } catch {
        return null
    }
}

export function setLoggedUser(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}

export function clearLoggedUser() {
    localStorage.removeItem(USER_STORAGE_KEY)
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}

export function getAuthChangeEventName() {
    return AUTH_CHANGE_EVENT
}