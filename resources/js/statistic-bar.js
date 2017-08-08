$(document).ready(function() {
  var data_array = [450, 300, 48, 156, 376, 50, 220]; //Данные количества для графика
  var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'];
  var year = ['2017', '2017', '2017', '2017', '2017', '2017', '2017'];
  var date = [month[0] + " " + year[0]]
  var label_array = [date[0], 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'] // Подписи для графика


  var quantity_views = 800;
  var quantity_month_grades = 300;
  var good_month_grades = 160;
  var bad_month_grades = 140;

  /*Функция для вставки общего количества просмотров*/
  function quantity_views_sql(quantity_views) {
    $(".quantity-views span").html(quantity_views);
  };

  quantity_views_sql(50);

//Отрисовка статистики
  new RGraph.SVG.Bar({
    id: 'statistic-bar',
    data: data_array,
    options: {
      hmargin: 1,
      xaxisLabels: label_array,
      tooltips: [ data_array[0] + " пользователей <br><span>просмотрело ваш профиль</span> ",
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



  $("#statistic-bar svg rect").click(diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades))
  /*Функция для отрисовки диаграмм с количеством оценок*/

  diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

  function diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades) {
    var rating_procent = quantity_month_grades * 100 / quantity_views; //процент общего количество оценок
    var good_reviews_procent = good_month_grades * 100 / quantity_month_grades; //количество положительных
    var bad_reviews_procent = bad_month_grades * 100 / quantity_month_grades; //количество отрицательных

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
      percent: rating_procent
    });

    $("#good-review-diagramm").circliful({
      animationStep: 5,
      foregroundBorderWidth: 7,
      backgroundBorderWidth: 4,
      percent: good_reviews_procent
    });
    $("#bad-review-diagramm").circliful({
      animationStep: 5,
      foregroundBorderWidth: 7,
      backgroundBorderWidth: 4,
      percent: bad_reviews_procent
    });
  }

});
