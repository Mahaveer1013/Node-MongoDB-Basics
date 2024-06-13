import { Link } from "react-router-dom"

export default function Login({ type }) {
    
    function SelectLoginType() {
        return (
            <>
                <div className="login-type-page">
                    <Link to="/customer-login">Sign in as a customer</Link>
                    <Link to="/shop-keeper-login">Sign in as a Shop keeper</Link>
                </div>
            </>
        )
    }

    function Customer() {
        return (
            <>
                <div className="customer-login">
                    Customer Login
                    <form>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <label htmlFor="">Password</label>
                        <input type="password" />
                        <button>Submit</button>
                    </form>
                </div>
            </>
        )
    }

    function ShopKeeper() {
        return (
            <>
                <div className="shop-keeper-login">
                    Shop keeper
                    <form>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <label htmlFor="">Password</label>
                        <input type="password" />
                        <button>Submit</button>
                    </form>
                </div>
            </>
        )
    }

    

    return (
        <>
            {type === 'select' ? <SelectLoginType /> : 
            type === 'customer' ? <Customer /> : 
            type === 'shop-keeper' && <ShopKeeper /> }
        </>
    )
}
