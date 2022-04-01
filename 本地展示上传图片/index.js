window.onload = () => {
    const file = document.querySelector('#file');
    const img = document.querySelector('#img')

    file.onchange = (f) => {
        console.log(file.files);
        const fileReader = new FileReader()
        if (file.files[0]) {
            //图片生成URL
            fileReader.readAsDataURL(file.files[0])
        } else {
            img.src = './加号.png'
        }
        fileReader.onload = function(res) {
            //修改展示src
            img.src = this.result
        }
        fileReader.onerror = function(e) {
            console.log(e);
            img.src = './加号.png'
        }
        fileReader.onabort = function() {
            img.src = './加号.png'
        }
    }
}
