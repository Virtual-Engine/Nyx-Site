// URL de ton API
const apiUrl = 'http://localhost:3000/api/downloads';

async function getDownloadCount() {
    try {
        console.log("Début de l'appel à l'API");

        const response = await fetch(apiUrl);

        console.log("Statut de la réponse :", response.status);

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const responseText = await response.text();
        console.log("Réponse brute :", responseText);

        const data = JSON.parse(responseText);
        console.log("Données JSON :", data);

        if (data.downloads !== undefined) {
            document.getElementById('download-count').textContent = data.downloads;
        } else {
            throw new Error("Le champ 'downloads' est introuvable dans la réponse");
        }

    } catch (error) {
        console.error('Erreur lors de la récupération des téléchargements :', error);
        document.getElementById('download-count').textContent = 'Erreur de chargement';
    }
}
const downloadCount = data.data.downloads;