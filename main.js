 function ajouterTache() {
            const input = document.getElementById("taskInput");
            const tache = input.value;
            if (tache.trim() === "") {
                alert("Veuillez entrer une tâche valide.");
                return;
            }
            input.value = "";
            
            const liste = document.getElementById("listeTaches");
            const nouvelleTache = document.createElement("li");
            nouvelleTache.innerText = tache;
            
            const boutonModifier = document.createElement("i");
            boutonModifier.classList.add('bx','bx-edit');
            boutonModifier.onclick = function() {
                const nouvelleTacheTexte = prompt("Modifier la tâche", tache);
                if (nouvelleTacheTexte !== null) {
                    nouvelleTache.innerText = nouvelleTacheTexte;
                }
            };
            
            const boutonSupprimer = document.createElement("i");
           
           boutonSupprimer.classList.add('bx','bx-trash-alt');
            boutonSupprimer.onclick = function() {
                liste.removeChild(nouvelleTache);
            };
            
            nouvelleTache.appendChild(boutonModifier);
            nouvelleTache.appendChild(boutonSupprimer);
            
            liste.appendChild(nouvelleTache);
        }