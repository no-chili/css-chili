window.onload = () => {
    let beforetop = 0;
    let aftertop = 0;
    let height = window.screen.height
    window.scrollTo(0, 0);
    let id = null;
    window.onscroll = function(e) {
        if (id) {
            document.addEventListener('wheel', (e) => {
                e.preventDefault()
            })
        } else {
            id = setTimeout(() => {
                id = null
            }, 1000)
            aftertop=window.scrollY
            console.log(beforetop,aftertop);
            if(aftertop>beforetop){
                window.scrollTo({
                    top:1000,
                    behavior: 'smooth'
                })
                beforetop=1000
            }else{
                window.scrollTo({
                    top:0,
                    behavior: 'smooth'
                })
                beforetop=0
            }
        }

    }

}
