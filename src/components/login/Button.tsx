import "./Button.css"

type ButtonInput = {
  title: string
  state: string
}

export default function Button({ title, state }: ButtonInput) {
  return (
    <>
      {state === "loading" ? (
        <div className="wrap">
          <button type="button" disabled className="disabled-button">
            <div className="loader"></div>
            &nbsp;Loading...
          </button>
        </div>
      ) : (
        <div className="wrap">
          <button type="submit" className="button">
            {title}
          </button>
        </div>
      )}
    </>
  )
}
