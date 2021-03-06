window.sr = ScrollReveal();
sr.reveal('.first',{duration:2000});
sr.reveal('.second',{duration:2000});
sr.reveal('#onescroll',{duration:2000});
sr.reveal('#twoscroll',{duration:2000});
sr.reveal('#threescroll',{duration:2500});
sr.reveal('#fourscroll',{duration:3000});
sr.reveal('#fivescroll',{duration:2000});
sr.reveal('#sixscroll',{duration:2000});
sr.reveal('#sevenscroll',{duration:2500});
sr.reveal('#eightscroll',{duration:3000});
sr.reveal('#ninescroll',{duration:2000});
sr.reveal('#tenscroll',{duration:2000});
sr.reveal('#elevenscroll',{duration:2500});
sr.reveal('#twelvescroll',{duration:3000});
sr.reveal('#thirteenthscroll',{duration:2000});
sr.reveal('#fourteenthscroll',{duration:2000});
sr.reveal('#fifteenscroll',{duration:2000});
sr.reveal('#sixteenscroll',{duration:2400});
sr.reveal('#seveteenscroll',{duration:2800});
sr.reveal('#eighteenscroll',{duration:3200});
sr.reveal('#nineteenscroll',{duration:3600});
sr.reveal('#twentyscroll',{duration:4000});
sr.reveal('#twentyonescroll',{duration:4400});
sr.reveal('#twentytwoscroll',{duration:2000});
sr.reveal('#twentythreescroll',{duration:2000});

sr.reveal('#rightonescroll',{duration:2000});
sr.reveal('#righttwoscroll',{duration:2000});
sr.reveal('#rightthreescroll',{duration:2500});
sr.reveal('#rightfourscroll',{duration:3000});
sr.reveal('#rightfivescroll',{duration:2000});
sr.reveal('#rightsixscroll',{duration:2000});
sr.reveal('#rightsevenscroll',{duration:2500});
sr.reveal('#righteightscroll',{duration:3000});
sr.reveal('#rightninescroll',{duration:2000});
sr.reveal('#righttenscroll',{duration:2000});
sr.reveal('#rightelevenscroll',{duration:2000});
sr.reveal('#rightetwelvescroll',{duration:2000});
sr.reveal('#rightthirteenthscroll',{duration:2000});
sr.reveal('#rightfourteenthscroll',{duration:2000});
sr.reveal('#rightfifteenscroll',{duration:2000});
sr.reveal('.first-new',{duration:2000});

// sr.reveal('#fourtwo',{duration:2500},);
// sr.reveal('#fourthree',{duration:3000},);

const popper = document.querySelector('.tooltipone');
const factory = document.querySelector('#twoscroll');
const domeny = document.querySelector('#fourscroll');
const bake = document.querySelector('#eightscroll');
const dsp = document.querySelector('#sixscroll');
const vacuumer = document.querySelector('#tenscroll');
const vacuumertwo = document.querySelector('#rightsixscroll');
const ingots = document.querySelector('#twelvescroll');
const baketwo = document.querySelector('#rightfourscroll');
const dsptwo = document.querySelector('#righttwoscroll');
const calibr = document.querySelector('#fifteenscroll');
const stanfour = document.querySelector('#seveteenscroll');
const stanthree = document.querySelector('#twentyonescroll');
const staneight = document.querySelector('#nineteenscroll');
const car = document.querySelector('#twentythreescroll');
const mnls = document.querySelector('#righteightscroll');
const stanfourtwo = document.querySelector('#righttenscroll');
const linerepeir = document.querySelector('#rightetwelvescroll');
const cartwo= document.querySelector('#rightfourteenthscroll');
const lom= document.querySelector('.lom');
const first_new= document.querySelector('.first-new');
const lom_tool= document.querySelector('.lom-tool');

