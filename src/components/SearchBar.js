import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }
    render() {
        return (
          <div className="Search">
            <Autocomplete
            getItemValue={(item) => item.label}
            items={[
              { id: 'foo', label: 'foo' },
              { id: 'bar', label: 'bar' },
              { id: 'baz', label: 'baz' },
            ]}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
            }
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
        </div>
          );
    }
}

export default SearchBar;