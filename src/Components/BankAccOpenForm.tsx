import { FieldValues, useForm } from 'react-hook-form';
import '../CSS/BankAccOpenForm.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { dateSchema } from './DateValidation';
// zod start--
const schemaForValidation = z.object({
  name: z.string().min(5, ("Name must be at least 5 characters")),

  email: z.string().email(),

  phone_no: z
    .string()
    .nonempty({ message: "Mobile number is required!" })
    .min(10, "Phone number must be exactly 10 digits!")
    .max(10, "Phone number must be exactly 10 digits!"),



}).merge(dateSchema);
// interface zod
type FormData = z.infer<typeof schemaForValidation>;

// zod end--


const BankAccOpenForm = () => {


  //reactHookForm
  const { register, handleSubmit, formState: { errors } }
    = useForm<FormData>({ resolver: zodResolver(schemaForValidation) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder='0761236383'
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
            <label htmlFor="account-type" className="form-label">Account Type</label>
            <select
              {...register("account-type")}
              id="account-type"
              className="form-select"

              defaultValue="">
              <option value="">Select...</option>
              <option value="1">Savings</option>
              <option value="2">Checking</option>
            </select>
          </div>
          <div>
            <label htmlFor="initial-deposit-amount" className="form-label">Initial Deposit Amount</label>
            <input
              {...register("initial-deposit-amount")}
              id="initial-deposit-amount"
              type="number"
              className="form-control"
              min="100"
            />
          </div>
          <div>
            <label htmlFor="currency" className="form-label">Currency</label>
            <select
              {...register("currency")}
              id="currency"
              className="form-select"

              defaultValue="">
              <option value="">Select Currency...</option>
              <option value="1">USD</option>
              <option value="2">EUR</option>
              <option value="3">LKR</option>
            </select>
          </div>
        </div>
        { /* Account details End here */}

        {/* Address start here */}
        <div>
          <h3 className="mt-4">Address</h3>
          <label htmlFor="street-address" className="form-label">Street Address</label>
          <input
            {...register("street-address")}
            id="street-address"
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="city-name" className="form-label">City</label>
          <input
            {...register("city-name")}
            id="city-name"
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="zip-code" className="form-label">Zip Code</label>
          <input
            {...register("zip-code")}
            id="zip-code"
            type="number"
            className="form-control"
          />
        </div>
        {/* Address ends here */}
        <div className="form-check mt-2 mb-2">
          <input
            {...register("terms-condition")}
            className="form-check-input"
            type="checkbox"
            value=""
            id="condition"
          />
          <label className="form-check-label" htmlFor="condition">
            Terms & Conditions
          </label>
        </div>

        <button className="btn btn-primary mt-2" type="submit">Submit</button>
      </div >
    </form>
  )
}

export default BankAccOpenForm;