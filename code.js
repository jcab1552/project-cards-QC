const cardHolder = document.querySelector('#cardHolder');

const players = [
    {inGameName: 'LESLAO', realName:'unknown', playerRole: 'unknown', memberPic: "pictures/PLAYERS/LESLAO.png"},
    {inGameName: 'SVG', realName:'unknown', playerRole: 'unknown', memberPic: "pictures/PLAYERS/SVG.png"},
    {inGameName: 'MSS', realName:'unknown', playerRole: 'unknown',memberPic: "pictures/PLAYERS/MSS.png"},
    {inGameName: 'QUINN', realName:'unknown', playerRole: 'unknown',memberPic: "pictures/PLAYERS/QUINN.png" },
    {inGameName: 'KBBQ', realName:'unknown', playerRole: 'unknown',memberPic: "pictures/PLAYERS/KBBQ.png"},
    {inGameName: 'YAWAR', realName:'unknown', playerRole: 'unknown',memberPic: "pictures/PLAYERS/YAWAR.png"}

];

const cardBaseConstractor = players.map( (plr) => {
    return     `<div class="card">
    <div class="cardFront" id="${plr.inGameName}">
        <img src="${plr.memberPic}" alt="" class="playerImg">
    </div>
    <div class="cardBackGround">
        <div class="playerInfo">
            <h2 class="name">"${plr.inGameName}"
            </br>${plr.realName}</h2>
            <H3>${plr.playerRole}</H3>
        </div>
    </div>
</div>`
});
cardBaseConstractor.forEach(card => cardHolder.innerHTML += card);

//-------------------------------------------------------------

const cardBase = document.querySelectorAll(".card");
const inGameNameModal1 = document.querySelector('#inGameNameModal');
const realNameModal1 = document.querySelector('#realNameModal');
const playerRoleModal1 = document.querySelector('#playerRoleModal');
const playerImgModal1 = document.querySelector('#playerImgModal');
function generateModal(itemData){
    modalCont.classList.add("show");
inGameNameModal1.textContent = itemData.inGameName;
realNameModal1.textContent = itemData.realName;
playerRoleModal1.textContent = itemData.playerRole;
playerImgModal1.src = itemData.memberPic;
};
cardBase.forEach((card, index) => card.addEventListener('click', () => generateModal(players[index])))

modalCont.addEventListener('click', () =>{
    modalCont.classList.remove("show");
});