const instanceLomTool= new Tooltip(lom_tool, {
  placement: 'right',
  title: "",
});
const instanceFirstNew= new Tooltip(first_new, {
  placement: 'right',
  title: "",
});
if (document.body.clientWidth>769) {
  const instanceLrepeir= new Tooltip(linerepeir, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Линии финишной отделки круглого и шестигранного проката – комплекс оборудования, который дает возможность выпускать прокат со специальной отделкой поверхности, в том числе обточенный с особо высокой точностью геометрических размеров Линия отделки круглых черных прутков. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м) Неразрушающий контроль – контроль марки, поверхностные и внутренние дефекты (УЗК) Зачистка или вырезка дефектов - пила Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание Линия обточки-полировки проката. Точность проката после обработки - h9/h10 Неразрушающий контроль- поверхностные дефекты. Контроль размера - лазерный измеритель Упаковка, обвязка, взвешивание. Линия отделки шестигранных профилей. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м), скручивание - 0.5 гр./м (3 гр./12 м макс.) Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание",
  });
  const instanceLom= new Tooltip(lom, {
    popperOptions: {
      positionFixed: true,
      placement: 'left',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'left',
    title: "Ломом на заводы поступает с предприятий «УГМК-Холдинга»",
  });
  const instance= new Tooltip(popper, {
    placement: 'left',
    popperOptions: {
      positionFixed: true,
      placement: 'left',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    title: "Для производства (применяются) \"железорудные\" материалы концентрат железорудный шахты Северопесчанская ОА Богословское рудоуправление концентрат железный производства ОАО Святогор, флюсы известняк ОАО Севуралбокситруда, известь, обожженная собственного производства твердое топливо кокс мелочь коксовая тощий каменный уголь",
  });
  const instanceFourtwo= new Tooltip(stanfourtwo, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн.",
  });
  const instanceMnls= new Tooltip(mnls, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-end',
    title: "Жидкая сталь разливается на МНЛЗ открытой или закрытой струей на заготовку размером 150х150(130х130) мм длиной 6-12 м с электромагнитным перемешиванием в кристаллизаторе и ручьях. Заготовка при необходимости проходит дробеструйную очистку от окалины, магнитно-порошковый контроль поверхностных дефектов и их абразивную сплошную или выборочную зачистку. Количество ручьев - 4 шт. Радиус машины - 9 м Номинальная емкость промковша - 18.4 т (макс. 19.8 т) Оснащен манипуляторами для защитной трубы и для разливочного стакана. Контроль уровня стали в кристаллизаторе - радиоактивный датчик Со60.",
  });
  const instanceF= new Tooltip(factory, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-start',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-start',
    title: "Ввод в эксплуатацию – 1946 г. Работает в составе двух агломашин площадью спекания 30 и 50 м2. Производится агломерат для доменного цеха. Основные задачи цеха: производство агломерата для доменного цеха; производство обожженной извести для нужд ЭСПЦ; Максимальный годовой объем производства: 660 тыс. тонн агломерата 14,6 тыс. тонн извести"
  });
  const instanceD= new Tooltip(domeny, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Ввод в эксплуатацию – 1896 г. Работает в составе трех печей объемом 205, 212 и 260 м3,обеспечивает жидким передельным чугуном электросталеплавильный цех, производит товарный передельный литейный чугун в чушках. Основные задачи цеха: производство передельного чугуна для электросталеплавильного цеха; производство чугуна литейному цеху для отливки изложниц и другого чугунного литья; производство товарного чугуна; производство граншлака; производство доменного газа. Максимальный годовой объем производства: 365 тыс. тонн чугуна; 115 тыс. тонн граншлака. "
  });
  const instanceB= new Tooltip(bake, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-start',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-start',
    title: "АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут"
  });
  const instanceDsp= new Tooltip(dsp, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома"
  });
  const instanceBt= new Tooltip(baketwo, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут"
  });
  const instanceDspt= new Tooltip(dsptwo, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-end',
    title: "Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома"
  });
  const instanceV= new Tooltip(vacuumer, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-start',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-start',
    title: "Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут"
  });
  const instanceVtwo= new Tooltip(vacuumertwo, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут"
  });
  const instanceI= new Tooltip(ingots, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Сталь разливается в слитки сифонным способом. Слитки имеют конусную форму в продольном сечении (с расширением кверху) и квадратную - в поперечном сечении с вогнутыми гранями и скругленными углами для снижения напряжений и возникновения разрывов при кристаллизации стали. Помимо основной части, слиток содержит прибыльную часть - дополнительное удлинение для локализации выделяющихся газов и всплывающих неметаллических включений. Прибыльная часть слитка имеет обратную конусность (с расширением вниз), которая удаляется после прокатки слитков. Разливают слитки массой: 5,2, 5,3, 5,6, 5,7 тонн. Разливка стали в слитки имеет ряд преимуществ перед распространенной в настоящее время непрерывной разливкой на МНЛЗ: Преимущества: - возможность быстрой смены марочного сортамента выплавляемой и разливаемой стали; - наличие чистой центральной части слитка (дендритной зоны) по содержанию неметаллических включений."
  });
  const instanceC= new Tooltip(calibr, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-start',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom-start',
    title: "Ввод в эксплуатацию – 1933 г. В состав калибровочного цеха входят участки отделки, зачистки, термообработки металла, отделения волочения, травильное и инструментальное, другие подразделения. Цех оборудован отечественными и импортными станками и линиями для холодного волочения проката, обточки и полировки. Основные задачи цеха: производство калиброванного, горячекатаного проката и проката со специальной отделкой поверхности. Максимальная годовая производительность: 90 тыс. тонн калиброванного металлопроката"
  });
  const instanceStan= new Tooltip(stanfour, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн."
  });
  const instanceStanThree= new Tooltip(stanthree, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Стан линейно-непрерывного типа, имеющий в своем составе обжимную клеть 550 нереверсивную трио, три клети в линейной промежуточной группе, две петлевые клети, четыре непрерывные клети. Нагрев передельной заготовки осуществляется в методической толкательной печи. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливается природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Охлаждение проката выполняется на реечном холодильнике длиной 48 м шириной 15 м. Резка проката на требуемую длину по заказу выполняется на прессе усилием 500тонн. Отделка проката осуществляется на адъюстаже, где выполняется правка, осмотр, зачистка, контроль, упаковка металлопроката с дальнейшей отгрузкой потребителю. Сортамент стана: товарный прокат и подкат для калибровочного производства: - прокат круглого сечения диаметром от 10 до 36 мм включ.; - шестигранного сечения диаметром вписанного круга от 10 до 32 мм включ.; - квадратного сечения со стороной от 12 до 24 мм включ.; - арматурный прокат гладкого и периодического профиля от 10 до 28. Длина проката до 11700 мм. Годовой объем производства– 127 100 тонн. "
  });
  const instanceStanEight= new Tooltip(staneight, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Линейный реверсивный стан, состоит из трёх клетей – обжимная, черновая, чистовая. Для нагрева слитков до температуры прокатки имеется шесть групп одноместных регенеративных нагревательных колодцев с общим количеством ячеек 147. Отопление колодцев производится смесью доменного и природного газов. Резка раскатов проката выполняется пилами ударного действия с ременным приводом режущего диска модели РР-2000. Выполняется резка полного сортамента проката круглого сечения диаметром от 140 до 300 мм включ., резка проката квадратного сечения со стороной от 130 до 220 мм включ. Охлаждение проката выполняется на воздухе или термосах замедленного охлаждения. Транспортировка проката для охлаждения выполняется мостовыми кранами, оборудованных механизированными клещами для транспортировки проката. Обработка металлопроката выполняется на адъюстаже цеха, имеющим в составе участок обработки передельной заготовки и участки обработки товарного проката. Продукция: товарный прокат и трубная заготовкаsдиаметром от 140 до 300 мм, осевая заготовка квадратного сечения со стороной 215 и 230 мм, товарна заготовка квадратного сечения со стороной от 150 до 220 мм, передельная заготовка квадратного сечения со стороной 130, 140, 170, 180, 184 мм. Годовой объем производства – 628 050 тонн. "
  });
  const instanceCar= new Tooltip(car, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94. "
  });
  const instanceCartwo= new Tooltip(cartwo, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom-end',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94. "
  });
} else {
  const instanceLrepeir= new Tooltip(linerepeir, {
    popperOptions: {
      positionFixed: true,
      placement: 'bottom',
      modifiers: {
        flip: {
          enable: true
        },
        preventOverflow: {
          boundariesElement: 'scrollParrent'
        }
      }
    },
    placement: 'bottom',
    title: "Линии отделки проката",
  });
const instanceLom= new Tooltip(lom, {
  popperOptions: {
    positionFixed: true,
    placement: 'left',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'left',
  title: "Лом",
});
const instance= new Tooltip(popper, {
  placement: 'left',
  popperOptions: {
    positionFixed: true,
    placement: 'left',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  title: "Руда",
});
const instanceFourtwo= new Tooltip(stanfourtwo, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Прокатный стан",
});
const instanceMnls= new Tooltip(mnls, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "МНЛЗ",
});
const instanceF= new Tooltip(factory, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Агломерационный цех"
});
const instanceD= new Tooltip(domeny, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Доменный цех"
});
const instanceB= new Tooltip(bake, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Печь-ковш (АПК)"
});
const instanceDsp= new Tooltip(dsp, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "ДСП-80"
});
const instanceBt= new Tooltip(baketwo, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Печь-ковш (АПК)"
});
const instanceDspt= new Tooltip(dsptwo, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "ДСП-70"
});
const instanceV= new Tooltip(vacuumer, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Вакууматор"
});
const instanceVtwo= new Tooltip(vacuumertwo, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Вакууматор"
});
const instanceI= new Tooltip(ingots, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Разливка в слитки"
});
const instanceC= new Tooltip(calibr, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Калибровочный цех"
});
const instanceStan= new Tooltip(stanfour, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "стан 450"
});
const instanceStanThree= new Tooltip(stanthree, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "стан 320"
});
const instanceStanEight= new Tooltip(staneight, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "стан 850"
});
const instanceCar= new Tooltip(car, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Отгрузка"
});
const instanceCartwo= new Tooltip(cartwo, {
  popperOptions: {
    positionFixed: true,
    placement: 'bottom',
    modifiers: {
      flip: {
        enable: true
      },
      preventOverflow: {
        boundariesElement: 'scrollParrent'
      }
    }
  },
  placement: 'bottom',
  title: "Отгрузка"
  });
}
// if (document.body.clientWidth<769){
//   instance.updateTitleContent('Руда')
//   instanceLrepeir.updateTitleContent('Линии отделки проката')
//   instanceCartwo.updateTitleContent('Отгрузка')
//   instanceCar.updateTitleContent('Отгрузка')
//   instanceStanEight.updateTitleContent('стан 850')
//   instanceStanThree.updateTitleContent('стан 320')
//   instanceStan.updateTitleContent('стан 450')
//   instanceC.updateTitleContent('Калибровочный цех')
//   instanceI.updateTitleContent('Разливка в слитки')
//   instanceLom.updateTitleContent('Лом')
//   instanceFourtwo.updateTitleContent('Прокатный стан')
//   instanceMnls.updateTitleContent('МНЛЗ')
//   instanceF.updateTitleContent('Агломерационный цех')
//   instanceD.updateTitleContent('Доменный цех')
//   instanceB.updateTitleContent('Печь-ковш (АПК)')
//   instanceDsp.updateTitleContent('ДСП-80')
//   instanceBt.updateTitleContent('Печь-ковш (АПК)')
//   instanceV.updateTitleContent('Вакууматор')
//   instanceVtwo.updateTitleContent('Вакууматор')
//   instanceDspt.updateTitleContent('ДСП-70')
// } 
// if (document.body.clientWidth>769) {
//   instance.updateTitleContent('Для производства (применяются) \"железорудные\" материалы концентрат железорудный шахты Северопесчанская ОА Богословское рудоуправление концентрат железный производства ОАО Святогор, флюсы известняк ОАО Севуралбокситруда, известь, обожженная собственного производства твердое топливо кокс мелочь коксовая тощий каменный уголь')
//   instanceLrepeir.updateTitleContent('Линии финишной отделки круглого и шестигранного проката – комплекс оборудования, который дает возможность выпускать прокат со специальной отделкой поверхности, в том числе обточенный с особо высокой точностью геометрических размеров Линия отделки круглых черных прутков. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м) Неразрушающий контроль – контроль марки, поверхностные и внутренние дефекты (УЗК) Зачистка или вырезка дефектов - пила Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание Линия обточки-полировки проката. Точность проката после обработки - h9/h10 Неразрушающий контроль- поверхностные дефекты. Контроль размера - лазерный измеритель Упаковка, обвязка, взвешивание. Линия отделки шестигранных профилей. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м), скручивание - 0.5 гр./м (3 гр./12 м макс.) Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание')
//   instanceCartwo.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
//   instanceCar.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
//   instanceStanEight.updateTitleContent('Линейный реверсивный стан, состоит из трёх клетей – обжимная, черновая, чистовая. Для нагрева слитков до температуры прокатки имеется шесть групп одноместных регенеративных нагревательных колодцев с общим количеством ячеек 147. Отопление колодцев производится смесью доменного и природного газов. Резка раскатов проката выполняется пилами ударного действия с ременным приводом режущего диска модели РР-2000. Выполняется резка полного сортамента проката круглого сечения диаметром от 140 до 300 мм включ., резка проката квадратного сечения со стороной от 130 до 220 мм включ. Охлаждение проката выполняется на воздухе или термосах замедленного охлаждения. Транспортировка проката для охлаждения выполняется мостовыми кранами, оборудованных механизированными клещами для транспортировки проката. Обработка металлопроката выполняется на адъюстаже цеха, имеющим в составе участок обработки передельной заготовки и участки обработки товарного проката. Продукция: товарный прокат и трубная заготовкаsдиаметром от 140 до 300 мм, осевая заготовка квадратного сечения со стороной 215 и 230 мм, товарна заготовка квадратного сечения со стороной от 150 до 220 мм, передельная заготовка квадратного сечения со стороной 130, 140, 170, 180, 184 мм. Годовой объем производства – 628 050 тонн.')
//   instanceStanThree.updateTitleContent('Стан линейно-непрерывного типа, имеющий в своем составе обжимную клеть 550 нереверсивную трио, три клети в линейной промежуточной группе, две петлевые клети, четыре непрерывные клети. Нагрев передельной заготовки осуществляется в методической толкательной печи. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливается природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Охлаждение проката выполняется на реечном холодильнике длиной 48 м шириной 15 м. Резка проката на требуемую длину по заказу выполняется на прессе усилием 500тонн. Отделка проката осуществляется на адъюстаже, где выполняется правка, осмотр, зачистка, контроль, упаковка металлопроката с дальнейшей отгрузкой потребителю. Сортамент стана: товарный прокат и подкат для калибровочного производства: - прокат круглого сечения диаметром от 10 до 36 мм включ.; - шестигранного сечения диаметром вписанного круга от 10 до 32 мм включ.; - квадратного сечения со стороной от 12 до 24 мм включ.; - арматурный прокат гладкого и периодического профиля от 10 до 28. Длина проката до 11700 мм. Годовой объем производства– 127 100 тонн.')
//   instanceStan.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн.')
//   instanceC.updateTitleContent('Ввод в эксплуатацию – 1933 г. В состав калибровочного цеха входят участки отделки, зачистки, термообработки металла, отделения волочения, травильное и инструментальное, другие подразделения. Цех оборудован отечественными и импортными станками и линиями для холодного волочения проката, обточки и полировки. Основные задачи цеха: производство калиброванного, горячекатаного проката и проката со специальной отделкой поверхности. Максимальная годовая производительность: 90 тыс. тонн калиброванного металлопроката')
//   instanceI.updateTitleContent('Сталь разливается в слитки сифонным способом. Слитки имеют конусную форму в продольном сечении (с расширением кверху) и квадратную - в поперечном сечении с вогнутыми гранями и скругленными углами для снижения напряжений и возникновения разрывов при кристаллизации стали. Помимо основной части, слиток содержит прибыльную часть - дополнительное удлинение для локализации выделяющихся газов и всплывающих неметаллических включений. Прибыльная часть слитка имеет обратную конусность (с расширением вниз), которая удаляется после прокатки слитков. Разливают слитки массой: 5,2, 5,3, 5,6, 5,7 тонн. Разливка стали в слитки имеет ряд преимуществ перед распространенной в настоящее время непрерывной разливкой на МНЛЗ: Преимущества: - возможность быстрой смены марочного сортамента выплавляемой и разливаемой стали; - наличие чистой центральной части слитка (дендритной зоны) по содержанию неметаллических включений.')
//   instanceLom.updateTitleContent('Ломом на заводы поступает с предприятий «УГМК-Холдинга»')
//   instanceFourtwo.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн')
//   instanceMnls.updateTitleContent('Жидкая сталь разливается на МНЛЗ открытой или закрытой струей на заготовку размером 150х150(130х130) мм длиной 6-12 м с электромагнитным перемешиванием в кристаллизаторе и ручьях. Заготовка при необходимости проходит дробеструйную очистку от окалины, магнитно-порошковый контроль поверхностных дефектов и их абразивную сплошную или выборочную зачистку. Количество ручьев - 4 шт. Радиус машины - 9 м Номинальная емкость промковша - 18.4 т (макс. 19.8 т) Оснащен манипуляторами для защитной трубы и для разливочного стакана. Контроль уровня стали в кристаллизаторе - радиоактивный датчик Со60.')
//   instanceF.updateTitleContent('Ввод в эксплуатацию – 1946 г. Работает в составе двух агломашин площадью спекания 30 и 50 м2. Производится агломерат для доменного цеха. Основные задачи цеха: производство агломерата для доменного цеха; производство обожженной извести для нужд ЭСПЦ; Максимальный годовой объем производства: 660 тыс. тонн агломерата 14,6 тыс. тонн извести')
//   instanceD.updateTitleContent('Ввод в эксплуатацию – 1896 г. Работает в составе трех печей объемом 205, 212 и 260 м3,обеспечивает жидким передельным чугуном электросталеплавильный цех, производит товарный передельный литейный чугун в чушках. Основные задачи цеха: производство передельного чугуна для электросталеплавильного цеха; производство чугуна литейному цеху для отливки изложниц и другого чугунного литья; производство товарного чугуна; производство граншлака; производство доменного газа. Максимальный годовой объем производства: 365 тыс. тонн чугуна; 115 тыс. тонн граншлака.')
//   instanceB.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
//   instanceDsp.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
//   instanceBt.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
//   instanceV.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
//   instanceVtwo.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
//   instanceDspt.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
// }

