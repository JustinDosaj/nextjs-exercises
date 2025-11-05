

export async function FetchAlbums(artist: string) {
    // const url = `https://www.theaudiodb.com/api/v2/json/search/artist/${artist}`;
    // const options = {
    //     method: 'GET', 
    //     body: undefined,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         //'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MUSIC_API_KEY}`
    //     }
    // };

    try {

        const data = {
            totalAlbums: 10,
            lastAlbumyear: 1996
        }

        return data
    } catch (error) {
        console.error(error);
    }
}