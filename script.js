let currentip='';
function append(value) {
    currentip+=value;
    document.getElementById('display').value=currentip;
}
function clearDisplay(){
    currentip='';
    document.getElementById('display').value='';
}
function calculate(){
    try{ 
        const result=eval(currentip);
        document.getElementById('display').value=result;
        currentip='';

    }
    catch(error){
        document.getElementById('display').value='Error';
        currentip='';
    }
}