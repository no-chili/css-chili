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
            }, 500)
            aftertop = document.scrollingElement.scrollTop;
            console.log(beforetop, aftertop);
            if (aftertop - beforetop > 5) {
                //向下滚动
                window.scrollTo(0, beforetop + height);
                beforetop = beforetop + height;
            } else if (aftertop - beforetop < 5) {
                //向上滚动
                window.scrollTo(0, beforetop - height);
                beforetop = beforetop - height;
            } else {

            }
        }

    }

}
