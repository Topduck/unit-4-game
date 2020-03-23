
    let wins = $("#wins");
    let losses = $("#losses");
    let goal_display = $(".goal");
    let score_display = $(".score");
    var win = 0
    var loss = 0
    //generate random values for buttons
    function outerGame(){
        console.log("outerGame_Called!")
        var cp = [];
        var g = Math.floor(Math.random() * (120-19+1)+19);
        var s =0;
        for(i=0;i<=3;i++){
            c_points =  Math.floor(Math.random() * (12-1+1)+1);
            cp.push(c_points);
        }
        console.log(cp);
        console.log(g);
        console.log("Curerent s value: "+s);
    //show initial values
    losses.html(loss);
    wins.html(win);wins.html(win);
    goal_display.html(g);
    score_display.html(s);
    //game begins
        //add points via buttons
        $("#crystal_1").on("click",function(){
            console.log("button 1 clicked");
            s = s + cp[0];
            score_display.html(s);
            console.log("Current s value in func: "+s);
            console.log("Current g value in func: "+g);
            check()
        });
        $("#crystal_2").on("click",function(){
            console.log("button 2 clicked");
            s = s + cp[1];
            score_display.html(s);
            console.log("Current s value in func: "+s);
            console.log("Current g value in func: "+g);
            check()
        });
        $("#crystal_3").on("click",function(){
            console.log("button 3 clicked");
            s = s + cp[2];
            score_display.html(s);
            console.log("Current s value in func: "+s);
            console.log("Current g value in func: "+g);
            check()
        });
        $("#crystal_4").on("click",function(){
            console.log("button 4 clicked");
            s = s + cp[3];
            score_display.html(s);
            console.log("Current s value in func: "+s);
            console.log("Current g value in func: "+g);
            check()
        });
        function check(){
            console.log("Check Called")
        if(s===g){
            win++ 
            console.log("win")
            wins.html(win);
            cp = [];
            s =0;
            outerGame();
        }
        else if(s > g){
            loss++
            console.log("loss")
            losses.html(loss);
            cp = [];
            s =0;
            outerGame();
        }
    }   
}
outerGame()

    