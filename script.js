let activeInput = document.querySelectorAll('input[type="text"]');

let word1 = document.createElement('div');
let word2 = document.createElement('div');
let word3 = document.createElement('div');

word1.classList.add('word1');
word2.classList.add('word2');
word3.classList.add('word3');

activeInput[0].addEventListener("keyup", function () {
    if (activeInput[0].value === "Cat" || activeInput[0].value.includes("Cat")) {
        chrome.storage.sync.get({ keyCat: [] }, (result) => {
        word1.innerText = result.keyCat[0];
        word2.innerText = result.keyCat[1];
        word3.innerText = result.keyCat[2];
      });
    } else if (activeInput[0].value === "Helo") {
        chrome.storage.sync.get({ keyHelo: [] }, (result) => {
            word1.innerText = result.keyHelo[0];
            word2.innerText = result.keyHelo[1];
            word3.innerText = result.keyHelo[2];
        });
    } else if (activeInput[0].value === "heldp") {
        chrome.storage.sync.get({ keyHeldp: [] }, (result) => {
            word1.innerText = result.keyHeldp[0];
            word2.innerText = result.keyHeldp[1];
            word3.innerText = result.keyHeldp[2];
        });
    } else if (activeInput[0].value !== "heldp" && activeInput[0].value !== "Cat" && activeInput[0].value !== "Helo") {
            word1.innerText = "";
            word2.innerText = "";
            word3.innerText = "";
    }
    document.body.append(word1);
    document.body.append(word2);
    document.body.append(word3);   
});

word1.addEventListener("click", function () { 
    activeInput[0].value = word1.innerText;
    //activeInput[0].value.replace(/Cat/g, word1.innerText);

    word1.innerText = "";
    word2.innerText = "";
    word3.innerText = "";

    document.body.append(word1);
    document.body.append(word2);
    document.body.append(word3); 
});
word2.addEventListener("click", function () { 
    activeInput[0].value = word2.innerText;

    word1.innerText = "";
    word2.innerText = "";
    word3.innerText = "";

    document.body.append(word1);
    document.body.append(word2);
    document.body.append(word3); 
});
word3.addEventListener("click", function () { 
    activeInput[0].value = word3.innerText;

    word1.innerText = "";
    word2.innerText = "";
    word3.innerText = "";

    document.body.append(word1);
    document.body.append(word2);
    document.body.append(word3); 
});
