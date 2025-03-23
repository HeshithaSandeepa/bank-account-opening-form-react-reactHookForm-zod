
import '../CSS/BankAccOpenForm.css';
const BankAccOpenForm = () => {
  return (

    <form>
      <div className="container form-style p-5 rounded-3 shadow" >
        <h1 className='text-center mb-5'>Bank Account Opening Form</h1>
        {/* personal information start here */}
        <div className="personal-information">
          <h3> Personal Information </h3>
          <div >
            <label htmlFor='name' className='form-label'>Full Name</label>
            <input
              id='name'
              type='text'
              className='form-control' required />
          </div>
          <div>
            <label htmlFor='email' className='form-label'>Age</label>
            <input
              id='email'
              type='text'
              className='form-control' />
          </div>
          <div>
            <label htmlFor="phone-number" className="form-label">Phone Number</label>
            <input
              id="phone-number"
              type="number"
              className="form-control"
              required />
          </div>
          <div>
            <label htmlFor="date-of-birth" className="form-label">Date of Birth</label>
            <input
              id="date-of-birth"
              type="date"
              className="form-control"
              required />
          </div>
        </div>
        {/* personal information end here */}

        {/* Account details start here */}
        <div className="account-details">
          <h3 className="mt-4">Account Details</h3>
          <div>
            <label htmlFor="account-type" className="form-label">Account Type</label>
            <select id="account-type" className="form-select" required>
              <option selected value="">Select...</option>
              <option value="1">Savings</option>
              <option value="2">Checking</option>
            </select>
          </div>
          <div>
            <label htmlFor="initial-deposit-amount" className="form-label">Initial Deposit Amount</label>
            <input
              id="initial-deposit-amount"
              type="number"
              className="form-control"
              min="100"
              required />
          </div>
          <div>
            <label htmlFor="currency" className="form-label">Currency</label>
            <select id="currency" className="form-select" required>
              <option selected value="">Select Currency...</option>
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
          <label htmlFor="street-address" className="form-label">Phone Number</label>
          <input
            id="street-address"
            type="text"
            className="form-control"
            required />
        </div>
        <div>
          <label htmlFor="city" className="form-label">City</label>
          <input
            id="city"
            type="text"
            className="form-control"
            required />
        </div>
        <div>
          <label htmlFor="zip-code" className="form-label">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            className="form-control"
            required />
        </div>
        {/* Address ends here */}
        <div className="form-check mt-2 mb-2">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Terms & Conditions
          </label>
        </div>

        <button className="btn btn-primary mt-2" type="submit">Submit</button>
      </div >
    </form>
  )
}

export default BankAccOpenForm;