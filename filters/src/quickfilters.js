import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import 'antd/dist/antd.css';
import { Select,Space } from 'antd';
import styles from './filters.module.scss';
import "./index.css";
import FilterBoxSIngleSelect from "./filterBoxSIngleSelect";
import { Card, Row, Col, Divider, Button,Slider, InputNumber, Switch,TreeSelect,Checkbox} from "antd";

class IntegerStep extends React.Component {
    state = {
      inputValue: 0,
    };
  
    onChange = value => {
      this.setState({
        inputValue: value,
      });
    };
  
    render() {
      const { inputValue } = this.state;
      return (
          <>
        <Col span={24}>
        <Row className=' quickfilter-row'>
            <Slider style={{  width: 300 }} range defaultValue={[0, 100]} onChange={this.onChange}   />
        </Row>
        <Row className='quickfilter-row'>
            <Col span={12}>From <InputNumber min={0} max={100} style={{ margin: '0 16px' }} value={inputValue[0]} onChange={this.onChange} /></Col>
            <Col span={12} className="quickfilter-checkbox">To<InputNumber className='quickfilter-inputbox'  min={0} max={100} style={{ margin: '0 16px' }} value={inputValue[1]} onChange={this.onChange} /></Col>
        </Row>
        </Col>
        </>
      );
    }
  }
  class SliderOnly extends React.Component {
    state = {
      inputValue: 0,
    };
  
    onChange = value => {
      this.setState({
        inputValue: value,
      });
    };
  
    render() {
      const { inputValue } = this.state;
      return (
          <>
        <Col span={24}>
        <Row>
            <Col span={12}>{inputValue[0]}</Col><Col span={12} className="quickfilter-checkbox">{inputValue[1]}</Col>
            <Slider style={{  width: 300 }} range defaultValue={[0, 100]} onChange={this.onChange}   />
        </Row>
        </Col>
        </>
      );
    }
  }

const quickfilters  = () => {
    const [currentValue, setCurrentValue] = useState(0)
    return (
      <>
       <Card hoverable className="quick-filter-top">
       <Row>
          <Col span={24} ><div className="quickfilter-title">Premium</div>
          <Row>
            <IntegerStep/>
          </Row>
          <Card style={{maxHeight: 200, overflow: 'auto'}} className='quickfilter-row'>
          <Row className='quickfilter-row'>
            <Col span={18}><div className="quickfilter-text">Plans with only part D premium</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox  /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plans without only part D premium</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plans with part B Giveback</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plans without part B Giveback</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Provides health and drug coverage</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plans with partial dual</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plans without partial dual</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plan with full dual</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Plan without full dual</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          </Card>
          </Col>
          <hr/>
       </Row>
       <Row>
       <Col span={24} ><div className="quickfilter-title quickfilter-row">Enrollment</div>
          <Row className='quickfilter-row'>
              <Col span={16}>Enrollment Month</Col>
              <Col span={8} className="quickfilter-dropdown"><FilterBoxSIngleSelect /></Col>
          </Row>
          <Row className='quickfilter-row quickfilter-custom-div quickfilter-row'>
            <Col span={4}>Enr Range</Col> 
            <Col span={18}><SliderOnly/></Col>
          </Row>
          </Col>
          <hr/>  
       </Row>
       <Row>
        <Col span={24} ><div className="quickfilter-title">Health Deductible</div>
          <Row className='quickfilter-row'>
            <IntegerStep/>
          </Row>
        </Col>
        <hr/>
       </Row>
       <Row>
        <Col span={24} ><div className="quickfilter-title">Drug Deductible</div>
          <Row className='quickfilter-row'>
            <IntegerStep/>
          </Row>
        </Col>
        <hr/>
       </Row>
       <Row>
        <Col span={24} ><div className="quickfilter-title">MOOP</div>
          <Row className='quickfilter-row'>
            <IntegerStep/>
          </Row>
        </Col>
        <hr/>
       </Row>
       <Row>
        <Col span={24} ><div className="quickfilter-title">Benefits</div>
          <Row className='quickfilter-row'>
            <Col span={18}><div className="quickfilter-text">Ambulance</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox  /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Comprehensive Dental</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Chiropractor</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Meal</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Fitness</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className="quickfilter-text">OTC</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox  /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Vision</div></Col>
            <Col span={6} className="quickfilter-checkbox" ><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Hearing</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Worldwide Emergency</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Tele Health</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Home Support</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Home Safety</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
          <Row className='quickfilter-row'>
            <Col span={18}><div className='quickfilter-text'>Pers</div></Col>
            <Col span={6} className="quickfilter-checkbox"><Checkbox /></Col>
          </Row>
        </Col>
        <hr/>
       </Row>
       </Card>
      </>
    );
}

export default quickfilters;