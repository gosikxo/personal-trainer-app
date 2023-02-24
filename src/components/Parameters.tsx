import React from 'react'

interface Props {
    handleClick: (exerciseClicked: string) => void,
}

export const Parameters = ({ handleClick }: Props) => {
    return (
        <div className='parameters'>
            <h2>Choose muscle groups</h2>
            <div className='checkboxes'>
                <div className='upperBody'>
                    <div>
                        <div className='upperAndLowerBody'>
                            <input type='checkbox' id="upper body" name="upper body" />
                            <label>upper body</label>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <input type='checkbox' id="abdominals" name="abdominals" onClick={() => {
                            handleClick("abdominals")
                        }} />
                        <label>abdominals</label>
                    </div>
                    <div>
                        <input type='checkbox' id="biceps" name="biceps" />
                        <label>biceps</label>
                    </div>
                    <div>
                        <input type='checkbox' id="chest" name="chest" />
                        <label>chest</label>
                    </div>
                    <div>
                        <input type='checkbox' id="forearms" name="forearms" />
                        <label>forearms</label>
                    </div>
                    <div>
                        <input type='checkbox' id="lats" name="lats" />
                        <label>lats</label>
                    </div>
                    <div>
                        <input type='checkbox' id="neck" name="neck" />
                        <label>neck</label>
                    </div>
                    <div>
                        <input type='checkbox' id="traps" name="traps" />
                        <label>traps</label>
                    </div>
                    <div>
                        <input type='checkbox' id="triceps" name="triceps" />
                        <label>triceps</label>
                    </div>
                </div>
                <br></br>
                <div className='lowerBody'>
                    <div className='upperAndLowerBody'>
                        <input type='checkbox' id="lower body" name="lower body" />
                        <label>lower body</label>
                    </div>
                    <br></br>
                    <div><input type='checkbox' id="abductors" name="abductors" />
                        <label>abductors</label>
                    </div>
                    <div><input type='checkbox' id="adductors" name="adductors" />
                        <label>adductors</label>
                    </div>
                    <div><input type='checkbox' id="calves" name="calves" />
                        <label>calves</label>
                    </div>
                    <div><input type='checkbox' id="glutes" name="glutes" />
                        <label>glutes</label>
                    </div>
                    <div><input type='checkbox' id="hamstrings" name="hamstrings" />
                        <label>hamstrings</label>
                    </div>
                    <div><input type='checkbox' id="quadriceps" name="quadriceps" />
                        <label>quadriceps</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
