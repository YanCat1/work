newP = document.querySelector('.new')
category = document.querySelector('.category')
showData = document.querySelector('.showData')
Tcheng = document.querySelector('.Tcheng')
Tchuang = document.querySelector('.Tchuang')
icon = document.querySelector('.icon-xiangzuo')
experience = document.querySelector('.experience')
course = document.querySelector('.course')
experienceI = document.querySelector('.experienceI')
// 课程内容获取
python = document.querySelector('.python')
wedo = document.querySelector('.wedo')
c = document.querySelector('.c')
spike = document.querySelector('.spike')
child = document.querySelector('.child')
weeks = document.querySelector('.weeks')
month = document.querySelector('.month')

flag = false
flag1 = false
newP.onclick=function(){
    flag = !flag
    if(flag){
        category.style.display = 'block'
        icon.className ='iconfont icon-xiangxia'
        course.style.display = 'none'
        experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
        flag1 = false
    }else{
        category.style.display = 'none'
        icon.className ='iconfont icon-xiangzuo'
    }
}
Tcheng.onclick=function(){
    showData.src = './童程新员工入职需知.pdf'
}
Tchuang.onclick=function(){
    showData.src = './童创新员工入职需知.pdf'
}

experience.onclick=function(){
    flag1 = !flag1
    if(flag1){
        experienceI.className = 'experienceI iconfont icon-arrow_right_fat '
        course.style.display = 'block'
        category.style.display = 'none'
        icon.className ='iconfont icon-xiangzuo'
        flag = false
    }else{
        experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
        course.style.display = 'none'
    }
}
// 课程点击
// function Click(ele,name){
//     ele.onclick=function(){
//         showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
//         course.style.display = 'none'
//         experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
//         flag1 = false
    
//     }
// }
python.onclick=function(){
    showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
    course.style.display = 'none'
    experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    flag1 = false

}

wedo.onclick=function(){
    showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
    course.style.display = 'none'
    experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    flag1 = false
}

c.onclick=function(){
    showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
    course.style.display = 'none'
    experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    flag1 = false

}

spike.onclick=function(){
    showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
    course.style.display = 'none'
    experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    flag1 = false

}

child.onclick=function(){
    showData.src = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
    course.style.display = 'none'
    experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    flag1 = false

}

// 周待办
weeks.onclick=function(){
    window.open('weeks.html');
}
// 月待办
month.onclick=function(){
    window.open('month.html');
}