var result = 0;
var selected = 0;
var lastSelected = 0;

function select(uID) {
    selected = uID;

    setTimeout(() => {
        if (lastSelected !== 0) {
            document.getElementById(`box${lastSelected}`).style.animation =
                "none";
        }
    }, 150);

    setTimeout(() => {
        if (uID === 1) {
            document.getElementById(`box${uID}`).style.animation =
                "pulse-blue 2s infinite";
            document.getElementById("userIMG").src = "./../assets/rock.png";
            document.getElementById("userBOX").style.backgroundColor =
                "#87cefa";
            lastSelected = uID;
        } else if (uID === 2) {
            document.getElementById(`box${uID}`).style.animation =
                "pulse-yellow 2s infinite";
            document.getElementById("userIMG").src = "./../assets/paper.png";
            document.getElementById("userBOX").style.backgroundColor =
                "#ffff63";
            lastSelected = uID;
        } else if (uID === 3) {
            document.getElementById(`box${uID}`).style.animation =
                "pulse-red 2s infinite";
            document.getElementById("userIMG").src = "./../assets/scissor.png";
            document.getElementById("userBOX").style.backgroundColor =
                "#ff4f4f";
            lastSelected = uID;
        }
        document.getElementById("userIMG").style.zIndex = "1";
    }, 150);
}

function start() {
    if (selected === 0) {
        return alert("Você precisa selecionar PEDRA, PAPEL ou TESOURA!");
    }

    let list = [1, 2, 3, 2, 1, 2, 3, 2, 1, 3];
    let mix = list[Math.floor(Math.random() * list.length)];

    result = mix;

    const intervalAnimation1 = setInterval(() => {
        document.getElementById("botIMG").src = "./../assets/rock.png";
        document.getElementById("botIMG").style.zIndex = "1";
    }, 200);
    const intervalAnimation2 = setInterval(() => {
        document.getElementById("botIMG").src = "./../assets/paper.png";
    }, 400);
    const intervalAnimation3 = setInterval(() => {
        document.getElementById("botIMG").src = "./../assets/scissor.png";
    }, 600);

    setTimeout(() => {
        clearInterval(intervalAnimation1);
        clearInterval(intervalAnimation2);
        clearInterval(intervalAnimation3);

        if (mix === 1) {
            document.getElementById("botIMG").src = "./../assets/rock.png";
            document.getElementById("botBOX").style.backgroundColor = "#87cefa";
        } else if (mix === 2) {
            document.getElementById("botIMG").src = "./../assets/paper.png";
            document.getElementById("botBOX").style.backgroundColor = "#ffff63";
        } else if (mix === 3) {
            document.getElementById("botIMG").src = "./../assets/scissor.png";
            document.getElementById("botBOX").style.backgroundColor = "#ff4f4f";
        }

        displayResult();
    }, 1200);
}

function displayResult() {
    if (selected === result) {
        document.getElementById("display").innerHTML =
            "O resultado é um <span style='color: #ffff63;'>empate</span>";
    } else if (selected === 1 && result === 3) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #87cefa;'>usuário</span> venceu!";
    } else if (selected === 3 && result === 2) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #87cefa;'>usuário</span> venceu!";
    } else if (selected === 2 && result === 1) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #87cefa;'>usuário</span> venceu!";
    } else if (selected === 1 && result === 2) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #ff4f4f;'>bot</span> venceu!";
    } else if (selected === 2 && result === 3) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #ff4f4f;'>bot</span> venceu!";
    } else if (selected === 3 && result === 1) {
        document.getElementById("display").innerHTML =
            "O <span style='color: #ff4f4f;'>bot</span> venceu!";
    }
}
