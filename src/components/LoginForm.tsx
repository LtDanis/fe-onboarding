import './LoginForm.css'

export default function LoginForm() {
    return (
        <>
            <form action="">
                <label htmlFor="username">
                    Username:
                </label>
                <input type="text"
                       id="username"
                       name="username"
                       placeholder="Enter your Username" required/>

                <label htmlFor="password">
                    Password:
                </label>
                <input type="password"
                       id="password"
                       name="password"
                       placeholder="Enter your Password" required/>

                <div className="wrap">
                    <button type="submit"
                            // onClick="solve()">
                        >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}