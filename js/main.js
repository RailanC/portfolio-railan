const landCard = document.getElementById("landingcontentcard");
const dashCard = document.getElementById("dashboardcontentcard");
const apiCard = document.getElementById("apicontentcard");
//Cards background colour changing on hover
//Landing Page 
landCard.addEventListener('mouseenter', ()=>{
       landCard.classList.add('bg-yellow', 'border-yellow');
});

landCard.addEventListener('mouseleave', ()=>{
       landCard.classList.remove('bg-yellow' , 'border-yellow');
});
//Dashboard
dashCard.addEventListener('mouseenter', ()=>{
       dashCard.classList.add('bg-teal', 'border-teal');
});

dashCard.addEventListener('mouseleave', ()=>{
       dashCard.classList.remove('bg-teal' , 'border-teal');
});
//API
apiCard.addEventListener('mouseenter', ()=>{
       apiCard.classList.add('bg-purple', 'border-purple');
});

apiCard.addEventListener('mouseleave', ()=>{
       apiCard.classList.remove('bg-purple' , 'border-purple');
});