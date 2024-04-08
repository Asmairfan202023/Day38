// Question113: Write a function that checks if a Map countains a key for "canada" and logs the capital if it exists.
// Q112
const countries1 = new Map<string, string>();
// Add Pakistan in a map
countries1.set("Pakistan","Islamabad");
    // Add Japan in a map
    countries1.set("Japan","Tokyo");
    // Add China to a MAp
    countries1.set("China","Shinghaai");
    console.log(countries1);
// Question 13
function checksCapitalOfCanada(countries:Map<string, string>):void{
    if (countries1.has("Canada")){
        console.log(`The capital of Canada is ${countries1.get("Canada")}`);
    }
    else{
        console.log("Canada is not in the MAP");
    }
}
checksCapitalOfCanada(countries1);