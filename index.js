const want = document.querySelector('.want');
const to =document.querySelector('.to');
const be = document.querySelector('.be');
const awesome = document.querySelector('.awesome');
const rock = document.querySelector('.rock');
const desc = document.querySelector('.desc');
const load = document.querySelector('.load');
const first = document.querySelector('.first');
const second  = document.querySelector('.second');
const third  = document.querySelector('.third');
const head = document.querySelector('.head');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.getElementById("img");
const cardheading = document.querySelector('.cardheading');
const cardtext = document.querySelector('.cardtext');
const book = document.querySelector('.book');
const gallery = document.querySelector('.gallery');
const news = document.querySelector('.news');
const goodies = document.querySelector('.goodies');
const merchandise = document.querySelector('.merchandise');
const concerts = document.querySelector('.concerts');
const what = document.querySelector('.what');
const firstclg = document.querySelector('.firstclg');
const secondclg = document.querySelector('.secondclg');
const thirdclg = document.querySelector('.thirdclg');
const fourclg = document.querySelector('.fourclg');
const fiveclg = document.querySelector('.fiveclg');
const sixclg = document.querySelector('.sixclg');
const seventhclg = document.querySelector('.seventhclg');
const eightclg = document.querySelector('.eigthclg');
const ninthclg = document.querySelector('.ninthclg');
const flabel = document.querySelector('.flabel');
const fname = document.querySelector('.fname');
const elabel = document.querySelector('.elabel');
const eid = document.querySelector('.eid');
const passlabel = document.querySelector('.passlabel');
const fpassword = document.getElementById("fpassword");
const confirmpasslabel = document.querySelector('.confirmpasslabel');
const cfpassword = document.querySelector('.cfpassword');
const container = document.querySelector('.container');

const images = [
    {
    id:1,
    img:"images/img-1.jpg",
    heading: "Book shows",
    text: "Book tickets via our site and get additional discount of 20% on all sites. Get all updates of upcoming concerts.",
    buttonText : "Book now",
    boxShadow: "10px 10px 10px blue"
},
{
    id:2,
    img:"images/img-2.jpg",
    heading: "Hire artist",
    text: "Hire local artist and Dj's for your party, Our community consists of many talented artists.",
    buttonText: "Hire now",
    boxShadow: "10px 10px 10px cyan"
},
{
    id:3,
    img:"images/img-3.jpg",
    heading: "Be awesome",
    text: "Join us to become part our awesome community, more than million peoples are already become part of us,Now it's your turn.",
    buttonText: "Join us",
    boxShadow: "10px 10px 10px blue"
},
{
    id:4,
    img:"images/img-4.jpg",
    heading: "Show skill",
    text : "Share your band / solo videos, to be the part of our monthly concerts.",
    buttonText : "share",
    boxShadow: "10px 10px 10px hotpink"
},
{
    id:5,
    img:"images/img-5.jpg",
    heading: "Be artistic",
    text: "Our community consists of talented artists share your videos with them via our platform to get special perks.",
    buttonText : "Join now",
    boxShadow:"10px 10px 10px violet"
}
];

let current = 0;

window.addEventListener('DOMContentLoaded', function(){
    first.style.transform = 'translateX(0%)';
    second.style.visibility = 'hidden';
    third.style.visibility = 'hidden';
    showData(current);
});

rock.addEventListener('mouseenter', function(){
    head.style.background='black';
    desc.style.color='white';
    load.style.color='yellow';
    head.style.transition="0.2s ease-out";
});

rock.addEventListener('mouseleave', ()=>{
    head.style.background='#efb89e';
    desc.style.color='black';
    load.style.color='black';
    head.style.transition="0.2s ease-in";
});

desc.addEventListener('mouseenter', function(){
    head.style.transition='0.2s ease-in-out';
    head.style.background="black";
    desc.style.color='white';
    load.style.color='yellow';
});
desc.addEventListener('mouseleave', function(){
    head.style.background="#efb89e";
    desc.style.color='black';
    load.style.color='black';
    head.style.transition='0.2s ease-in-out';
});

want.addEventListener('mouseenter', function(){
head.style.background="black";
desc.style.color='white';
load.style.color='yellow';
head.style.transition="0.2s ease-out";
want.style.color=' cyan';
want.style.transition=' 0.2s ease-in-out';
want.style.textShadow= '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
want.style.transform= 'rotate(-15deg)';
want.style.cursor='context-menu';
});

want.addEventListener('mouseleave', function(){
    head.style.transition="0.2s ease-in";
    desc.style.color='black';
    load.style.color='black';
    head.style.background="#efb89e";
    want.style.color='black';
    want.style.textShadow ='-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    want.style.transform ='rotate(-8deg)';
});

to.addEventListener('mouseenter', function(){
    head.style.background="#ADEFD1FF";
    head.style.transition="0.2s ease-out";
    to.style.color='yellow';
    to.style.transition= '0.2s ease-in-out';
    to.style.textShadow='-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    to.style.transform ='rotate(-15deg)';
    to.style.cursor='context-menu';
});
to.addEventListener('mouseleave', function(){
        head.style.background="#efb89e";
        head.style.transition="0.2s ease-in";
        to.style.color='black';
        to.style.textShadow='-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
        to.style.transform ='rotate(-8deg)';
});

