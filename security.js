class Security{
    constructor(){
        this.input1=createInput("code1")
        this.input1.position(100,90);
        this.button1=createButton("Check");
        this.button1.position(100,120);

        this.input2=createInput("code2")
        this.input2.position(700,190);
        this.button2=createButton("Check");
        this.button2.position(700,220);

        this.input3=createInput("code3")
        this.input3.position(100,290);
        this.button3=createButton("Check");
        this.button3.position(100,320);


    }

    display(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(ans1,this.input1.value())){
                      this.button1.hide()
                      this.input1.hide()
                      score=score+1;

            }
        }) 

        this.button2.mousePressed(()=>{
            if(system.authenticate(ans2,this.input2.value())){
                      this.button2.hide()
                      this.input2.hide()
                      score=score+1;

            }
        }) 

        this.button3.mousePressed(()=>{
            if(system.authenticate(ans3,this.input3.value())){
                      this.button3.hide()
                      this.input3.hide()
                      score=score+1;

            }
        }) 
    }
}