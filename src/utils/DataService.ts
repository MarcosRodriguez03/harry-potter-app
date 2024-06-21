let url = "https://potterhead-api.vercel.app";

export const FetchAllCharacter = async () => {
    const res = await fetch(url + `/api/characters`);
    const data = await res.json();
    return data;
}