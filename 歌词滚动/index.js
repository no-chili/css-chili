window.onload = () => {
    // 准备好歌词
    const lyric = "[00:00.000] 作词 : 梨冻紧/Wiz_H张子豪\n[00:01.000] 作曲 : 梨冻紧/Wiz_H张子豪\n[00:02.000] 编曲 : Wiz_ H\n[00:03.000] 钢琴 : 梨冻紧\n[00:04.000] 封面 : 蓝明初\n[00:05.000] 混音 : 官硕\n[00:06.000] 母带 : Mai＂ No Label Crew＂\n[00:07.000] 监制 : Mai＂ No Label Crew＂\n[00:08.000] 发行 : No Label Crew\n[00:09.000] 企划 : 苏文嫒 张琛\n[00:10.000] 营销企划：贾皓然 小盐 崇高\n[00:30.60]我没转身\n[00:31.71]一直走一直梦\n[00:33.69]一直疯一直没停留\n[00:37.83]那些美好的\n[00:39.27]越靠近越沉溺\n[00:41.22]越来越不想放手\n[00:46.02]Wherever you go\n[00:53.10]Wherever you go\n[01:01.26]Follow\n[01:02.04]每到晚上理智变得感性\n[01:04.44]我编了这条短信\n[01:05.67]说不在乎不过是我嘴硬\n[01:07.65]总在期待你有什么反应\n[01:09.48]对你没法保持那份冷静\n[01:11.22]偷偷想着我们之间关系的远近\n[01:13.23]我的心里没有任何的侥幸\n[01:14.85]我知道我的爱对你来说就好像软禁\n[01:16.74]我们都闭口不提\n[01:18.42]这跨不过的距离\n[01:20.04]我们不停的一再复习着\n[01:22.02]那些感情里俗套的剧情\n[01:23.76]你那里是怎么样的天气\n[01:25.74]夜空是否还是那么透明\n[01:27.51]我说的又开始不着了边际\n[01:29.52]可是没有你我真的不行\n[01:31.14]就请你\n[01:32.19]把我当成贪得无厌\n[01:34.11]把我当作得寸进尺\n[01:35.79]每当难过表情在你脸上浮现\n[01:37.65]我也难过得像照着一面镜子\n[01:39.51]多么希望和你在一起的时间\n[01:41.46]那些快乐可以突然静止\n[01:43.26]多么希望时间可以快点\n[01:44.97]带我和你一起体验生老和病死\n[01:46.77]我想过下次会更好\n[01:48.15]也开始更加了解你的脾气\n[01:50.31]可是下次我们还是争吵\n[01:52.02]下次可能还是不留余地\n[01:54.00]我爱你不遗余力\n[01:55.59]在爱里不停期待奇迹\n[01:57.57]不忍看你这么痛苦\n[01:59.25]又不愿离去\n[02:00.69]And I will\n[02:01.29]Follow\n[02:01.83]一直走一直梦\n[02:03.66]一直疯一直没停留\n[02:07.83]那些美好的\n[02:09.27]越靠近越沉溺\n[02:11.19]越来越不想放手\n[02:15.60]Wherever you go\n[02:23.13]Wherever you go\n[02:32.64]Wherever you go\n[02:34.44]Wherever you go\n[02:36.48]一直都搞不定自己的情绪在你走后\n[02:40.05]Wherever you go\n[02:41.88]just want you to know\n[02:43.95]你知道我的心一直都在原地为你等候\n[02:46.65]我其实对天气不感兴趣\n[02:48.15]想知道你会不会太冷\n[02:50.28]没法完成那份陪伴\n[02:51.78]孤独你会不会在忍\n[02:53.79]不知道想念你的痛苦\n[02:55.50]来的到底会不会太准\n[02:57.36]只知道当你不在床上\n[02:59.25]我总是睡得不会太稳\n[03:01.53]我们看惯了世间的罗生门\n[03:03.45]变得好像陌生人\n[03:05.28]两颗同样不安的心脏被塞进了同一个摩天轮\n[03:09.06]每次拥抱停留在清晨\n[03:10.98]窗外大雨在倾盆\n[03:12.75]我们好像巨大城市里面两个相爱的外星人\n[03:16.53]可我不想生活在套路里\n[03:18.45]想把心事都告诉你\n[03:19.86]我想要一直照顾你\n[03:21.72]又总害怕你耗不起\n[03:24.54]滴答的秒针又在\n[03:26.16]提醒我爱你几分\n[03:28.23]只要听到你的声音\n[03:29.73]我一定会为你转身\n[03:31.74]一直走一直梦\n[03:33.66]一直疯一直没停留\n[03:37.86]那些美好的\n[03:39.27]越靠近越沉溺\n[03:41.22]越来越不想放手\n[03:45.63]Wherever you go\n[03:53.89]Wherever you go\n[04:01.36]本歌曲来自【青云 LAB】\n"

    // 开始处理歌词
    const lyricArr = lyric.split('\n')

    //因为item为基本类型，所以需要一个新变量来存储
    const newLy = lyricArr.map(item => {
        return {
            //采用slice而不用splice，因为不会改变item便于操作
            time: parseInt(item.slice(1, 3)) * 60 + parseInt(item.slice(4, 6)),
            content: item.split(']')[1]
        }
    })
    console.log(lyricArr);
    console.log(newLy);
    let music = document.querySelector('.music')
    let clr = document.querySelector('.clr')

    //初始渲染
    newLy.forEach(item => {
        let li = document.createElement('li')
        li.innerText = item.content
        li.style.height = 30 + 'px'
        li.style.textAlign = 'center'
        li.style.lineHeight = 30 + 'px'
        clr.appendChild(li)
    })

    clr.addEventListener('scroll', () => {
        clrScrollTop = clr.scrollTop
        console.log(clrScrollTop);
    })


    function setScrollTop() {
        let time = Math.floor(music.currentTime)
        console.log(time);
        for (let i = 0; i < newLy.length; i++) {
            if (time === newLy[i].time) {
                console.log(-i * 30);
                clr.children[1].style.marginTop = -i * 30 + 'px';
                return
            }
        }
    }

    //监听音乐播放时间函数
    music.ontimeupdate = setScrollTop


    //播放控件
    let musicC = document.querySelector('.musicC')
    let flag = false
    musicC.addEventListener('click', () => {
        if (flag) {
            music.pause()
        } else {
            music.play()
        }
        flag = !flag
    })
}
