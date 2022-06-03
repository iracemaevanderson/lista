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
let btn = document.querySelector('.btn')



btn.addEventListener("click", function(){

    let password = document.querySelector('#password').value
    let senha = document.querySelector('#password1').value
    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value

    if(nome == "" && sobrenome == "" && email == "" && phone == "" && password == "" && senha == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Verifique os campos e preencha-os corretamente',
            showConfirmButton: false,
            timer: 3000
        })

    }else if(nome == "" || sobrenome == "" || email == "" || phone == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'É obrigatório o preenchimento de todos os campos!',
            showConfirmButton: false,
            timer: 3000
        })
    }else if(!email.includes('@') || !email.includes('.com')){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'E-mail inválido',
            showConfirmButton: false,
            timer: 3000
        })

    }else if(password != senha || password.legth < 6){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Senhas digitas são diferentes ou possuem menos de 6 caracteres',
            showConfirmButton: false,
            timer: 3000
        })
    }else{
        const newUserEmail = email
        const newUserPassword = password

        auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then().catch((error)=>{
            console.log(error)
        })

        setTimeout(()=>{

            auth.signOut().then(()=>{
                console.log("Ninguém logado")
            }).catch((error)=>{
                console.log(error)

            })

        },1500)

    }


})