var factoryTimeline = anime.timeline({
  loop: false
});
factoryTimeline
  .add({
    targets: '#oneanim .factoryblock .cloud1',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
  .add({
    targets: '#oneanim .factoryblock .cloud2',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
factoryTimeline.reverse();
factoryTimeline.pause();
document.querySelector('#oneanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='oneanim'){
    factoryTimeline.play();
    factoryTimeline.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#oneanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='oneanim'){
    factoryTimeline.play();
    factoryTimeline.reverse();
    console.log('out')
  } 
};
var carTimilene = anime.timeline({
  loop: false
})
carTimilene
  .add({
    targets: '#elevenanim  .lineup',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#elevenanim  .linetwo',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#elevenanim  .linethree',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
carTimilene.reverse();
carTimilene.pause();
document.querySelector('#elevenanim').onmouseover = function(e) {
    if (e.target.getAttribute('id') && e.target.getAttribute('id')=='elevenanim'){
      carTimilene.play();
      carTimilene.reverse();
      console.log('over')
      console.log(e.target)
    }
  };
document.querySelector('#elevenanim').onmouseout = function(e) {
    if (e.target.getAttribute('id') && e.target.getAttribute('id')=='elevenanim'){
      carTimilene.play();
      carTimilene.reverse();
      console.log('out')
    } 
  };
var carTimilene = anime.timeline({
  loop: false
})
carTimilene
  .add({
    targets: '#elevenanim  .lineup',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#elevenanim  .linetwo',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#elevenanim  .linethree',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
carTimilene.reverse();
carTimilene.pause();
document.querySelector('#elevenanim').onmouseover = function(e) {
    if (e.target.getAttribute('id') && e.target.getAttribute('id')=='elevenanim'){
      carTimilene.play();
      carTimilene.reverse();
      console.log('over')
      console.log(e.target)
    }
  };
document.querySelector('#elevenanim').onmouseout = function(e) {
    if (e.target.getAttribute('id') && e.target.getAttribute('id')=='elevenanim'){
      carTimilene.play();
      carTimilene.reverse();
      console.log('out')
    } 
  };
var carTwoTimilene = anime.timeline({
  loop: false
})
carTwoTimilene
  .add({
    targets: '#rightsevenanim  .lineup',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#rightsevenanim .linetwo',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  .add({
    targets: '#rightsevenanim  .linethree',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
  })
  carTwoTimilene.reverse();
  carTwoTimilene.pause();
  document.querySelector('#rightsevenanim').onmouseover = function(e) {
      if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightsevenanim'){
        carTwoTimilene.play();
        carTwoTimilene.reverse();
        console.log('over')
        console.log(e.target)
      }
    };
  document.querySelector('#rightsevenanim').onmouseout = function(e) {
      if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightsevenanim'){
        carTwoTimilene.play();
        carTwoTimilene.reverse();
        console.log('out')
      } 
    };
var bubbleTimeline = anime.timeline({
  loop: false
});
bubbleTimeline
  .add({
    targets: '#fiveanim  .bubble1',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
  .add({
    targets: '#fiveanim .bubble2',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
  .add({
    targets: '#fiveanim .bubble3',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
bubbleTimeline.reverse();
bubbleTimeline.pause();
document.querySelector('#fiveanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='fiveanim'){
    bubbleTimeline.play();
    bubbleTimeline.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#fiveanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='fiveanim'){
    bubbleTimeline.play();
    bubbleTimeline.reverse();
    console.log('out')
  } 
};
var bubbleRightTimeline = anime.timeline({
  loop: false
});
bubbleRightTimeline
  .add({
    targets: '#rightthreeanim  .bubble11',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
  .add({
    targets: '#rightthreeanim .bubble22',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
  .add({
    targets: '#rightthreeanim .bubble33',
    easing: 'easeOutExpo',
    duration: 1000,
    opacity: 1
  })
bubbleRightTimeline.reverse();
bubbleRightTimeline.pause();
document.querySelector('#rightthreeanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightthreeanim'){
    bubbleRightTimeline.play();
    bubbleRightTimeline.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#rightthreeanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightthreeanim'){
    bubbleRightTimeline.play();
    bubbleRightTimeline.reverse();
    console.log('out')
  } 
};
var oreDrawingTwo = anime({
  targets: '.oretwowrap polygon',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 150 },
  autoplay: true
});
// oreDrawingTwo.reverse();
document.querySelector('#oretwo').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='oretwo'){
    oreDrawingTwo.reset();
    // oreDrawingTwo.reverse();
    oreDrawingTwo.pause();
    oreDrawingTwo.play();
    console.log('over')
    console.log(e.target)
  }
};
var oreDrawingTwoT = anime({
  targets: '.oretwowrapt .pol',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 150 },
  autoplay: true
});
// oreDrawingTwo.reverse();
document.querySelector('#oretwot').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='oretwot'){
    oreDrawingTwoT.reset();
    // oreDrawingTwo.reverse();
    oreDrawingTwoT.pause();
    oreDrawingTwoT.play();
    console.log('over')
    console.log(e.target)
  }
};
// document.querySelector('#oretwo').onmouseout = function(e) {
//   if (e.target.getAttribute('id') && e.target.getAttribute('id')=='oretwo'){
//     oreDrawingTwo.play();
//     oreDrawingTwo.reset();
//     console.log('out')
//   } 
// };
var lineDrawing = anime({
  targets: '.lineDrawing .lines line',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 150 },
  direction: 'alternate',
  loop: false
});
lineDrawing.reverse();
lineDrawing.pause();
document.querySelector('#twoanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='twoanim'){
    lineDrawing.play();
    lineDrawing.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#twoanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='twoanim'){
    lineDrawing.play();
    lineDrawing.reverse();
    console.log('out')
  } 
};

var nineDrawing = anime({
  targets: '#sixanim .path path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 150 },
  autoplay: true
});
document.querySelector('#sixanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='sixanim'){
    nineDrawing.reset();
    // oreDrawingTwo.reverse();
    nineDrawing.pause();
    nineDrawing.play();
    console.log('over')
    console.log(e.target)
  }
};
var bakeTwoDuration = anime({
  targets: '#rightoneanim .bakewrap .bakeitem',
  easing: 'easeInOutSine',
  translateY: [{value:30},{value:0}],
  duration: 1500,
  loop: false
});
bakeTwoDuration.reverse();
bakeTwoDuration.pause();
document.querySelector('#rightoneanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightoneanim'){
    bakeTwoDuration.play();
    bakeTwoDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
var bakeDuration = anime({
  targets: '#threeanim .bakewrap .bakeitem',
  easing: 'easeInOutSine',
  translateY: [{value:30},{value:0}],
  duration: 1500,
  loop: false
});
bakeDuration.reverse();
bakeDuration.pause();
document.querySelector('#threeanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='threeanim'){
    bakeDuration.play();
    bakeDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
var duration = anime({
  targets: '.dsp .dspwrap .dspdown',
  easing: 'easeInOutSine',
  translateY: [{value:20},{value:0}],
  duration: 1500,
  loop: false
});
duration.reverse();
duration.pause();
document.querySelector('#animfour').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='animfour'){
    duration.play();
    duration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
var dspDuration = anime({
  targets: '.dsptwo .dspwrap .dspdown',
  easing: 'easeInOutSine',
  translateY: [{value:20},{value:0}],
  duration: 1500,
  loop: false
});
dspDuration.reverse();
dspDuration.pause();
document.querySelector('#righttwoanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='righttwoanim'){
    dspDuration.play();
    dspDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
// document.querySelector('#qwe').onmouseout = function(e) {
//   if (e.target.getAttribute('id') && e.target.getAttribute('id')=='qwe'){
//     dspDuration.play();
//     dspDuration.reverse();
//     console.log('out')
//   } 
// };
var mnlsLine  = anime.timeline({
  loop: true
});
mnlsLine
.add({
  targets: '.mnls .mnlswrap .mnlspath1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})
.add({
  targets: '.mnls .mnlswrap .mnlspath2',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})
// var mnlsLine = anime({
//   targets: '.mnls .mnlswrap .mnlspath',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2000,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: false
// });
mnlsLine.pause();
document.querySelector('#rightfouranim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightfouranim'){
    mnlsLine.play();
    // oreDrawingTwo.reverse();
    mnlsLine.pause();
    mnlsLine.play();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#rightfouranim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightfouranim'){
    mnlsLine.reset();
    mnlsLine.pause();
    console.log('out')
  } 
};
var linerepeirDuration = anime({
  targets: '#rightanims',
  easing: 'easeInOutSine',
  rotate:360,
  duration: 1000,
  loop: false
});
linerepeirDuration.reverse();
linerepeirDuration.pause();
document.querySelector('#righteightanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='righteightanim'){
    linerepeirDuration.play();
    linerepeirDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#righteightanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='righteightanim'){
    linerepeirDuration.play();
    linerepeirDuration.reverse();
    console.log('out')
  } 
};
var oreFistDuration = anime({
  targets: '.orefirstwrap',
  easing: 'easeInOutSine',
  rotate:360,
  duration: 4000,
  loop: false
});
oreFistDuration.reverse();
oreFistDuration.pause();
document.querySelector('#orefirstanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='orefirstanim'){
    oreFistDuration.play();
    oreFistDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#orefirstanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='orefirstanim'){
    oreFistDuration.play();
    oreFistDuration.reverse();
    console.log('out')
  } 
};
var oreFistSDuration = anime({
  targets: '.orefirstwrap',
  easing: 'easeInOutSine',
  rotate:360,
  duration: 4000,
  loop: false
});
oreFistSDuration.reverse();
oreFistSDuration.pause();
document.querySelector('#orefirstanims').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='orefirstanims'){
    oreFistSDuration.play();
    oreFistSDuration.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#orefirstanims').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='orefirstanims'){
    oreFistSDuration.play();
    oreFistSDuration.reverse();
    console.log('out')
  } 
};

// var bakeDuration = anime({
//   targets: '.bake .bakeblock',
//   easing: 'easeInOutSine',
//   translateY: 20,
//   duration: 3000,
//   loop: true
// });
var timelineParameters = anime.timeline({
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: false
});
timelineParameters
  .add({
    targets: '.calibr .calibrone',
    translateY: [ { value: -20 } ],
    // translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    duration: 2000,
    offset: 0
  })
  .add({
    targets: '.calibr .calibrtwo',
    translateX: [ { value: 20 }],
    // translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
    duration: 2000,
    offset: 0
  })
  .add({
    targets: '.calibr .calibrthree',
    // translateX: [ { value: 80 }, { value: 250 } ],
    translateY: [ { value: 20 } ],
    duration: 2000,
    offset: 0
  })
  .add({
    targets: '.calibr .calibrfour',
    translateX: [ { value: -20 } ],
    // translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
    duration: 2000,
    offset: 0
  });
  timelineParameters.reverse();
  timelineParameters.pause();
  document.querySelector('#sevenanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='sevenanim'){
    timelineParameters.play();
    timelineParameters.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#sevenanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='sevenanim'){
    timelineParameters.play();
    timelineParameters.reverse();
    console.log('out')
  } 
};
var colors = anime({
  targets: '#seveteenscroll .qwe2',
  backgroundColor: 
    {value: '#ffffff'},

    easing: 'easeInOutSine',
  duration: 2000,
  loop: false
});
colors.reverse();
colors.pause();
document.querySelector('#eightanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='eightanim'){
    colors.play();
    colors.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#eightanim ').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='eightanim'){
    colors.play();
    colors.reverse();
    console.log('out')
  } 
};
var colorsTwo = anime({
  targets: '#nineteenscroll .qwe4',
  backgroundColor: 
    {value: '#ffffff'},

    easing: 'easeInOutSine',
  duration: 2000,
  loop: false
});
colorsTwo.reverse();
colorsTwo.pause();
document.querySelector('#nineanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='nineanim'){
    colorsTwo.play();
    colorsTwo.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#nineanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='nineanim'){
    colorsTwo.play();
    colorsTwo.reverse();
    console.log('out')
  } 
};
var colorsThree = anime({
  targets: '#twentyonescroll .qwe5',
  backgroundColor: 
    {value: '#ffffff'},

    easing: 'easeInOutSine',
  duration: 2000,
  loop: false
});
colorsThree.reverse();
colorsThree.pause();
document.querySelector('#twentyanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='twentyanim'){
    colorsThree.play();
    colorsThree.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#twentyanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='twentyanim'){
    colorsThree.play();
    colorsThree.reverse();
    console.log('out')
  } 
};
var colorsFour = anime({
  targets: '#righttenscroll .qwe7',
  backgroundColor: 
    {value: '#ffffff'},

    easing: 'easeInOutSine',
  duration: 2000,
  loop: false
});
colorsFour.reverse();
colorsFour.pause();
document.querySelector('#rightfiveanim').onmouseover = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightfiveanim'){
    colorsFour.play();
    colorsFour.reverse();
    console.log('over')
    console.log(e.target)
  }
};
document.querySelector('#rightfiveanim').onmouseout = function(e) {
  if (e.target.getAttribute('id') && e.target.getAttribute('id')=='rightfiveanim'){
    colorsFour.play();
    colorsFour.reverse();
    console.log('out')
  } 
};


