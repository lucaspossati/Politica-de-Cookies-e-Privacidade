(function() {
function cookies(functions){
        const container = document.querySelector('.container-banner-cookie');
        const save = document.querySelector('.text-button-cookie');
        if(!container || !save) return null;
    
        const localPref = window.localStorage.getItem('cookies-pref');
        console.log(localPref);
        if(localPref) activateFunctions(localPref);
    
        function getFormPref(){
            return [...document.querySelectorAll('[data-function]')];
            
        }
    
        function activateFunctions(pref){
            container.style.display = 'none';
            window.localStorage.setItem('cookies-pref', JSON.stringifypref);
    
        }
    
        function handleSave(){
            const pref = getFormPref();
            activateFunctions(pref);
        }
    
        save.addEventListener('click', handleSave);
    
    }
    
    cookies();


})()