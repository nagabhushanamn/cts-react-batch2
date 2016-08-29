


//---------------------------------------------------

// algorithms
var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

//-----------------------------------------------
var StarsFrame = React.createClass({
    render: function () {
        let stars = [];
        let numberOfStars = this.props.numberOfStars;
        for (let i = 0; i < numberOfStars; i++){
            stars.push(
                <span key={i} className="glyphicon glyphicon-star"></span>
            );
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars} 
                </div>    
            </div>    
        );  
    }
});
//-----------------------------------------------
var ButtonFrame = React.createClass({
    render: function () {

    let button;
    let correct = this.props.correct; 
    let checkAnswer = this.props.checkAnswer; 
    let selectedNumbers = this.props.selectedNumbers;    
    let acceptAnswer = this.props.acceptAnswer;    
    let redraw = this.props.redraw;
    switch (correct) {
        case true:
                button = (
                    <button className="btn btn-success btn-lg" onClick={acceptAnswer}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                );
                break;
            case false:
                button = (
                        <button className="btn btn-danger btn-lg">
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>    
                        );
            break;

            default:       
            let disabled = (selectedNumbers.length === 0);
            button = (<button onClick={checkAnswer} disabled={disabled} className="btn btn-primary btn-lg">=</button>); 
    }

    return (

        <div id="button-frame">
            {button}
            <br/><br/>
            <button className="btn btn-warning btn-xs" onClick={redraw} disabled={this.props.redraws===0}>
                {this.props.redraws}&nbsp;<span className="glyphicon glyphicon-refresh"></span>
            </button>    
        </div>    
    );  
    }
});
//-----------------------------------------------
var AnswerFrame = React.createClass({
    render: function () {

        var unselectNumber = this.props.unselectNumber;
        
        var numbers = this.props.selectedNumbers.map(number => { 
            return (
                <span key={number} className="number" onClick={unselectNumber.bind(null,number)}>
                    {number}
                </span>
            )
        });

        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>    
        );  
    }
});
//-----------------------------------------------
var NumbersFrame = React.createClass({
    render: function () {
       
        let numbers = [];
        let selectNumber = this.props.selectNumber;
        let selectedNumbers = this.props.selectedNumbers;
        let usedNumbers = this.props.usedNumbers;

        for (let i = 1; i <= 9; i++){
            let className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
                className+=" used-"+(usedNumbers.indexOf(i)>=0)
            numbers.push(
                <div key={i} className={className} onClick={selectNumber.bind(null,i)}>
                    {i}
                </div>
            );
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                   {numbers} 
                </div>
            </div>    
        );  
    }
});
//-----------------------------------------------
var DoneFrame = React.createClass({
    render: function () {
        return (
            <div id="">
                <div className="well text-center">
                    <h2>{this.props.doneStatus}</h2>
                </div>
            </div>    
        );  
    }
});
//-----------------------------------------------
var Game = React.createClass({
    getInitialState: function () {
        return {
            selectedNumbers: [],
            usedNumbers:[4,6,8],
            numberOfStars: Math.floor(Math.random() * 9) + 1,
            correct: null, // true | false | null
            redraws: 5,
            doneStatus: null
        };  
    },
    selectNumber: function (clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0  && this.state.usedNumbers.indexOf(clickedNumber) < 0 ) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) });
        }    
    },
    unselectNumber: function (clickedNumber) {
        let selectedNumbers = this.state.selectedNumbers;
        let index = selectedNumbers.indexOf(clickedNumber);
        selectedNumbers.splice(index, 1);
        this.setState({ selectedNumbers: selectedNumbers});
    },
    sumOfSelectedNumber: function () {
        return this.state.selectedNumbers.reduce(function (a, b) { 
            return a + b;
        },0);  
    },
    checkAnswer: function () {
        var correct = (this.state.numberOfStars === this.sumOfSelectedNumber());
        this.setState({correct:correct});
    },
    acceptAnswer: function () {
        
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers); 
        this.setState({
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null,
            numberOfStars:Math.floor(Math.random() * 9) + 1
        }, function () { 
            this.updateDoneStatus();
        });

    },
    redraw: function () {
        
        if (this.state.redraws > 0) {

            // async            
            this.setState({  
                selectedNumbers: [],
                correct: null,
                numberOfStars: Math.floor(Math.random() * 9) + 1,
                redraws:this.state.redraws-1
            }, function () { 
                this.updateDoneStatus();
            });
        }    

    },
    possibleSolution: function () {
        let numberOfStars = this.state.numberOfStars;
        let possibleNumbers=[];
        for (let i = 1; i < 9; i++){
            if (this.state.usedNumbers.indexOf(i) < 0) {
                possibleNumbers.push(i); // un-used
            }
        }
        return possibleCombinationSum(possibleNumbers,numberOfStars);
    },
    updateDoneStatus: function () {
       
        if (this.state.usedNumbers.length === 9) {
            this.setState({ doneStatus: 'Done. Nice ' });
            return;
        }
        if (this.state.redraws === 0 || !this.possibleSolution()) {
             this.setState({doneStatus:'Game Over! '});
        }
    },
    render: function () {

        let bottonFrame;     
        
        if (this.state.doneStatus) {
            bottonFrame = (<DoneFrame doneStatus={this.state.doneStatus}/>);
        } else {
            bottonFrame = (
                <NumbersFrame
                selectNumber={this.selectNumber}
                selectedNumbers={this.state.selectedNumbers}
                usedNumbers={this.state.usedNumbers}
                />);
        }

        return (
            <div >  
                <h2>Play Nine</h2>
                <hr/>
                <div className="clearfix">
                    <StarsFrame numberOfStars={this.state.numberOfStars}/>
                    <ButtonFrame
                        correct={this.state.correct}
                        checkAnswer={this.checkAnswer}
                        selectedNumbers={this.state.selectedNumbers} 
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        redraws={this.state.redraws}/>
                    <AnswerFrame
                        selectedNumbers={this.state.selectedNumbers}
                        unselectNumber={this.unselectNumber}/>
                </div>

                {bottonFrame}   
                
            </div>    
        );  
    }
});
//-----------------------------------------------

ReactDOM.render(<Game />,document.getElementById('play9'));