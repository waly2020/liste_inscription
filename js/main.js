class Eleves {
    /**
     * cree une class eleve
     * @param {string} nom nom de l'eleve
     * @param {string} prenom prenom de l'eleve
     * @param {string} sexe sexe de l'eleve
     * @param {string} classe classe de l'eleve
     * @param {string} date date de naissance
     * @param {string} lieux lieux de naissance
     * @param {string} pNom nom du parent
     * @param {string} pPrenom nom du parent
     * @param {number} pNum numero de telephone du parent
     */
    constructor(nom = "pierre", prenom = "jb", sexe = "Homme", classe = "CM2", date = "18-05-2020", lieux = "libreville", pNom = "danny", pPrenom = "henry", pNum = "0700000") {
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.classe = classe;
        this.date = date;
        this.lieux = lieux;
        this.pNom = pNom;
        this.pPrenom = pPrenom;
        this.pNum = pNum;
        this.id = 0;
    }
}

let storageArray = JSON.parse(localStorage.getItem("eleve")) ?? [];
let cpt = storageArray.length;
let eleves = [...storageArray];

sendBtn.addEventListener("click", () => {
    if (canSend != false) {
        addDataInTable();
    }
})

/**
 * ajoute les donnee du champs dans le tablau eleves
 */
function addDataInTable() {
    cpt += 1;
    let eleve = new Eleves();
    eleve.id = cpt;
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        eleve[`${input.getAttribute("data-input")}`] = input.value;
    }
    eleves.push(eleve);
    addHtml(eleve);
    addDataInLocalStorege();
    inputs.forEach(input => {
        input.value = input.defaultValue ?? input.innerText;
    })
    canSend = false;
    sendBtn.classList.remove("active");
}

function addDataInLocalStorege() {
    localStorage.setItem("eleve", JSON.stringify(eleves));
}


function addElevesInTable() {
    eleves.forEach(eleve => {
        addHtml(eleve);
    })
}

/**
 * 
 * @param {Eleves} eleves 
 */
function addHtml(eleves) {
    liste.innerHTML += `
    <tr>
      <th scope="row">${eleves.id}</th>
      <td>${eleves.nom}</td>
      <td>${eleves.prenom}</td>
      <td>${eleves.sexe}</td>
      <td>${eleves.lieux}</td>
      <td>${eleves.classe}</td>
      <td>${eleves.pNom}</td>
      <td>${eleves.pPrenom}</td>
      <td>${eleves.pNum}</td>
    </tr>
    `;
}
addElevesInTable();