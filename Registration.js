import React from "react";
import {useForm} from 'react-hook-form'


function Registration(){

    const {register,handleSubmit,formState:{errors}}=useForm()

    //form submission
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }

    console.log(errors)
    

    return (
        <div className="row mt-3 ">
          <p className="display-1 text-center text-success">User Registration</p>
            <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="un"> Username</label>
                        <input type="text" id="un" className='form-control' {...register("username",{required:true,minLength:4})} />
                        {/*validation error message */}
                        {errors.username?.type==='required'&& <p className="text-danger"> *Username required</p>}
                        {errors.username?.type==='minLength'&& <p className="text-danger"> *Username required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className='form-control' {...register("email",{required:true})} />
                        {/*validation to use @ symbol in email */}
                        {errors.email?.type==='required'&& <p className="text-danger"> *Email required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input type="date" id="dob" className='form-control' {...register("Date Of Birth",{required:true})} />
                        {errors.dob?.type==='required'&& <p className="text-danger"> *dob required</p>}
                    </div>
                    {/* select branch */}
                    <div>
                        <label htmlFor="branch">Branch</label>
                        <select id="branch" className="form-control" {...register("branch",{required:true})}>

                            <option value="" disabled>select Branch</option>
                                <option value="cse">CSE</option>
                                <option value="it">IT</option>
                                <option value="civil">CIVIl</option>
                        </select>
                        {/*validation for branch */}
                        {errors.branch?.type==='required'&& <p className="text-danger"> *branch required</p>}
                    </div>

                    <div>
                        <label htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" rows="5" className="form-control" {...register("feedback",{required:true})}></textarea>
                        {/*validation for feedback */}
                        {errors.feedback?.type==='required'&& <p className="text-danger"> *feedback required</p>}
                    </div>
                    <button type="submit" className="btn btn-success w-100" >Submit</button>
                </form>
            </div>

        </div>
    )
}
export default Registration