import React, {useState} from "react"
import { Title } from "@/components/Title"
import { Container } from "@/components/Container"
import data from "@/constants/MOCK_DATA.json"

export function ListGenerationAndFilter() {

    const [city, setCity] = useState<string>('San Diego')
    const [total, setTotal] = useState<string>("$0")
    const cities = [...new Set(data.map(item => item.city))]

    // const getTotalIncome = async () => {

    //     let tempTotal = 0

    //     data.forEach((row) => {

    //         if (row.city === city) {
    //             const removeDollar = row.income.replace('$', '')
    //             const numeric = parseFloat(removeDollar)
    //             tempTotal = tempTotal + numeric
    //         }
    //     })

    //     setTotal(`$${tempTotal}`)

    // }

    // Using reduce where acc starts at 0 and adds numeric to it
    const getTotalIncome2 = async () => {
        
        const totalIncome = data
            .filter((row) => row.city === city)
            .reduce((acc, row) => {
                const numeric = parseFloat(row.income.replace('$', ''))
                return acc + numeric
            }, 0)

            setTotal(`$${totalIncome}`)

    }

    return (
        <Container>

            {/* Problem Description */}
            <Title title={"List Generation and Filter"}/>

            {/* Solution */}
            <div className="grid grid-cols-3 font-semibold">
                <div className="underline">Name</div>
                <div className="underline">City</div>
                <div className="underline">Income</div>
            </div>
            {data.map((item) => (
                <div key={item.id} className="grid grid-cols-3 text-sm">
                    <p>{item.first_name}</p>
                    <p>{item.city}</p>
                    <p>{item.income}</p>
                </div>
            ))}
            
            <div className="border-t border-gray-200 pt-2 space-y-2">
            
                <div className="w-full text-center">Get Total Income for City</div>

                <div className="flex justify-between">
                    <select id="city" value={city} onChange={(e) => setCity(e.target.value)} className="p-2 mt-2 border items-center">
                        {cities.map((c, idx) => (
                            <option key={idx} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>

                    <button onClick={getTotalIncome2} className="border px-4 py-1 rounded-md hover:cursor-pointer hover:bg-gray-200">Get Total</button>
                </div>

                <div className="text-center">Total: {total}</div>
            </div>

            
        </Container>
    )
}