const characters = [
    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "ざ","じ","ず","ぜ","ぞ",
    "た","ち","つ","て","と",
    "だ","ぢ","づ","で","ど",
    "な","に","ぬ","ね","の",
    "は","ひ","ふ","へ","ほ",
    "ば","び","ぶ","べ","ぼ",
    "ぱ","ぴ","ぷ","ぺ","ぽ",
    "ま","み","む","め","も",
    "や","ゆ","よ","わ","ん",
    "ら","り","る","れ","ろ",
    "さとし","あべ" 
    ];

const kanjiName = [
                    "山田","木村","一心","山本","北川",
                    "高橋","嵐","花子","千花","冬木",
                     "只野", "二乃", "永" 
                ];

const randomIndex = Math.floor(Math.random() * (65));
const kanjiRandom = Math.floor(Math.random() * 11);

// const nameRandomLength = Math.floor(Math.random() * 5);

function randomName(){
    var name = "";
    const nameRandomLength = Math.floor((Math.random() * 4) + 2); //2-5

    if(nameRandomLength == 5){
        name = kanjiName[Math.floor(Math.random() * 11)]; //0-10
    }
    else if(nameRandomLength < 5){
        for(i = 0; i < nameRandomLength; i++){
            const randomIndex = Math.floor(Math.random() * 65);
            name = name + characters[randomIndex];
        };
    }
    else{
        name = "Error"
    }
    checkN(name)
     // return name;
}

function checkN(name){
    if(name.slice(0, 1) == "ん"){
        name = kanjiName[Math.floor(Math.random() * 11)];
    }
     // return name;
    insertName(name)

}

function insertName(name){
    if(document.getElementById("chanChoice").checked){
        name = name + " chan"
        document.getElementById("textbox").value = name;
    }
    else if(document.getElementById("kunChoice").checked){
        name = name + " kun";
        document.getElementById("textbox").value = name;
    }
    else{
        document.getElementById("textbox").value = name;
    }
}
        
// // const nameRandomLength = Math.floor((Math.random() * 3) + 2);
// console.log(randomName());

const button = document.getElementById("myButton");
button.addEventListener("click", randomName);

function doSomething(){
    if(document.getElementById("chanChoice").checked){
        document.getElementById("textbox").value = "This code is working";
        }
    }

