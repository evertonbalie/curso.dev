
const calculadora = require("../../models/calculadora");


test("soma 2+2 = 4" ,()=>{
  
const resultado = calculadora.somar(2, 2);
expect(resultado).toBe(4);
}

);

test("soma 5+100 =105",()=>{
const resultado = calculadora.somar(5,100);
expect(resultado).toBe(105);

});

test("banana+5 retorna erro", ()=>{

  const resultado = calculadora.somar("banana", 5);

expect(resultado).toBe("erro")



});