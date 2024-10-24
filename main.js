/*==========================show menu=======================*/

const showMenu=(toggleId, navId)=>{
     const toggle =document.getElementById(toggleId),
     nav=document.getElementById(navId)

     toggle.addEventListener('click', ()=>{
        /*==============add show menu class to nav  menu*/


        nav.classList.toggle('show-menu')

        /*add show-icon to show and hide the menu icon*/

        toggle.classList.tpggle('show-icon')

     })

}
showMenu('nav-toggle','nav__menu')

/*===================show dropdown menu==========*/
 const dropdownItems=document.querySelectorAll('.dropdown__item')

 //1.select each dropdown click

 dropdownItems.forEach((item)=>{
   const dropdownButton =item.querySelector('.dropdown__button')

   //2 select each button click

   dropdownButton.addEventListener('click',()=>{
     
//7 select the current show-dropdowm class

const showDropdown =document.querySelector('.show-dropdown')
      //5call the toggleItem function 

      toggleItem(item)


      //  8 remove the show-dropdown class from otheer item
      if(showDropdown && showDropdown!=item){
         toggleItem(showDropdown)
      }
   })
 })

// 3 creat a function to display  the dropdown

const toggleItem=(item)=>{
   // 3.1 select each dropdown content 

   const dropdownContainer=item.querySelector('.dropdown__container')


   //6 if the same item contains the show-dropdown class ,remove 

   if (item.classList.contains('show-dropdown')){
      dropdownContainer.removeAttribute('style')
      item.classList.remove('show-dropdown')
   }else{
 //4add the maximum  height to the dropdown  content and add the show-dropdown clss

 dropdownContainer.style.height=dropdownContainer.scrollHeight +'px'
 item.classList.add('show-dropdown')
   }

   
}

/*==========================delete dropdown menu================*/

const MediaQuery= matchMedia('(min-width:1118px)'),
dropdownContainer =document.querySelectorAll('.dropdown__container')

//function to remove dropdown style in moble mode when browser resizes

const removeStyle =()=>{
   //validte if the media query reaches 1118px

   if(mediaQuery.matches){
     //remove the dropdown  container height style

     dropdownContainer.forEach((e)=>{
      e.removeAttribute('style')
     })
//remove  the show-dropdown class from item
dropdownItems.forEach((e)=>{
   e.classList.remove('show-dropdown')
})
   }
}

addEventListener('resize','removeStyle')