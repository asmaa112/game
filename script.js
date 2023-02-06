// let choix = document.getElementById("choix")
let arr = ["papier","pierre","ciseaux"]
let x = document.getElementById("x")
let btn = document.getElementsByTagName("button")
let random = 0
function game(e){
    let random = Math.floor( Math.random()* 3)
    // choix.innerHTML = arr[random]
    if (arr[random] == e)x.innerHTML = "vous avez choisi le même choix, vous êtes égaux"
    else {
        if (e == "papier")
        {
            if(arr[random] == "ciseaux")x.innerHTML = " vous avez choisi papier, le robot a choisi ciseaux, donc le robot gagne et vous ne gagnez pas"
            else if(arr[random] == "pierre")x.innerHTML = "vous avez choisi papier, le robot a choisi pierre, donc le robot gagne"
        }
        else if (e == "ciseaux")
        {
            if(arr[random] == "pierre") x.innerHTML = " vous avez choisi les ciseaux, le robot a choisi pierre, donc le robot gagne et vous ne gagnez pas" 
            else if(arr[random] == "papier") x.innerHTML = "vous avez choisi  ciseaux, le robot a choisi papier, donc le robot gagne"       
        }
        else if (e == "pierre")
        {
            if(arr[random] == "ciseaux")x.innerHTML = "vous avez choisi pierre, le robot a choisi ciseaux, donc c'est toi qui gagne"
            else if(arr[random] == "papier") x.innerHTML = "vous avez choisi pierre, le robot a choisi papier, donc tu gagnes et le  robot ne gagne pas"
        }
               
    }
        
}