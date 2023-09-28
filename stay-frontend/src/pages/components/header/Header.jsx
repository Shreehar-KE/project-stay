import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import {format} from 'date-fns';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState (false);
  const [options, setOptions] = useState ({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleCounter = (name, operation) => {
    setOptions(prev=>{
      return {
        ...prev, [name]: operation === "-" ? options[name] - 1 : options[name] + 1, 
      };
    });
  };

  return (
    <div className="header">
        <div className="headerContainer">
            <h1 className="headerTitle">One Search to Find them All</h1>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input 
                      type="text" 
                      className="headerSearchInput" 
                      placeholder="Enter the location"
                      />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                  <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                    {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/ yyyy")}`}
                  </span>
                  {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="headerSearchDate"
                  />}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                  <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
                    {`${options.adults} adults · ${options.children} children · ${options.rooms} rooms`}
                  </span>
                  {openOptions && <div className="options">
                    <div className="optionItems">
                      <span className="optionText">Adults</span>
                      <div className="optionItemCounter">
                        <button 
                          disabled={options.adults<=1}
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("adults","-")}>
                            -
                        </button>
                        <span className="optionItemCounterNumber">{options.adults}</span>
                        <button 
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("adults","+")}>
                            +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionText">Children</span>
                      <div className="optionItemCounter">
                        <button 
                          disabled={options.children<=0}
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("children","-")}>
                            -
                        </button>
                        <span className="optionItemCounterNumber">{options.children}</span>
                        <button 
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("children","+")}>
                            +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionText">Rooms</span>
                      <div className="optionItemCounter">
                        <button 
                          disabled={options.rooms<=1}
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("rooms","-")}>
                            -
                        </button>
                        <span className="optionItemCounterNumber">{options.rooms}</span>
                        <button 
                          className="optionItemCounterButton" 
                          onClick={()=> handleCounter("rooms","+")}>
                            +
                        </button>
                      </div>
                    </div>
                  </div>}
                </div>
                <div className="headerSearchItem">
                  <button className="headerSearchButton">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header