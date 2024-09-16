const body = document.querySelector('body')
const text = document.createElement('h1')
const btn = document.createElement('button')
const inputText = document.createElement('input')
const btnUpSize = document.createElement('button')
const btnDownSize = document.createElement('button')
const btnCapuchon = document.createElement('button')
const inputColor = document.createElement('input')
let size = 36

body.appendChild(text)
body.appendChild(btn)
body.appendChild(inputText)
body.appendChild(btnUpSize)
body.appendChild(btnDownSize)
body.appendChild(btnCapuchon)
body.appendChild(inputColor)

// btn.classList.add('same-class')
// inputText.classList.add('same-class')
// btnUpSize.classList.add('same-class')
// btnDownSize.classList.add('same-class')
// btnCapuchon.classList.add('same-class')
// inputColor.classList.add('same-class')

text.textContent = '[Change]'
btn.textContent = 'Change ta font'
inputText.placeholder = 'Change le texte'
btnUpSize.textContent = 'Augmente la taille du texte'
btnDownSize.textContent = 'Baisse la taille du texte'
btnCapuchon.textContent = 'Enleve / met le capuchon du stylo'
inputColor.type = 'color'

let police = ['Arial', 'Impact', 'cursive'];

function Stylo(){
    this.capuchon = false
    this.couleur = function(color){
        text.style.color = color
    }

    btn.addEventListener('click', () => {
        let rdmPolice = Math.floor(Math.random() * police.length);
        text.style.fontFamily = police[rdmPolice]
        if(this.capuchon === false){
            text.style.fontFamily = "Inter"
            alert("Le capuchon n'est pas retirer")
        }
    })

    inputText.addEventListener('keyup', () => {
        text.textContent = inputText.value
        if(this.capuchon === false){
            text.textContent = '[Change]'
            alert("Le capuchon n'est pas retirer")
        }
    })

    btnUpSize.addEventListener('click', () => {
        size++
        text.style.fontSize = size
        console.log('augmente ' + size)
        if(this.capuchon === false){
            size = 36
            alert("Le capuchon n'est pas retirer")
        }
    })

    btnDownSize.addEventListener('click', () => {
        size--
        text.style.fontSize = size
        if(size <= 36){
            size = 36
        }
        console.log('baisse ' + size)
        if(this.capuchon === false){
            size = 36
            alert("Le capuchon n'est pas retirer")
        }
    })

    btnCapuchon.addEventListener('click', () => {
        this.capuchon = !this.capuchon
        if(this.capuchon) {
            btnCapuchon.textContent = 'Capuchon enlever'
        } else {
            btnCapuchon.textContent = 'Capuchon mis'
        }
    })

    inputColor.addEventListener('input', () => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`input::placeholder { color: ${inputColor.value}; }`, styleSheet.cssRules.length);

        const styleSheet1 = document.styleSheets[0]
        styleSheet1.insertRule(`text-shadow { 0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value}; }`, styleSheet1.cssRules.length);

        text.style.color = inputColor.value
        // text.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        btn.style.borderColor = inputColor.value
        btn.style.color = inputColor.value
        // btn.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        inputText.style.color = inputColor.value
        inputText.style.borderColor = inputColor.value
        // inputText.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        btnUpSize.style.borderColor = inputColor.value
        btnUpSize.style.color = inputColor.value
        // btnUpSize.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        btnDownSize.style.color = inputColor.value
        btnDownSize.style.borderColor = inputColor.value
        // btnDownSize.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        btnCapuchon.style.borderColor = inputColor.value
        btnCapuchon.style.color = inputColor.value
        // btnCapuchon.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`

        inputColor.style.borderColor = inputColor.value
        inputColor.style.color = inputColor.value
        // inputColor.style.textShadow = `0 0 1px ${inputColor.value}, 0 0 0px ${inputColor.value}, 0 0 1px ${inputColor.value}, 0 0 2px ${inputColor.value}, 0 0 8px ${inputColor.value}, 0 0 4px ${inputColor.value}, 0 0 12px ${inputColor.value}, 0 0 30px ${inputColor.value};`
    })
}

let pen = new Stylo()
pen.couleur('#9f6ca5')

// let bic = new Stylo();
// bic.couleur('cyan')