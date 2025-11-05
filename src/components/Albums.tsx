import { FetchAlbums } from "@/utils/fetchAlbums"
import { use } from "react"

interface AlbumProps {
    artist: string
}

export function Albums(props: AlbumProps) {

    const { artist } = props

    const artistInfo = use(FetchAlbums(artist))

    //console.log("Artist Info: ", artistInfo)

    return (
        <></>
    )
}