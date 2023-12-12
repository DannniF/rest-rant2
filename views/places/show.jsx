const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
                <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} width="500" height="500" />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
      <h1>{ data.place.name }</h1>
            <section>
              <h2>Rating</h2>
              <p>Not rated</p>
            </section>
            <section>
              <h2>Description</h2>
              <p>idk</p>
            </section>
            <section>
              <h2>commentss</h2>
              <p>no comments yet</p>
            </section>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger"> Delete </button>
            </form> 
    
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        </div>
        </div>
           
  

          </main>
        </Def>
    )
}

module.exports = show
