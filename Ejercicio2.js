// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)


const Persona = {
    nombre:"Leo",
    edad:33,
    isprogram:true,
    fechanac:"01/11/1989",
     libro : {
        titulo:"El Alquimista",
        autor:"Paulo Cohelo",
        fecha:"02/05/2007",
        url:"https://www.google.com/search?q=libro+de+paulo+coelho&sxsrf=APwXEddENPcYTKOV7J9k3RCywGBInUIHnA%3A1681861177399&ei=OSo_ZJntF83T1sQP5aOKKA&oq=libro+de+paulo+coelo&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgwIABCABBAKEEYQ-wEyBwguEIoFEEMyBwgAEIAEEAoyBwgAEIAEEAoyBwguEIAEEAoyBwgAEIAEEAoyBwgAEIAEEAoyBwguEIAEEAoyBwgAEIAEEAoyBwguEIAEEAo6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6EgguENQCEIoFEMgDELADEEMYAjoPCC4QigUQyAMQsAMQQxgCOgQIIxAnOgoILhDHARCvARAnOgsIABCABBCxAxCDAToOCC4QgwEQ1AIQsQMQgAQ6DgguEIAEELEDEIMBENQCOgUILhCABDoKCC4QxwEQ0QMQJzoHCAAQigUQQzoLCC4QgAQQxwEQ0QM6CAguEIAEELEDOhMILhDHARDRAxDcBBDeBBDgBBgDOg4ILhDHARCxAxDRAxCABDoLCAAQigUQsQMQgwE6CAgAEIAEELEDOgUIABCABDoSCC4QigUQQxDcBBDeBBDgBBgDOgsILhCABBDHARCvAToICC4QgAQQ1AI6CggAEIAEEEYQ-wFKBAhBGABQjA1Y4yZg0cUDaANwAXgAgAGnAYgBuRKSAQQxLjE5mAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI2gEGCAMQARgU&sclient=gws-wiz-serp"
    }
};

console.log(Persona);