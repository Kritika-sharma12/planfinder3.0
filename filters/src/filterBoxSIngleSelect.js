import React, { useState } from "react";
import { TreeSelect, Row, Col} from "antd";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import styles from './filters.module.scss';

const x = Array.from({ length: 50 }, (_, i) => ({
    title: `Block ${i + 1}`,
    value: `${i + 1}`
  }));

//   console.log(x)
  
//   const x = ['state', 'sr', 'map','call']
  
//   const x = [{title:'state', value:'california'},{title:'mstate', value:'california'},{title:'nstate', value:'california'}]
  const allIds = x.map(({ value }) => value);

//   console.log(allIds)
  

  const FilterBoxSIngleSelect = (props) => {
    const [selectedValues, setSelectedValues] = useState([]);
  
    return (
        <Row>
          <Col>
            <Typography>{props.TitlePlaceHolder}</Typography>
    
            <TreeSelect
              className="dropdown-width"
              allowClear={true}
              placeholder={props.NamePlaceHolder}
              treeCheckable={false} //if false then single select
              showCheckedStrategy={TreeSelect.SHOW_CHILD}
              dropdownStyle={{ maxHeight: "300px" }}
              onChange={(ids) => {console.log(ids); setSelectedValues(ids)}}
              value={selectedValues}
              maxTagCount={1}
              maxTagPlaceholder={(omittedValues) => `+ ${omittedValues.length}`}
              treeData={[
                {
                  title:
                    selectedValues.length > 0 ? (
                      <span
                        onClick={() => setSelectedValues([])}
                        style={{
                          display: "inline-block",
                          color: "#9776a2",
                          cursor: "pointer",
                        }}
                      >
                        Unselect all
                      </span>
                    ) : (
                      <span
                        onClick={() => setSelectedValues(allIds)}
                        style={{
                          display: "inline-block",
                          color: "#9776a2",
                          cursor: "pointer",
                        }}
                      >
                        Select all
                      </span>
                    ),
                  value: "xxx",
                  disableCheckbox: true,
                  disabled: true,
                },
                ...x,
              ]}
            />
          </Col>
        </Row>
      );
    };
    
  
  
  export default FilterBoxSIngleSelect