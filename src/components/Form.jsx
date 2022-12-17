import { React, useState } from 'react'
import './form.css'

const Form = () => {

    // using useState hook to handle data
    const [user, setUser] = useState({
        name: "", phone: "", pincode: "", address: "", landmark: "", flat_number: "", floor_number: "", building_name: "", city: "", state: ""
    });


    //  Handling form data
    let name, value;
    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value }); 
    };

    // postData fnction used to transfer all form data to backend
    const postData = async (e) => {

        e.preventDefault();

        const { name, phone, pincode, address, landmark, flat_number, floor_number, building_name, city, state } = user;

        const res = await fetch('/form', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, phone, pincode, address, landmark, flat_number, floor_number, building_name, city, state
            })

        });

        const data = await res.json();
        console.log(data);
        window.alert("User added successfully");


    }


    return (
        <>
            <div className="form-container">

                <div className="form-name">
                    <h1 className='form-head'>Form</h1>
                </div>

                <form method='POST'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                        value={user.name}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Pin Code</label>
                                    <input type="number" name="pincode" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Pin Code"
                                        value={user.pincode}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Landmark</label>
                                    <input type="text" name="landmark" className="form-control" id="exampleFormControlInput1" placeholder="Enter Landmark"
                                        value={user.landmark}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Floor Number</label>
                                    <input type="number" name='floor_number' className="form-control" id="exampleFormControlInput1" placeholder="Enter Floor Number"
                                        value={user.floor_number}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">City</label>
                                    <input type="text" name="city" className="form-control" id="exampleFormControlInput1" placeholder="Enter City Name"
                                        value={user.city}
                                        onChange={handleInput}
                                    />
                                </div>

                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                                    <input type="number" name='phone' className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Address</label>
                                    <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Address"
                                        value={user.address}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Flat/House No.</label>
                                    <input type="number" name="flat_number" className="form-control" id="exampleFormControlInput1" placeholder="Enter House No."
                                        value={user.flat_number}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Building/ Apartment Name</label>
                                    <input type="text" name="building_name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Building Name"
                                        value={user.building_name}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">State</label>
                                    <input type="text" name="state" className="form-control" id="exampleFormControlInput1" placeholder="Enter State Name"
                                        value={user.state}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type='submit' onClick={postData} className='submit-button'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form