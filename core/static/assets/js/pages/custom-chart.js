'use strict';
var chart_invoice;
var chart_stock;
var chart_material;
var chart_purchase;
var chart_sales;

$(document).ready(function() {
    chart_invoice = Morris.Line({
        element: 'chart-invoice',
        // data: dataset,
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    chart_stock = Morris.Line({
        element: 'chart-stock',
        // data: dataset,
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    chart_material = Morris.Line({
        element: 'chart-material',
        // data: dataset,
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    chart_purchase = Morris.Line({
        element: 'chart-purchase',
        // data: dataset,
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    chart_sales = Morris.Line({
        element: 'chart-sales',
        // data: dataset,
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
});


function invoice_chart(dataset) {
    console.log("json : ", dataset);
    chart_invoice.setData(dataset);
}

function stock_chart(dataset) {
    console.log("json : ", dataset);
    chart_stock.setData(dataset);
}

function material_chart(dataset) {
    console.log("json : ", dataset);
    chart_material.setData(dataset);
}

function purchase_chart(dataset) {
    console.log("json : ", dataset);
    chart_purchase.setData(dataset);
}

function sales_chart(dataset) {
    console.log("json : ", dataset);
    chart_sales.setData(dataset);
}