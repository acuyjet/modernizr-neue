'use strict';
var _ = require('lodash');
var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var util = require('./util');
var pluralize = util.pluralize;
var DOM = React.DOM, div = DOM.div, ul = DOM.ul, li = DOM.li;

var MetadataList = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var props = this.props;
    var items = props.items || [];
    var str = props.str;

    items = _.map(items, function(item, index) {
      return li({
        key: props.keyBase + index
      }, item);
    });

    return (
      div({className: 'box'},
        div(null, pluralize(str, items.length)),
        ul(null, items)
      )
    );
  }
});

module.exports = MetadataList;
