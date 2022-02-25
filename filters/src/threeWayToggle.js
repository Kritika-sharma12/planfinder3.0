import React, { useState, useEffect } from 'react'
import { Switch, SwitchLabel, SwitchRadio, SwitchSelection } from './styles.js'
import {
  Card,
  Row,
  Col,
  Checkbox
} from 'antd'
const allPlans = [
  { id: '1', Name: 'Plans with only part D premium', cat: 'with' },
  { id: '2', Name: 'Plans with part B Giveback', cat: 'with' },
  { id: '3', Name: 'Plans with partial dual', cat: 'with' },
  { id: '4', Name: 'Plan with full dual', cat: 'with' },
  { id: '5', Name: 'Provides health and drug coverage', cat: 'with' },
  { id: '6', Name: 'Plans without only part D premium', cat: 'without' },
  { id: '7', Name: 'Plans without part B Giveback', cat: 'without' },
  { id: '8', Name: 'Plans without partial dual', cat: 'without' },
  { id: '9', Name: 'Plan without full dual', cat: 'without' }
]
const titleCase = (str) =>
  str
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ')

const ClickableLabel = ({ title, onChange, id }) => (
  <SwitchLabel onClick={() => onChange(title)} className={id}>
    {titleCase(title)}
  </SwitchLabel>
)

const ConcealedRadio = ({ value, selected }) => (
  <SwitchRadio type='radio' name='switch' checked={selected === value} />
)
function ToggleSwitch(props) {
  const [selected, setSelected] = useState('all')
  const [planList, setPlanList] = useState(allPlans)

  useEffect(() => {
    filterData(selected)
    console.log(planList)
  }, [selected])

  function filterData(currval) {
    console.log('currval', currval)
    if (currval === 'all') {
      setPlanList(allPlans)
    } else {
      const newPlanList = allPlans.filter((plan) => {
        return plan.cat === currval
      })
      setPlanList(newPlanList)
    }
  }

  const handleChange = (val) => {
    setSelected(val)
  }

  const selectionStyle = () => {
    return {
      left: `${(props.values.indexOf(selected) / 3) * 100}%`
    }
  }
  console.log(planList)

  return (
    <div>
      <Switch>
        {props.values.map((val) => {
          return (
            <span key={val}>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel title={val} onChange={() => handleChange(val)} />
            </span>
          )
        })}
        <SwitchSelection style={selectionStyle()} />
      </Switch>
      <Card
        style={{ maxHeight: 200, overflow: 'auto' }}
        className='quickfilter-row'
      >
        {planList.map((plan) => {
          return (
            <Row className='quickfilter-row' key={plan.id}>
              <Col span={18}>
                <div className='quickfilter-text'>{plan.Name}</div>
              </Col>
              <Col span={6} className='quickfilter-checkbox'>
                <Checkbox />
              </Col>
            </Row>
          );
        })}
      </Card>

    </div>
  )
}
function ThreeWayToggle() {
  return (
    <div>
      <ToggleSwitch values={['with','all', 'without']} selected='all' />
    </div>
  )
}

export default ThreeWayToggle