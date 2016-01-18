"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var AuthorActions = require('../../actions/authorActions.js');

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function(author, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(author.id);
    toastr.success('Author ' + author.firstName + ' ' + author.lastName + ' Deleted');
  },

  render: function() {

    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author)}>Delete</a></td>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
        <div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.props.authors.map(createAuthorRow, this)}
              </tbody>
            </table>
        </div>
      );
  }
});

module.exports = AuthorList;
