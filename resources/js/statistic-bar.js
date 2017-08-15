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

  var bar = new RGraph.Bar({
    id: 'bar',
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
      backgroundGridBorder: false,
      eventsClick: myClick
    }
  });/*on('draw', function(obj) {
    // Добавляем обработчики на каждый блок
    for (var i = 0; i < obj.coords.length; ++i) {
      (function(index, rect) {
        // Меняем курсор на pointer
        rect.addEventListener('mousemove', function(e) {
          e.target.style.cursor = 'pointer';
          /*    e.target.style.fill = "red";
        }, false);

        rect.addEventListener('mouseover', function(e) {

        }, false);


        //
        // При нажатии на него
        //
        rect.addEventListener('click', function(e) {
          /*При нажатии на блок перерисовываем статистику внизу
          quantity_views -- количество просмотров страницы за этот месяц,
          quantity_month_grades -- количество отзывов за этот месяц,
           good_month_grades -- количество хороших отзывов за этот месяц,
            bad_month_grades -- количество плохих отзывов за этот месяц

          diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);
        }, false);
      })(i, obj.coords[i].object);
    }*/



  function myClick (e, shape)
    {

/*
            quantity_views -- количество просмотров страницы за этот месяц,
            quantity_month_grades -- количество отзывов за этот месяц,
             good_month_grades -- количество хороших отзывов за этот месяц,
              bad_month_grades -- количество плохих отзывов за этот месяц
*/
            diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

    }

  bar.draw();

  $()


  /*bar_draw(data_array, label_array);*/

  //Отрисовка статистики
  function bar_draw(data_array, label_array) {
    bar.original_data = data_array;
    console.log(bar.original_data);
    RGraph.redraw();
    //  $("#statistic-bar").empty();
    console.log($("#statistic-bar"));
    /*  var bar =  new RGraph.SVG.Bar({

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
          backgroundGridBorder: false,

        }
      }).on('draw', function (obj)
    {
        // Loop through all the bars
        for (var i=0; i<obj.coords.length; ++i) {
            (function (index, rect)
            {
                // Change the pointer when hovering over the rect
                rect.addEventListener('mousemove', function (e)
                {
                    e.target.style.cursor = 'pointer';
                }, false);



                //
                // Do this when the rect is clicked
                //
                rect.addEventListener('click', function (e)
                {
                    if (!state2.selected[index]) {

                        // Add the highlight
                        highlight(obj, rect, index);

                        state2.selected[index] = true;

                        // The notify function simply tells the server what
                        // bars are selected
                        //
                        notify();

                    } else {
                        state2.selected[index] = null;
                    }
                }, false);
            })(i, obj.coords[i].object);
        }

        // Read the state2 variable and cover the relevant bars
        for (var i=0; i<obj.data.length; ++i) {
            if (state2.selected[i]) {
                highlight(obj, obj.coords[i].object, i);
            }
        }
    }).draw();
*/
  }

  $(window).resize(function() {
      var bar_ctx = $("#bar").getContext();
      var bar_width = $(".profile-content").outerWidth(true);
      bar_ctx.canvas.width  = bar_width;
        RGraph.redraw();
  });

  $("#statistic-bar svg rect").click(diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades))
  /*Функция для отрисовки диаграмм с количеством оценок*/

  diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

  function diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades) {
    var rating_procent = quantity_month_grades * 100 / quantity_views; //процент общего количество оценок
    var good_reviews_procent = good_month_grades * 100 / quantity_month_grades; //количество положительных
    var bad_reviews_procent = bad_month_grades * 100 / quantity_month_grades; //количество отрицательных
    var rating_text = quantity_month_grades;
    //Удаляем предыдущие диаграммы

    console.log("перерисованы диаграммы");
    $("#rating-diagramm svg").remove();
    $("#good-review-diagramm svg").remove();
    $("#bad-review-diagramm svg").remove();

    //Вставляем нужные нам данные
    $(".all-grades").html(quantity_month_grades);
    $(".good-grades").html(good_month_grades);
    $(".bad-grades").html(bad_month_grades);

    //Отрисовываем диаграммы
    var rat_dia = Circles.create({
      id: "rating-diagramm",
      radius: 81,
      value: rating_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + quantity_month_grades + "</p><p>оценок рейтинга</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
    });

    var good_dia = Circles.create({
      id: "good-review-diagramm",
      radius: 81,
      value: good_reviews_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + good_month_grades + "</p><p>положительные</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
    });

    var bad_dia = Circles.create({
      id: "bad-review-diagramm",
      radius: 81,
      value: good_reviews_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + bad_month_grades + "</p><p>отрицательные</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
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

      if (from > 12) {
        from = from - 12;
      }
      if (to > 12) {
        to = to - 12;
      }

      $("#from-date").html(month[from - 1]);
      $("#to-date").html(month[to - 1]);
      console.log(from + " from");
      console.log(to + " to");
      for (var u = from; u < to; u++) {
        label_array.push(month[u - 1]);
        data_array.push((u - 1) * 10);
        console.log(label_array);
        console.log(data_array);
      }
      bar_draw(data_array, label_array);
    },
    slide: function(event, ui) {
      jQuery("input#minCost").val();
      jQuery("input#maxCost").val();
    }
  });
});
