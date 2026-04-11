

test("GET /API/v1/status should return 200", async ()=>{

const response = await fetch ("http://localhost:3000/api/v1/status");
/* console.log(response);
 */
expect(response.status).toBe(200);
/* const response = fetch("http://localhost:3000/api/v1/status/status");
console.log(response);

expect(response.status).toBe(200); */


const responseBody = await response.json();
expect(responseBody.update_at).toBeDefined();
/* console.log(responseBody.update_at);
console.log(responseBody.versao);
console.log(responseBody.maxima_conexao);
console.log(responseBody.conexao_ativas) */

console.log(responseBody);

expect(responseBody.dependencies.database.version).toEqual("16.0");
expect(responseBody.dependencies.database.maxima_conexao).toEqual(100);
expect(responseBody.dependencies.database.conexao_ativas).toEqual(1);


});