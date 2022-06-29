const firebaseConfig = {
    apiKey: "AIzaSyAs3ifubNiT_cAbcgX4kTVUu2m_qAHr-T8",
    authDomain: "casamento-e6a52.firebaseapp.com",
    projectId: "casamento-e6a52",
    storageBucket: "casamento-e6a52.appspot.com",
    messagingSenderId: "486839233638",
    appId: "1:486839233638:web:57c8d3934a70259d8191a7",
    measurementId: "G-YDS0NCZGE4"
};

firebase.initializeApp(firebaseConfig)
let bd = firebase.firestore()
let auth = firebase.auth()


let itens = 
["Assadeira Redonda", "Assadeira Quadrada", "coador de café", "colher para sorvete", "Conj de bowls", "Conj de bowls Azul",
 "Conj colheres de servir","Conj de copos", "Conj de depósitos", "Conj de espátulas de silicone", "Conj de peneiras", "Conj de sobremesa",
 "Conj de sobremesa ", "Conj de toalhas", "Conj de toalhas ", "Conj de xícaras", "Cuscuzeira",
 "Forma de pudim", "Formas de bolos", "Frigideira", "Panela de pressão", "Fruteira", "Mantegueira", "Porta vinagre e azeite", "Pratos brancos fundo",
 "Pratos brancos raso", "Pratos transparentes","Ralador inox","Sanduicheira", "Tapetes para banheiro","Espatula de silicone","Ferro de passar roupa","MOP",
 "vidrinho para açúcar","vidrinhos de codimentos"
]



let conteiner = document.querySelector('.container')
let form = document.querySelector('.conteiner_form')

itens.forEach((item)=>{
    let squere = document.createElement('div')
    let btn = document.createElement('button')
    let nomes = document.createElement('h4')
    let disponibilidade = document.createElement('h4')
    let panelaRef = bd.collection("casamento").doc("disponibilidade")

    panelaRef.get().then((docItem)=>{
        disponibilidade.innerHTML = docItem.get(item)

        if(disponibilidade.innerHTML == "Disponível"){
            disponibilidade.style.color = "green"
        }else{
            disponibilidade.style.color = "red"
            btn.style.display = "none"
        }

    })
    squere.classList.add('squere')
    squere.innerHTML = `<div class="img"><img class="itens" src="../pictures/cha-de-panela/${item}.png"></div>`
    nomes.innerHTML = item
    btn.innerHTML = "Presentear"
    squere.appendChild(nomes)
    squere.appendChild(btn)
    squere.appendChild(disponibilidade)
    conteiner.appendChild(squere)

    btn.addEventListener('click', ()=>{
        let presente = document.getElementById('presente')
        let email = document.getElementById('email')
        presente.value = item
        presente.disabled = true
        email.value = auth.currentUser.email
        email.disabled = true

        if(window.screen.width <= 530){
            window.scroll(0,2800)
        }else if(window.screen.width >= 601 && window.screen.width <= 900){
            window.scroll(0,1300)
        }else if(window.screen.width >= 910 && window.screen.width <= 1024){
            window.scroll(0,3100)
        }else{
            window.scroll(0,2200)
        }
        
        form.style.display = "flex"
    })



})

function enviar_form(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let presente = document.getElementById('presente').value
    let tel = document.getElementById('tel').value

    if(nome == "" || sobrenome == ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Verifique os campos NOME e SOBRENOME e tente novamente!',
            showConfirmButton: false,
            timer: 4000
        })
    }else{
        bd.collection("casamento").doc(nome).set({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            presente: presente,
            telefone: tel
        })

        bd.collection("casamento").doc("disponibilidade").update(
            {[presente]: "Indisponível"}
        )

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Você escolheu o seu presente! Agradecemos pelo carinho',
            showConfirmButton: false,
            timer: 2000
        })
        
        setTimeout(()=>{
            window.location.href = "../html/panela.html"

        },2000)
    }

}

function fechar(){
    if(form.style.display = "flex"){
        form.style.display = "none"
    }

}