// var relativeValues = anime({
//   targets: '#sanya',
//   loop: false,
//   autoplay: false,
//   width: {
//     value: '+=16',
//     duration: 500,
//     easing: 'easeInOutSine'
//   },
//   height: {
//     value: '+=16',
//     duration: 500,
//     easing: 'easeInOutSine'
//   },
// });
// relativeValues.pause();
// relativeValues.reverse();
// document.querySelector('#eightanim').onmouseover = function(e) {
//   if (e.target.getAttribute('id') && e.target.getAttribute('id')=='eightanim'){
//     relativeValues.play();
//     relativeValues.reverse();
//     console.log('over')
//     console.log(e.target)
//   }
// };

// document.querySelector('#eightanim').onmouseout = function(e) {
//   if (e.target.getAttribute('id') && e.target.getAttribute('id')=='eightanim'){
//     relativeValues.play();
//     relativeValues.reverse();
//     console.log('out')
//   } 
// };
if (/iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream) {
  document.body.style.cursor = 'pointer'
}


// var g= document.querySelector('#qwe'),
//     transform= getComputedStyle(g).getPropertyValue('transform');

// g.setAttribute('transform', transform);
// var g= document.querySelector('#qwe'),
//     transform= getComputedStyle(g).getPropertyValue('transform');

