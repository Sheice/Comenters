// get variable
const doComenter = document.getElementById('textarea');
const containerComenter = document.getElementById('start-new-comenter');
const btnPost = document.getElementById('btn');
const countComentersNew = document.querySelectorAll('.comenter')


const fragment = document.createDocumentFragment();

// add comenter




const addComenter=()=>{
    if(doComenter.value.length >= 1){

        const divComenter = document.createElement('div');
        divComenter.setAttribute('class', 'comenter')
        const divContainerImgAndName = document.createElement('div');
        divContainerImgAndName.setAttribute('class', 'container-img-name')
        divComenter.append(divContainerImgAndName);
    
        const containerImg = document.createElement('div');
        containerImg.setAttribute('class', 'container-new-comenter-img');
        divContainerImgAndName.append(containerImg);
    
        const img = document.createElement('img');
        img.setAttribute('alt', "")
        containerImg.append(img);
    
        const containerName = document.createElement('div');
        containerName.setAttribute('class', 'container-new-comenter-name');
        divContainerImgAndName.append(containerName);
    
        const name =document.createElement('h3');
        name.setAttribute('class', 'name-c');
        name.textContent = "Anonimus";
        containerName.append(name);
    
        const printComenter = document.createElement('div');
        printComenter.setAttribute('class', 'new-comenter');
        const pOfComenter = document.createElement('p');
        pOfComenter.textContent = doComenter.value;
    
        
        printComenter.append(pOfComenter);
    
        divComenter.append(printComenter)
    
        fragment.append(divComenter);
    
        containerComenter.append(fragment);
    
        doComenter.value = "";

        document.querySelector('.error').style.display = 'none';
        
    }else{

        document.querySelector('.error').style.display = 'block';
    }
    

    
}

btnPost.addEventListener('click', addComenter);