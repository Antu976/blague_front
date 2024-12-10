
document.getElementById('ajouter-blague').addEventListener('submit',async (e) => { e.preventDefault(); 

    const blague = document.getElementById("input-blague").value;
    const reponse = document.getElementById("input-reponse").value;
fetch("https://blague-api.onrender.com/blagues/add", {
    method: "POST",
    headers: {
        'content-Type': 'application/json'
    },
    body :JSON.stringify({blague, reponse})
})
});


document.getElementById('btn-toutes-les-blagues').addEventListener('click', async () => {
    const response = await fetch('https://blague-api.onrender.com/blagues');
    const blagues = await response.json();

    const listeBlagues = document.getElementById('liste-blagues');
    listeBlagues.innerHTML = '';
    blagues.forEach(blague => {
        const li = document.createElement('li');
        li.textContent = blague.texte;
        listeBlagues.appendChild(li);
      });
    });


    document.getElementById('btn-rechercher-blague').addEventListener('click', async () => {
        const id = document.getElementById('input-id-blague').value;
      
        const response = await fetch(`https://blague-api.onrender.com/blagues/${id}`);
        
          const blague = await response.json();
          document.getElementById('resultat-blague').textContent = blague.texte;
      });
      