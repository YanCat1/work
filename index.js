newP = document.querySelector('.new')
category = document.querySelector('.category')
showData = document.querySelector('.showData')
Tcheng = document.querySelector('.Tcheng')
Tchuang = document.querySelector('.Tchuang')
icon = document.querySelector('.icon-xiangzuo')


flag = false
newP.onclick=function(){
    flag = !flag
    if(flag){
        category.style.display = 'block'
        icon.className ='iconfont icon-xiangxia'
    }else{
        category.style.display = 'none'
        icon.className ='iconfont icon-xiangzuo'
    }
}
Tcheng.onclick=function(){
    showData.data = './2021.11.5 新员工入职需知.pdf'
}
Tchuang.onclick=function(){
    showData.data = './2021.11.5 新员工入职需知 - 副本.pdf'
}