import React, { ChangeEvent } from 'react'

interface Props {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    muscleTypes: Array<string>
    chosenMuscleTypes: Record<string, boolean>
}

export const Parameters = ({ handleChange, muscleTypes, chosenMuscleTypes }: Props) => {
    return (
        <div className='parameters'>
            <h2>Choose muscle groups</h2>
            <div className='checkboxes'>
                    {muscleTypes.map((muscleType: string) => {
                        return <div>
                            <input type='checkbox' checked={chosenMuscleTypes[muscleType]} id={muscleType} name={muscleType} onChange={handleChange}></input>
                            <label>{muscleType}</label>
                        </div>
                    })}
            </div >
        </div>
    )
}
