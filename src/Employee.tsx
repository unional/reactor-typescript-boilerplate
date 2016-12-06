import * as React from 'react';
import { Component } from 'react';
import { reactify } from '@extjs/reactor';
import './PTOChart';

/**
 * This should come from or extend from interface by ExtJS
 */
interface Panel {
    title: string
    layout: string
    plugins: string
    bodyPadding: string
    shadow: boolean
    responsiveConfig: Object // Should be more detail
    tools: Object
}
interface Chart {
    height: number
    store: any
}

const Panel = reactify<Panel, any>('panel');
const Chart = reactify<Chart, any>(Boilerplate.PTOChart); // create a React Component wrapper for a custom class

Ext.require('Ext.plugin.Responsive');

const fontStyles = {
    fontSize: '14px'
};
export interface EmployeeProps {
    employee: any
    onCloseClick: Function
}
export default class Employee extends Component<EmployeeProps, any> {
    ptoStore: any
    constructor(props) {
        super(props);

        this.ptoStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'hours']
        });

        this.loadEmployeePTOData(props.employee);
    }

    /**
     * Load new employee data into the store when available
     * @param nextProps
     */
    componentWillUpdate (nextProps) {
        this.loadEmployeePTOData(nextProps.employee);
    }

    /**
     * Loads the store for the PTO pie chart
     * @param employee
     */
    loadEmployeePTOData (employee) {
        this.ptoStore.loadData([
            { type: 'Hrs Taken', hours: employee.hoursTaken, text: employee.hoursTaken + ' hours\ntaken' },
            { type: 'Hrs Remaining', hours: employee.hoursRemaining, text: employee.hoursRemaining + ' hours\nremaining' }
        ])
    }

    render () {
        const { employee, onCloseClick } = this.props;

        return (
            <Panel
                title={employee.name}
                layout="vbox"
                plugins="responsive"
                bodyPadding="10 15"
                shadow={true}
                responsiveConfig={{
                    tall: {
                        height: 390,
                        margin: "0 20 20 20"
                    },
                    wide: {
                        width: 400,
                        margin: "20 20 20 0"
                    }
                }}
                tools={[
                    { type: 'close', handler: onCloseClick }
                ]}
            >
                <div style={{padding: '0 0 30px 0'}}>
                    <div style={{float:'left', ...fontStyles}}>{employee.email}</div>
                    <div style={{float:'right', ...fontStyles}}>{employee.phone}</div>
                </div>

                <div style={{
                    textAlign: 'center',
                    color: '#606060',
                    fontWeight: 100,
                    ...fontStyles
                }}>Vacation Balance</div>

                <Chart
                    height={300}
                    store={this.ptoStore}
                />
            </Panel>
        )
    }
}
