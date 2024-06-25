let Charcoll=document.querySelector('.char')
let Mainchar =document.querySelector('.mainchar')
let Mainvid=document.querySelector('.main-vid')
let Days=document.querySelector('.days')
let btncoll=document.querySelector('.btn')
let Videos=document.querySelector('.vids video')
let Audios=document.querySelector('.vids audio')
let Maindata
let get1=0
let get2=0
let num4=0
 const Plist = [[5,1,2,3,4],[5,1,2,3,4],[6,1,2,3,4,5],[7,1,2,3,4,5,6],]
 
    fetch('src.json')
        .then(res => res.json())
        .then(data => {
console.log(data.children[0].children[0].children[1].name)
for (let I1= 0; I1 < 15; I1++) {
    let chars = document.createElement('div')
    chars.innerHTML=`
    <img id='${I1}' src="img/${data.children[I1].name}.png" alt=""  onclick="getnum(this.id)">
    `
    Charcoll.append(chars)
}
Maindata=data
        })


        function getnum(num){
            Mainchar.style.display ='none'
            Charcoll.style.display ='none'
            Days.style.display ='flex'
            Mainvid.style.display ='none'
            get1 = parseInt(num)
        }
    function getnum2(num1){
        Mainchar.style.display ='none'
            Charcoll.style.display ='none'
            Days.style.display ='none'
            Mainvid.style.display ='flex'         
             get2 = parseInt(num1)

            for (let I2= 0; I2 < Plist[num1].length ; I2++) {
                let btns = document.createElement('div')
                btns.innerHTML=`
                <button id="${Plist[num1][I2]}" onclick="Switchvid(this.id)">${I2 + 1}</button>
                `
                btncoll.append(btns)
            }
            
            Videos.src=`
            file/${Maindata.children[get1].name}/${Maindata.children[get1].children[get2].name}/${Maindata.children[get1].children[get2].children[Plist[get2][0]].name}
            `
            
        }

       function Switchvid(num3){

        num4 =parseInt(num3)
        
            Videos.src=`
            file/${Maindata.children[get1].name}/${Maindata.children[get1].children[get2].name}/${Maindata.children[get1].children[get2].children[num3].name}
            `
            Audios.src=`
            file/${Maindata.children[get1].name}/${Maindata.children[get1].children[get2].name}/${Maindata.children[get1].children[get2].children[0].name}/${Maindata.children[get1].children[get2].children[0].children[num4 - 1].name}
            `
            Videos.play()
            Videos.loop = true
            Audios.play()
            Audios.loop = true

    
        }



    function hide1(){
        Mainchar.style.display ='flex'
        Charcoll.style.display ='flex'
        Days.style.display ='none'
        Mainvid.style.display ='none'
    }
    function hide2(){
        Mainchar.style.display ='none'
        Charcoll.style.display ='none'
        Days.style.display ='flex'
        Mainvid.style.display ='none'
        
        while (btncoll.hasChildNodes()) {
            btncoll.removeChild(btncoll.firstChild);
          }

          Videos.pause()
          Audios.pause()
    }
