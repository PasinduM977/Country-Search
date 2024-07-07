//https://restcountries.com/v3.1/all 


let tblCountries=document.getElementById("tblCountries");

let tableBody=`<tr>
<th width="33%" style="background-color: bisque;text-align: center;">Name</th>
<th width="33%" style="background-color: bisque;text-align: center;">Flag</th>
<th width="33%" style="background-color: bisque;text-align: center;">Capital</th>

</tr>`;

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

data.forEach(element => {

    tableBody+=
    `<tr>
<td style="text-align: center;">${element.name.common}</td>
<td style="text-align: center;"><img src="${element.flags.png}" alt=""></td>
<td style="text-align: center;">${element.capital}</td>

</tr>`;

console.log(element.name.common);
console.log(element.flags.png);
console.log(element.capital);

});


tblCountries.innerHTML=tableBody;

})

function Search()
{
let InputCountry=document.getElementById("InputCountry").value;
let CountryName=document.getElementById("CountryName");
let FlagImage=document.getElementById("FlagImage");
let CapitalName=document.getElementById("CapitalName");

fetch(`https://restcountries.com/v3.1/name/${InputCountry}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
           
           CountryName.innerText="Country name -"+obj.name.common
           CapitalName.innerText="Capital-"+obj.capital
           FlagImage.src=obj.flags.png
            
        
        })
    })



}




