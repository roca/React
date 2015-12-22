export default class Tweet extends React.Component {
  render() {
    return (
            <li className="collection-item avatar">
              <i className="material-icons circle">person-pin</i>
              <span className="title">{this.props.name}</span>
              <p>{this.props.name}s {this.props.body}</p>
            </li>
    )
  }

}
