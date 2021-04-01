class Question{
	constructor(){
		this.title = createElement('h1')
		this.question = createElement('h3')
		this.option1 = createElement('h4')
		 this.option2 = createElement('h4')
		 this.option3 = createElement('h4')
		 this.option4 = createElement('h4')
		 this.input1 = createInput("Enter your Name");
		 this.input2 = createInput("Enter your Answer");
		 this.button = createButton("Submit")

	}

	hide(){
		this.title.hide()
		this.input1.hide()
		this.input2.hide()
		this.button.hide()
	}

	display(){
		this.title.html("QUIZ")
		this.title.position(350,0)

		this.question.html("hello")
		this.question.position(150,180)

		this.option1.html("a")
		this.option1.position(150,100)

		this.option2.html("a")
		this.option2.position(150,120)

		this.option3.html("a")
		this.option3.position(150,140)

		this.option4.html("a")
		this.option4.position(150,160)

		this.input1.position(150,230)
		this.input2.position(350,230)
		this.button.position(290,300)

		this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     
    });
	}


}