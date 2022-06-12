import { stringReverse } from "../lib";

stringReverse('Hello world').then(r=>{
    document.querySelector("body").innerHTML = `<h1>${r}</h1>`;
})