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
let auth = firebase.auth()
let user = document.querySelector('.user')



setTimeout(()=>{
    let uidUser = auth.currentUser.email
    console.log(uidUser)

    user.innerHTML = `Ativo no momento: <br> ${uidUser}`
},1000)



function sair(){


    auth.signOut().then(()=>{
        window.location.href = "../index.html"

    }).catch((erro)=>{
        console.log(erro)

    })

}

function cafe(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este Evento foi finalizado, por gentileza, siga para área de casamento ou ofertas!',
    })
}

function panela(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este Evento foi finalizado, por gentileza, siga para área de casamento ou ofertas!',
    })
}