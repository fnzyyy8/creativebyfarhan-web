export function useTimeJkt(){
    const timeJkt = ref()

    const updateTime = () => {
        timeJkt.value = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        })
    }

    let interval: number | null = null

    onMounted(() => {
        updateTime()
        interval = window.setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
        if (interval !== null) {
            window.clearInterval(interval)
        }
    })

    return {timeJkt}
}