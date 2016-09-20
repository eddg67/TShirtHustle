var myDatatables = (function(){


     init= function(chartData) {

         var balloonFormat = (chartData2[0][0].length == 7) ?  "MMM" : "MMM DD";
        var dateFormat = (chartData2[0][0].length == 7) ?  "YYYY-MM" : "YYYY-MM-DD";
        var minPeriod =  (chartData2[0][0].length == 7) ? "MM" : "DD";

        // making chart
        return  serialchart= AmCharts.makeChart("serialchart",
        {
            "type": "serial",
            "dataProvider":chartData2,
            "categoryField": 0,
            "dataDateFormat": dateFormat, //"YYYY-MM-DD",
            "categoryAxis": {
            "minPeriod":minPeriod,
            "equalSpacing": true,
            "gridPosition": "start",
            "markPeriodChange": false,
            "parseDates": true,
            "startOnAxis": true,
            "axisColor": "#E5E5E5",
            "color": "#6A768D",
            "gridAlpha": 0,
            "gridColor": "#AAB3B3",
            "titleBold": false,
            "labelFrequency": 2, // added this, how many times labels show
       },
        "chartCursor": {
            "animationDuration": 0.65,
            "categoryBalloonAlpha": 0.80,
            "categoryBalloonColor": "#BEBEBE",
            "cursorAlpha": 0,
            "valueLineAlpha": 0,
            "valueLineAxis": "Not set",
            "categoryBalloonDateFormat": balloonFormat//"MMM DD"
        },

        "trendLines": [],
        "graphs": [
        {
            "balloonText": "[[value]] [[title]]",
            "fillAlphas": 0.75,
            "fillColors": "#6A768D",
            "id": "visitors",
            "lineAlpha": 0,
            "title": "visitors",
            "type": "smoothedLine",
            "valueField": "1"
        },
        {
            "balloonText": "[[value]] [[title]]",
            "fillColors": "#6A768D",
            "fillAlphas": 0.70,
            "id": "searches",
            "lineAlpha": 0,
            "title": "searches",
            "type": "smoothedLine",
            "valueField": "2",
            "hidden": true
        },
        {
            "balloonText": "[[value]] [[title]]",
            "fillAlphas": 0.65,
            "fillColors": "#6A768D",
            "id": "clicks",
            "lineAlpha": 0,
            "title": "clicks",
            "type": "smoothedLine",
            "valueField": "3",
            "hidden": true
        },
        {
            "balloonText": "[[value]] [[title]]",
            "fillAlphas": 0.65,
             "fillColors": "#6A768D",
            "id": "ctr",
            "lineAlpha": 0,
            "title": "ctr",
            "type": "smoothedLine",
            "valueField": "5",
            "hidden": true
        },
       {
            "balloonText": "[[value]] [[title]]",
            "fillAlphas": 0.65,
            "fillColors": "#6A768D",
            "id": "rpm",
            "lineAlpha": 0,
            "title": "rpm",
            "type": "smoothedLine",
            "valueField": "4",
            "hidden": true
        },

        {
            "balloonText": "$[[value]] [[title]]",
            "fillAlphas": 0.65,
            "fillColors": "#6A768D",
            "id": "rpc",
            "lineAlpha": 0,
            "title": "rpc",
            "type": "smoothedLine",
            "valueField": "6",
            "hidden": true
        },
        {
            "balloonText": "$[[value]] [[title]]",
            "fillAlphas": 0.75,
            "fillColors": "#6A768D",
            "id": "revenue",
            "lineAlpha": 0,
            "title": "revenue",
            "type": "smoothedLine",
            "valueAxis": "Not set",
            "valueField": "7",
            "hidden": true
        }
      ],
        "guides": [],
        "valueAxes": [
        {
            "id": "ValueAxis-1",
            "minimum": 0,
            "precision": 0,
            "synchronizationMultiplier": 2,
            "axisColor": "#E7E7E7",
            "color": "#E7E7E7",
            "gridAlpha": 0,
             "labelFrequency":1,
            "title": ""
        }],
        "allLabels": [],
        "balloon": {},
        "titles": []
    } );


  };

    initPieChart = function(chartData) {
    return AmCharts.makeChart( "piechart", {
          "type": "pie",
          "theme": "light",
         "sequencedAnimation": true,
         "marginTop": 40,
         "startDuration": 2,
         "dataProvider": chartData,
         "valueField": 1,
        "titleField": "0",
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span>",
         "labelText": "[[title]]: [[percents]]%",
         "export": {
        "enabled": true,
        "libs": {
        "path": "https://www.amcharts.com/lib/3/plugins/export/libs/"

        }
       }
    }); //end pie chart
  }

   var myObj = {
                  "processing": true,
                  "serverSide": true,
                  "ajax": {
                      "url": "dashboard_query.php",
                  },
                  "order": [
                      [0, 'desc']
                  ],
                  "lengthMenu":[[10, 25, 50,75, 100, 200, 365, -1], [10, 25, 50,75, 100, 200, 365, "All"]],
                  "pageLength": 30,
                  "responsive": true,
                  "searching": false,
                  "drawCallback": function(settings) {
                              var pgr = $(settings.nTableWrapper).find('.dataTables_paginate');
                              if(settings._iDisplayLength >= settings._iRecordsTotal || settings._iDisplayLength == '-1'){
                                  pgr.hide();
                                   if(settings._iRecordsTotal <= 10){
                                       $('#example_length').hide();
                                  }else{
                                   $('#example_length').show();
                              }
                              }
                              else{
                                  pgr.show();
                              }
                          },

                  "footerCallback": function(row, data, start, end, display) {
                      var api = this.api();
                      $(api.column(1).footer()).html(formatNumber(data[0]['total']['visitors']));
                      $(api.column(2).footer()).html(formatNumber(data[0]['total']['searches']));
                      $(api.column(3).footer()).html(formatNumber(data[0]['total']['clicks']));
                      $(api.column(4).footer()).html(currencyFormat(data[0]['total']['rpm']));
                      $(api.column(5).footer()).html(data[0]['total']['ctr'] + '%');
                      $(api.column(6).footer()).html(currencyFormat(data[0]['total']['rpc']));
                      $(api.column(7).footer()).html(currencyFormat(data[0]['total']['revenue']));
                  },

                  "columnDefs": [{
                          "targets": 0,
                          render: function(data, type, full) {
                              return '<a href="/dashboard/reports/index.php/?action=domains&start_date=' + data + '">' + data + '</a>';
                          },
                          "className": "dt-body-center"
                          },

                          {
                              "targets": [1, 2, 3, 4, 5, 6, 7],
                              "className": "dt-body-right"
                          },
                          {
                              "targets": [1, 2, 3],
                              render: function(data, type, full) {
                                  return formatNumber(data);
                              }
                          },
                          {
                              "targets": [5],
                              render: function(data, type, full) {
                                  return data + '%';
                              }
                          },
                          {
                              "targets": [4, 6, 7],
                              render: function(data, type, full) {
                                  return currencyFormat(data);
                              }
                          }
                   ],
                  "dom":'l<"dataTables_timeframe">frtip'
      };

         var showPeriods  = function(table) {

               var id = 3;
              $('.container').on('change','#periodStats', function () {

                 var period = $('select[name="period"] option:selected').val();
              if(period == 'daily'){
                           table.api().ajax.url( 'dashboard_query.php?id='+id ).load();
                  }
                   else if(period=='weekly'){
                          table.api().ajax.url( 'weekly_query.php' ).load();
                   }
                  else{
                          table.api().ajax.url( '/admin/users/donny/datatables_dashboard_monthly_query.php' ).load();
                   }
               } );

              $("div.dataTables_timeframe").html('<div><label>Periods </label><select id="periodStats" name="period"><option value="daily">Daily</option><option value="monthly">Monthly</option><option value="weekly">Weekly</option></select></div>');

          };

              return{
                  init:myDatatables,
                  //overwrites
                  setOptions: function(obj){
                          if(obj.url){
                              myObj.ajax.url = obj.url;
                          }
                      return myObj;
                      //  return {url:myObj.ajax.url};
                          //return myObj;
                      },
                  //get the options
                  getOptions:function(){
                      return myObj;
                  },
                  datatableOptions1:myObj,
                  showPeriods:showPeriods


              };

})();









