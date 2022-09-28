function teste() {
    var hoje = new Date();
    var dd = String(hoje.getDate()).padStart(2, '0');
    var mm = String(hoje.getMonth() + 1).padStart(2, '0');
    var yyyy = hoje.getFullYear();
    let aniversario = document.getElementById('DataNascimento').value;
    const ano = aniversario.split("-");
    console.log(hoje);
    if (ano[0] >= 2005){
        console.log("tem 18 não irmão");
    } else if (ano[0] == 2004){
        if (ano[1] == mm) {
            if (ano[2] > dd){
                console.log("tem 18 não irmão");
            } else {
                console.log("tem 18 irmão"); 
            }
        } else if (ano[1] > mm){
            console.log("tem 18 não irmão");
        } else {
            console.log("tem 18 irmão"); 
        }
    } else {
        console.log("tem 18 irmão"); 
    }
}




const ano = aniversario.split("-")
                if (ano[0] >= 2005){
                    alert('Você precisa ser maior de idade para se cadastrar')
                    return false;
                }

