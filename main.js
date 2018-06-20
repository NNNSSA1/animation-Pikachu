!function(){
    let duration = 20
    function writeCode(code,fn){
        let n =0
        let content = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        setTimeout( function run(){
            n += 1
            content.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            content.scrollTop = content.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)
            }
                    // fn && fn.call() //如果你给我传了回调那么我就再调一下回调。
        },duration)
    }
    let code = ` /*我先写个默认的样式*/
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::after{
        box-sizing: border-box;
    }
    *::before{
        box-sizing: border-box;
    }
    /*别急，马上就好了*/
    body{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .code-wrapper{
        flex: 1;
        height: 30%;
        background-color :#ddd;
    }
    /*画个皮卡丘，首先是皮卡丘的皮*/
    .preview-wrapper{
        flex: 1;
        height: 70%;
    }
    .preview{
        height: 100%;
        background-color: #FEE433;
        display: flex;
        justify-content: center;
        align-items: center;
   
    }
    .wrapper{
        width: 100%;
        height: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    /*然后画个鼻子~~*/
    .wrapper .nose{
        width: 0px;
        height: 0px;
        border: 14px solid;
        border-color: black transparent transparent transparent;
        border-radius: 50%;
    }
    /* 然后是眼睛~~*/
    .wrapper .eye{
        position: absolute;
        width: 45px;
        height: 45px;
        border: 2px solid black;
        background-color: #2e2e2e;
        border-radius: 50%;
    }
    .wrapper .eye::before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: white;
        left: 5px;
    }
    .wrapper .eye.left{
        transform: translate(-100px,-12px);
    }
    .wrapper .eye.right{
        transform: translate(100px,-12px);
    }
    .wrapper .blush{
        position: absolute;
        width: 66px;
        height: 66px;
        border: 2px solid black;
        border-radius: 50%;
        background-color: #FC0D1C;
    }
    .wrapper .blush.left{
        transform: translate(-145px,55px);
    }
    .wrapper .blush.right{
        transform: translate(145px,55px);
    }
    /* 最后画嘴巴~~~*/
    .wrapper .upperlip{
        position: absolute;
        width: 80px;
        height: 25px;   
        border: 2px solid black;
        background-color: #FEE433;
    }
    .wrapper .upperlip.left{
        right: 50%;
        top:54%;
        border-top: none;
        border-right: none;
        border-bottom-left-radius:40px 20px;
        transform: rotate(-20deg);
    }
    .wrapper .upperlip.right{
        left: 50%;
        top:54%;
        border-top: none;
        border-left: none;
        border-bottom-right-radius:40px 20px;
        transform: rotate(20deg);
    }
    
    .wrapper .lowerlip-wrapper{
        position: absolute;
        width: 300px;
        height: 120px;
        top:58%;
        overflow: hidden;
    }
    .wrapper .lowerlip{
        position: absolute;
        margin-left: 66px; 
        bottom: 0;
        width: 170px;
        height: 1000px;
        border: 2px solid black;
        border-radius: 50%;
        background-color: #990513;
        overflow: hidden;
        
    }
    .wrapper .lowerlip::before{
        content: "";
        position: absolute;
        bottom: -10px;
        width: 100px;
        height: 100px;
        margin-left: 34px; 
        background-color: #FC4A62;
        border-radius: 50%;
    }
    /*好了，这只皮卡丘送你*/
    `
    writeCode(code)

    $('.action').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $($button).addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            duration = 50
            break
            case 'fast':
            duration = 0
            break
            case 'normal':
            duration = 20
            break
        }
    })

}.call()