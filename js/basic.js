let backURL = 'http://172.30.1.14:8088/MyoMiBackend/'
let frontURL = 'http://172.30.1.14:5500/html/'

$(()=>{
    // -- 메뉴가 클릭되었을 대 일어날 일 START --
    $('section>nav>ul>li').click((e)=>{
        //셋팅
        let menu = $(e.target).attr('class')
        switch(menu){
            case 'productlist':
                $('section>div.tab-content').load('./../product/productlist.html')
                break;
            case 'dosirak':
                $('section').load('../../product/dosiraklist.html')
                break;
            case 'salad':
                break;
            case 'mealKit':
                //$.ajax(get) 방식을 함축해 놓은데 .load!
                // $('section').load('./../product/productlist.html')
                break;
        }
    })
    // -- 메뉴가 클릭되었을 대 일어날 일 END --

    // -- 로고가 클릭되었을 때 할 일 START --
    $('div.logo_main').click(()=>{
        location.href=frontURL
        //5500/html/이지만 알아서 웰컴페이지를 찾아가는데 웰컴페이지 인식을 알아서 index.html을 불러온다
    })
    // -- 로고가 클릭되었을 때 할 일 END --
})