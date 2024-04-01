(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const userEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(userEmails);

  //Lista de compras de un carrito
  const shoppingCart: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shoppingCart);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree  = (asdfg: number): number => {
    return asdfg + 3;
  }

  console.log(addThree (2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let isEventOccurred : boolean = false;

  if(isEventOccurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let isUserAccessAllowed: boolean = true;

  if(isUserAccessAllowed) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  //variable que almacena el valor de PI
  let pi: number = 3.141592654;

  console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let isFileModifiable: boolean = false;

  if(isFileModifiable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const e: number = 2.718281828; 

  console.log(e);


})();