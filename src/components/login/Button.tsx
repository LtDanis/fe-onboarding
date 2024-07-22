import "./Button.css"

type ButtonInput = {
  title: string
}

export default function Button({ title }: ButtonInput) {
  return (
    <>
      <div className="wrap">
        <button type="submit" className="button">
          {title}
        </button>
      </div>
    </>
  )
}
