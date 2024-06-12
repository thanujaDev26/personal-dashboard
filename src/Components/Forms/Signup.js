import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

export default function Signup(props) {

    let [userInput, setUserInput] = useState({
        fname : '', lname : '', email : '',password: '',
        rePassword: '', leco : '', nwsdb :'', slt: '',
        district : 'colombo', street : '', city : '', ZIP : ''
    });

    let navigate = useNavigate();

    let onChangeFname = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                fname : event.target.value
            }
        })
    }
    let onChangeLname = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                lname : event.target.value
            }
        })
    }
    let onChangeEmail = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                email : event.target.value
            }
        })
    }
    let onChangePassword = (event) => {
        setUserInput((preve) => {
            return {
                ...preve,
                password: event.target.value
            };
        });
    };
    let onChangeRePassword = (event) => {
        setUserInput((preve) => {
            return {
                ...preve,
                rePassword: event.target.value
            };
        });
    };
    let onChangeLeco = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                leco : event.target.value
            }
        })
    }
    let onChangeNwsdb = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                nwsdb : event.target.value
            }
        })
    }
    let onChangeSLT = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                slt : event.target.value
            }
        })
    }
    let onChangeDistrict = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                district : event.target.value
            }
        })
    }
    let onChangeStreet = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                street : event.target.value
            }
        })
    }
    let onChangeCity = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                city : event.target.value
            }
        })
    }
    let onChangeZIP = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                ZIP : event.target.value
            }
        })
    }


    let onSubmitHandler = (event) =>{
        event.preventDefault()
        let { fname , lname , email ,password, rePassword, leco , nwsdb,
           slt , district , street, city , ZIP } = userInput

        let user = {
            fname : fname , lname : lname , email : email, password1: password,
            password2: rePassword,leco : leco, nwsdb : nwsdb,slt : slt,
            district :district , street : street, city : city, ZIP : ZIP
        }
        // console.log(user)
        props.getNewUser(user)

        setUserInput({
            fname : '', lname : '', email : '',password: '',
            rePassword: '', leco : '', nwsdb :'',slt : '',
            district : 'colombo', street : '', city : '', ZIP : ''
        })
        navigate('/dashboard')

    }
    return (

        <div style={{ padding: '1rem', margin: '1rem' }}>
            <div>
                <NavLink to='/'>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm
                        hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600">
                        Back
                    </button>
                </NavLink>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 flex items-center justify-center">User
                            Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can
                            receive mail.</p>
                        <strong> Use Correct Account details, cannot use for any others </strong>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.fname}
                                        onChange={onChangeFname}
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.lname}
                                        onChange={onChangeLname}
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.email}
                                        onChange={onChangeEmail}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.password}
                                        onChange={onChangePassword}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="re-password"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Re-enter Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.rePassword}
                                        onChange={onChangeRePassword}
                                        id="re-password"
                                        name="re-password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="leco"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    LECO Account Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.leco}
                                        onChange={onChangeLeco}
                                        type="text"
                                        name="leco"
                                        id="leco"
                                        className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="nwsdb"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    NWSDB Account Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.nwsdb}
                                        onChange={onChangeNwsdb}
                                        type="text"
                                        name="nwsdb"
                                        id="nwsdb"
                                        className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="slt"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    SLT Account Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.slt}
                                        onChange={onChangeSLT}
                                        type="text"
                                        name="slt"
                                        id="slt"
                                        className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                                    District
                                </label>
                                <div className="mt-2">
                                    <select
                                        value={userInput.district}
                                        onChange={onChangeDistrict}
                                        id="district"
                                        name="district"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1
                                        ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="ampara">Ampara</option>
                                        <option value="anuradhapura">Anuradhapura</option>
                                        <option value="badulla">Badulla</option>
                                        <option value="batticaloa">Batticaloa</option>
                                        <option value="colombo">Colombo</option>
                                        <option value="galle">Galle</option>
                                        <option value="gampaha">Gampaha</option>
                                        <option value="hambantota">Hambantota</option>
                                        <option value="jaffna">Jaffna</option>
                                        <option value="kalutara">Kalutara</option>
                                        <option value="kandy">Kandy</option>
                                        <option value="kegalle">Kegalle</option>
                                        <option value="kilinochchi">Kilinochchi</option>
                                        <option value="kurunegala">Kurunegala</option>
                                        <option value="mannar">Mannar</option>
                                        <option value="matale">Matale</option>
                                        <option value="matara">Matara</option>
                                        <option value="monaragala">Monaragala</option>
                                        <option value="mullaitivu">Mullaitivu</option>
                                        <option value="nuwara-eliya">Nuwara Eliya</option>
                                        <option value="polonnaruwa">Polonnaruwa</option>
                                        <option value="puttalam">Puttalam</option>
                                        <option value="ratnapura">Ratnapura</option>
                                        <option value="trincomalee">Trincomalee</option>
                                        <option value="vavuniya">Vavuniya</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.street}
                                        onChange={onChangeStreet}
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.city}
                                        onChange={onChangeCity}
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.ZIP}
                                        onChange={onChangeZIP}
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm
                        hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600">
                        Go!
                    </button>
                </div>
            </form>
        </div>
    )
}
