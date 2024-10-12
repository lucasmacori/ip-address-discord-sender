import fs from 'fs';

export const writeIpv4 = (ipv4) => {
    try {
        fs.writeFileSync('./ipv4', ipv4, 'utf8'); // Écrire l'IP dans le fichier
    } catch (error) {
        throw new Error('Erreur lors de l\'écriture de l\'IP: ' + error.message);
    }
}

export const readIpv4 = () => {
    const filePath = './ipv4'; // Chemin du fichier

    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
        return ''; // Retourner une chaîne vide si le fichier n'existe pas
    }

    try {
        const data = fs.readFileSync(filePath, 'utf8'); // Lire le fichier
        return data.trim(); // Retourner l'IP en enlevant les espaces superflus
    } catch (error) {
        throw new Error('Erreur lors de la lecture de l\'IP: ' + error.message);
    }
};