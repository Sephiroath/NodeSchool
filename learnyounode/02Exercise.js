/**
 * Created by albarracinca on 20/04/2017.
 */
var inParameters = process.argv;
var sum = 0;
for(var i = 2; i < inParameters.length; i++){
    sum = sum + parseInt(inParameters[i]);
}
console.log(sum);