// g.setAttribute('transform', transform);
// var g= document.querySelector('#qwe'),
//     transform= getComputedStyle(g).getPropertyValue('transform');

// g.setAttribute('transform', transform);
$( document ).ready(function() {
  $(window).on('resize', function(event){
    var windowWidth = $(window).width();
      if(windowWidth >769) {
        instance.updateTitleContent('Для производства (применяются) \"железорудные\" материалы концентрат железорудный шахты Северопесчанская ОА Богословское рудоуправление концентрат железный производства ОАО Святогор, флюсы известняк ОАО Севуралбокситруда, известь, обожженная собственного производства твердое топливо кокс мелочь коксовая тощий каменный уголь')
        instanceLrepeir.updateTitleContent('Линии финишной отделки круглого и шестигранного проката – комплекс оборудования, который дает возможность выпускать прокат со специальной отделкой поверхности, в том числе обточенный с особо высокой точностью геометрических размеров Линия отделки круглых черных прутков. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м) Неразрушающий контроль – контроль марки, поверхностные и внутренние дефекты (УЗК) Зачистка или вырезка дефектов - пила Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание Линия обточки-полировки проката. Точность проката после обработки - h9/h10 Неразрушающий контроль- поверхностные дефекты. Контроль размера - лазерный измеритель Упаковка, обвязка, взвешивание. Линия отделки шестигранных профилей. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м), скручивание - 0.5 гр./м (3 гр./12 м макс.) Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание')
        instanceCartwo.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
        instanceCar.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
        instanceStanEight.updateTitleContent('Линейный реверсивный стан, состоит из трёх клетей – обжимная, черновая, чистовая. Для нагрева слитков до температуры прокатки имеется шесть групп одноместных регенеративных нагревательных колодцев с общим количеством ячеек 147. Отопление колодцев производится смесью доменного и природного газов. Резка раскатов проката выполняется пилами ударного действия с ременным приводом режущего диска модели РР-2000. Выполняется резка полного сортамента проката круглого сечения диаметром от 140 до 300 мм включ., резка проката квадратного сечения со стороной от 130 до 220 мм включ. Охлаждение проката выполняется на воздухе или термосах замедленного охлаждения. Транспортировка проката для охлаждения выполняется мостовыми кранами, оборудованных механизированными клещами для транспортировки проката. Обработка металлопроката выполняется на адъюстаже цеха, имеющим в составе участок обработки передельной заготовки и участки обработки товарного проката. Продукция: товарный прокат и трубная заготовкаsдиаметром от 140 до 300 мм, осевая заготовка квадратного сечения со стороной 215 и 230 мм, товарна заготовка квадратного сечения со стороной от 150 до 220 мм, передельная заготовка квадратного сечения со стороной 130, 140, 170, 180, 184 мм. Годовой объем производства – 628 050 тонн.')
        instanceStanThree.updateTitleContent('Стан линейно-непрерывного типа, имеющий в своем составе обжимную клеть 550 нереверсивную трио, три клети в линейной промежуточной группе, две петлевые клети, четыре непрерывные клети. Нагрев передельной заготовки осуществляется в методической толкательной печи. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливается природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Охлаждение проката выполняется на реечном холодильнике длиной 48 м шириной 15 м. Резка проката на требуемую длину по заказу выполняется на прессе усилием 500тонн. Отделка проката осуществляется на адъюстаже, где выполняется правка, осмотр, зачистка, контроль, упаковка металлопроката с дальнейшей отгрузкой потребителю. Сортамент стана: товарный прокат и подкат для калибровочного производства: - прокат круглого сечения диаметром от 10 до 36 мм включ.; - шестигранного сечения диаметром вписанного круга от 10 до 32 мм включ.; - квадратного сечения со стороной от 12 до 24 мм включ.; - арматурный прокат гладкого и периодического профиля от 10 до 28. Длина проката до 11700 мм. Годовой объем производства– 127 100 тонн.')
        instanceStan.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн.')
        instanceC.updateTitleContent('Ввод в эксплуатацию – 1933 г. В состав калибровочного цеха входят участки отделки, зачистки, термообработки металла, отделения волочения, травильное и инструментальное, другие подразделения. Цех оборудован отечественными и импортными станками и линиями для холодного волочения проката, обточки и полировки. Основные задачи цеха: производство калиброванного, горячекатаного проката и проката со специальной отделкой поверхности. Максимальная годовая производительность: 90 тыс. тонн калиброванного металлопроката')
        instanceI.updateTitleContent('Сталь разливается в слитки сифонным способом. Слитки имеют конусную форму в продольном сечении (с расширением кверху) и квадратную - в поперечном сечении с вогнутыми гранями и скругленными углами для снижения напряжений и возникновения разрывов при кристаллизации стали. Помимо основной части, слиток содержит прибыльную часть - дополнительное удлинение для локализации выделяющихся газов и всплывающих неметаллических включений. Прибыльная часть слитка имеет обратную конусность (с расширением вниз), которая удаляется после прокатки слитков. Разливают слитки массой: 5,2, 5,3, 5,6, 5,7 тонн. Разливка стали в слитки имеет ряд преимуществ перед распространенной в настоящее время непрерывной разливкой на МНЛЗ: Преимущества: - возможность быстрой смены марочного сортамента выплавляемой и разливаемой стали; - наличие чистой центральной части слитка (дендритной зоны) по содержанию неметаллических включений.')
        instanceLom.updateTitleContent('Ломом на заводы поступает с предприятий «УГМК-Холдинга»')
        instanceFourtwo.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн')
        instanceMnls.updateTitleContent('Жидкая сталь разливается на МНЛЗ открытой или закрытой струей на заготовку размером 150х150(130х130) мм длиной 6-12 м с электромагнитным перемешиванием в кристаллизаторе и ручьях. Заготовка при необходимости проходит дробеструйную очистку от окалины, магнитно-порошковый контроль поверхностных дефектов и их абразивную сплошную или выборочную зачистку. Количество ручьев - 4 шт. Радиус машины - 9 м Номинальная емкость промковша - 18.4 т (макс. 19.8 т) Оснащен манипуляторами для защитной трубы и для разливочного стакана. Контроль уровня стали в кристаллизаторе - радиоактивный датчик Со60.')
        instanceF.updateTitleContent('Ввод в эксплуатацию – 1946 г. Работает в составе двух агломашин площадью спекания 30 и 50 м2. Производится агломерат для доменного цеха. Основные задачи цеха: производство агломерата для доменного цеха; производство обожженной извести для нужд ЭСПЦ; Максимальный годовой объем производства: 660 тыс. тонн агломерата 14,6 тыс. тонн извести')
        instanceD.updateTitleContent('Ввод в эксплуатацию – 1896 г. Работает в составе трех печей объемом 205, 212 и 260 м3,обеспечивает жидким передельным чугуном электросталеплавильный цех, производит товарный передельный литейный чугун в чушках. Основные задачи цеха: производство передельного чугуна для электросталеплавильного цеха; производство чугуна литейному цеху для отливки изложниц и другого чугунного литья; производство товарного чугуна; производство граншлака; производство доменного газа. Максимальный годовой объем производства: 365 тыс. тонн чугуна; 115 тыс. тонн граншлака.')
        instanceB.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
        instanceDsp.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
        instanceBt.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
        instanceV.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
        instanceVtwo.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
        instanceDspt.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
      }  else  {
        instance.updateTitleContent('Руда')
        instanceLrepeir.updateTitleContent('Линии отделки проката')
        instanceCartwo.updateTitleContent('Отгрузка')
        instanceCar.updateTitleContent('Отгрузка')
        instanceStanEight.updateTitleContent('стан 850')
        instanceStanThree.updateTitleContent('стан 320')
        instanceStan.updateTitleContent('стан 450')
        instanceC.updateTitleContent('Калибровочный цех')
        instanceI.updateTitleContent('Разливка в слитки')
        instanceLom.updateTitleContent('Лом')
        instanceFourtwo.updateTitleContent('Прокатный стан')
        instanceMnls.updateTitleContent('МНЛЗ')
        instanceF.updateTitleContent('Агломерационный цех')
        instanceD.updateTitleContent('Доменный цех')
        instanceB.updateTitleContent('Печь-ковш (АПК)')
        instanceDsp.updateTitleContent('ДСП-80')
        instanceBt.updateTitleContent('Печь-ковш (АПК)')
        instanceV.updateTitleContent('Вакууматор')
        instanceVtwo.updateTitleContent('Вакууматор')
        instanceDspt.updateTitleContent('ДСП-70')
      }
    });
});

