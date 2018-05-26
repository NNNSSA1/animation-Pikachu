!function(){
    $('.action').on('click','button',function(e){
        let $button = $(e.currentTarget)
        $($button).addClass('active').siblings().removeClass('active')
    })



}.call()