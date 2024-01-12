const AddNewRc = () => {

    return (
      <>
      <h1>New RC form page</h1>

      <form action="http://localhost:3000/api/new-rc" method="post">
              <div className="row my-5">
                <h2 className="col-12 gold mb-3">First Name</h2>
                <input className="col-8 offset-2 text-center mb-3 py-2" id="firstName" placeholder="First Name" name="firstName" required />
              </div>
              <div className="row my-5">
                <h2 className="col-12 gold mb-3">Last Name</h2>
                <input className="col-8 offset-2 text-center mb-3 py-2" id="lastName" placeholder="Last Name" name="lastName" required />
              </div>
              <div className="row my-4">
                <h2 className="col-12 gold mb-3">Phone Number</h2>
                <input className="col-8 offset-2 text-center mb-3 py-2" id="phone" placeholder="phone" name="phone" />
              </div>
              <button className="btn btn-dark mb-4"><span className="gold hover">Submit</span></button>
            </form>
  
      </>
    )
  
  }
  
  export default AddNewRc