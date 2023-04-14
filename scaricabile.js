/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}
//! questo TODO non può essere soddisfatto.
- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//* Search in JOBS (obj) by LOCATION and POSITION

function search(loc, pos, max) {
  // reset the array for each new search
  if (document.getElementsByTagName("li").length > 0) {
    document.getElementsByClassName("my-results")[0].innerHTML = "";
  }

  let result = [];
  loc = loc.toLowerCase();
  pos = pos.toLowerCase();

  // loop through the array of jobs and push results to result array
  for (let i = 0; i < jobs.length; i++) {
    if (
      jobs[i].location.toLowerCase().includes(loc) &&
      jobs[i].title.toLowerCase().includes(pos)
    ) {
      result.push(jobs[i]);
    }
  }

  //// console.log(result);

  // insert result counter in document:
  let count = result.length;
  if (count > document.getElementById("myMax").value) {
    document.getElementsByClassName("my-results")[0].innerHTML =
      "<div class='my-result-count'>Result(s): " +
      document.getElementById("myMax").value +
      " of " +
      count +
      "</div>";
  } else {
    document.getElementsByClassName("my-results")[0].innerHTML =
      "<div class='my-result-count'>Result(s): " +
      count +
      " of " +
      count +
      "</div>";
  }

  // loop through result array
  for (let i = 0; i < result.length && i < max; i++) {
    // create a 'li' node:
    let myLi = document.createElement("li");

    // insert result[i] into li node:
    myLi.innerHTML =
      "<hr><a class = 'my-result-item' href = '#'><span class = 'my-title'>" +
      result[i].title +
      "</span>" +
      "<span class = 'my-at'> @ </span>" +
      "<span class = 'my-location'>" +
      result[i].location +
      "</span></a>";

    // append li node to ul:
    document.getElementsByClassName("my-results")[0].appendChild(myLi);
  }

  // add footer more results button if results shown are more than max
  let moreResults = result.length - document.getElementById("myMax").value;

  if (
    result.length > document.getElementById("myMax").value &&
    document.getElementsByTagName("li").length < 36
  ) {
    document.getElementsByClassName("my-results")[0].innerHTML +=
      "<hr><div class = 'more-results' onclick = 'moreResults()'>Show more " +
      moreResults +
      " result(s)...</div>";
  }

  // ADD NO RESULTS MESSAGE IF:
  // max is setted BUT no result
  if (result.length == 0 && max !== 0) {
    document.getElementsByClassName("my-results")[0].innerHTML =
      "<p class ='my-no-results'>No results found for";

    // if title is setted
    if (document.getElementById("myTitle").value) {
      document.getElementsByClassName("my-no-results")[0].innerHTML +=
        " a job called <strong>" +
        document.getElementById("myTitle").value +
        "</strong>";
    }

    // if title and location are setted -> add "or"
    if (
      document.getElementById("myTitle").value &&
      document.getElementById("myLocation").value
    ) {
      document.getElementsByClassName("my-no-results")[0].innerHTML += " or";
    }

    // if location is setted
    if (document.getElementById("myLocation").value) {
      document.getElementsByClassName("my-no-results")[0].innerHTML +=
        " a place named <strong>" +
        document.getElementById("myLocation").value +
        "</strong>!</p>";
    }
  }

  //set max value if is bigger than result length
  if (document.getElementById("myMax").value > result.length) {
    document.getElementById("myMax").value = result.length;
  }

  // result found BUT max is not setted
  if (result.length !== 0 && max == 0) {
    document.getElementsByClassName("my-results")[0].innerHTML =
      "<p class ='my-no-results'>You have set <strong>0 results</strong> to show, increase the amount in the search bar!</p>";
  }

  // no result AND max is not setted
  if (result.length == 0 && max == 0) {
    document.getElementsByClassName("my-results")[0].innerHTML =
      "<p class ='my-no-results'>No results found for a job called <strong>" +
      document.getElementById("myTitle").value +
      "</strong> or a place named <strong>" +
      document.getElementById("myLocation").value +
      "</strong>!<br>Also, you have set <strong>0 results</strong> to show, increase the amount in the search bar!</p>";
  }

  // if all results are shown, change result counter message:
  if (document.getElementsByTagName("li").length == result.length) {
    document.getElementsByClassName("more-results")[0].innerText =
      "All results are shown.";

    document
      .getElementsByClassName("more-results")[0]
      .removeAttribute("onclick");

    document
      .getElementsByClassName("more-results")[0]
      .classList.add("more-results-no-hover");
    document
      .getElementsByClassName("more-results")[0]
      .classList.remove("more-results");

    document.getElementById("myMax").value = result.length;

    document.getElementsByClassName("my-result-count")[0].innerText =
      "Result(s): " + document.getElementById("myMax").value + " of " + count;
  }

  return result;
}

// add more results button
function moreResults() {
  if (
    !document.getElementById("myTitle").value &&
    !document.getElementById("myLocation").value &&
    document.getElementById("myMax").value
  ) {
    document.getElementById("myMax").value = 36;
  }
  search(
    document.getElementById("myLocation").value,
    document.getElementById("myTitle").value,
    36
  );

  document.getElementsByClassName("myMax").value = result.length;
}
