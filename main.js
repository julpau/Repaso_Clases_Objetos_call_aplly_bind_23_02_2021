//Crear una funcion que revisa x cantidad de numeros enviados en this y mostrar el mayor de ellos.
//Si los numeros ingresados en this, es mayor o igual a 5, 
//realizar todas las operaciones matematicas basicas (Suma, resta, multiplicacion, division)


//const numeros = function(){
function numeros(){
    let datos = '';
    let mayor = 0;
    let suma = 0;
    let suma_txt = '';
    let producto = 1;
    let producto_txt = 1;
    let resta_adelante = 0;
    let resta_ad_txt = '';
    let resta_atras=0;
    let resta_at_txt = '';
    for (let i = 0; i < this.valores.length; i++) {
        datos += `${this.valores[i]} `;
        if (mayor < this.valores[i]) {
            mayor = this.valores[i];
        }
    }
    console.log(`Los numeros digitados son: ${datos} `);
    console.log(`El mayor de los números es ${mayor}`);
    if (this.valores.length > 4){
        for (let i = 0; i < this.valores.length; i++) {
            suma = suma + this.valores[i];
            producto = producto * this.valores[i];
            if (i==0){
                suma_txt = this.valores[i];
                producto_txt = this.valores[i];
                resta_ad_txt = this.valores[i];
                resta_adelante += this.valores[i];
                resta_atras -= this.valores[i];
            }else if (i==this.valores.length-1){
                suma_txt = suma_txt + ' + ' + this.valores[i];
                producto_txt = producto_txt + ' * ' + this.valores[i];
                resta_ad_txt = resta_ad_txt + ' - ' + this.valores[i];
                resta_adelante -= this.valores[i];
                resta_atras += this.valores[i];
            }else{
                suma_txt = suma_txt + ' + ' + this.valores[i];
                producto_txt = producto_txt + ' * ' + this.valores[i];
                resta_ad_txt = resta_ad_txt + ' - ' + this.valores[i];
                resta_adelante -= this.valores[i];
                resta_atras -= this.valores[i];
            }
        }
        for (let j = this.valores.length-1; j >= 0 ; j--) {
            if (j==this.valores.length-1){
                resta_at_txt = this.valores[j];
            }else if (j==0){
                resta_at_txt = resta_at_txt + ' - ' + this.valores[j];
            }else{
                resta_at_txt = resta_at_txt + ' - ' + this.valores[j];
            }
        }
        console.log(`La suma de ${suma_txt} es ${suma}`);
        console.log(`El producto de ${producto_txt} es ${producto}`);
        console.log(`El promedio de los números es ${producto/this.valores.length}`);
        console.log(`Resta del primero al último: ${resta_ad_txt} = ${resta_adelante}`);
        console.log(`Resta del último al primero: ${resta_at_txt} = ${resta_atras}`);
        console.log('');
    }else{
        console.log(`Solo se tienen ${this.valores.length} datos. Se necesitan 5 o más para realizar más operaciones`);
    }
}

const numbers1 = new Object ({
    valores : [200,50,30,40,15,20]
});
const numbers2 = new Object ({
    valores : [10,50,30,40,]
});

numeros.call(numbers1);
numeros.apply(numbers2);

/*
const saludar = function(p1, p2){
    let cadena = `Hola ${this.name} como estas te saluda ${this.maquina} ${this.mensaje} \n`;
    cadena += `Hola ${p1} como estas te saluda ${p2}`;
    console.log(cadena);
}
const data = new Object ({
    name : "Miguel",
    maquina : "Cortana",
    mensaje : ":V"
});
*/
//saludar.call(data, "Adrian", "Siri");

// const arg = ["Adrian", "Siri"];
// saludar.apply(data, arg);

// const mostrar = saludar.bind(data);

// mostrar("Adrian", "Siri");
// mostrar("Diana", "Ok Google");
