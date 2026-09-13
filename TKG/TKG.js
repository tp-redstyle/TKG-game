const startBTN = document.getElementById("startBTN");
const gouhi = document.getElementById("gouhi");
const next = document.getElementById("next");
const renzoku = document.getElementById("renzoku");
const superimg = document.getElementById("superimg");
const CLICK = document.getElementById("CLICK");

let eggdiv = document.getElementById("eggdiv");
let eggX = 0;
let eggY = 200;
let speed = 0;
let fallSpeed = 20;
let mode = "start";
let kiroku = 0;

speed = 2; //ここを変えると卵の移動速度が変わります。

startBTN.addEventListener("click", (e) =>{e.stopPropagation();start();});
document.addEventListener("click", () =>{if (mode === "place") {mode = "fallegg"; CLICK.classList.remove("show");
document.getElementById("eggdiv").innerHTML = `<img src="eggeggegg.png" alt="割れた卵" id="egg">`;egg.classList.add("show");fall()};})
next.addEventListener("click", () =>{setTimeout(() =>{start(); speed += 1; document.getElementById("eggdiv").innerHTML = `<img src="egg.png" alt="割れた卵" id="egg">`;egg.classList.add("show"); eggY = 200; eggX = 0; eggdiv.style.left = eggX + "px"; eggdiv.style.top = eggY + "px"; mode = "place";e.stopPropagation();})});
document.addEventListener("keydown", (e) =>{if (e.code === "Space") {superimg.innerHTML = `<img class="super" src="eggman.png" alt="eggman">`; setTimeout(() =>{superimg.innerHTML = `<div style="z-index:-99;" class="super"></div>`}, 3000)}});

function start() {startBTN.classList.add("hide");egg.classList.add("show"); mode = "place"; gouhi.innerHTML = ``; next.classList.remove("show"); gouhi.classList.remove("show"); next.classList.remove("show");CLICK.classList.add("show");}
function moveStart() {if (mode === "place") {eggX += speed; if (eggX > 1300 || eggX < 0) {speed = speed * -1;};} eggdiv.style.left = eggX + "px"; requestAnimationFrame(moveStart); };
function fall() {if (mode === "fallegg") {eggY += fallSpeed;} if (eggY > 530 && eggX < 800 && eggX > 600) {mode = "fallstop"; finish("seikou");}; eggdiv.style.top = eggY + "px";if (eggY < 600 && mode === "fallegg") {requestAnimationFrame(fall);} if (eggY === 600) {finish("sippai"); mode = "fallstop"; return;};};
function finish(kekka) {gouhi.classList.add("show");if (kekka === "seikou") {gouhi.innerHTML = `TKG完成！`; kiroku += 1; renzoku.innerHTML = `現在${kiroku}連続TKGを作っています。`};if (kekka === "sippai") {speed -= 1;gouhi.innerHTML = `TKG失敗…`; kiroku = 0;renzoku.innerHTML = `現在${kiroku}連続TKGを作っています。`;}; next.classList.add("show");};
moveStart(); 


