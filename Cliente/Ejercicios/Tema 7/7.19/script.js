let div = document.getElementsByTagName('div')

document.addEventListener("keypress", (event)=>{
    let tecla = event.key
    if(div[0].firstElementChild != null){
        console.log("hola")
        let lastImg = document.getElementsByTagName('img')
        lastImg[0].remove()
    }
    let img = document.createElement('img')
    div[0].appendChild(img)
    switch(tecla){
        case "0":
            img.setAttribute('src', 'https://images.photowall.com/products/65874/baby-monkey.jpg?h=699&q=85')
            break;
        case "1":
            img.setAttribute('src', 'https://media.npr.org/assets/img/2015/09/23/ap_836720500193-d90a20e2b8d735f74d436f36054eb3dc2bd96696.jpg?s=1100&c=85&f=jpeg')
            break;
        case "2":
            img.setAttribute('src', 'https://pasa.org/wp-content/uploads/2021/06/Vervet-Monkey-Foundation-credit-Kyle-.jpg')
            break;
        case "3":
            img.setAttribute('src', 'https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920')
            break;
        case "4":
            img.setAttribute('src', 'https://hakaimagazine.com/wp-content/uploads/header-proboscis-monkeys.jpg')
            break;
        case "5":
            img.setAttribute('src', 'https://t4.ftcdn.net/jpg/01/66/10/03/360_F_166100342_KbTGIRrnrlwGDZSXSMpH3zfn2dxyTKae.jpg')
            break;
        case "6":
            img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkibA29l0PfV7XR5tdnTwC_fSMRPhkopW4nA&s')
            break;
        case "7":
            img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJlnCIaQiBp6np7-vHpykiuETFyjNsPzXwQ&s')
            break;
        case "8":
            img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg')
            break; 
        case "9":
            img.setAttribute('src', 'https://media.istockphoto.com/id/629628952/photo/bonnet-monkey.jpg?s=612x612&w=0&k=20&c=UlCED-gnWw3fgiYQxIGEf-Fqbn-H0nJ0aH9rfj-12ac=')
            break; 
    }
})