// $( document ).ready(function() {
//   $(window).on('resize', function(event){
//     if($(window).width() <769) {
//       instance.updateTitleContent('Руда')
//     } else {
//       instance.updateTitleContent('Для производства (применяются) \"железорудные\" материалы концентрат железорудный шахты Северопесчанская ОА Богословское рудоуправление концентрат железный производства ОАО Святогор, флюсы известняк ОАО Севуралбокситруда, известь, обожженная собственного производства твердое топливо кокс мелочь коксовая тощий каменный уголь')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <769) {
//       instanceLrepeir.updateTitleContent('Линии отделки проката')
//     } else {
//       instanceLrepeir.updateTitleContent('Линии финишной отделки круглого и шестигранного проката – комплекс оборудования, который дает возможность выпускать прокат со специальной отделкой поверхности, в том числе обточенный с особо высокой точностью геометрических размеров Линия отделки круглых черных прутков. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м) Неразрушающий контроль – контроль марки, поверхностные и внутренние дефекты (УЗК) Зачистка или вырезка дефектов - пила Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание Линия обточки-полировки проката. Точность проката после обработки - h9/h10 Неразрушающий контроль- поверхностные дефекты. Контроль размера - лазерный измеритель Упаковка, обвязка, взвешивание. Линия отделки шестигранных профилей. Правка, кривизна после правки - н/б 1 мм/м (рессорно-пружинные - н/б 1.2 мм/м), скручивание - 0.5 гр./м (3 гр./12 м макс.) Торцовка и снятие фаски под углом 45 или 60 гр. - 0.5-4 +/-0.3 мм Упаковка, обвязка и взвешивание')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <769) {
//       instanceCartwo.updateTitleContent('Отгрузка')
//     } else {
//       instanceCartwo.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <769) {
//       instanceCar.updateTitleContent('Отгрузка')
//     } else {
//       instanceCar.updateTitleContent('УГМК-Сталь организует комплексные поставки, используя железнодорожную сеть и автотранспорт Пачки прутков маркируются двумя пластиковыми ярлыками, содержащие следующую информацию: товарный знак и наименование предприятия изготовителя; НТД; номинальный размер, марку стали, номер плавки, длину порезки, вес пакета, номер пакета и дату производства. Упаковка производится в соответствии с ГОСТ 7566-94.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceStanEight.updateTitleContent('стан 850')
//     } else {
//       instanceStanEight.updateTitleContent('Линейный реверсивный стан, состоит из трёх клетей – обжимная, черновая, чистовая. Для нагрева слитков до температуры прокатки имеется шесть групп одноместных регенеративных нагревательных колодцев с общим количеством ячеек 147. Отопление колодцев производится смесью доменного и природного газов. Резка раскатов проката выполняется пилами ударного действия с ременным приводом режущего диска модели РР-2000. Выполняется резка полного сортамента проката круглого сечения диаметром от 140 до 300 мм включ., резка проката квадратного сечения со стороной от 130 до 220 мм включ. Охлаждение проката выполняется на воздухе или термосах замедленного охлаждения. Транспортировка проката для охлаждения выполняется мостовыми кранами, оборудованных механизированными клещами для транспортировки проката. Обработка металлопроката выполняется на адъюстаже цеха, имеющим в составе участок обработки передельной заготовки и участки обработки товарного проката. Продукция: товарный прокат и трубная заготовкаsдиаметром от 140 до 300 мм, осевая заготовка квадратного сечения со стороной 215 и 230 мм, товарна заготовка квадратного сечения со стороной от 150 до 220 мм, передельная заготовка квадратного сечения со стороной 130, 140, 170, 180, 184 мм. Годовой объем производства – 628 050 тонн.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceStanThree.updateTitleContent('стан 320')
//     } else {
//       instanceStanThree.updateTitleContent('Стан линейно-непрерывного типа, имеющий в своем составе обжимную клеть 550 нереверсивную трио, три клети в линейной промежуточной группе, две петлевые клети, четыре непрерывные клети. Нагрев передельной заготовки осуществляется в методической толкательной печи. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливается природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Охлаждение проката выполняется на реечном холодильнике длиной 48 м шириной 15 м. Резка проката на требуемую длину по заказу выполняется на прессе усилием 500тонн. Отделка проката осуществляется на адъюстаже, где выполняется правка, осмотр, зачистка, контроль, упаковка металлопроката с дальнейшей отгрузкой потребителю. Сортамент стана: товарный прокат и подкат для калибровочного производства: - прокат круглого сечения диаметром от 10 до 36 мм включ.; - шестигранного сечения диаметром вписанного круга от 10 до 32 мм включ.; - квадратного сечения со стороной от 12 до 24 мм включ.; - арматурный прокат гладкого и периодического профиля от 10 до 28. Длина проката до 11700 мм. Годовой объем производства– 127 100 тонн.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceStan.updateTitleContent('стан 450')
//     } else {
//       instanceStan.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceC.updateTitleContent('Калибровочный цех')
//     } else {
//       instanceC.updateTitleContent('Ввод в эксплуатацию – 1933 г. В состав калибровочного цеха входят участки отделки, зачистки, термообработки металла, отделения волочения, травильное и инструментальное, другие подразделения. Цех оборудован отечественными и импортными станками и линиями для холодного волочения проката, обточки и полировки. Основные задачи цеха: производство калиброванного, горячекатаного проката и проката со специальной отделкой поверхности. Максимальная годовая производительность: 90 тыс. тонн калиброванного металлопроката')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceI.updateTitleContent('Разливка в слитки')
//     } else {
//       instanceI.updateTitleContent('Сталь разливается в слитки сифонным способом. Слитки имеют конусную форму в продольном сечении (с расширением кверху) и квадратную - в поперечном сечении с вогнутыми гранями и скругленными углами для снижения напряжений и возникновения разрывов при кристаллизации стали. Помимо основной части, слиток содержит прибыльную часть - дополнительное удлинение для локализации выделяющихся газов и всплывающих неметаллических включений. Прибыльная часть слитка имеет обратную конусность (с расширением вниз), которая удаляется после прокатки слитков. Разливают слитки массой: 5,2, 5,3, 5,6, 5,7 тонн. Разливка стали в слитки имеет ряд преимуществ перед распространенной в настоящее время непрерывной разливкой на МНЛЗ: Преимущества: - возможность быстрой смены марочного сортамента выплавляемой и разливаемой стали; - наличие чистой центральной части слитка (дендритной зоны) по содержанию неметаллических включений.')
//     }
//   });
//   $(window).on('resize', function(event){
//     if($(window).width() <=768) {
//       instanceLom.updateTitleContent('Лом')
//     } else {
//       instanceLom.updateTitleContent('Ломом на заводы поступает с предприятий «УГМК-Холдинга»')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceFourtwo.updateTitleContent('Прокатный стан')
//     } else {
//       instanceFourtwo.updateTitleContent('Стан линейного типа, имеет в своем составе обжимную нереверсивную клеть 680 трио и линейно расположенные четыре клети 450 в чистовой линии. Нагрев передельной заготовки до температуры прокатки производится в двух методических печах толкательного типа. Печи имеют три зоны: томильная зона, сварочная зона с верхним и нижним подогревом, методическая зона. Печи отапливаются природным газом. Движение заготовки осуществляется по глиссажным водоохлаждаемым трубам. Резка проката выполняется двумя салазковыми пилами. Охлаждение проката выполняется на двух реечных цепных холодильниках. Сортамент стана: товарный прокат и подкат для калибровочного производства. - прокат круглого сечения диаметром от 32 до 120 мм - прокат шестигранного сечения диаметром вписанного круга от 32 до 75 мм - прокат квадратного сечения со стороной от 40 до 110 мм - пустотелый прокат круглого сечения диаметром от 26,5 до 41,0 мм и шестигранного сечения диаметром вписанного круга от 24 до 38 мм Годовой объем производства – 255 400 тонн')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceMnls.updateTitleContent('МНЛЗ')
//     } else {
//       instanceMnls.updateTitleContent('Жидкая сталь разливается на МНЛЗ открытой или закрытой струей на заготовку размером 150х150(130х130) мм длиной 6-12 м с электромагнитным перемешиванием в кристаллизаторе и ручьях. Заготовка при необходимости проходит дробеструйную очистку от окалины, магнитно-порошковый контроль поверхностных дефектов и их абразивную сплошную или выборочную зачистку. Количество ручьев - 4 шт. Радиус машины - 9 м Номинальная емкость промковша - 18.4 т (макс. 19.8 т) Оснащен манипуляторами для защитной трубы и для разливочного стакана. Контроль уровня стали в кристаллизаторе - радиоактивный датчик Со60.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceF.updateTitleContent('Агломерационный цех')
//     } else {
//       instanceF.updateTitleContent('Ввод в эксплуатацию – 1946 г. Работает в составе двух агломашин площадью спекания 30 и 50 м2. Производится агломерат для доменного цеха. Основные задачи цеха: производство агломерата для доменного цеха; производство обожженной извести для нужд ЭСПЦ; Максимальный годовой объем производства: 660 тыс. тонн агломерата 14,6 тыс. тонн извести')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceD.updateTitleContent('Доменный цех')
//     } else {
//       instanceD.updateTitleContent('Ввод в эксплуатацию – 1896 г. Работает в составе трех печей объемом 205, 212 и 260 м3,обеспечивает жидким передельным чугуном электросталеплавильный цех, производит товарный передельный литейный чугун в чушках. Основные задачи цеха: производство передельного чугуна для электросталеплавильного цеха; производство чугуна литейному цеху для отливки изложниц и другого чугунного литья; производство товарного чугуна; производство граншлака; производство доменного газа. Максимальный годовой объем производства: 365 тыс. тонн чугуна; 115 тыс. тонн граншлака.')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceB.updateTitleContent('Печь-ковш (АПК)')
//     } else {
//       instanceB.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceDsp.updateTitleContent('ДСП-80')
//     } else {
//       instanceDsp.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceBt.updateTitleContent('Печь-ковш (АПК)')
//     } else {
//       instanceBt.updateTitleContent('АКП (агрегат печь-ковш) служит для доведения полупродукта, выпущенного из ДСП-80 до заданной температуры и химического состава готовой стали, для последующей обработки на вакууматоре (при необходимости) и разливки на МНЛЗ. Емкость ковша – 80 т Годовой объем производства 750 000 т Время плавки 35-47 минут')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceV.updateTitleContent('Вакууматор')
//     } else {
//       instanceV.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceVtwo.updateTitleContent('Вакууматор')
//     } else {
//       instanceVtwo.updateTitleContent('Служит для обработки жидкой стали под вакуумом с целью улучшения её качества за счёт уменьшения в ней содержания газов (водород, кислород) и неметаллических включений. Емкость в ковше по вакуумирование – 75 т Тип агрегата – камерный VD Время обработки – до 45 минут')
//     }
//   });
//   $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//     if(windowWidth <=768) {
//       instanceDspt.updateTitleContent('ДСП-70')
//     } else {
//       instanceDspt.updateTitleContent('Предназначена для выплавки полупродукта с заданной температурой для последующей обработки и легирования. Емкость печи – 80 т Годовой объем производства – 750 000 т Время плавки – 47 минут Используемая шихта – до 40% жидкого чугуна или 100% металлолома')
//     }
//   });
// });