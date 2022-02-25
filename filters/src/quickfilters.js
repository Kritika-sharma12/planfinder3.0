import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import 'antd/dist/antd.css';
import { Select,Space } from 'antd';
import styles from './filters.module.scss';
import "./index.css";
import ThreeWayToggle from "./threeWayToggle";
import FilterBoxSIngleSelect from "./filterBoxSIngleSelect";
import { Card, Row, Col, Divider, Button,Slider, InputNumber, Switch,TreeSelect,Checkbox,Menu} from "antd";

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
        <Row className=' quickfilter-row quick-filter-left' >
            <Slider style={{  width: 245 }} range defaultValue={[0, 100]} onChange={this.onChange}   />
        </Row>
        <Row className='quickfilter-row'>
            <Col span={12} style={{ fontSize: 13}}>From <InputNumber min={0} max={100} style={{ margin: '0 16px' }} value={inputValue[0]} onChange={this.onChange} /></Col>
            <Col span={12} style={{ fontSize: 13}} className="quickfilter-checkbox">To<InputNumber className='quickfilter-inputbox'  min={0} max={100} style={{ margin: '0 16px' }} value={inputValue[1]} onChange={this.onChange} /></Col>
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
const { SubMenu } = Menu;
const quickfilters  = () => {
    const [currentValue, setCurrentValue] = useState(0)
    return (
      <>
       <Card hoverable className="quick-filter-top">
       <Menu
        style={{ width: 305 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title="Premium" className='premium'>
          <Menu.Item key="1">
          <Row><IntegerStep/></Row>
            <ThreeWayToggle/>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Enrollment" className='enrollment'>
          <Menu.Item key="2">
            <Row className='quickfilter-row'>
              <Col span={14}>Enrollment Month</Col>
              <Col span={10} className="quickfilter-dropdown"><FilterBoxSIngleSelect /></Col>
            </Row>
            <Row>Enr Range</Row>
            <Row className='quickfilter-row quickfilter-custom-div quickfilter-row'>
              <Col span={24}><SliderOnly/></Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Health Deductible" className='enrollment'>
          <Menu.Item key="3">
             <Row className='quickfilter-row'>
               <IntegerStep/>
             </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="Drug Deductible" className='enrollment'>
          <Menu.Item key="4">
             <Row className='quickfilter-row'>
               <IntegerStep/>
             </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title="Moop Deductible" className='enrollment'>
          <Menu.Item key="5">
             <Row className='quickfilter-row'>
               <IntegerStep/>
             </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title="Benefits" className='benefits'>
          <Menu.Item key="6">
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
          </Menu.Item>
        </SubMenu>
      </Menu>
       </Card>
      </>
    );
}

export default quickfilters;