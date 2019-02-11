var signCells = document.getElementsByTagName('td');
let output = [];
for (let index = 0; index < signCells.length; index++) {
    const element = signCells[index];

    const images = element.getElementsByTagName('img');
    if(images.length > 0){
        let image = images[0].src;
        const data = {
            img: image,
            text: element.textContent
        }
        output.push(data);    
    }
}
console.log(JSON.stringify(output));