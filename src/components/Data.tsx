import { SetStateAction, useEffect, useState } from "react"

interface DataProps {
    city: string,
    hasError?: boolean
}

export function Data({city, hasError = false}: DataProps) {

    const [temp, setTemp] = useState<number | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            const res = await getTemp({city, hasError}, setError)
            setTemp(res)
        }

        fetchData();
    }, [])

    if (error === true) return (
        <div>
            {city}: {"Something went wrong"}
        </div>
    )

    if (temp === null) return (
        <div>
            {city}: {"Loading..."}
        </div>
    )

    return (
        <div>
            {city}: {temp}
        </div>
    )
}

async function getTemp(props: DataProps, setError: React.Dispatch<SetStateAction<boolean>>) {

    const { city, hasError } = props

    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    const options = {
        method: 'GET', 
        headers: {Accept: 'application/json'},
    };

    try {

        if (hasError) {
            setError(true)
            throw new Error
        }
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Data: ", data);

        return data.data[0].app_temp
    } catch (error) {
        console.error(error);
    }

}