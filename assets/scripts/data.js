// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var DATA = {
    model: {
        car1: [
            {
                'title': '厂商指导价',
                'body': '138.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        car2: [
            {
                'title': '厂商指导价',
                'body': '81.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        car3: [
            {
                'title': '厂商指导价',
                'body': '213.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],

        suv1: [
            {
                'title': '厂商指导价',
                'body': '138.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        suv2: [
            {
                'title': '厂商指导价',
                'body': '81.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        suv3: [
            {
                'title': '厂商指导价',
                'body': '213.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],

        luxury1: [
            {
                'title': '厂商指导价',
                'body': '138.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        luxury2: [
            {
                'title': '厂商指导价',
                'body': '81.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        luxury3: [
            {
                'title': '厂商指导价',
                'body': '213.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ]
    },

    description: {
        car1: '<strong>轿车1</strong>第九代,荟萃全球领先技术,以梦想动力科技、极致驾悦科技以及豪华座舱科技三大创世科技展现“科技全武装”座驾的非凡魅力,以全价值进化的综合实力强势刷新行业标准.',
        car2: '<strong>轿车2</strong>依托整合全球资源的卓越实力,通过“战略平台、技术共享”的方式,走在国际领先的B+级车型平台之上.',
        car3: '<strong>轿车3</strong>是经典奢华的全新演绎,同时又是历史上拥有最先进科技的量产豪华轿车.拥有标志性的奢华空间、优雅气质和瞩目风范,而全新的领先科技为新世代豪华车消费者量身定制.',

        suv1: '<strong>SUV1</strong>车是系列中的最新款,这款全新开发的新一代suv车,配置全新研发六缸电喷发动机,排量3956cc,动力性能好,排气符合当今全新欧洲Ш号标准,高度环保.',
        suv2: '<strong>SUV2</strong>经过精心设计成为有史以来最精致、最强悍的suv.采用最新的车身和底盘技术,无论是其越野能力的广度和可通过性,还是公路的操控和舒适性,车辆的全地形性能都被提升到另一个层面.',
        suv3: '<strong>SUV3</strong>采用了非承载式车身打造,并延续了硬派的整体外观造型,当前上市车型搭载2.0T涡轮增压发动机,五月份左右有望搭载3.0T双涡轮增压发动机.',

        luxury1: '<strong>豪华车1</strong>采用了四门设计,前脸两侧各有一个大型进气口,水平条式雾灯横穿其中,造型独特.侧身线面处理得简洁柔和,既优雅又动感,暗示出不俗的运动潜能.',
        luxury2: '<strong>豪华车2</strong>以继承与创新为原则,采用现代化的造型语言,对中国哲学与文化重新进行了诠释和表达.侧面造型继承了前高后低的船型车身,昂首挺胸、勇往直前,彰显大气、稳重的气质,体现了昂扬向上的精神.',
        luxury3: '<strong>豪华车3</strong>将舒适性、强劲动力、出色的操控及安全性做到了完美无缺的融合.其大气而流畅的外观造型、内部的诸多人性化配备将先进、优雅、低调的设计理念诠释得淋漓尽致.'
    },

    carType: {
        car: {
            name: '轿车',
            models: [
                '凯迪拉克',
                '本田雅阁',
                '荣威950'
            ]
        },
        suv: {
            name: 'SUV',
            models: [
                '英菲尼迪QX50',
                '路虎揽胜',
                '哈弗H9'
            ]
        },
        luxury: {
            name: '豪华车',
            models: [
                '红旗l5',
                '雷克萨斯',
                '保时捷Panamera'
            ]
        }
    },

    cities: [
        '河北',
        '上海',
        '湖南',
        '广州',
        '北京',
        '武汉',
        '深圳',
        '长沙',
        '揭阳',
        '哈尔滨',
        '内蒙古',
        '石家庄',
        '天津'
    ]
};