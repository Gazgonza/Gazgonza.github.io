

function ocultar(){
  document.getElementById('otros').style.display = 'none';
  document.getElementById('botonO').style.display = 'block'; 
  }

  function mostrar(){
    document.getElementById('otros').style.display = 'block';
    document.getElementById('botonO').style.display = 'none';
    document.getElementsByClassName("otros")[0].className = "otrosa";
    }