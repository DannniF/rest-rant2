const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
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
              <h2>comments</h2>
              <p>no comments yet</p>
            </section>
          </main>
        </Def>
    )
}

module.exports = show
