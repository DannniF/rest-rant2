const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>

                <div>
                    <img src="images/DogPj.jpg" alt="Dog in PJS "width="500" height="700"/>
                <div>
                Photo by <a href="https://unsplash.com/@karsten116?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karsten Winegeart</a> on <a href="https://unsplash.com/photos/white-and-brown-long-coated-small-dog-wearing-blue-and-white-polka-dot-shirt-Qb7D1xw28Co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
  
                </div>
            </main>
        </Def>
    )
}

module.exports = error404