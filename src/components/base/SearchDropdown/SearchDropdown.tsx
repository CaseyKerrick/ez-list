import React from 'react';
import './SearchDropdown.css';
import sortDownIcon from './sort-down-white.png';
import sortUpIcon from './sort-up-white.png';


type PropType = {
  dropdownItems: string[];
  priorityItems?: string[];
  enableSearch: boolean;
  strict: boolean;
  title: string;
  onChange: Function;
  value: string;
  width?: number;
  required?: boolean;
};

function SearchDropdown(props: PropType) {

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [filteredDropdownItems, setFilteredDropdownItems] = React.useState(props.dropdownItems);
  const [filteredPriorityItems, setFilteredPriorityItems] = React.useState(props.priorityItems || []);
  const [error, setError] = React.useState(false);
  const contentWidth = props.width || 250;

  const handleSearchChange = (e: any) => {
    props.onChange(e.target.value);
    
    if (error) {
      setError(false);
    }
    if (!dropdownOpen) {
      setDropdownOpen(true);
    }

    const newDropdownItems = props.dropdownItems.filter(item => item.toUpperCase().includes(e.target.value.toUpperCase()));
    setFilteredDropdownItems(newDropdownItems);

    const newPriorityItems = (props.priorityItems || []).filter(item => item.toUpperCase().includes(e.target.value.toUpperCase()));
    setFilteredPriorityItems(newPriorityItems);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectDropdownItem = (item: string) => () => {
    props.onChange(item);
    setError(false);
    setDropdownOpen(false);
  };

  const calcDropdownBorderRadius = () => {
    const borderRadius = dropdownOpen ? '0px' : '10px';
    return { borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius };
  };

  const inputBlur = () => {
    if (!props.value || (props.strict && !isValueInItems())) {
      setError(true);
    }
  };

  const isValueInItems = (value: string = props.value) => {
    return (props.priorityItems || []).includes(value) || props.dropdownItems.includes(value);
  };

  return (
    <div className='searchDropdownContainer'>
      <div className={`searchDropdownTitle ${error && 'showError'}`}>{props.title}{props.required && '*'}</div>
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
          { filteredPriorityItems && filteredPriorityItems.map(item =>
            <div className={`dropdownItem ${item === props.value && 'highlightedItem'}`} key={item} onClick={selectDropdownItem(item)}>{item}</div>
          )}
          { filteredPriorityItems && filteredPriorityItems.length > 0 &&
            <hr className='dropdownItemsImportanceDivider' />
          }
          { filteredDropdownItems && filteredDropdownItems.map(item => 
            <div className={`dropdownItem ${item === props.value && 'highlightedItem'}`} onClick={selectDropdownItem(item)} key={item}>{item}</div>
          )}
        </div>
      }
    </div>
  );
}

export default SearchDropdown;