//Dados
const proffys = [
  {
    name: "Arthur Arruda", 
    avatar:"https://avatars0.githubusercontent.com/u/62748391?s=460&u=2da2a7613c978f61d841643d4210776da04a5d17&v=4", 
    whatsapp:"9823151345", 
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"20", 
    weekday:[0], 
    time_from:[720], 
    time_to:[1220],
  },
  {
    name: "Raquel Torres", 
    avatar:"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/90630422_582444495687462_3262704986244513792_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=NKVmYMjCQJMAX-Dtn4b&_nc_ht=scontent-frx5-1.xx&_nc_tp=6&oh=2daf6ce236e3f79490722ce49d3f77e2&oe=5F4FE883", 
    whatsapp:"9823151345", 
    bio:"As vezes não sei nem onde estou, mas consigo me localizar facilmente<br>em qualquer lugar. Tenho memória fotografica e nunca fico perdida.<br><br>Eu ensino a galera como não se perder na vida, com lições de geografia simples    para você nunca mais precisar de um mapa na sua bela vida.", 
    subject:"Geografia", 
    cost:"30", 
    weekday:[1], 
    time_from:[720], 
    time_to:[1220],
  }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//funcionalidades
function getSubject(subjectNumber){
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render( "index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query
  
  const isNotEmpty = Object.keys(data).length != 0
  //se tiver os dados:
  //adicionar dados a lista de objeto proffys
  //console.log(date)
  if(isNotEmpty){
    data.subject = getSubject(data.subject)
    proffys.push(data)

    return res.redirect('/study')
  }
  //se não, mostrar a pagina 
  return res.render("give-classes.html", { subjects, weekdays })
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
//inicio e configuração do servidor
server
//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static('public'))
//rotas da aplicação 
.get('/', pageLanding) 
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
//start no servidor
.listen(5500)