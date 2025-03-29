import { FieldValues, useForm } from 'react-hook-form';
import '../CSS/BankAccOpenForm.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { dateSchema } from './DateValidation';
import { useState } from 'react';

// zod start--
const schemaForValidation = z.object({
  name: z.string().min(5, ("Name must be at least 5 characters")),

  email: z.string().email("You must be Enter valid email"),

  phone_no: z
    .string()
    .nonempty({ message: "Mobile number is required!" })
    .min(10, "Phone number must be exactly 10 digits!")
    .max(10, "Phone number must be exactly 10 digits!"),

  account_type: z
    .enum(["Savings", "Checking"], { message: "Please select an account type" }),

  initial_deposit_amount: z
    .preprocess((val) => Number(val), z.number({
      invalid_type_error: "Initial Deposit Amount must be a number!",
      required_error: "Initial Deposit Amount is required!",
    })
      .min(100, { message: "Initial Deposit Amount must be at least 100!" }),
    ),

  currency: z
    .enum(['USD', 'EUR', 'LKR'], { message: "Please select currency type" }),

  street_address: z
    .string()
    .nonempty({ message: "Street address is required!" })
  ,

  city_name: z
    .string()
    .nonempty({ message: "City name is required!" }),

  zip_code: z
    .string()
    .nonempty({ message: "Zip code required!" })
    .min(5, "zip code exactly 5 digits!")
    .max(5, "zip code exactly 5 digits!"),

  terms_condition: z
    .literal(true, {
      errorMap: () => ({ message: "You must accept the Terms & Conditions" }),
    })




}).merge(dateSchema);
// interface zod
type FormData = z.infer<typeof schemaForValidation>;

// zod end--


const BankAccOpenForm = () => {

  // State to track submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  //reactHookForm
  const { register, handleSubmit, formState: { errors }, reset }
    = useForm<FormData>({ resolver: zodResolver(schemaForValidation) });

  const onSubmit = (data: FieldValues) => {
    console.table(data);
    setIsSubmitted(true);
    reset();
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)} className='needs-validation'>
      <div className="container form-style p-5 rounded-3 shadow" >

        <h1 className='text-center mb-5'>Bank Account Opening Form</h1>
        {/* personal information start here */}
        <div className="personal-information">
          <h3> Personal Information </h3>
          <div >
            <label htmlFor='name' className='form-label'>Full Name</label>
            <input
              {...register('name')}
              id='name'
              type='text'
              className='form-control'
            />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          {/* validation rule */}
          {errors.name && (
            <p className='text-danger'>{errors.name.message}</p>
          )}

          <div>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              {...register("email")}
              id='email'
              type='text'
              className='form-control'
            />
          </div>
          {/* validation rule */}
          {errors.email && (
            <p className='text-danger'>{errors.email.message}</p>
          )

          }

          <div>
            <label htmlFor="phone_no" className="form-label">
              Phone Number
            </label>
            <input
              {...register("phone_no")}
              id="phone_no"
              type="text"
              className="form-control"
              placeholder='ex: 0761236383'
            />
          </div>
          {/* Validation Error Message */}
          {errors.phone_no && (
            <p className="text-danger">
              {errors.phone_no.message}</p>)}
          <div>
            <label htmlFor="date_0f_birth" className="form-label">Date of Birth</label>
            <input
              {...register("date_0f_birth")}
              id="date_0f_birth"
              type='date'
              className="form-control"
            />
          </div>
          {/* validation rule */}
          {errors.date_0f_birth && (
            <p className='text-danger'>{errors.date_0f_birth.message}</p>
          )}
        </div>
        {/* personal information end here */}

        {/* Account details start here */}
        <div className="account-details">
          <h3 className="mt-4">Account Details</h3>
          <div>
            <label htmlFor="account_type" className="form-label">Account Type</label>
            <select
              {...register("account_type")}
              id="account_type"
              className="form-select"

              defaultValue="">
              <option value="">Select...</option>
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
          </div>
          {/* validation rule */}
          {errors.account_type && (
            <p className='text-danger'>{errors.account_type.message}</p>
          )}
          <div>
            <label htmlFor="initial_deposit_amount" className="form-label">Initial Deposit Amount</label>
            <input
              {...register("initial_deposit_amount")}
              id="initial_deposit_amount"
              type="text"
              className="form-control"
            />
            {/* validation rule */}
            {errors.initial_deposit_amount && (
              <p className='text-danger'>{errors.initial_deposit_amount.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="currency" className="form-label">Currency</label>
            <select
              {...register("currency")}
              id="currency"
              className="form-select"

              defaultValue="">
              <option value="">Select Currency...</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="LKR">LKR</option>
            </select>
          </div>
          {/* validation rule */}
          {errors.currency && (
            <p className='text-danger'>{errors.currency.message}</p>
          )}
        </div>
        { /* Account details End here */}

        {/* Address start here */}
        <div>
          <h3 className="mt-4">Address</h3>
          <label htmlFor="street_address" className="form-label">Street Address</label>
          <input
            {...register("street_address")}
            id="street_address"
            type="text"
            className="form-control"
          />
        </div>
        {/* validation */}
        {errors.street_address && (
          <p className='text-danger'>{errors.street_address.message}</p>
        )}

        <div>
          <label htmlFor="city_name" className="form-label">City</label>
          <input
            {...register("city_name")}
            id="city_name"
            type="text"
            className="form-control"
          />
        </div>
        {errors.city_name && (
          <p className='text-danger'>{errors.city_name.message}</p>
        )}

        <div>
          <label htmlFor="zip_code" className="form-label">Zip Code</label>
          <input
            {...register("zip_code")}
            id="zip_code"
            type="number"
            className="form-control"
          />
        </div>
        {/* validation */}
        {errors.zip_code && (
          <p className='text-danger'>{errors.zip_code.message}</p>
        )}


        {/* Address ends here */}
        <div className="form-check mt-2 mb-2">
          <input
            {...register("terms_condition")}
            className={`form-check-input ${errors.terms_condition ? 'is-invalid' : ''}`}
            type="checkbox"
            value=""
            id="terms_condition"
          />
          <label className="form-check-label" htmlFor="terms_condition">
            Terms & Conditions
          </label>
        </div>
        {/* validation  */}
        {errors.terms_condition && (
          <p className='text-danger'>You must accept the Terms & Conditions</p>
        )}

        <button className="btn btn-primary mt-2" type="submit">Submit</button>

        {isSubmitted && (
          <div className="alert alert-success text-center alert-dismissible fade show mt-3" role="alert">
            Your form was successfully submitted!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )}
      </div>




    </form>
  )
}

export default BankAccOpenForm;