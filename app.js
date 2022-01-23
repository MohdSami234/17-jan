const str1 = "sami";
document.write('<h1>string 1 = "sami"</h1>' ); 
const str2 = "imsa";
document.write('<h1>string 2 = "imsa"</h1>' );
const x = str1.split('').sort();
const y =   str2.split('').sort();

 

function isanagram(x,y){
    let n1 = str1.length;
    let n2 = str2.length;
   
     
    if (n1 != n2)
        return false;
   
      
    for (let i = 0; i < n1; i++)
        if (x[i] != y[i])
            return false;
   
    return true;


}
if (isanagram(x,y))
document.write('<h1>The two strings are anagram</h1>' );
else
document.write('<h1>The two strings are not anagram</h1>');