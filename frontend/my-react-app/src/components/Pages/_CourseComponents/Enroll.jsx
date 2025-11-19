function Enroll() {
  return(
    <>
      <h3>
        Enroll
      </h3>
      <p>If you would like to enroll in this class, please fill out the expression of interest below:</p>
      <form
        name="enrollmentForm"
      >
        <label class="inline-label">First Name</label>
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          required
          class="input-area"
        /><br/><br/>
        <label class="inline-label">Last Name</label>
        <input 
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          required
          class="input-area"
        /><br/><br/>
        <label class="inline-label">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          required
          class="input-area"
        />
        <br/><br/>
        <button
          type="submit"
          class="submit-application"
          onclick="validateForm()"
        >
          Submit Application
        </button>
        <p>
          After submitting the form, please steel your heart for there to be no response, even within 3-5 business days.
        </p>
      </form>
    </>
  )
}

export default Enroll;