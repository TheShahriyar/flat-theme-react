import React, {useState} from 'react'
import Portfolio1 from "../images/port1.jpg"
import Portfolio2 from "../images/port2.jpg"
import Portfolio3 from "../images/port3.jpg"
import Portfolio4 from "../images/port4.jpg"
import Portfolio5 from "../images/port5.jpg"
import Portfolio6 from "../images/port6.jpg"

const list = [
    { category: "cat1", id:"1", imgSource: Portfolio1 },
    { category: "cat1", id:"2", imgSource: Portfolio2 },
    { category: "cat2", id:"3", imgSource: Portfolio3 },
    { category: "cat1", id:"4", imgSource: Portfolio4 },
    { category: "cat2", id:"5", imgSource: Portfolio5 },
    { category: "cat3", id:"6", imgSource: Portfolio6 }
];

const Element = ({ imgSource }) => (
    <div className="col-md-3" style={{transition: "all 0.4s", WebkitTransition: "all 0.4s"}}><img src={imgSource} alt="Portfolio Image"  /></div>
);

const FilterSorting = () => {
    const [display, setDisplay] = useState(list);

    const handleDisplay = category => {
        const categoryToDisplay = list.filter(item => item.category === category);
        setDisplay(categoryToDisplay);
    };
    return (
        <div className="container" style={{marginTop: "100px", marginBottom: "100px"}}>
            <div className="filter-btn-group" style={{textAlign: "center", marginBottom: "30px"}}>
                <button onClick={() => setDisplay(list)}>All category</button>
                <button onClick={() => handleDisplay("cat1")}>HTML</button>
                <button onClick={() => handleDisplay("cat2")}>Joomla</button>
                <button onClick={() => handleDisplay("cat3")}>WordPress</button>
            </div>
            <div className="row">
                {display.map(element => (
                    <Element key={element.id} {...element} />
                ))}
            </div>
        </div>
    )
}

export default FilterSorting
