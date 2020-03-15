import bd from '../../bd.json';
export function sendDataToFirestore(saved, e, item, func, closest, className){
    const id = e.target.closest(closest).id;
    const category = bd[item.category];
    const obj = category.find(el => el.article === id);
    let result;
    let rootCard = document.getElementById(id);
    let button = rootCard.getElementsByClassName('save-button')[0];
    let svg = button.getElementsByTagName('svg')[0];
    
    if(e.target.className === className) {
        if(saved.includes(obj)){
            let index =  saved.indexOf(obj);
            saved.splice(index, 1);
            result = saved;
            svg.classList.remove('svg-fill-selected')
        }else {
            svg.classList.add('svg-fill-selected')
            result = [...saved, obj];
        }
        return func(result);
    }
}

export function doSaved(array) {
    console.log(array)
}