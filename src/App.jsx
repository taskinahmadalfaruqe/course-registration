import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import {useState} from "react"
import Cart from "./Cart/Cart"
import Courses from "./Courses/Courses"

function App() {

    // ADD DATA FROM BUTTON CLICKED
    const [clickData, setClickData] = useState([]);
    const [credit, setCredit] = useState(20);
    const [creditHours, setCreditHours] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClick = (newData) => {

        const isTrue = clickData.find(
            clickDataValue => clickDataValue.id == newData.id
        );

        let totalCredit = newData.timeInHours;
        if (isTrue) {
            return toast.warn('This Course Already In Your Cart', {
                position: 'top-center',
                theme: "colored"
            });

        } else {
            clickData.forEach(element => {
                totalCredit = totalCredit + element.timeInHours;
            });
            if (totalCredit > 20) {
                return toast.warn("Your Maximum Limit Can't Over 20 Hours Credit", {
                    position: 'top-center',
                    theme: "colored"
                })
            } else if (totalCredit === 20) {
                const newDataArray = [
                    ...clickData,
                    newData
                ];
                setClickData(newDataArray);
                handelCredit(newData);
                setCreditHours(totalCredit);
                handleTotalPrice(newData.price);
                return toast.success(
                    "You Reached Your Maximum Limit 20 Hours Credit. You Are Not Able To Add Any Course Next Time.",
                    {
                        position: 'top-center',
                        theme: "colored"
                    }
                )
            } else {
                const newDataArray = [
                    ...clickData,
                    newData
                ];
                setClickData(newDataArray);
                handelCredit(newData);
                setCreditHours(totalCredit);
                handleTotalPrice(newData.price);
            }
        }
    }
    // FIND CREDIT DATA
    const handelCredit = (creditValue) => {
        const {timeInHours} = creditValue;
        const creditLimit = credit - timeInHours;
        if (creditLimit < 0) {
            return toast.warn('Your Limit Is Already Over')
        } else if (creditLimit === 0) {
            setCredit(creditLimit);
            return toast.error(
                'Your Limit Remaining 0 Hour You Can Not Add New Course Any More Next Time.',
                {
                    position: 'top-center',
                    theme: "colored"
                }
            )
        } else {
            setCredit(creditLimit);
        }
    }

    // TOTAL PRICE
    const handleTotalPrice = (price) => {
        let newTotalPrice = totalPrice + price;
        setTotalPrice(newTotalPrice);
    }

    return (
        <div className="container">
            <ToastContainer/>
            <h1 className="text-3xl font-bold text-center py-3">Course Registration</h1>
            <div className="flex justify-between gap-5 flex-col-reverse md:flex-row">
                <Courses handleClick={handleClick}></Courses>
                <Cart
                    clickData={clickData}
                    credit={credit}
                    creditHours={creditHours}
                    totalPrice={totalPrice}></Cart>
            </div>
        </div>
    )
}

export default App
