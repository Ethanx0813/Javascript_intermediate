const globalVariable = "it is a golbal variable";

function localScopeDemo()  {
    const localVariable = " This is a local variaale";
    console.log(localVariable);
    function innerFunction() {
        console.log(globalVariable);
    } 
    innerFunction();
}
localScopeDemo()
