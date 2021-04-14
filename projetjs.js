function madd()
            {
                var changer = document.getElementById("three")
                changer.style.color = "red";
            }

function change()
    {
        var afficher = document.getElementById("two")
        alert("Bienvenue !");
        
    }

function multi(){
    ca=12
                i=1
                while(i<12){
                
                    document.write(ca)
                    document.write("*")
                    document.write(i)
                    document.write("=")
                    document.write(ca*i+"<br>")
                    i++;
                                                        
                            }
                    
    }

function showselection(item)
{
    item.style.backgroundColor = "green";
}
function resetselection(iteem)
{
    iteem.style.backgroundColor = "white";
}


function matiéres()
{
    tableau=["conception de pages web","Preparer son poste de travail","Mathematiques"];
    
    for (i=0;i<3;i++)
    {
        var node = document.createElement("li");
        var textnode = document.createTextNode(tableau[i]);
        node.appendChild(textnode);
        document.getElementById("liste").appendChild(node);
    }
}





document.addEventListener("keypress", function (e)
{
    var touche = String.fromCharCode(e.charCode)
    console.log("vous avez appuyé sur la touche " + touche);
    touche = touche.toLowerCase();
    
    
   function Affichea(){
        console.log("touche a tapée")
        document.getElementById("rep3").textContent += "Touche a tapée";
    }
     function Afficheb(){
        console.log("touche b tapée")
    }
     function Affichec(){
        console.log("touche c tapée")
    }

    
    switch(touche) {
  
        case "a":
    Affichea();
    break;
    
  case 'b':
        Afficheb();
     break;
  case 'c':
   Affichec();
    
    break;
        case 's':
   style();
    break;
        case 'z':
   revenir();
    break;
            
  default:
    console.log('la touche ' + touche + ' non gérée.');
    }
});


function ajoutlien()
{
    var creer = document.createElement("h5");
creer.id = "newtext";
creer.textContent = "cliquez (s) pour changer mon style et (z) pour revenir";
document.getElementById("newtext").appendChild(creer);
}
setTimeout(ajoutlien, 50);
    
    function style()
{
    var stylelien = document.getElementById("newtext");
    stylelien.style.color = "blue";
    stylelien.style.textDecoration = "none";
    stylelien.style.border = "solid";
    stylelien.style.fontSize = "x-large";
    
}

function revenir()
{
    var origine = document.getElementById("newtext")
    origine.style.textDecoration = "none";
    origine.style.border = "none";
    origine.style.fontSize = "medium";
    origine.style.color= "black";
}

function oublie()
{
    
        
    tableau.push("python")
   
        var node = document.createElement("li");
        var textnode = document.createTextNode(tableau[i]);
        node.appendChild(textnode);
        document.getElementById("liste").appendChild(node);
}

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
