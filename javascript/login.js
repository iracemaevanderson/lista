// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


auth.signOut().then().catch((error)=>{
    console.log(error)
})


function entrar(){

    const userEmail = document.querySelector('#email').value
    const userPassword = document.querySelector('#password').value


    auth.signInWithEmailAndPassword(userEmail, userPassword).then(()=>{

        window.location.href = "./html/home.html"

    }).catch(()=>{
        Swal.fire({
            icon: 'error',
            title: 'Falha!',
            text: 'E-mail ou senha incorretas!',
        })
    })
}