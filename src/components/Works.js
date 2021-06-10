import React, {useState} from 'react'
import "../styles/tab.css";
import "../styles/works.css";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import WorkList from "./WorkList";
import ReactDOM from "react-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function Works() {

    const [items, setItems] = useState(WorkList);
    
    const filterItem = (categItem) => {
        const updatedItems = WorkList.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
  return (
      <div className="container">
         <div className="works-content">
            <div className="works-header">
                <h1>Works</h1>
            </div>
            <div className="menu-tabs">
                <div className="menu-tab">
                    <button className="btn-dark" onClick={() => setItems(WorkList)}>All</button>
                    <button className="btn-dark" onClick={() => filterItem('designs')}>Designs</button>
                    <button className="btn-dark" onClick={() => filterItem('website')}>Website</button>
                    <button className="btn-dark" onClick={() => filterItem('reactjs')}>ReactJS</button>
                    <button className="btn-dark" onClick={() => filterItem('vuejs')}>Vue.js</button>
                </div>
            </div>
          </div>
          <div className="menu-items">
                <div className="row">
                    <div className="col-11 item">
                        <div className="row">
                            <Carousel breakPoints={breakPoints}>
                                {items.map((item) => (
                                    <Item key={item.id}>
                                        <div className="item">
                                            <div className="item1 col-12">
                                                <div className="row item-inside">
                                                    <div className="col-12">
                                                        <div className="img-div">
                                                            <img src={item.image} alt={item.name} className="img" />
                                                        </div>
                                                        <div className="item-content">
                                                            <h1><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></h1>
                                                            <p>{item.description}</p>
                                                            {item.tag.map((tag) => (
                                                                <div className="tag" key={tag}>
                                                                    <span className="badge-light">{tag}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
          
        
    </div>
  );
}
const rootElement = document.getElementById("root");

export default Works;

ReactDOM.render(<Works />, rootElement);