import React from 'react'

export default function BootstrapCard () {
  return (
    <div class="card m-5" style={{width: '30rem'}}>
    <img class="card-img-top" src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Bob Dylan</h5>
      <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
    </div>
  </div>
  )
}


