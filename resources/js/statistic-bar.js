$(document).ready(function() {

  var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  var year = ['2017', '2017', '2017', '2017', '2017', '2017', '2017'];


  var quantity_month_grades = 500;
  var quantity_views = 800;
  var good_month_grades = 160;
  var bad_month_grades = 140;

  /*Функция для вставки общего количества просмотров*/
  function quantity_views_sql(quantity_views) {
    $(".quantity-views span").html(quantity_views);
  };

  quantity_views_sql(50);

  var data_array = [450, 300, 48, 156, 376, 50, 220]; //Данные количества для графика
  var label_array = [month[5], month[6], month[7], month[8], month[9], month[10], month[11]] // Подписи для графика

  new RGraph.SVG.Bar({
    id: 'statistic-bar',
    data: data_array,
    options: {
      hmargin: 1,
      xaxisLabels: label_array,
      tooltips: [data_array[0] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[1] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[2] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[3] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[4] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[5] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[6] + " пользователей <br><span>просмотрело ваш профиль</span> ",
      ],
      colors: ['Gradient(#66eeba:#00c9ff)'],
      yaxis: false,
      backgroundGridVlines: false,
      backgroundGridBorder: false
    }
  }).grow();


  /*bar_draw(data_array, label_array);*/

  //Отрисовка статистики
  function bar_draw(data_array, label_array) {

 $("#statistic-bar").remove();
  console.log(1);
  new RGraph.SVG.Bar({
    id: 'statistic-bar',
    data: data_array,
    options: {
      hmargin: 1,
      xaxisLabels: label_array,
      tooltips: [data_array[0] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[1] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[2] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[3] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[4] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[5] + " пользователей <br><span>просмотрело ваш профиль</span> ",
        data_array[6] + " пользователей <br><span>просмотрело ваш профиль</span> ",
      ],
      colors: ['Gradient(#66eeba:#00c9ff)'],
      yaxis: false,
      backgroundGridVlines: false,
      backgroundGridBorder: false
    }
  }).grow();

}


  $("#statistic-bar svg rect").click(diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades))
  /*Функция для отрисовки диаграмм с количеством оценок*/

  diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

  function diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades) {
    var rating_procent = quantity_month_grades * 100 / quantity_views; //процент общего количество оценок
    var good_reviews_procent = good_month_grades * 100 / quantity_month_grades; //количество положительных
    var bad_reviews_procent = bad_month_grades * 100 / quantity_month_grades; //количество отрицательных
    var rating_text =  quantity_month_grades;
    //Удаляем предыдущие диаграммы
    $("#rating-diagramm svg").remove();
    $("#good-review-diagramm svg").remove();
    $("#bad-review-diagramm svg").remove();

    //Вставляем нужные нам данные
    $(".all-grades").html(quantity_month_grades);
    $(".good-grades").html(good_month_grades);
    $(".bad-grades").html(bad_month_grades);

    //Отрисовываем диаграммы
    $("#rating-diagramm").circliful({
      animationStep: 5,
      foregroundBorderWidth: 7,
      backgroundBorderWidth: 4,
      percent: rating_procent,
      /*text: rating_text,*/
      noPercentageSign: true,
      percentageTextSize: 0,
    });

    $("#good-review-diagramm").circliful({
      animationStep: 5,
      foregroundBorderWidth: 7,
      backgroundBorderWidth: 4,
      percent: good_reviews_procent,
      noPercentageSign: true,
      percentageTextSize: 0,
    });
    $("#bad-review-diagramm").circliful({
      animationStep: 5,
      foregroundBorderWidth: 7,
      backgroundBorderWidth: 4,
      percent: bad_reviews_procent,
      noPercentageSign: true,
      percentageTextSize: 0,
    });
  }


  jQuery("#slider").slider({
    min: 13,
    max: 24,
    values: [12, 24],
    range: true,
    disabled: false,
    stop: function(event, ui) {
      label_array.length = 0;
      data_array.length = 0;
      var from = jQuery("#slider").slider("values", 0);
      var to = jQuery("#slider").slider("values", 1);

      if (from>12) {
        from=from-12;
      }
      if (to>12) {
        to=to-12;
      }

      $("#from-date").html(month[from-1]);
      $("#to-date").html(month[to-1]);
      console.log(from + " from");
      console.log(to + " to");
      for(var u=from; u<to; u++) {
        label_array.push(month[u-1]);
        data_array.push((u-1)*10);
        console.log(label_array);
        console.log(data_array);
      }
      bar_draw(data_array,label_array);
    },
    slide: function(event, ui) {
      jQuery("input#minCost").val();
      jQuery("input#maxCost").val();
    }
  });
});
