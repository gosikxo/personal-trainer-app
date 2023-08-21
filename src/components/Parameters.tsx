interface Props {
  handleChange: (checked: boolean, muscleType: string) => void
  muscleTypes: Array<string>
  chosenMuscleTypes: Record<string, boolean>
  toggleAll: () => void
  isChosenAll: boolean
}

export const Parameters = ({
  handleChange,
  muscleTypes,
  chosenMuscleTypes,
  toggleAll,
  isChosenAll,
}: Props) => {
  return (
    <div className="parameters">
      <div className="parameters__title">
        <h2>Choose muscle groups</h2>{" "}
        <button className="parameters__select-all" onClick={toggleAll}>
          {isChosenAll ? "Deselect all" : "Select all"}
        </button>
      </div>
      <div className="parameters__checkboxes">
        {muscleTypes.map((muscleType: string) => {
          return (
            <div className="parameters__checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={chosenMuscleTypes[muscleType] ?? false}
                  name={muscleType}
                  onChange={(e) => handleChange(e.target.checked, muscleType)}
                />
                {muscleType}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
