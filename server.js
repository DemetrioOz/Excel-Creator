const Generate = require("./generate");
const generate = new Generate();

const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet");

const data = [];

for (let i = 0; i < 1000; i++) {
  const person = generate.generatePerson();
  data.push(person);
}

const headingColumnNames = [
  "cpf",
  "nome",
  "nome Mae",
  "nome Pai",
  "Ano de nascimento",
  "email",
  "telefone",
  "matricula",
  "agencia",
  "conta",
];

let headingColumnIndex = 1; //diz que começará na primeira linha
headingColumnNames.forEach((heading) => {
  //passa por todos itens do array
  // cria uma célula do tipo string para cada título
  ws.cell(1, headingColumnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach((record) => {
  let columnIndex = 1;
  Object.keys(record).forEach((columnName) => {
    ws.cell(rowIndex, columnIndex++).string(record[columnName]);
  });
  rowIndex++;
});

wb.write("PlanilhaClientes.xlsx");
