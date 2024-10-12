const url = 'https://api.ipify.org/?format=json';

export const getIpv4 = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.ip; // Retourner l'adresse IP
    } catch (error) {
        throw new Error('Erreur lors de la récupération de l\'IP: ' + error.message);
    }
};