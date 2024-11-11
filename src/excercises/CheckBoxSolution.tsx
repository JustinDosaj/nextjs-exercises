/**
 * PROBLEM NAME: Select All Checkboxes
 * 
 * DESCRIPTION: Given a Select All checkbox - toggle the children's checkboxes 
 * in such a way that when the select all button is clicked, all the boxes are checked. 
 * Similarly, when the button is toggled, the checkboxes become unchecked.
 * 
 * INSTRUCTIONS:
 * 1. Create a Checkbox component that takes in checked, onChange and label as props.
 * 2. A select all checkbox should be there that toggles the state of all the children checkboxes.
 * 3. If any one of the checkboxes is NOT selected, the select all checkbox should be unchecked.
 * 4. If all the checkboxes are selected, the select all checkbox should be checked.
 * 5. Loop through the given listItems array that follows the following structure.
 * 
 */

import React, { useState, useEffect } from "react"
import { Problem } from "@/components/Problem"
import { CheckBoxProblem } from "@/constants/problem-desc"
import { Container } from "@/components/Container"
import { CheckBoxlist } from "@/constants/problem-constants"

interface Item {
    id: number;
    name: string;
    checked?: boolean;
}


export function CheckBoxSolution() {

    const [checkCount, setCheckCount] = useState<number>(0)
    const [selectAll, setSelectAll] = useState(false)
    const [itemList, setItemList] = useState<Item[]>(
        CheckBoxlist.map((item: Item) => {
            return {
                ...item,
                checked: false
            }
        })
    )

    console.log(checkCount)

    const onSingleSelect = (item: Item) => {
        const updatedItems = itemList.map((i: Item) => {
            if(item.name === i.name) {

                // If checked goes true --> false then selectAll can never be valid so set it to false
                // Prevent useless re-renders of selectAll by checking if selectAll is already false
                // Probably a more efficient way to do this but it works for now
                if (!item.checked == false && selectAll !== false) {
                    setSelectAll(false)
                }

                // If checked is true --> it will be switched to false so decrement checkCount
                // Else if checked if false --> it will be switched to true so increment checkCount
                if (i.checked == true) { setCheckCount(checkCount - 1) }
                else { setCheckCount(checkCount + 1) }

                return {
                    ...i, checked: !i.checked,
                }
            }

            return i;
        })

        setItemList(updatedItems)
    }

    const selectAllClick = async () => {


        // Switching from true to false so set checkCount to 0
        if (selectAll == true) {
            setCheckCount(0)
        }

        // Toggle select all to be opposite of current value
        setSelectAll(!selectAll)

        if(selectAll == false) {
            const selectAllList = itemList.map((el: Item) => {
                return {...el, checked: true}
            })

            setItemList(selectAllList)
            setCheckCount(CheckBoxlist.length) // Selecting all to update checkCount to length of list

        } else if (selectAll == true) {
            const selectAllList = itemList.map((el: Item) => {
                return {...el, checked: false}
            })

            setItemList(selectAllList)
            setCheckCount(0) // Deselecting all so reset checkCount to 0
        }
    }

    useEffect(() => {
        if (checkCount == CheckBoxlist.length) {
            setSelectAll(true)
        }
    }, [checkCount])

    return (
        <Container>

            {/* Problem Description */}
            <Problem problem={CheckBoxProblem}/>

            {/* Solution */}
            <div className="grid justify-center space-y-1">
                {itemList.map((item: Item) => (
                    <div key={item.id} className="inline-flex items-center">
                        <input 
                            type="checkbox"
                            checked={item?.checked}
                            onChange={() => onSingleSelect(item)}
                        />
                        <label>{item.name}</label>
                    </div>
                ))}
                <div className="inline-flex items-center">
                    <input 
                        type="checkbox"
                        checked={selectAll}
                        onChange={selectAllClick}
                    />
                    <label>Select All</label>
                </div>
            </div>
            
        </Container>
    )
}