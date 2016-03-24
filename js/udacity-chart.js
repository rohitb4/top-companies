var foundingYear = [1955, 1976, 1975, 1994, 1998, 2004],
  revenue = [210.82, 233.71, 93.58, 107, 74.98, 17.93],
  marketCap = [350.59, 591.66, 430.61, 264.81, 520.85, 320.64],
  hq = ['Nebraska', 'California', 'Washington', 'Washington', 'California', 'California'];

FusionCharts.ready(function() {
  var unicorns = new FusionCharts({
    type: 'column2d',
    renderAt: 'top-companies',
    width: '100%',
    height: '500',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Time to $300bn Market Cap",
        "captionFontBold": "0",
        "yAxisName": "# Years",
        "paletteColors": "#542549, #AAAAAA, #F35325, #FF9A00, #34A853, #3B5998",
        "bgColor": "#ffffff",
        "showBorder": "0",
        "showCanvasBorder": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "plotSpacePercent": "10",
        "showValues": "0",
        "axisLineAlpha": "25",
        "divLineAlpha": "10",
        "showAlternateHGridColor": "0",
        "captionFontSize": "30",
        "captionPadding": "25",
        "showLabels": "1",
        "baseFont": "Open Sans",
        "baseFontSize": "16",
        "yAxisMaxValue": "55",
        "showLabels": "0",
        "chartBottomMargin": "30",
        "showPlotBorder": "0",

        // tooltip customization
        "toolTipColor": "#e0e4e6",
        "toolTipBorderColor": "#e0e4e6",
        "toolTipBorderThickness": "1",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "70",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "10",
        "plotToolText": "<div style='font-weight: 300;'>$label: $dataValue years.</div>"
      },

      "annotations": {
        "groups": [{
          "id": "logo-images",
          "xScale": "30",
          "yScale": "30",
          "showBelow": "0",
          "items": [{
            "id": "bh-icon",
            "type": "image",
            "url": "img/bh.jpg",
            "x": "$dataset.0.set.0.STARTX",
            "y": "$dataset.0.set.0.STARTY - 100"
          }, {
            "id": "apple-icon",
            "type": "image",
            "url": "img/apple.jpg",
            "x": "$dataset.0.set.1.STARTX + 65",
            "y": "$dataset.0.set.1.STARTY - 100"
          }, {
            "id": "microsoft-icon",
            "type": "image",
            "url": "img/microsoft.jpg",
            "x": "$dataset.0.set.2.STARTX + 10",
            "y": "$dataset.0.set.2.STARTY - 100"
          }, {
            "id": "amazon-icon",
            "type": "image",
            "url": "img/amazon.jpg",
            "x": "$dataset.0.set.3.STARTX + 20",
            "y": "$dataset.0.set.3.STARTY - 100"
          }, {
            "id": "google-icon",
            "type": "image",
            "url": "img/google.jpg",
            "x": "$dataset.0.set.4.STARTX + 20",
            "y": "$dataset.0.set.4.STARTY - 100"
          }, {
            "id": "facebook-icon",
            "type": "image",
            "url": "img/facebook.jpg",
            "x": "$dataset.0.set.5.STARTX - 5",
            "y": "$dataset.0.set.5.STARTY - 100"
          }]
        }]
      },

      "data": [{
        "label": "Berkshire Hathaway",
        "value": "49",
      }, {
        "label": "Apple",
        "value": "35"
      }, {
        "label": "Microsoft",
        "value": "24"
      }, {
        "label": "Amazon",
        "value": "21"
      }, {
        "label": "Google",
        "value": "15"
      }, {
        "label": "Facebook",
        "value": "12"
      }]
    },

    "events": {
      "dataPlotRollOver": function(eventObj, dataObj) {
        document.getElementById('company').innerHTML = dataObj.categoryLabel;
        document.getElementById('year').innerHTML = "Founded in <strong>" + foundingYear[dataObj.index] + "</strong>.";
        document.getElementById('revenue').innerHTML = "2015 revenue - <strong>" + revenue[dataObj.index] + "bn.</strong>";
        document.getElementById('marketCap').innerHTML = "Current market cap - <strong>" + marketCap[dataObj.index] + "bn.</strong>";
        document.getElementById('hq').innerHTML = "Headquartered in <strong>" + hq[dataObj.index] + ", U.S.</strong>";
      }
    }
  })
  unicorns.render();
});
