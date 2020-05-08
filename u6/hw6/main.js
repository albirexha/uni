function shtoLajmin(){

    var timestamp = new Date().getUTCMilliseconds();

    //---------------------------------------------------------------------------------------------------------------------------------------------//

    var div = document.createElement('div');
    div.id = timestamp;
    div.innerHTML = '';
    div.className = 'form-group';

    document.getElementById('right-side').appendChild(div);

    //---------------------------------------------------------------------------------------------------------------------------------------------//

    var img = document.createElement("img");
    
    img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ubtlogo.png";
    img.className = 'foto-lajmi';
    var src = document.getElementById(div.id);
 
    src.appendChild(img);

    //---------------------------------------------------------------------------------------------------------------------------------------------//

    var createTitleText = document.createElement('h3');
    createTitleText.className = 'titulli';
    var title = document.getElementById("titulli-new").value;
    createTitleText.innerHTML = title;

    document.getElementById(div.id).appendChild(createTitleText);

    //---------------------------------------------------------------------------------------------------------------------------------------------//

    var createPText = document.createElement('p');
    createPText.className = 'paragrafi';
    var permbajtja = document.getElementById("permbajtja-new").value;
    createPText.innerHTML = permbajtja;

    document.getElementById(div.id).appendChild(createPText);

    //---------------------------------------------------------------------------------------------------------------------------------------------//
    
    var createHText = document.createElement('h6');
    createHText.className = 'h6';
    createHText.innerHTML = 'data';

    document.getElementById(div.id).appendChild(createHText);

    //---------------------------------------------------------------------------------------------------------------------------------------------//
	
	var divs = document.getElementsByClassName("form-group");
    console.log(divs.length);
    if(divs.length>4){
    console.log(divs.length);
    document.getElementsByClassName('form-group')[divs.length-5].style.visibility = 'hidden';
    }
}