be.addEventListener('mouseenter', function(){
    head.style.background="cyan";
    head.style.transition="0.2s ease-out";
    be.style.color = 'rgb(199, 98, 230)';
    be.style.transition= '0.2s ease-in-out';
    be.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    be.style.transform= 'rotate(-15deg)';
    be.style.cursor='context-menu';
    });
    
be.addEventListener('mouseleave', function(){
        head.style.background="#efb89e";
        head.style.transition="0.2s ease-in";
        be.style.color='black';
        be.style.textShadow=' -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
        be.style.transform='rotate(-8deg)';
});

awesome.addEventListener('mouseenter', function(){
    head.style.transition="0.2s ease-out";
    head.style.background="black";
    desc.style.color='white';
    load.style.color ='yellow';
    awesome.style.color= 'hotpink';
    awesome.style.transition= '0.2s ease-in-out';
    awesome.style.textShadow= '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    awesome.style.transform= 'rotate(-15deg)';
    awesome.style.cursor='context-menu';
    });
    
awesome.addEventListener('mouseleave', function(){
        head.style.background="#efb89e";
        desc.style.color='black';
        load.style.color='black';
        head.style.transition="0.2s ease-in";
        awesome.style.color='black';
        awesome.style.textShadow= '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
        awesome.style.transform = 'rotate(-8deg)';
});

setInterval(()=>{

    first.style.transform = 'translateX(-110%)';
    first.style.transition ='0.5s ease-in';
    second.style.visibility = 'visible';
    second.style.transition = '0.5s ease-in';
    third.style.transition = '0.5s ease-in';
    third.style.visibility = 'hidden';
    second.style.transform = 'translateX(-113%)';
    first.style.visibility = 'hidden';
},2500);

setInterval(()=>{
    first.style.visibility = 'hidden';
    first.style.transition = '0.5s ease-in-out';
    second.style.transition ='0.5s ease-in';
    third.style.transition = '0.5s ease-in';
    third.style.visibility = 'visible';
    second.style.visibility = 'hidden';
    third.style.transform = 'translateX(-223%)';
    first.style.transform = 'translateX(0%)';
    //first.style.visibility = 'visible';
},3000);

setInterval(()=>{
    first.style.visibility = 'hidden';
    third.style.visibility = 'hidden';
    second.style.visibility = 'hidden';
    third.style.transition ='0.5s ease-in';
    second.style.transition = '0.5s ease-in';
    first.style.transform = 'translateX(0%)';
    first.style.transition = '0.7s ease-in';
    first.style.visibility = 'visible';
},5000);

gallery.addEventListener('mouseenter', function(){
    gallery.style.background='transparant';
    gallery.style.height='85%';
    gallery.style.borderBottom='8px solid white';
});

news.addEventListener('mouseenter', function(){
    news.style.background = 'transparant';
    news.style.height = '85%';
    news.style.borderBottom = '8px solid white';
});

goodies.addEventListener('mouseenter', function(){
    goodies.style.background = 'transparant';
    goodies.style.height = '85%';
    goodies.style.borderBottom = '8px solid white';
});

merchandise.addEventListener('mouseenter', function(){
    merchandise.style.background = 'transparant';
    merchandise.style.height = '85%';
    merchandise.style.borderBottom = '8px solid white';
});

concerts.addEventListener('mouseenter', function(){
    concerts.style.background = 'transparant';
    concerts.style.height = '85%';
    concerts.style.borderBottom = '8px solid white';
});

what.addEventListener('mouseenter', function(){
    what.style.background = 'transprant';
    what.style.height='85%';
    what.style.borderBottom = '8px solid white';
});

gallery.addEventListener('mouseleave', function(){
    gallery.style.background='transparant';
    gallery.style.height ='100%';
    gallery.style.borderBottom = 'none';
});

news.addEventListener('mouseleave', function(){
    news.style.background = 'transparant';
    news.style.height = '100%';
    news.style.borderBottom = 'none';
});

goodies.addEventListener('mouseleave', function(){
    goodies.style.background = 'transparant';
    goodies.style.height = '100%';
    goodies.style.borderBottom = 'none';
});

merchandise.addEventListener('mouseleave', function(){
    merchandise.style.background = 'transparant';
    merchandise.style.height = '100%';
    merchandise.style.borderBottom = 'none';
});

concerts.addEventListener('mouseleave', function(){
    concerts.style.background = 'transparant';
    concerts.style.height = '100%';
    concerts.style.borderBottom = 'none';
});

what.addEventListener('mouseleave', function(){
    what.style.background = 'transparant';
    what.style.height = '100%';
    what.style.borderBottom = 'none';
});

function showData(person){
    const item = images[person];
    img.src = item.img;
    img.style.boxShadow = item.boxShadow;
    cardheading.textContent = item.heading;
    cardtext.textContent = item.text;
    book.textContent = item.buttonText;
}
next.addEventListener('click', function(){
    current++;
    if(current > images.length-1){
        current = 0;
        showData(current)
    }else{
        showData(current);
    }
});

