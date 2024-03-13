export function wait(delay = 500) {
    return new Promise<void>(res => {
        setTimeout(() => {
            res()
        }, delay)
    })
}
