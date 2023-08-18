
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
      <h2>Choose muscle groups</h2>{" "}
      <button style={{ width: 150 }} onClick={toggleAll}>
        {isChosenAll ? "Deselect all" : "Select all"}
      </button>
      <div className="checkboxes">
        {muscleTypes.map((muscleType: string) => {
          return (
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  style={{ verticalAlign: "middle" }}
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
