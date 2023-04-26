export default (scrollPosition: string) => {
    const scroll = document.getElementById(scrollPosition)
    
    scroll?.scrollIntoView({
        behavior: "smooth"
    })
}