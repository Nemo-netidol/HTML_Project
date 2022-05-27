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
    "ら","り","る","れ","ろ"
    ];

const randomIndex = Math.floor(Math.random() * 66);

// const nameRandomLength = Math.floor(Math.random() * 5);

function randomName(){
    let name = "";
    const nameRandomLength = Math.floor((Math.random() * 3) + 2);;

    for(i = 0; i < nameRandomLength; i++){
        const randomIndex = Math.floor(Math.random() * 66);
        name = name + characters[randomIndex];
    };
    return name;
}
// const nameRandomLength = Math.floor((Math.random() * 3) + 2);
console.log(randomName());



