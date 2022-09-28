let buttons = document.querySelectorAll('[data-modal-control]')

let modal = document.querySelector('.modal')
let modalWrapper = document.querySelector('.modal-wrapper')

function showModal(buttons){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            modal.innerHTML = ''
            let valueData = buttons[i].getAttribute("data-modal-control")
            document.getElementById(valueData).classList.toggle("show-modal") 
            let elemento = event.target
            let idElemento = elemento.id 
            let id = parseInt(idElemento)
            let obj = procurarId(id)
            showPost(obj)
        })
    }
}


function procurarId(id){
    for(let j = 0; j < posts.length; j++){
        let postsModal = posts[j]
        if (postsModal.id_post == id){
            return postsModal
        }
    }
}

showModal(buttons)


function showPost(obj){
    let title = obj.title
    let text = obj.text
    let name = obj.user
    let stack = obj.stack
    let imgsrc = obj.img 

    let div1 = document.createElement('div')
    let div    = document.createElement('div')
    let img    = document.createElement('img')
    let div2   = document.createElement('div')
    let h2     = document.createElement('h2')
    let span   = document.createElement('span')
    let div3   = document.createElement('div')
    let p      = document.createElement('p')
    let p2     = document.createElement('p')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let button = document.createElement('button')


    div.classList = 'flex gap'
    img.classList = 'img'
    h2.classList = 'title'
    span.classList = 'span'
    p.classList = 'paragraph-big'
    p2.classList = 'span'
    div3.classList = 'flex align-items'
    button.classList = 'fecha'
    /* div1.classList = 'flex justify-content' */

    img.src = imgsrc
    img.alt = name
    h2.innerText = name
    span.innerText = stack
    p.innerText = title
    p2.innerText = text
    button.innerText = 'X'
    


    div4.append(h2, span)
    div.append(img, div4)
    div1.append(div,button, p, p2)
    modal.append(div1)

    fecharModal()
}

function fecharModal(){
    let buton = document.querySelector('.fecha').addEventListener('click', (event)=>{
        modalWrapper.style.display = 'none'
    })

}
