/***** Deliverable 1 *****/
const header = document.querySelector("#header")

/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/

for(const player of PLAYERS){
  renderPlayers(player)
}

function renderPlayers(playerObj) {
  const playerContainer = document.querySelector(".player-container")
  const playerDiv = document.createElement('div')

  playerDiv.classList.add('player')
  playerDiv.dataset.number = playerObj.number

  playerDiv.innerHTML = `
    <h3>
      ${playerObj.name} (<em>${playerObj.nickname}</em>)
    </h3>
    <img src="${playerObj.photo}" alt="${playerObj.name}">
  `

  playerContainer.append(playerDiv)
}



{/* <div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div> */}


/***** Deliverable 4 *****/

// document.querySelector('[data-link="1"]'
const raheem = document.querySelector('[data-number="7"]')

raheem.remove()