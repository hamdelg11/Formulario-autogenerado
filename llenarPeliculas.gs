/*

ID Sheets: 1YGo9rymkIGjzpYpjuFDiMzReZ_t4LSk8s7stnO1VQi4
ID Forms: 1t9Zs6DnCYHuHTSSk-HnFWHMUkZPZaU-0J9_QnT4lTnI
ID Pregunta: 1335766138

*/
function llenarPeliculas() {

  var sheets = SpreadsheetApp.openById("1YGo9rymkIGjzpYpjuFDiMzReZ_t4LSk8s7stnO1VQi4");
  var hoja= sheets.getSheetByName("Cine");
  var forms= FormApp.openById("1t9Zs6DnCYHuHTSSk-HnFWHMUkZPZaU-0J9_QnT4lTnI");
  var peliculas = hoja.getRange(2,1,hoja.getLastRow(),1).getValues();
  var horarios = hoja.getRange(2,2,hoja.getLastRow(),1).getValues();

  var opciones=[];
  var opciones2=[];

  peliculas.forEach(function(item){
    if(item[0]){
      opciones.push(item[0]);
      
    }

  })
  
 

  var pregunta = forms.getItemById("1335766138"); 
  
  pregunta.asMultipleChoiceItem().setChoiceValues(opciones);




}

/* Obtener el ID de las preguntas del Forms

  var preguntas = forms.getItems();

  preguntas.forEach(function(pregunta){
    Logger.log(pregunta.getTitle())
    Logger.log(pregunta.getId().toString())
  });


*/
