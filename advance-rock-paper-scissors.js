let score = JSON.parse(localStorage.getItem('score'));
            let result='';
            let computerValue = '';
            let playerMove='';

            if(score===null){
            score = {
                wins :0,
                looses :0,
                tie :0
            };
        }

        updateScoreElement();
        
        let isAutoPlaying= false;
        let IntervalId;
            function autoPlay(){
                if(!isAutoPlaying){
                    IntervalId = setInterval(()=>{
                        const playerMove= pickComputerMove();
                        playGame(playerMove);
                    
                    },1500);
                    isAutoPlaying=true;
                }
                else{
                    clearInterval(IntervalId);
                    isAutoPlaying=false;
                }
            }

            document.querySelector('.js-rock-button').addEventListener('click',()=>{
                playGame('Rock');
            });
            document.querySelector('.js-paper-button').addEventListener('click',()=>{
                playGame('Paper');
            });
            document.querySelector('.js-scissors-button').addEventListener('click',()=>{
                playGame('Scissors');
            });

        
            function playGame(playerMove){
              const computerValue = pickComputerMove();

                

                if(playerMove==='Rock'){
                        if(computerValue==='Rock'){
                            result='tie';
                        }
                        else if(computerValue==='Paper'){
                            result='You loose';   
                        }
                        else if(computerValue==='Scissors'){
                            result='You win';
                        }
                    
                }
                else if(playerMove==='Paper'){
                        if(computerValue==='Rock'){
                            result='You win';
                        }
                        else if(computerValue==='Paper'){
                            result='tie';   
                        }
                        else if(computerValue==='Scissors'){
                            result='You loose';
                        }
                    
                    }
                else if  (playerMove==='Scissors'){
                        if(computerValue==='Rock'){
                            result='You loose';
                        }
                        else if(computerValue==='Paper'){
                            result='You win';   
                        }
                        else if(computerValue==='Scissors'){
                            result='tie';
                        }        
                }

                if(result==='You win'){
                    score.wins+=1;
                }
                else if(result==='You loose'){
                    score.looses+=1;
                }
                else if(result==='tie'){
                    score.tie+=1;
                
                }

            function moves(){
            document.querySelector('.moves').innerHTML= ` You
            <img class="move-icon" src="images/rock-paper-scissors/${playerMove}-emoji.png">
            <img class="move-icon" src="images/rock-paper-scissors/${computerValue}-emoji.png">
            Computer`;
            }
            
            localStorage.setItem('score',JSON.stringify(score));
            
            updateScoreElement();
            endresult();
            moves();      
            }

            function updateScoreElement(){
                document.querySelector('.score').innerHTML= `Wins: ${score.wins} Losses: ${score.looses} Ties: ${score.tie}`;
            }
            function endresult(){
                document.querySelector('.result').innerHTML= result;
            }
            
        
            function pickComputerMove(){
                const randomNumber=Math.random();

                
        
                if(randomNumber>=0 && randomNumber<=1/3){
                    computerValue='Rock';
                }
                else if(randomNumber>=1/3 && randomNumber<=2/3){
                    computerValue='Paper';
                }
                else if(randomNumber>=2/3 && randomNumber<=1 ){
                    computerValue='Scissors';
                }
                return computerValue;
            }
            

            
                