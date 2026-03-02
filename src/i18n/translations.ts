export type Language = 'en' | 'ru' | 'by';

export const translations = {
  en: {
    nav: {
      donate: 'BECOME A SPONSOR',
    },
    hero: {
      line1: 'WE SWIM.',
      line2: 'WE MAKE HISTORY.',
      fundraisingGoal: 'Fundraising goal: ~£60,000',
      fundraisingDesc: 'We are raising funds to cover the core costs of a certified English Channel relay: registration, escort boat, safety, and logistics.',
      fundraisingRaisedLabel: 'Collected so far',
      days: 'DAYS',
      hrs: 'HRS',
      mins: 'MINS',
      secs: 'SECS',
    },
    mission: {
      label: 'THE MISSION',
      text1: 'SIX WOMEN. ONE MISSION.',
      text2: 'BE THE FIRST BELARUSIANS',
      text3underline: 'TO SWIM',
      text3rest: 'THE ENGLISH CHANNEL.',
    },
    challenge: {
      title: 'THE CHALLENGE',
      distance: 'DISTANCE',
      waterTemp: 'WATER TEMP',
      wetsuits: 'WETSUITS',
      girls: 'GIRLS',
    },
    team: {
      title: 'THE TEAM',
      support: 'HEAD OF SUPPORT:',
    },
    partners: {
      title1: 'Why Become',
      title2: 'Our Partner',
      block1Title: 'Access to an Active Professional Community',
      block1Desc: 'The project brings together people for whom sport is part of a systematic approach to life.',
      block2Title: 'A Reputational Asset, Not a Placement',
      block2Desc: 'Partnership creates a lasting association of the brand with development and achievement.',
      block3Title: 'Strengthening the Company Brand',
      block3Desc: 'The company becomes part of the cultural environment of active professionals.',
      block4Title: 'Value Position',
      block4Desc: 'Supporting the project is an action, not a declaration.',
      promotionTitle: 'How We Promote Partners',
      promo1Title: 'Integration Into Project Activities',
      promo1Desc: 'The partner appears within real events, not in advertising inserts.',
      promo1Items: [
        'Publications and stories',
        'Gear and visual materials',
        'Trips and race starts',
        'Announcements, press releases, and reports',
        'Joint activities and PR',
      ],
      promo2Title: 'Presence Points',
      promo2Items: [
        'Website',
        'Social media',
        'Presentations and reports',
        'Media materials',
        'Wikipedia page with mention',
      ],
      promo3Title: 'Long-Term Effect',
      promo3Items: [
        'Materials continue to gain views',
        'Mentions remain after the season',
        'Content is used in further project communications',
      ],
      coversLabel: 'COVERS:',
      impactLabel: 'IMPACT:',
      sponsorshipTitle: 'SPONSORSHIP PACKAGES',
      tiers: [
        {
          name: '🌊 THE NUTRITION PARTNER',
          price: '€3,000',
          tagline: 'You fuel the crossing.',
          covers: [
            'Pre-swim nutrition during Channel week',
            'Swim-day feeds & hot drinks',
            'Electrolytes & energy gels',
            'Recovery drinks & thermal beverages',
            'Feeding containers, thermoses & logistics',
            'Race-day hydration planning'
          ],
          impact: 'A Channel relay can last 15–20+ hours. Without structured nutrition, the body shuts down. This package directly supports the swimmers’ physical performance in cold open water.'
        },
        {
          name: '🚤 THE EQUIPMENT PARTNER',
          price: '€5,000',
          tagline: 'You equip the team for the Channel.',
          covers: [
            'Swimsuits, goggles, swim caps',
            'Dry robes, thermal ponchos',
            'Microfibre towels',
            'Cold-water protection supplies',
            'Thermal hand/feet warmers'
          ],
          impact: 'This package fully funds the essential swim equipment block.'
        },
        {
          name: '🎥 THE BRAND & MEDIA PARTNER',
          price: '€6,500',
          tagline: 'You help tell the story of women crossing the Channel.',
          covers: [
            'GoPro & underwater cameras',
            'Drone filming',
            'Memory cards & battery systems',
            'Professional photo and videographer (Channel day)',
            'Editing & post-production',
            'Social media documentation',
            'Branded team apparel & visibility materials',
            'Content creation'
          ],
          impact: 'This is not just a swim — it is a historic, women-led endurance story.'
        },
        {
          name: '🛟 THE SAFETY & COMPLIANCE PARTNER',
          price: '€8,000',
          tagline: 'You protect every swimmer.',
          covers: [
            'Medical checks for all 6 swimmers',
            'Sports insurance coverage',
            'Expanded first aid kit',
            'Anti-chafing & cold exposure protection',
            'Anti-seasickness medication',
            'GPS trackers',
            'Radio communication equipment',
            'Emergency medical buffer'
          ],
          impact: 'This package funds the full medical & safety block.'
        },
        {
          name: '🌍 THE CHANNEL OPERATIONS PARTNER',
          price: '€10,000',
          tagline: 'You secure the certified attempt itself.',
          covers: [
            'Major escort boat funding',
            'Fuel & harbour charges',
            'Official registration',
            'Certification & observer requirements',
            'Weather-window standby buffer'
          ],
          impact: 'Without this funding, the relay cannot happen. This package secures the operational backbone of the Channel crossing.'
        },
        {
          name: '👑 THE MISSION PARTNER',
          price: '€15,000',
          tagline: 'Become a core pillar of the entire Channel project and help us cover all our hard training!',
          covers: [
            'Dedicated cold-water performance coach',
            'Structured open water training programme',
            'Channel-specific swim camps (multi-day exposure blocks)',
            'Cold adaptation protocols (15–16°C simulation)',
            'Female-specific endurance education',
            'Recovery & performance monitoring',
            'Travel logistics for the team',
            'Accommodation',
            'Basic recovery support (massage / physio sessions)'
          ],
          impact: 'This package funds the full preparation phase that makes the crossing possible and helps us prepare for the DAY!'
        }
      ],
      tiersNote: 'Packages can be customized individually for each partner',
      ctaButton: 'BECOME A SPONSOR',
      overlayMessage: 'Please reach out to a BelSwimSister to agree on the sponsorship package',
      emailButton: 'Email Us',
    },
    training: {
      title: 'EVENT PLAN',
      subtitle: 'From preparation to the swim window: June 21 — June 30, 2026',
      phases: [
        {
          phase: 'PREPARATION',
          title: 'OPEN WATER TRAINING',
          date: 'NOW — MAY 2026',
          desc: 'Weekly cold water sessions, building endurance and acclimatizing to Channel conditions. Each swimmer must qualify with a 6-hour observed swim.',
        },
        {
          phase: 'ACCLIMATIZATION',
          title: 'COLD WATER ADAPTATION',
          date: 'JAN — JUNE 2026',
          desc: 'Progressive exposure to 15–16°C water temperatures without wetsuits. Building tolerance for the Channel crossing conditions.',
        },
        {
          phase: 'FINAL PREP',
          title: 'TEAM REHEARSALS',
          date: 'MAY — JUNE 2026',
          desc: 'Relay changeover practice, boat-to-swimmer coordination, feeding strategy rehearsals, and night swimming sessions.',
        },
        {
          phase: 'TRAVEL',
          title: 'ARRIVE IN DOVER',
          date: 'MID-JUNE 2026',
          desc: 'Team assembles in Dover, England. Final briefings with the Channel Swimming Association pilot and support crew.',
        },
        {
          phase: 'SWIM WINDOW',
          title: 'THE CROSSING',
          date: 'JUNE 21 — JUNE 30, 2026',
          desc: 'Our assigned swim window. The team waits for optimal tide and weather conditions, then swims the English Channel as a relay — approximately 40–70 km depending on currents.',
        },
      ],
    },
    cta: {
      title: 'BE PART OF HISTORY',
      desc: 'Join us as a sponsor, partner, or supporter. Help us prove that impossible is just a word.',
      button: 'BECOME A SPONSOR',
      contact: 'CONTACT:',
    },
    footer: {
      rights: '© 2026 BELSWIMSISTERS. ALL RIGHTS RESERVED.',
    },
  },
  ru: {
    nav: {
      donate: 'СТАТЬ СПОНСОРОМ',
    },
    hero: {
      line1: 'МЫ ПЛЫВЁМ.',
      line2: 'МЫ СОЗДАЁМ ИСТОРИЮ.',
      fundraisingGoal: 'Цель сбора: ~£60.000',
      fundraisingDesc: 'Мы собираем средства на основные расходы сертифицированной эстафеты через Ла-Манш: регистрацию, сопровождающее судно, безопасность и логистику.',
      fundraisingRaisedLabel: 'Собрано на сегодня',
      days: 'ДНЕЙ',
      hrs: 'ЧАСОВ',
      mins: 'МИНУТ',
      secs: 'СЕКУНД',
    },
    mission: {
      label: 'МИССИЯ',
      text1: 'ШЕСТЬ ЖЕНЩИН. ОДНА МИССИЯ.',
      text2: 'ПЕРЕСЕЧЬ ЛА-МАНШ',
      text3underline: 'ПЕРВЫМИ',
      text3rest: 'СРЕДИ БЕЛАРУСОВ.',
    },
    challenge: {
      title: 'ВЫЗОВ',
      distance: 'ДИСТАНЦИЯ',
      waterTemp: 'ТЕМПЕРАТУРА ВОДЫ',
      wetsuits: 'ГИДРОКОСТЮМЫ',
      girls: 'ДЕВУШЕК',
    },
    team: {
      title: 'КОМАНДА',
      support: 'РУКОВОДИТЕЛЬ ПОДДЕРЖКИ:',
    },
    partners: {
      title1: 'Почему стоит стать',
      title2: 'нашим партнёром',
      block1Title: 'Доступ к активному профессиональному сообществу',
      block1Desc: 'Проект объединяет людей, для которых спорт — часть системного подхода к жизни.',
      block2Title: 'Репутационный актив, а не размещение',
      block2Desc: 'Партнёрство создаёт устойчивую ассоциацию бренда с развитием и достижениями.',
      block3Title: 'Усиление бренда компании',
      block3Desc: 'Компания становится частью культурной среды активных специалистов.',
      block4Title: 'Ценностная позиция',
      block4Desc: 'Поддержка проекта — это действие, а не декларация.',
      promotionTitle: 'Как мы продвигаем партнёров',
      promo1Title: 'Интеграция в деятельность проекта',
      promo1Desc: 'Партнёр появляется внутри реальных событий, а не в рекламных вставках.',
      promo1Items: [
        'Публикации и сторис',
        'Экипировка и визуальные материалы',
        'Поездки и старты',
        'Анонсы, пресс-релизы и отчёты',
        'Совместные активности и PR',
      ],
      promo2Title: 'Точки присутствия',
      promo2Items: [
        'Сайт',
        'Соцсети',
        'Презентации и отчёты',
        'Медиа-материалы',
        'Wikipedia-страница с упоминанием',
      ],
      promo3Title: 'Долгосрочный эффект',
      promo3Items: [
        'Материалы продолжают набирать просмотры',
        'Упоминания остаются после сезона',
        'Контент используется в дальнейших коммуникациях проекта',
      ],
      coversLabel: 'ПОКРЫВАЕТ:',
      impactLabel: 'ВЛИЯНИЕ:',
      sponsorshipTitle: 'СПОНСОРСКИЕ ПАКЕТЫ',
      tiers: [
        {
          name: '🌊 ПАРТНЕР ПО ПИТАНИЮ',
          price: '€3,000',
          tagline: 'Вы обеспечиваете энергию для заплыва.',
          covers: [
            'Питание перед заплывом в течение недели в Ла-Манше',
            'Питание и горячие напитки в день заплыва',
            'Электролиты и энергетические гели',
            'Восстановительные и термальные напитки',
            'Контейнеры для кормления, термосы и логистика',
            'Планирование гидратации в день заплыва'
          ],
          impact: 'Эстафета через Ла-Манш может длиться 15–20+ часов. Без структурированного питания организм отключается. Этот пакет напрямую поддерживает физическую форму пловцов в холодной открытой воде.'
        },
        {
          name: '🚤 ПАРТНЕР ПО ЭКИПИРОВКЕ',
          price: '€5,000',
          tagline: 'Вы экипируете команду для Ла-Манша.',
          covers: [
            'Купальники, очки, шапочки для плавания',
            'Теплые халаты (dry robes), термальные пончо',
            'Полотенца из микрофибры',
            'Средства защиты от холодной воды',
            'Термальные грелки для рук и ног'
          ],
          impact: 'Этот пакет полностью финансирует основной блок необходимого плавательного снаряжения.'
        },
        {
          name: '🎥 БРЕНД- И МЕДИА-ПАРТНЕР',
          price: '€6,500',
          tagline: 'Вы помогаете рассказать историю женщин, пересекающих Ла-Манш.',
          covers: [
            'Камеры GoPro и подводные камеры',
            'Съемка с дрона',
            'Карты памяти и системы аккумуляторов',
            'Профессиональный фотограф и видеограф (в день заплыва)',
            'Монтаж и пост-продакшн',
            'Документирование в социальных сетях',
            'Брендированная командная одежда и материалы для видимости',
            'Создание контента'
          ],
          impact: 'Это не просто заплыв — это историческая история женской выносливости.'
        },
        {
          name: '🛟 ПАРТНЕР ПО БЕЗОПАСНОСТИ',
          price: '€8,000',
          tagline: 'Вы защищаете каждого пловца.',
          covers: [
            'Медицинские осмотры для всех 6 пловцов',
            'Спортивная страховка',
            'Расширенная аптечка первой помощи',
            'Защита от натирания и воздействия холода',
            'Лекарства от морской болезни',
            'GPS-трекеры',
            'Радиокоммуникационное оборудование',
            'Чрезвычайный медицинский буфер'
          ],
          impact: 'Этот пакет финансирует полный блок медицинского обеспечения и безопасности.'
        },
        {
          name: '🌍 ОПЕРАЦИОННЫЙ ПАРТНЕР',
          price: '€10,000',
          tagline: 'Вы обеспечиваете саму сертифицированную попытку.',
          covers: [
            'Финансирование основного судна сопровождения',
            'Топливо и портовые сборы',
            'Официальная регистрация',
            'Сертификация и требования наблюдателей',
            'Буфер ожидания погодного окна'
          ],
          impact: 'Без этого финансирования эстафета не может состояться. Этот пакет обеспечивает операционную основу заплыва через Ла-Манш.'
        },
        {
          name: '👑 ПАРТНЕР МИССИИ',
          price: '€15,000',
          tagline: 'Станьте основной опорой всего проекта Ла-Манш и помогите нам покрыть все наши тяжелые тренировки!',
          covers: [
            'Специализированный тренер по плаванию в холодной воде',
            'Структурированная программа тренировок в открытой воде',
            'Специализированные тренировочные лагеря (многодневные блоки)',
            'Протоколы холодовой адаптации (симуляция 15–16°C)',
            'Обучение женской выносливости',
            'Мониторинг восстановления и результатов',
            'Транспортная логистика для команды',
            'Проживание',
            'Базовая поддержка восстановления (массаж / физиотерапия)'
          ],
          impact: 'Этот пакет финансирует полную фазу подготовки, которая делает заплыв возможным, и помогает нам подготовиться к ГЛАВНОМУ ДНЮ!'
        }
      ],
      tiersNote: 'Пакеты могут формироваться индивидуально под каждого партнера',
      ctaButton: 'СТАТЬ СПОНСОРОМ',
      overlayMessage: 'Пожалуйста, свяжитесь с BelSwimSister для согласования спонсорского пакета',
      emailButton: 'Написать нам',
    },
    training: {
      title: 'ПЛАН СОБЫТИЯ',
      subtitle: 'От подготовки до окна заплыва: 21 — 30 июня 2026',
      phases: [
        {
          phase: 'ПОДГОТОВКА',
          title: 'ТРЕНИРОВКИ В ОТКРЫТОЙ ВОДЕ',
          date: 'СЕЙЧАС — МАЙ 2026',
          desc: 'Еженедельные тренировки в холодной воде, развитие выносливости и адаптация к условиям Ла-Манша. Каждый пловец должен пройти квалификацию — 6-часовой наблюдаемый заплыв.',
        },
        {
          phase: 'АККЛИМАТИЗАЦИЯ',
          title: 'АДАПТАЦИЯ К ХОЛОДНОЙ ВОДЕ',
          date: 'ЯНВАРЬ — ИЮНЬ 2026',
          desc: 'Постепенное привыкание к температуре воды 15–16°C без гидрокостюмов. Развитие устойчивости к условиям заплыва через Ла-Манш.',
        },
        {
          phase: 'ФИНАЛЬНАЯ ПОДГОТОВКА',
          title: 'КОМАНДНЫЕ РЕПЕТИЦИИ',
          date: 'МАЙ — ИЮНЬ 2026',
          desc: 'Отработка смены в эстафете, координация катер-пловец, репетиции стратегии питания и ночные тренировки.',
        },
        {
          phase: 'ПЕРЕЕЗД',
          title: 'ПРИБЫТИЕ В ДУВР',
          date: 'СЕРЕДИНА ИЮНЯ 2026',
          desc: 'Команда собирается в Дувре, Англия. Финальные инструктажи с пилотом и командой поддержки Channel Swimming Association.',
        },
        {
          phase: 'ОКНО ЗАПЛЫВА',
          title: 'ЗАПЛЫВ',
          date: '21 — 30 ИЮНЯ 2026',
          desc: 'Наше назначенное окно заплыва. Команда ждёт оптимальных приливных и погодных условий, затем пересекает Ла-Манш эстафетой — примерно 40–70 км в зависимости от течений.',
        },
      ],
    },
    cta: {
      title: 'СТАНЬ ЧАСТЬЮ ИСТОРИИ',
      desc: 'Присоединяйтесь как спонсор, партнёр или поддерживающий. Помогите нам доказать, что невозможное — просто слово.',
      button: 'СТАТЬ СПОНСОРОМ',
      contact: 'КОНТАКТ:',
    },
    footer: {
      rights: '© 2026 BELSWIMSISTERS. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
    },
  },
  by: {
    nav: {
      donate: 'СТАЦЬ СПОНСАРАМ',
    },
    hero: {
      line1: 'МЫ ПЛЫВЕМ.',
      line2: 'МЫ СТВАРАЕМ ГІСТОРЫЮ.',
      fundraisingGoal: 'Мэта збору: ~£60,000',
      fundraisingDesc: 'Мы збіраем сродкі на асноўныя выдаткі сертыфікаванай эстафеты праз Ла-Манш: рэгістрацыю, суправаджальнае судна, бяспеку і лагістыку.',
      fundraisingRaisedLabel: 'Сабрана на сёння',
      days: 'ДЗЁН',
      hrs: 'ГАДЗІН',
      mins: 'ХВІЛІН',
      secs: 'СЕКУНД',
    },
    mission: {
      label: 'МІСІЯ',
      text1: 'ШЭСЦЬ ЖАНЧЫН. АДНА МІСІЯ.',
      text2: 'ПЕРАСЕКЦІ ЛА-МАНШ',
      text3underline: 'ПЕРШЫМІ',
      text3rest: 'СЯРОД БЕЛАРУСАЎ.',
    },
    challenge: {
      title: 'ВЫКЛІК',
      distance: 'ДЫСТАНЦЫЯ',
      waterTemp: 'ТЭМПЕРАТУРА ВАДЫ',
      wetsuits: 'ГІДРАКАСЦЮМЫ',
      girls: 'ДЗЯЎЧАТ',
    },
    team: {
      title: 'КАМАНДА',
      support: 'КІРАЎНІК ПАДТРЫМКІ:',
    },
    partners: {
      title1: 'Чаму варта стаць',
      title2: 'нашым партнёрам',
      block1Title: 'Доступ да актыўнай прафесійнай суполкі',
      block1Desc: 'Праект аб\'ядноўвае людзей, для якіх спорт — частка сістэмнага падыходу да жыцця.',
      block2Title: 'Рэпутацыйны актыў, а не размяшчэнне',
      block2Desc: 'Партнёрства стварае ўстойлівую асацыяцыю брэнда з развіццём і дасягненнямі.',
      block3Title: 'Узмацненне брэнда кампаніі',
      block3Desc: 'Кампанія становіцца часткай культурнай асяроддзя актыўных спецыялістаў.',
      block4Title: 'Каштоўнасная пазіцыя',
      block4Desc: 'Падтрымка праекта — гэта дзеянне, а не дэкларацыя.',
      promotionTitle: 'Як мы прасоўваем партнёраў',
      promo1Title: 'Інтэграцыя ў дзейнасць праекта',
      promo1Desc: 'Партнёр з\'яўляецца ўнутры рэальных падзей, а не ў рэкламных устаўках.',
      promo1Items: [
        'Публікацыі і сторыс',
        'Экіпіроўка і візуальныя матэрыялы',
        'Паездкі і старты',
        'Анонсы, прэс-рэлізы і справаздачы',
        'Сумесныя актыўнасці і PR',
      ],
      promo2Title: 'Кропкі прысутнасці',
      promo2Items: [
        'Сайт',
        'Сацсеткі',
        'Прэзентацыі і справаздачы',
        'Медыя-матэрыялы',
        'Старонка Wikipedia з упамінаннем',
      ],
      promo3Title: 'Доўгатэрміновы эфект',
      promo3Items: [
        'Матэрыялы працягваюць набіраць прагляды',
        'Упамінанні застаюцца пасля сезона',
        'Кантэнт выкарыстоўваецца ў далейшых камунікацыях праекта',
      ],
      coversLabel: 'ПАКРЫВАЕ:',
      impactLabel: 'УПЛЫЎ:',
      sponsorshipTitle: 'СПОНСАРСКІЯ ПАКЕТЫ',
      tiers: [
        {
          name: '🌊 ПАРТНЁР ПА ХАРЧАВАННІ',
          price: '€3,000',
          tagline: 'Вы забяспечваеце энергію для заплыву.',
          covers: [
            'Харчаванне перад заплывам на працягу тыдня ў Ла-Маншы',
            'Харчаванне і гарачыя напоі ў дзень заплыву',
            'Электраліты і энергетычныя гелі',
            'Аднаўленчыя і тэрмальныя напоі',
            'Кантэйнеры для кармлення, тэрмасы і лагістыка',
            'Планаванне гідратацыі ў дзень заплыву'
          ],
          impact: 'Эстафета праз Ла-Манш можа доўжыцца 15–20+ гадзін. Без структураванага харчавання арганізм адключаецца. Гэты пакет напрамую падтрымлівае фізічную форму плаўчых у халоднай адкрытай вадзе.'
        },
        {
          name: '🚤 ПАРТНЁР ПА ЭКІПІРОЎЦЫ',
          price: '€5,000',
          tagline: 'Вы экіпіруеце каманду для Ла-Манша.',
          covers: [
            'Купальнікі, акуляры, шапачкі для плавання',
            'Цёплыя халаты (dry robes), тэрмальныя понча',
            'Ручнікі з мікрафібры',
            'Сродкі абароны ад халоднай вады',
            'Тэрмальныя грэлкі для рук і ног'
          ],
          impact: 'Гэты пакет цалкам фінансуе асноўны блок неабходнага плавальнага рыштунку.'
        },
        {
          name: '🎥 БРЭНД- І МЕДЫЯ-ПАРТНЁР',
          price: '€6,500',
          tagline: 'Вы дапамагаеце распавесці гісторыю жанчын, якія перасякаюць Ла-Манш.',
          covers: [
            'Камеры GoPro і падводныя камеры',
            'Здымка з дрона',
            'Карты памяці і сістэмы акумулятараў',
            'Прафесійны фатограф і відэаграф (у дзень заплыву)',
            'Мантаж і пост-прадакшн',
            'Дакументаванне ў сацыяльных сетках',
            'Брэндыраванае каманднае адзенне і матэрыялы для бачнасці',
            'Стварэнне кантэнту'
          ],
          impact: 'Гэта не проста заплыў — гэта гістарычная гісторыя жаночай цягавітасці.'
        },
        {
          name: '🛟 ПАРТНЁР ПА БЯСПЕЦЫ',
          price: '€8,000',
          tagline: 'Вы абараняеце кожную плаўчыху.',
          covers: [
            'Медыцынскія агляды для ўсіх 6 плаўчых',
            'Спартыўная страхоўка',
            'Пашыраная аптэчка першай дапамогі',
            'Абарона ад націрання і ўздзеяння холаду',
            'Лекі ад марской хваробы',
            'GPS-трэкеры',
            'Радыёкамунікацыйнае абсталяванне',
            'Надзвычайны медыцынскі буфер'
          ],
          impact: 'Гэты пакет фінансуе поўны блок медыцынскага забеспячэння і бяспекі.'
        },
        {
          name: '🌍 АПЕРАЦЫЙНЫ ПАРТНЁР',
          price: '€10,000',
          tagline: 'Вы забяспечваеце саму сертыфікаваную спробу.',
          covers: [
            'Фінансаванне асноўнага судна суправаджэння',
            'Паліва і партовыя зборы',
            'Афіцыйная рэгістрацыя',
            'Сертыфікацыя і патрабаванні назіральнікаў',
            'Буфер чакання ўмоўнага акна'
          ],
          impact: 'Без гэтага фінансавання эстафета не можа адбыцца. Гэты пакет забяспечвае аперацыйную аснову заплыву праз Ла-Манш.'
        },
        {
          name: '👑 ПАРТНЁР МІСІІ',
          price: '€15,000',
          tagline: 'Станьце асноўнай апорай усяго праекта Ла-Манш і дапамажыце нам пакрыць усе нашы цяжкія трэніроўкі!',
          covers: [
            'Спецыялізаваны трэнер па плаванні ў халоднай вадзе',
            'Структураваная праграма трэніровак у адкрытай вадзе',
            'Спецыялізаваныя трэніровачныя лагеры (шматдзённыя блокі)',
            'Пратаколы халадавой адаптацыі (сімуляцыя 15–16°C)',
            'Навучанне жаночай цягавітасці',
            'Маніторынг аднаўлення і вынікаў',
            'Транспартная лагістыка для каманды',
            'Пражыванне',
            'Базавая падтрымка аднаўлення (масаж / фізіятэрапія)'
          ],
          impact: 'Гэты пакет фінансуе поўную фазу падрыхтоўкі, якая робіць заплыў магчымым, і дапамагае нам падрыхтавацца да ГАЛОЎНАГА ДНЯ!'
        }
      ],
      tiersNote: 'Пакеты могуць фарміравацца індывідуальна пад кожнага партнёра',
      ctaButton: 'СТАЦЬ СПОНСАРАМ',
      overlayMessage: 'Калі ласка, звяжыцеся з BelSwimSister для ўзгаднення спонсарскага пакета',
      emailButton: 'Напісаць нам',
    },
    training: {
      title: 'ПЛАН ПАДЗЕЙ',
      subtitle: 'Ад падрыхтоўкі да акна заплыву: 21 — 30 чэрвеня 2026',
      phases: [
        {
          phase: 'ПАДРЫХТОЎКА',
          title: 'ТРЭНІРОЎКІ Ў АДКРЫТАЙ ВАДЗЕ',
          date: 'ЗАРАЗ — МАЙ 2026',
          desc: 'Штотыднёвыя трэніроўкі ў халоднай вадзе, развіццё вынослівасці і адаптацыя да ўмоў Ла-Маншу. Кожная плаўчыха павінна прайсці кваліфікацыю — заплыў на 2.5 гадзіны.',
        },
        {
          phase: 'АКЛІМАЦІЗАЦЫЯ',
          title: 'АДАПТАЦЫЯ ДА ХАЛОДНАЙ ВАДЫ',
          date: 'СТУДЗЕНЬ — ЧЭРВЕНЬ 2026',
          desc: 'Паступовае прывыканне да тэмпературы вады 15–16°C без гідракасцюмаў. Развіццё ўстойлівасці да ўмоў заплыву праз Ла-Манш.',
        },
        {
          phase: 'ФІНАЛЬНАЯ ПАДРЫХТОЎКА',
          title: 'КАМАНДНЫЯ РЭПЕТЫЦЫІ',
          date: 'МАЙ — ЧЭРВЕНЬ 2026',
          desc: 'Адпрацоўка змены ў эстафеце, каардынацыя катэр-плаўчыха, рэпетыцыі стратэгіі харчавання і начныя трэніроўкі.',
        },
        {
          phase: 'ПЕРАЕЗД',
          title: 'ПРЫБЫЦЦЁ Ў ДУВР',
          date: 'СЯРЭДЗІНА ЧЭРВЕНЯ 2026',
          desc: 'Каманда збіраецца ў Дуўры, Англія. Фінальныя інструктажы з пілотам і камандай падтрымкі Channel Swimming Association.',
        },
        {
          phase: 'АКНО ЗАПЛЫВУ',
          title: 'ЗАПЛЫЎ',
          date: '21 — 30 ЧЭРВЕНЯ 2026',
          desc: 'Наша прызначанае акно заплыву. Каманда чакае аптымальных прыліўных і пагодных умоў, затым перасякае Ла-Манш эстафетай — прыкладна 40–70 км у залежнасці ад плыняў.',
        },
      ],
    },
    cta: {
      title: 'СТАНЬ ЧАСТКАЙ ГІСТОРЫІ',
      desc: 'Далучайцеся як спонсар(-ка) або партнёр(-ка).',
      button: 'СТАЦЬ СПОНСАРАМ',
      contact: 'КАНТАКТ:',
    },
    footer: {
      rights: '© 2026 BELSWIMSISTERS. УСЕ ПРАВЫ АБАРОНЕНЫ.',
    },
  },
} as const;
