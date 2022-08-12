title = document.querySelector('.title')
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
// 新员工 隐藏内容显示、图标文件更换 
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
    title.innerText = newP.innerText
}

// 点击童程童创文件切换
Tcheng.onclick=function(){
    showData.src = './童程新员工入职需知.pdf'
    title.innerText = Tcheng.innerText
}
Tchuang.onclick=function(){
    showData.src = './童创新员工入职需知.pdf'
    title.innerText = Tchuang.innerText
}

//体验课相关内容
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
function Click(ele,srcName){
        ele.onclick=function(){
            showData.src = srcName
            course.style.display = 'none'
            experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
            flag1 = false
               title.innerText = ele.innerText
         }
}
// 视频地址
pythonSrc = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
wedoSrc = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
cSrc = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
spikeSrc  = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"
childSrc  = "//player.bilibili.com/player.html?aid=644200934&bvid=BV1SY4y1w7H3&cid=794246857&page=1&high_quality=1&danmaku=0&as_wide=1"

//调用函数进行点击测试
Click(python,pythonSrc)
Click(wedo,wedoSrc)
Click(c,cSrc)
Click(spike,spikeSrc)
Click(child,childSrc)

// 周待办
weeks.onclick=function(){
    window.open('weeks.html');
}
// 月待办
month.onclick=function(){
    window.open('month.html');
}