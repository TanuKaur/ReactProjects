import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""
  });

  function inputChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event){
       event.preventDefault();
       console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
         <form action="" onSubmit={submitHandler} className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md">
        {/* first name */}
        <div>
            <label 
            htmlFor="firstName"
            className='font-medium text-sm'>First name</label>

            <input 
            type='text'
            placeholder='Tanu' 
            id='firstName'
            name='firstName'
            onChange={inputChangeHandler}
            value={formData.firstName}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* last name */}
        <div>
            <label 
            htmlFor="lastName"
            className='font-medium text-sm'>Last name</label>

            <input 
            type='text'
            placeholder='Kaur' 
            id='lastName'
            name='lastName'
            onChange={inputChangeHandler}
            value={formData.lastName}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* email */}
        <div>
            <label 
            htmlFor="email"
            className='font-medium text-sm'>Email address</label>

            <input 
            type="email" 
            placeholder='tkaur14151@gmail.com' 
            id='email'
            name="email"
            onChange={inputChangeHandler}
            value={formData.email}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* country  - dropdown*/}
        <div>
            <label 
            htmlFor="country"
            className='font-medium text-sm'>Country</label>

            <select 
            name="country" 
            id="country"
            value={formData.country}
            onChange={inputChangeHandler}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            >
                <option value="india">India</option>
                <option value="united states">United States</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
        </div>

        {/* street address  */}
        <div>
            <label 
            htmlFor="streetAddress"
            className='font-medium text-sm'>Street address</label>

            <textarea 
            name="streetAddress" 
            id="streetAddress"
            placeholder='Street'
            onChange={inputChangeHandler}
            value={formData.address}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            >
            </textarea>
        </div>

        {/* city */}
        <div>
            <label 
            htmlFor="city"
            className='font-medium text-sm'>City</label>

            <input 
            type="text" 
            id='city'
            name='city'
            placeholder='Agra'
            onChange={inputChangeHandler}
            value={formData.city}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* state */}
        <div>
            <label 
            htmlFor="state"
            className='font-medium text-sm'>State / Province</label>

            <input 
            type="text" 
            id='state'
            name='state'
            placeholder='UP'
            onChange={inputChangeHandler}
            value={formData.state}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* zip code */}
        <div>
            <label 
            htmlFor="zipCode"
            className='font-medium text-sm'>ZIP / Postal code</label>
            
            <input 
            type="number" 
            id='zipCode'
            name='postalCode'
            placeholder='282001'
            onChange={inputChangeHandler}
            value={formData.postalCode}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* by mail - checkbox */}
        <div className='mb-4'>
            {/* fieldset and legend */}
            <label className='font-medium text-sm'>By Email</label>

            <div className='flex gap-4 mt-2'>
                <div>
                    <input 
                    type="checkbox" 
                    id='comments'
                    name='comments'
                    onChange={inputChangeHandler}
                    checked={formData.comments}
                    className='w-4 h-4 mt-[6px]'
                    />
                </div>
                <div>
                    <label htmlFor="comments"  className='font-medium text-sm'>Comments</label>
                    <p className='text-sm text-gray-500'>Get notified when someones posts a comment on a posting.</p>
                </div>
            </div>

            <div className='flex gap-4 mt-2'>
                <div>
                    <input 
                        type="checkbox" 
                        id='candidates'
                        name='candidates'
                        onChange={inputChangeHandler}
                        checked={formData.candidate}
                        className='w-4 h-4 mt-[6px]'
                        />
                </div>
                <div>
                    <label htmlFor="candidates" className='font-medium text-sm'>Candidates</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job.</p>
                </div>
            </div>

            <div className='flex gap-4 mt-2'>
                <div>
                    <input 
                    type="checkbox" 
                    id='offers'
                    name='offers'
                    onChange={inputChangeHandler}
                    checked={formData.offers}
                    className='w-4 h-4 mt-[6px]'
                    />
                </div>
                <div>
                    <label htmlFor="offers" className='font-medium text-sm'>Offers</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>
        </div>

        {/* push notification - radio */}
        <div className='mb-4'>
            <label className='font-medium text-sm'>Push Notifications</label>
            <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio1'
                name="pushNotification" 
                value="everything"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio1"  className='font-medium text-sm'>Everything</label>
            </div>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio2'
                name="pushNotification" 
                value="Same as email"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio2"  className='font-medium text-sm'>Same as email</label>
            </div>

           <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio3'
                name="pushNotification" 
                value="No push notifications"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio3"  className='font-medium text-sm'>No push notifications</label>
            </div>
        </div>
        
        {/* submit button */}
        <button 
        className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200' 
        type='submit'>
        Save
        </button>
    </form>
    </div>
  );
}

export default App;
