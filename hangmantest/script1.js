
var mainCont = document.createElement('div')
mainCont.classList.add('container','mainCont')
document.body.append(mainCont)


var mainMess = document.createElement('div')
mainMess.innerHTML='<b>Start guessing. Use keyboard/ On Screen keys. 6 wrong guesses, the man dies.<b>'
mainMess.classList.add('mainMess')
mainCont.append(mainMess)

var hangArea = document.createElement('div')
hangArea.classList.add('hangArea')
mainCont.append(hangArea)

var defaultImage = document.createElement('img')
        defaultImage.src = 'default.jpg'
        defaultImage.classList.add('image')
        hangArea.append(defaultImage)

var textRow = document.createElement('div')
textRow.classList.add('textRow')
//textRow.innerHTML = 'test'
mainCont.append(textRow)

var keyRow = document.createElement('div')
keyRow.classList.add('keyRow')
//keyRow.innerHTML = 'test'
mainCont.append(keyRow)

var resRow = document.createElement('div')
resRow.classList.add('resRow')
//resRow.innerHTML = 'test'
mainCont.append(resRow)


var codes = {a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, '-' : 189, ' ':32}


      
        
var fill = 0
var dup = []
var failCount = 0
var hold = ' '
       

    


        
        var address = fetch("https://random-words-api.vercel.app/word")
        .then((response) => response.json())
        .then((user) => {
          return user[0]
        })



        var printAddress = () => {
        address.then((data) => {
           // console.log(data)

            var Word = data.word.toLowerCase()

            for(i=0;i<Word.length;i++)
        {
            var box = document.createElement('input')
            box.type = 'text'
            box.disabled = 'disabled'
         //  box.value = ' '
            box.name = Word[i]
          //  box.id = 'yes'
            box.classList.add('box')
            textRow.append(box)
        }


        for(let item in codes)
        {
            var keyz = document.createElement('button')
            keyz.value = item 
            keyz.name = 'keyz'
            keyz.setAttribute('onmousedown','typex(this)')
            if(item==' '){
            keyz.innerHTML = 'Space'
            keyz.setAttribute('style','width:75px')}
            else
            keyz.innerHTML= item
            keyz.classList.add('keyz')
            keyRow.append(keyz)

        }

    
        
        window.onkeydown = function(ele){
            var a = ele.keyCode
            

           
            for (let k in codes) {
                if (codes[k] == a) {
                    var showValue = k
                   // console.log(showValue)

                    if(failCount>=3 && failCount<6)
                            resRow.innerHTML = ''

                    if(!Word.includes(showValue))
                    {   
                        if(fill!=Word.length){
                        failCount += 1
                      // console.log('fail keyboard', failCount)
                        if(failCount==1)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail1 = document.createElement('img')
                            fail1.src = 'first.jpg'
                            fail1.classList.add('image')
                            hangArea.append(fail1)
                        }
                        if(failCount==2)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail2 = document.createElement('img')
                            fail2.src = 'second.jpg'
                            fail2.classList.add('image')
                            hangArea.append(fail2)

                        }
                        if(failCount==3)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail3 = document.createElement('img')
                            fail3.src = 'third.jpg'
                            fail3.classList.add('image')
                            hangArea.append(fail3)

                            if(fill==0)
                            resRow.innerHTML = 'Hint:&nbsp' + Word[0]

                        }
                        if(failCount==4)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail4 = document.createElement('img')
                            fail4.src = 'fourth.jpg'
                            fail4.classList.add('image')
                            hangArea.append(fail4)


                        }
                        if(failCount==5)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail5 = document.createElement('img')
                            fail5.src = 'fifth.jpg'
                            fail5.classList.add('image')
                            hangArea.append(fail5)

                            if(fill!=0)
                            resRow.innerHTML = ''

                        }
                        if(failCount==6)
                        {   
                            hangArea.removeChild(hangArea.firstChild)
                            var fail6 = document.createElement('img')
                            fail6.src = 'sixth.jpg'
                            fail6.classList.add('image')
                            hangArea.append(fail6)


                        resRow.innerHTML = 'You Let Him Die!!! See the word below. <br>' + data.word + ':&nbsp' + data.definition + '.<br>' + 'Pronunciation: &nbsp' + data.pronunciation + '.<br>'
                        var refresh = document.createElement('button')
                        refresh.innerHTML = 'Click To Play Again'
                        resRow.append(refresh)
                        refresh.setAttribute('onclick','window.location.reload()')

                        }
                        break
                    }}


                    else{
                        if(failCount>=3 && failCount <6)
                            resRow.innerHTML = ''


                        if(failCount<6)
                        {

                    if(dup.includes(showValue))
                    {
                        //fill = fill
                    }
                    else{
                      
                    var temp = document.getElementsByName(showValue)
                   // console.log(temp)

                    for(i=0;i<temp.length;i++)
                    {
            
                        fill += 1
                        temp[i].value=showValue
                        dup.push(showValue)
                      //  console.log(dup)
                
                    }
                    if(fill==Word.length)
                    {
                        resRow.innerHTML = ' You WIN!! <br>' + data.word + ':&nbsp' + data.definition + '.<br>' + 'Pronunciation: &nbsp' + data.pronunciation + '.<br>'
                        var refresh = document.createElement('button')
                        refresh.innerHTML = 'Click To Play Again'
                        resRow.append(refresh)
                        refresh.setAttribute('onclick','window.location.reload()')
                    }
                  // console.log(fill)
                }} } 


                    

                }
            
           
            }

        
        }


    

        })
        }

        printAddress()

        


                function typex(eve)
                {
                    var a = eve.value


                    var printAdd = () => {
                        address.then((data) => {
                           // console.log(data)   
                        
                            var Word = data.word.toLowerCase()
                        

                            for (let k in codes) {
                                if (k == a) {
                                    var showValue = k
                                 //  console.log(showValue)
                    
                                    if(failCount>=3 && failCount<6)
                                            resRow.innerHTML = ''
                    
                                    if(!Word.includes(showValue))
                                    {   
                                        if(fill!=Word.length){
                                        failCount +=1
                                       // console.log('fail', failCount)
                                        if(failCount==1)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail1 = document.createElement('img')
                                            fail1.src = 'first.jpg'
                                            fail1.classList.add('image')
                                            hangArea.append(fail1)
                                        }
                                        if(failCount==2)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail2 = document.createElement('img')
                                            fail2.src = 'second.jpg'
                                            fail2.classList.add('image')
                                            hangArea.append(fail2)
                    
                                        }
                                        if(failCount==3)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail3 = document.createElement('img')
                                            fail3.src = 'third.jpg'
                                            fail3.classList.add('image')
                                            hangArea.append(fail3)
                    
                                            if(fill==0)
                                            resRow.innerHTML = 'Hint:&nbsp' + Word[0]
                    
                                        }
                                        if(failCount==4)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail4 = document.createElement('img')
                                            fail4.src = 'fourth.jpg'
                                            fail4.classList.add('image')
                                            hangArea.append(fail4)
                    
                    
                                        }
                                        if(failCount==5)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail5 = document.createElement('img')
                                            fail5.src = 'fifth.jpg'
                                            fail5.classList.add('image')
                                            hangArea.append(fail5)
                    
                                            if(fill!=0)
                                            resRow.innerHTML = ''
                    
                                        }
                                        if(failCount==6)
                                        {   
                                            hangArea.removeChild(hangArea.firstChild)
                                            var fail6 = document.createElement('img')
                                            fail6.src = 'sixth.jpg'
                                            fail6.classList.add('image')
                                            hangArea.append(fail6)
                    
                    
                                        resRow.innerHTML = 'You Let Him Die!!! See the word below. <br>' + data.word + ':&nbsp' + data.definition + '.<br>' + 'Pronunciation: &nbsp' + data.pronunciation + '.<br>'
                                        var refresh = document.createElement('button')
                                        refresh.innerHTML = 'Click To Play Again'
                                        resRow.append(refresh)
                                        refresh.setAttribute('onclick','window.location.reload()')
                    
                                        }
                                        break
                                    }}
                    
                    
                                    else{
                                        if(failCount>=3 && failCount <6)
                                            resRow.innerHTML = ''
                    
                    
                                        if(failCount<6)
                                        {
                    
                                    if(dup.includes(showValue))
                                    {
                                       // fill = fill
                                    }
                                    else{
                                      
                                    var temp = document.getElementsByName(showValue)
                                   // console.log(temp)
                    
                                    for(i=0;i<temp.length;i++)
                                    {
                            
                                        fill += 1
                                        temp[i].value=showValue
                                        dup.push(showValue)
                                      //  console.log(dup)
                                
                                    }
                                    if(fill==Word.length)
                                    {
                                        resRow.innerHTML = ' You WIN!! <br>' + data.word + ':&nbsp' + data.definition + '.<br>' + 'Pronunciation: &nbsp' + data.pronunciation + '.<br>'
                                        var refresh = document.createElement('button')
                                        refresh.innerHTML = 'Click To Play Again'
                                        resRow.append(refresh)
                                        refresh.setAttribute('onclick','window.location.reload()')
                                    }
                               // console.log(fill)
                                }} } 
                                    
                    
                                }
                            
                           
                            }




                        
                        })
                        }
            
                        printAdd()
                    

                }





        

       



        








 



  

       
        


