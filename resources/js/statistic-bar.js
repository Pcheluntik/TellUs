$(document).ready(function(){
  var data_array = [450,300,48,156,376,50,220]; //Данные количества для графика
  var label_array = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль']// Подписи для графика


    new RGraph.SVG.Bar({
        id: 'statistic-bar',
        data: data_array,
        options: {
            hmargin: 1,
            xaxisLabels: label_array,
            tooltips: [label_array[0] + data_array[0],
            label_array[1] + data_array[1],
            label_array[2] + data_array[2],
            label_array[3] + data_array[3],
            label_array[4] + data_array[4],
            label_array[5] + data_array[5],
            label_array[6] + data_array[6]],
            colors: ['Gradient(#66eeba:#00c9ff)'],
            yaxis: false,
            backgroundGridVlines: false,
            backgroundGridBorder: false
        }
    }).grow();
});
