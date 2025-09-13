import React from 'react';
import './SearchDropdown.css';
import sortDownIcon from './sort-down-white.png';
import sortUpIcon from './sort-up-white.png';

type PropType = {
  title: string;
  required?: boolean;
  priorityItems?: string[];
  dropdownItems: string[];
  value: string;
  onChange: Function;
  enableSearch: boolean;
  strict: boolean;
  width?: number;
  default?: string;
};

function SearchDropdown(props: PropType) {

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [filteredDropdownItems, setFilteredDropdownItems] = React.useState(props.dropdownItems);
  const [pristine, setPristine] = React.useState(true);
  const [error, setError] = React.useState(false);
  const contentWidth = props.width || 250;

  React.useEffect(() => {
    if (pristine && props.default) {
      props.onChange(props.default);
    }
  }, [pristine, props.default, props.onChange, props]);


  const handleSearchChange = (e: any) => {
    props.onChange(e.target.value);
    setError(false);
    setDropdownOpen(true);
    setPristine(false);

    const newDropdownItems = props.dropdownItems.filter(item => item.toUpperCase().includes(e.target.value.toUpperCase()));
    setFilteredDropdownItems(newDropdownItems);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectDropdownItem = (item: string) => () => {
    props.onChange(item);
    setError(false);
    setDropdownOpen(false);
    setPristine(false);
  };

  const calcDropdownBorderRadius = () => {
    const borderRadius = dropdownOpen ? '0px' : '10px';
    return { borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius };
  };

  const inputBlur = () => {
    if ((!pristine && !props.value) || (props.strict && !isValueInItems())) {
      setError(true);
    }
  };

  const isValueInItems = (value: string = props.value) => {
    return (props.priorityItems || []).includes(value) || props.dropdownItems.includes(value);
  };

  return (
    <div className='searchDropdownContainer'>
      <div className={`searchDropdownTitle ${props.required && error && 'showError'}`}>{props.title}{props.required && '*'}</div>
      <input
        type='text'
        className='searchDropdownInput'
        onChange={handleSearchChange}
        style={{ ...calcDropdownBorderRadius(), width: `${contentWidth}px` }}
        value={props.value}
        disabled={!props.enableSearch}
        onBlur={inputBlur}
      />
      { dropdownOpen
          ? <img src={sortUpIcon} className='dropdownIcon' alt='Sort up icon' onClick={toggleDropdown} />
          : <img src={sortDownIcon} className='dropdownIcon' alt='Sort down icon' onClick={toggleDropdown} />
      }
      { dropdownOpen &&
        <div className='dropdownContainer' style={{ width: `${contentWidth + 20}px` }}>
          { filteredDropdownItems && filteredDropdownItems.map(item => 
            <div className={`dropdownItem ${item === props.value && 'highlightedItem'}`} onClick={selectDropdownItem(item)} key={item}>{item}</div>
          )}
        </div>
      }
      { !!props.priorityItems?.length &&
        <div className='suggestions' style={{ width: `${contentWidth + 20}px` }}>
          { props.priorityItems && props.priorityItems.map(item => 
            <div className='suggestionBubble' onClick={selectDropdownItem(item)} key={`priority_${item}`}>{item}</div>
          )}
        </div>
      }
    </div>
  );
}

export default SearchDropdown;