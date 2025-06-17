
const Button = ({ text = "Click Me" }) => { //props
  const myStyle = {
    color: "white",
    fontWeight: "bolder",
    padding: 10,
    marginTop: 20,
    backgroundColor: "grey"
  }

  return (
    <div>
      <button style={myStyle}>{text}</button>
    </div>
  )
}


export default Button
