//procurar o botão
document.querySelector('#add-time')

//quando clicar no botão 
.addEventListener('click', cloneField) //o evento addEventListener vai escutar ele pede duas funcionalidades: o tipo do evento e a ação(é preciso apelidar a ação) 

//executar uma ação
function cloneField(){
  
  
  //uplicar os campos, que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  //antes e colocar um novo schedule limpar o campo
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo limpar
  fields.forEach(function (field){
    //pegar o field do momento
    field.value = ''
  })
  //colocar na pagina... mas onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

