import React, { useState } from 'react';
import FilterBox from "./filterBox";
import FilterBoxSIngleSelect from "./filterBoxSIngleSelect";
import { Card, Row, Col, Divider, Button, Select,Typography } from "antd";
import Filters from './filterConfig';

const { Option } = Select;

const AllFilters = () => {
  const [stateValue,setStateValue] = React.useState('aetna');
  const [clientFilters,setclientFilters] = React.useState(Filters.client.Aetna);

  function handleChange(value) {
    setStateValue(value);
    if(value == 'aetna'){
      setclientFilters(Filters.client.Aetna);
    }
    if(value == 'bcbs'){
      setclientFilters(Filters.client.BCBS);
    }
    if(value == 'cdphp'){
      setclientFilters(Filters.client.CDPHP);
    }
    if(value == 'healthfirst'){
      setclientFilters(Filters.client.Healthfirst);
    }
    if(value == 'baycare'){
      setclientFilters(Filters.client.Baycare);
    }
  }

  return (
    <Card hoverable>
      <Row gutter={4} align="bottom" className='align-center'>
      <Col span={3}>
      <Typography>Select Client</Typography>
        <Select defaultValue="aetna" style={{ width: 160 }} onChange={handleChange}>
          <Option value="aetna">Aetna</Option>
          <Option value="baycare">Baycare</Option>
          <Option value="bcbs">BCBS</Option>
          <Option value="cdphp">CDPHP</Option>
          <Option value="healthfirst">Healthfirst</Option>
        </Select>
        </Col>
      </Row>
      <Row gutter={4} align="bottom" className='row-padding'>
           {clientFilters.map((item)=>{
             switch (item.type) {
               case 'select':
                 return(
                  <>
                <Col className="gutter-row"  span={4}>
                 <FilterBox TitlePlaceHolder={item.label} NamePlaceHolder={item.placeholder} />
                 </Col>
                 </>
                 )
                 break;
             
               default:
                 return(<div></div>)
                 break;
             }
           })}
        <Col className="gutter-row" span={3}>
          <Button type="primary">Find Plans</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AllFilters;
