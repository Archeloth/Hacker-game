const textarea = document.getElementById('textarea');
let progress = document.getElementById('progress');
const changeColorButton = document.getElementById('colorChange');
const randomTextarea = document.getElementById('randomText');
let levelText = document.getElementById('level');

//Default values
let progressValue = 0;
let difficulty = 1;
let level = 1;
let isRed = false;

const randomText = [
    "tarwrite() {",
    "tl=$1",
    "if command -v gtar &>/dev/null",
    'elif [[ -n "$tops" && -z "$dir" && -n "$excludes" ]]',
    "fi",
    "then",
    'tar -cvpML $tl -f $pn $tops "${dir[@]}" "${filenames[@]}" <&7 &',
    'tar -cvpML $tl -f $pn "${filenames[@]}" <&7 &',
    "tarpid=$!",
    "countlimit=2",
    "return",
    'while [ "$counter" -eq $countlim ]',
    "do",
    "eject $dev",
    'echo "$response" >&7',
    "counter=$(ps -A | grep $tarpid | wc -l)",
    'read -p "Insert next disc and press Enter:" response',
];

function AppendText(){
    if(progressValue<100){
        progressValue += difficulty;
        progress.style.width = `${Math.floor(progressValue)}%`;
        //And adds a random text to the top textarea
        randomTextarea.value += randomText[Math.floor(Math.random()*randomText.length)]+"\n";
        randomTextarea.scrollTop = randomTextarea.scrollHeight;
    }else{
        //WIN
        progressValue = 0;
        progress.style.width = `${progressValue}%`;
        randomTextarea.value = null;
        textarea.value = null;

        //Increase difficulty ( x / 2 )
        difficulty = difficulty / 2;
        level++;
        levelText.innerText = "Level: "+level;
    }
}
function ChangeColor(){
    if(isRed === false){
        document.documentElement.style.setProperty("--main-color","#ff0000");
        isRed = true;
    }else{
        isRed = false;
        document.documentElement.style.setProperty("--main-color","#24b400");
    }
}