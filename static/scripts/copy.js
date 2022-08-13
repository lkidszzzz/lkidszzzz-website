{
    function copySteam() {
        try {
            navigator.clipboard.writeText("923380666").then(() => tip())
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    function copyOrigin() {
        try {
            navigator.clipboard.writeText("FLASH-OF-BLAZE").then(() => tip())
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    function tip() {
        let el = document.getElementById('tip')
        el.setAttribute('class', 'fixed top-12 w-full')
        setTimeout(() => {
            // 2 秒之后运行
            el.setAttribute('class', 'fixed top-12 w-full hidden')
        }, 2000)
    }
}