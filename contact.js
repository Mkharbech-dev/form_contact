



// function envoyer(event){
//     var prenom = document.querySelector('#lastname');
//     var mail = document.querySelector('#email');
//     var tele = document.querySelector('#tel');
//     var texte = document.querySelector('#message');
//     var nom = document.querySelector('#firstname');
//     // ************************************************************
//     var lastName = document.querySelector('#lastname').value;
//     var email = document.querySelector('#email').value;
//     var tel = document.querySelector('#tel').value;
//     var text = document.querySelector('#message').value;
//     var firstName = document.querySelector('#firstname').value;
//     event.preventDefault();
//     var tab = [prenom, mail, tele, texte, nom];
//     var tab = [lastName, email, tel, text, firstName];
//     tab.forEach(element => {
//         if (element != ""){
//             alert("formulaire bien posté")
//         }else{
//             alert(element.name + "n'est pas rempli")
//             return false ;
//         }
//     });
//     return false
// }

function envoyer(event){

    event.preventDefault();
    var homme = document.querySelector('#title_m') 
    var femme = document.querySelector('#title_f') 
    let myRegex = /^[a-zA-Z-\s]+$/;
    if(!homme.checked && !femme.checked){
    alert('Saisir une civilité ')
    return false;
    }
    if(document.querySelector('#firstname').value == ""){;
    document.querySelector('#firstname').style.border= '4px solid red '
    document.querySelector('#firstname').focus();
    alert('Entrer un nom ')
    return false;
    }else if (myRegex.test(document.querySelector('#firstname').value) == false){
    alert('Saisir uniquement des lettres et des espaces dans le nom ')
    document.querySelector('#firstname').style.border= '4px solid red '
    document.querySelector('#firstname').focus();
    return false;       
    }else{
    document.querySelector('#firstname').style.border= '4px solid green '
    }
    if(document.querySelector('#lastname').value == ""){
    document.querySelector('#lastname').style.border= '4px solid red '
    document.querySelector('#lastname').focus();
    alert('Entrer un prénom ')
    return false;
    }else if (myRegex.test(document.querySelector('#lastname').value) == false){
        alert('Saisir uniquement des lettres et des espaces dans le prénom ')
        document.querySelector('#lastname').style.border= '4px solid red '
        document.querySelector('#lastname').focus();
        return false;       
    }else{
    document.querySelector('#lastname').style.border= '4px solid green '
    }


    if(document.querySelector('#email').value == ""){
    document.querySelector('#email').style.border= '4px solid red '
    document.querySelector('#email').focus();
    alert('Entrer un email ')
    return false;
    }else{
    document.querySelector('#email').style.border= '4px solid green '
    }



    if(document.querySelector('#tel').value == ""){
    document.querySelector('#tel').style.border= '4px solid red '
    document.querySelector('#tel').focus();
    alert('Entrer un tel ')
    return false;
    }else{
    document.querySelector('#tel').style.border= '4px solid green '
    }



    if(document.querySelector('#message').value == ""){
    alert('Entrer un texte svp ')
    document.querySelector('#message').style.border= '4px solid red '
    document.querySelector('#message').focus();
    return false;
    }else if(document.querySelector('#message').value.length < 11){
        document.querySelector('#message').style.border= '4px solid red '
        alert('Entrer minimaum 10caractéres dans le message')
    }else{
    document.querySelector('#message').style.border= '4px solid green '
    }
    var agree = document.querySelector('#agree') 
    var read = document.querySelector('#read')
    var divFlex =  document.querySelector('.conditions')
    if(!agree.checked || !read.checked){
    alert('Accepter les deux conditions ')
    return false;
    }
  
    if (true && homme.checked){
       
        document.querySelector('.status').innerHTML = "Merci de m'avoir contacté M "+ document.querySelector
        ('#firstname').value
        document.querySelector('.status').classList.add('success');   
    }else{
        document.querySelector('.status').innerHTML = "Merci de m'avoir contacté Mme "+ document.querySelector
        ('#firstname').value
        document.querySelector('.status').classList.add('success');   
    }
}







// function envoyer(event){
//     event.preventDefault();
//     var inputLabel = document.querySelector('.form-label').value
//     console.log(inputLabel)
//     inputLabel.forEach(element => {
//         console.log(element)
//         if(element != ''){
            
//             alert('ok')
//         }else{
//             alert("ko")
//             return false ;
//         }
//     });
// }