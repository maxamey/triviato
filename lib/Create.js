import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      games: [
        {
          name: "",
          questions: [
            {
              type: "multiple",
              prompt: "",
              correct: "",
              choices: {
                a: "",
                b: "",
                c: "",
                d: ""
              }
            }
          ]
        }
      ]
    }
  },
  componentWillMount() {
    // var ref = firebase.database().ref("questions")
    // ref.once("value", (snapshot) => {
    //   //use snapshot.exportVal() to GET from database
    //   this.setState({
    //
    //   })
    // })
  },
  qaSubmitHandler(e) {
    var xhr = new XMLHttpRequest()
    var questionInputText = this.refs.questionInputText.value
    var choiceInputTextA = this.refs.choiceInputTextA.value
    var choiceInputTextB = this.refs.choiceInputTextB.value
    var choiceInputTextC = this.refs.choiceInputTextC.value
    var choiceInputTextD = this.refs.choiceInputTextD.value
    var titleInputText = this.refs.titleInputText.innerHTML
    e.preventDefault()

    this.setState({
      games: [
        {
          name: titleInputText,
          questions: [
            {
              type: "multiple",
              prompt: questionInputText,
              correct: "",
              choices: {
                a: choiceInputTextA,
                b: choiceInputTextB,
                c: choiceInputTextC,
                d: choiceInputTextD,
              }
            }
          ]
        }
      ]
    })
    // xhr.open("PUT", "https://triviato-eedfa.firebaseio.com/")
    // xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.send()
  },
  render() {
    return(
      <main>
        <nav className="gameNavTree">
          {this.state.games.map((game, i)=>{
            return game.questions.map((question, i)=>{
              return <a className="gameNavTree__item"
                        href="#">
                {question.prompt}
                </a>
            })
          })}
        </nav>
        <div className="formsContainer">
          <h1 className="gameTitle"
              contentEditable="true"
              ref="titleInputText">
            Game Title
          </h1>
          <form className="qaForm"
                method="POST"
                onSubmit={this.qaSubmitHandler}>
            <input type="text"
                   placeholder="Write your question here..."
                   className="questionInput"
                   ref="questionInputText"/>
            <input type="text"
                   className="choiceInput choiceInput--a"
                   placeholder="a."
                   ref="choiceInputTextA"/>
            <input type="text"
                   className="choiceInput choiceInput--b"
                   ref="choiceInputTextB"
                   placeholder="b."/>
            <input type="text"
                   className="choiceInput choiceInput--c"
                   ref="choiceInputTextC"
                   placeholder="c."/>
            <input type="text"
                   className="choiceInput choiceInput--d"
                   ref="choiceInputTextD"
                   placeholder="d."/>
            <input type="submit"
                   value="save question"
                   className="qaSubmit"/>
          </form>
        </div>
      </main>

    )
  }
})