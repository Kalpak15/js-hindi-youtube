//Immediately Invoked Function Expression  (IIFE))


(function chai(){                 //is se function jaldi execute hoga
    console.log(`DB Connected`);
})();                             //agar  ; ye nahi diya to dusra function execute nahi hoga

((name) => {
    console.log(`DB Connected two`);
})("kalpak") 