const listItems = [
    { id: 1, name: 'saideh ', family: 'hasheminejad' },
    { id: 2, name: 'sara ', family: 'hasheminejad' },
    { id: 3, name: 'soosan ', family: 'hasheminejad' },
    { id: 4, name: 'mahboobeh ', family: 'rahbari' },
    { id: 5, name: 'ali ', family: 'hasheminejad' },

    
    { id: 11, name: 'bahar ', family: 'postiban' },
    { id: 12, name: 'kimia ', family: 'kamali' },
    { id: 13, name: 'sara ', family: 'mosavi' },
    { id: 14, name: 'elham ', family: 'dehparvar' },
    { id: 15, name: 'mehraveh ', family: 'taherian' },
    
    { id: 6, name: 'bahar ', family: 'taherian' },
    { id: 7, name: 'hootan ', family: 'shakiba' },
    { id: 8, name: 'soroosh ', family: 'sehat' },
    { id: 9, name: 'mohammadreza ', family: 'shajarian' },
    { id: 10, name: 'Homayun ', family: 'shajarian' },


    { id: 16, name: 'fatemeh ', family: 'shafei' },
    { id: 17, name: 'melika ', family: 'panahi' },
    { id: 18, name: 'keyhan ', family: 'kallhor' },
    { id: 19, name: 'aida ', family: 'mokhtari' },
    { id: 20, name: 'parnia ', family: 'abdolkarimi' },

    { id: 21, name: 'fahimeh ', family: 'mosavi' },
    { id: 22, name: 'hanieh ', family: 'arabi' },
    
];
let $ =document
const listuser=$.querySelector('#list')
const page=$.querySelector('#pagination')
let current=1
let row=5
function display(uers,userinform,row,current)
{
userinform.innerHTML=''
let endindex = row * current
let startindex = endindex - row
let divation=uers.slice(startindex , endindex)
divation.forEach(function(item){
    let elemuser=document.createElement('div')
    elemuser.classList.add('item')
    elemuser.innerHTML=item.name+''+item.family
   userinform.appendChild(elemuser)
})
}
function logical(userinform, page,row){
    page.innerHTML=''
    let t=Math.ceil(userinform.length/row)
    for(i=1;i<t+1;i++){
    let btn=style(i,userinform)
    page.appendChild(btn)
    }
}

function style(currenta,userinform){
let buttun=$.createElement('button')
buttun.innerHTML=currenta
if(currenta===current){
    buttun.classList.add('active')
}
buttun.addEventListener('click',function(){
current=currenta
display(listItems,listuser,row,current)
let per=$.querySelector('button.active')
per.classList.remove('active')
buttun.classList.add('active')
})
return buttun



}





display(listItems,listuser,row,current)
logical(listItems,page,row)





//ایجاد تابعی برای همه کاربرا ها و پیج و row
//برای اینکه تابع داینمیک بشه باید همه کاربران تقسیم بر rowبشن و حتما ازmath.ceil
//قبلش حتما باید پیج empty
//ایحاد حلقه for)+(i,)و استفاده از تابع دکمه
//و درون یه ظرف ذخیره میکنیم 
//pagecontainer ادد میکنیم با با ظرفی که قرار دادیم 

/////
//برای ساخت دکمه ها باید تابعی ایحاد شود که شامل currentپیج و همه کاربران است 
//ساخت دکمه و ایینر را اعمال کردن
//اگر که المان اولیه برابر بود با currentکلاس لیست active اضافه میکنیم 
//برگردانندن buttun