export async function getDataBanksApi(){
    try {
        const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}