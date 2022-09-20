'use strict';

{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt =>{
        dt.addEventListener('click', () =>{
            dt.parentNode.classList.toggle('appear');

            // If you want to open only one Acoordion UI
            dts.forEach(el => {
                if (dt !== el){
                    el.parentNode.classList.remove('appear');
                }
            });
        });
    });
}