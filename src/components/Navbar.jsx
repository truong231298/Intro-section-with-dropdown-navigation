import iconUp from "/images/icon-arrow-up.svg"
import iconDown from "/images/icon-arrow-down.svg"
import iconTodo from "/images/icon-todo.svg"
import iconCalendar from "/images/icon-calendar.svg"
import iconRemind from "/images/icon-reminders.svg"
import iconPlanning from "/images/icon-planning.svg"
import { useState } from "react"

const Navbar = () => {
    const [isShow, setIsShow] = useState({
        features: false,
        company: false
    })

    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center text-MediumGray">
            <div>
                <a href="#" onClick={() => setIsShow((prevState) => ({ ...prevState, features: !prevState.features }))}>Features{isShow.features ? <img src={iconUp} alt="" className="inline-flex ml-1" /> : <img src={iconDown} alt="" className="inline-flex ml-1" />}</a>
                <ul className={`md:absolute left-36 md:mt-4 p-4 md:shadow bg-white rounded-lg ${isShow.features ? 'block' : 'hidden'}`}>
                    <li><img src={iconTodo} alt="" className="inline-flex mx-2 my-2" />Todo List</li>
                    <li><img src={iconCalendar} alt="" className="inline-flex mx-2 my-2" />Calender</li>
                    <li><img src={iconRemind} alt="" className="inline-flex mx-2 my-2" />Reminders</li>
                    <li><img src={iconPlanning} alt="" className="inline-flex mx-2 my-2" />Planning</li>
                </ul>
            </div>
            <div>
                <a href="#" onClick={() => setIsShow((prevState) => ({ ...prevState, company: !prevState.company }))}>Company{isShow.company ? <img src={iconUp} alt="" className="inline-flex ml-1" /> : <img src={iconDown} alt="" className="inline-flex ml-1" />}</a>
                <ul className={`md:absolute md:mt-4 p-4 md:shadow bg-white rounded-lg ${isShow.company ? "block" : "hidden"}`}>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Blog</li>
                </ul>
            </div>

            <a href="">Careers</a>
            <a href="">About</a>

            <button className=" text-MediumGray hover:border-2 px-3 py-2 rounded-lg border-AlmostBlack w-full md:hidden">Login</button>
            <button className=" text-MediumGray hover:border-2 px-3 py-2 rounded-lg border-AlmostBlack w-full md:hidden"> Register</button>

        </div>
    );
}

export default Navbar;