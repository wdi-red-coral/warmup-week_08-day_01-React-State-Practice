import React,{Component} from "react";
import "./Student.css";


class Student extends Component {
    state = {
      className: "",
      content: ""
    };
  
    handleClick = () => {
      // console.log("Clicked!!");
      this.setState({
        className: "red",
        content: "I am the mighty" + this.props.name + ", How dare you touch me!!"
      });
    };
  
    handleContentMenu = () => {
      // console.log("Right click!!");
      this.setState({
        className: "blue",
        content: "Stop. Poking. Around!!"
      });
    };
  
    handleDoubleClick = () => {
      // console.log("Dobule Click!!");
      this.setState({
        className: "green",
        content: "STOP IT!!!"
      });
      setTimeout(() => {
        this.setState({
          className: "",
          content: ""
        });
      }, 1000);
    };
    render() {
     
      return (
         //<open tag> ---- </close tag>
        <li
          className={this.state.className}
          onClick={this.handleClick}
          onContextMenu={this.handleContentMenu}
          onDoubleClick={this.handleDoubleClick}
        >
          {this.props.name}
          <br />
          {this.state.content}
        </li>
      );
    }
  }
  
  export default Student;
  