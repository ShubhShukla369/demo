import React from 'react'

const Addstudent = () => {
  return (
    <div>
         <section className="py-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="">
              
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                <h1 className="mb-4">Add new {tournamentData.game} Player</h1>
                  {/* <form onSubmit={playerForm.handleSubmit}> */}
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-4">
                        <label>Player Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                        //   onChange={playerForm.handleChange}
                        //   value={playerForm.values.name}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="upload-image" className="btn btn-dark"> <i class="fas fa-upload"></i> Upload Player Image</label>
                        <input
                        hidden
                          className="form-control"
                          type="file"
                          id="upload-image"
                          accept=".jpg, .jpeg, .png"
                          maxFileSize="2000000"
                          onChange={uploadImage}

                          // 2mb
                        />
                      </div>
                    </div>
                    <div className="py-4">
                      <button type="submit" className="btn btn-primary btn-lg">
                        {/* Add Player to {tournamentData.title} */}
                      </button>
                    </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addstudent