prev.addEventListener('click', function(){
    prev.style.border = 'none';
    current--;
    if(current < 0){
        current = images.length-1;
        showData(current);
    }else{
        showData(current);
    }
});

firstclg.addEventListener('mouseenter',function(){
    firstclg.style.transform = 'scale(1.5)';
    firstclg.style.transition = '0.2s ease-out';
    firstclg.style.zIndex='10'; 
});

firstclg.addEventListener('mouseleave', function(){
    firstclg.style.transform = 'scale(1)';
    firstclg.style.transition = '0.3s ease-in';
    firstclg.style.zIndex = 'auto';
});

secondclg.addEventListener('mouseenter',function(){
    secondclg.style.transform = 'scale(1.5)';
    secondclg.style.transition = '0.2s ease-out';
    secondclg.style.zIndex = '10';
});

secondclg.addEventListener('mouseleave', function(){
    secondclg.style.transform = 'scale(1)';
    secondclg.style.transition = '0.3s ease-in';
    secondclg.style.zIndex = 'auto';
});

thirdclg.addEventListener('mouseenter',function(){
    thirdclg.style.transform = 'scale(1.5)';
    thirdclg.style.transition = '0.2s ease-out';
    thirdclg.style.zIndex = '10';
});

thirdclg.addEventListener('mouseleave', function(){
    thirdclg.style.transform = 'scale(1)';
    thirdclg.style.transition = '0.3s ease-in';
    thirdclg.style.zIndex = 'auto';
});

fourclg.addEventListener('mouseenter',function(){
    fourclg.style.transform = 'scale(1.5)';
    fourclg.style.transition = '0.2s ease-out';
    fourclg.style.zIndex = '10';
});

fourclg.addEventListener('mouseleave', function(){
    fourclg.style.transform = 'scale(1)';
    fourclg.style.transition = '0.3s ease-in';
    fourclg.style.zIndex = 'auto';
});

fiveclg.addEventListener('mouseenter',function(){
    fiveclg.style.transform = 'scale(1.2)';
    fiveclg.style.transition = '0.2s ease-out';
    fiveclg.style.zIndex = '10';
});

fiveclg.addEventListener('mouseleave', function(){
    fiveclg.style.transform = 'scale(1)';
    fiveclg.style.transition = '0.3s ease-in';
    fiveclg.style.zIndex = 'auto';
});

sixclg.addEventListener('mouseenter',function(){
    sixclg.style.transform = 'scale(1.2)';
    sixclg.style.transition = '0.2s ease-out';
    sixclg.style.zIndex = '10';
});

sixclg.addEventListener('mouseleave', function(){
    sixclg.style.transform = 'scale(1)';
    sixclg.style.transition = '0.3s ease-in';
    sixclg.style.zIndex = 'auto';
});

seventhclg.addEventListener('mouseenter',function(){
    seventhclg.style.transform = 'scale(1.5)';
    seventhclg.style.transition = '0.2s ease-out';
    seventhclg.style.zIndex = '10';
});

seventhclg.addEventListener('mouseleave', function(){
    seventhclg.style.transform = 'scale(1)';
    seventhclg.style.transition = '0.3s ease-in';
    seventhclg.style.zIndex = 'auto';
});

eightclg.addEventListener('mouseenter',function(){
    eightclg.style.transform = 'scale(1.5)';
    eightclg.style.transition = '0.2s ease-out';
    eightclg.style.zIndex = '10';
});

eightclg.addEventListener('mouseleave', function(){
    eightclg.style.transform = 'scale(1)';
    eightclg.style.transition = '0.3s ease-in';
    eightclg.style.zIndex = 'auto';
});

ninthclg.addEventListener('mouseenter',function(){
    ninthclg.style.transform = 'scale(1.5)';
    ninthclg.style.transition = '0.2s ease-out';
    ninthclg.style.zIndex = '10';
});

ninthclg.addEventListener('mouseleave', function(){
    ninthclg.style.transform = 'scale(1)';
    ninthclg.style.transition = '0.3s ease-in';
    ninthclg.style.zIndex = 'auto';
});

flabel.addEventListener('mouseenter', function(){
    flabel.style.marginBottom='0%';
    flabel.style.transition = '0.2s ease-out';
    fname.style.marginTop = '0%';
});

elabel.addEventListener('mouseenter', function(){
    elabel.style.marginBottom='0%';
    elabel.style.transition = '0.2s ease-out';
    eid.style.marginTop = '0%';
});

passlabel.addEventListener('mouseenter', function(){
    passlabel.style.marginBottom='0%';
    passlabel.style.transition='0.2s ease-out';
    fpassword.style.marginTop ='0%';
});

confirmpasslabel.addEventListener('mouseenter', function(){
    confirmpasslabel.style.marginBottom='0%';
    confirmpasslabel.style.transition='0.2s ease-out';
    cfpassword.style.marginTop ='0%';
});

function checkpassword(){
    if(pass.length == 8){
        console.log('password submitted',pass);
        alert(pass);
    }
    else{
        pass=null;
        alert("password must contain 8 character");
    }
}

console.log(window.screenWidth);
