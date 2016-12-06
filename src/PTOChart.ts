declare namespace Boilerplate {
    export const PTOChart: new() => Ext.chart.PolarChart
}

Ext.define('Boilerplate.PTOChart', {
    extend: 'Ext.chart.PolarChart',

    requires: [
        'Ext.chart.interactions.Rotate', 
        'Ext.chart.interactions.ItemHighlight', 
        'Ext.chart.series.Pie'
    ],

    interactions: ['rotate', 'itemhighlight'],

    background: "#FAFAFA",

    series: {
        type: 'pie',
        xField: 'hours',
        label: {
            field: 'text'
        },
        donut: 20,
        colors: ['#4CAF50', '#BDBDBD'],
        style: {
        stroke: 'white',
            miterLimit: 10,
            lineCap: 'miter',
            lineWidth: 2
        }
    },

    axes: []
});
