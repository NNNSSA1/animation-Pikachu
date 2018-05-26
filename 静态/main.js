!function(){
    var result = `12331eadsds
    `
    var n =0
    var id = setInterval(()=>{
        n += 1
        $('#code').innerHTML = result.substring(0,n)
    },1000)


    $('.action').on('click','button',function(e){
        let $button = $(e.currentTarget)
        $($button).addClass('active').siblings().removeClass('active')
    })



}.call()