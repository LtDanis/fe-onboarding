import "./Button.css"

type ButtonInput = {
  title: string
  isLoading: boolean
}

export default function Button({ title, isLoading }: ButtonInput) {
  return (
    <>
      {isLoading ? (
        <div className="wrap">
          <button type="button" disabled className="disabled-button">
            <div className="loader"></div>
            &nbsp;Loading...
          </button>
        </div>
      ) : (
        <div className="wrap">
          <button type="submit" className="submit-button">
            {title}
          </button>
        </div>
      )}
    </>
  )
}
