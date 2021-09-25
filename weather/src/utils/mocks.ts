import { IFiveDayForecast } from 'types';
interface Mock {
  currentConditions: any;
  fiveDays: IFiveDayForecast;
  autoComplete: any;
}
export const mock: Mock = {
  currentConditions: [
    {
      LocalObservationDateTime: '2021-09-19T11:31:00+03:00',
      EpochTime: 1632040260,
      WeatherText: 'Sunny',
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.6,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 85.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    },
  ],
  fiveDays: {
    Headline: {
      EffectiveDate: '2021-09-19T20:00:00+03:00',
      EffectiveEpochDate: 1632070800,
      Severity: 7,
      Text: 'Warm Sunday night',
      Category: 'heat',
      EndDate: '2021-09-20T08:00:00+03:00',
      EndEpochDate: 1632114000,
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2021-09-19T07:00:00+03:00',
        EpochDate: 1632024000,
        Temperature: {
          Minimum: {
            Value: 78.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 86.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      },
      {
        Date: '2021-09-20T07:00:00+03:00',
        EpochDate: 1632110400,
        Temperature: {
          Minimum: {
            Value: 79.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 87.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      },
      {
        Date: '2021-09-21T07:00:00+03:00',
        EpochDate: 1632196800,
        Temperature: {
          Minimum: {
            Value: 79.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 88.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      },
      {
        Date: '2021-09-22T07:00:00+03:00',
        EpochDate: 1632283200,
        Temperature: {
          Minimum: {
            Value: 81.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 87.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      },
      {
        Date: '2021-09-23T07:00:00+03:00',
        EpochDate: 1632369600,
        Temperature: {
          Minimum: {
            Value: 81.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 86.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      },
    ],
  },
  autoComplete: [
    {
      Version: 1,
      Key: '215854',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
      },
    },
    {
      Version: 1,
      Key: '3431644',
      Type: 'City',
      Rank: 45,
      LocalizedName: 'Telanaipura',
      Country: {
        ID: 'ID',
        LocalizedName: 'Indonesia',
      },
      AdministrativeArea: {
        ID: 'JA',
        LocalizedName: 'Jambi',
      },
    },
    {
      Version: 1,
      Key: '300558',
      Type: 'City',
      Rank: 45,
      LocalizedName: 'Telok Blangah New Town',
      Country: {
        ID: 'SG',
        LocalizedName: 'Singapore',
      },
      AdministrativeArea: {
        ID: '05',
        LocalizedName: 'South West',
      },
    },
    {
      Version: 1,
      Key: '325876',
      Type: 'City',
      Rank: 51,
      LocalizedName: 'Telford',
      Country: {
        ID: 'GB',
        LocalizedName: 'United Kingdom',
      },
      AdministrativeArea: {
        ID: 'TFW',
        LocalizedName: 'Telford and Wrekin',
      },
    },
    {
      Version: 1,
      Key: '169072',
      Type: 'City',
      Rank: 51,
      LocalizedName: 'Telavi',
      Country: {
        ID: 'GE',
        LocalizedName: 'Georgia',
      },
      AdministrativeArea: {
        ID: 'KA',
        LocalizedName: 'Kakheti',
      },
    },
    {
      Version: 1,
      Key: '230611',
      Type: 'City',
      Rank: 51,
      LocalizedName: 'Telsiai',
      Country: {
        ID: 'LT',
        LocalizedName: 'Lithuania',
      },
      AdministrativeArea: {
        ID: 'TE',
        LocalizedName: 'Telšiai',
      },
    },
    {
      Version: 1,
      Key: '2723742',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Telégrafo',
      Country: {
        ID: 'BR',
        LocalizedName: 'Brazil',
      },
      AdministrativeArea: {
        ID: 'PA',
        LocalizedName: 'Pará',
      },
    },
    {
      Version: 1,
      Key: '186933',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Tela',
      Country: {
        ID: 'HN',
        LocalizedName: 'Honduras',
      },
      AdministrativeArea: {
        ID: 'AT',
        LocalizedName: 'Atlántida',
      },
    },
    {
      Version: 1,
      Key: '3453754',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Telaga Asih',
      Country: {
        ID: 'ID',
        LocalizedName: 'Indonesia',
      },
      AdministrativeArea: {
        ID: 'JB',
        LocalizedName: 'West Java',
      },
    },
    {
      Version: 1,
      Key: '3453755',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Telagamurni',
      Country: {
        ID: 'ID',
        LocalizedName: 'Indonesia',
      },
      AdministrativeArea: {
        ID: 'JB',
        LocalizedName: 'West Java',
      },
    },
  ],
};

export const fullConditions = {
  LocalObservationDateTime: '2021-09-22T12:40:00+03:00',
  EpochTime: 1632303600,
  WeatherText: 'Mostly sunny',
  WeatherIcon: 2,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: true,
  Temperature: {
    Metric: {
      Value: 29.5,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 85,
      Unit: 'F',
      UnitType: 18,
    },
  },
  RealFeelTemperature: {
    Metric: {
      Value: 32.6,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 91,
      Unit: 'F',
      UnitType: 18,
    },
  },
  RealFeelTemperatureShade: {
    Metric: {
      Value: 29.3,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 85,
      Unit: 'F',
      UnitType: 18,
    },
  },
  RelativeHumidity: 56,
  IndoorRelativeHumidity: 56,
  DewPoint: {
    Metric: {
      Value: 19.8,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 68,
      Unit: 'F',
      UnitType: 18,
    },
  },
  Wind: {
    Direction: {
      Degrees: 248,
      Localized: 'WSW',
      English: 'WSW',
    },
    Speed: {
      Metric: {
        Value: 17.3,
        Unit: 'km/h',
        UnitType: 7,
      },
      Imperial: {
        Value: 10.7,
        Unit: 'mi/h',
        UnitType: 9,
      },
    },
  },
  WindGust: {
    Speed: {
      Metric: {
        Value: 26.7,
        Unit: 'km/h',
        UnitType: 7,
      },
      Imperial: {
        Value: 16.6,
        Unit: 'mi/h',
        UnitType: 9,
      },
    },
  },
  UVIndex: 6,
  UVIndexText: 'High',
  Visibility: {
    Metric: {
      Value: 16.1,
      Unit: 'km',
      UnitType: 6,
    },
    Imperial: {
      Value: 10,
      Unit: 'mi',
      UnitType: 2,
    },
  },
  ObstructionsToVisibility: '',
  CloudCover: 16,
  Ceiling: {
    Metric: {
      Value: 12192,
      Unit: 'm',
      UnitType: 5,
    },
    Imperial: {
      Value: 40000,
      Unit: 'ft',
      UnitType: 0,
    },
  },
  Pressure: {
    Metric: {
      Value: 1010.5,
      Unit: 'mb',
      UnitType: 14,
    },
    Imperial: {
      Value: 29.84,
      Unit: 'inHg',
      UnitType: 12,
    },
  },
  PressureTendency: {
    LocalizedText: 'Falling',
    Code: 'F',
  },
  Past24HourTemperatureDeparture: {
    Metric: {
      Value: -1.7,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: -3,
      Unit: 'F',
      UnitType: 18,
    },
  },
  ApparentTemperature: {
    Metric: {
      Value: 31.7,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 89,
      Unit: 'F',
      UnitType: 18,
    },
  },
  WindChillTemperature: {
    Metric: {
      Value: 29.4,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 85,
      Unit: 'F',
      UnitType: 18,
    },
  },
  WetBulbTemperature: {
    Metric: {
      Value: 22.9,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 73,
      Unit: 'F',
      UnitType: 18,
    },
  },
  Precip1hr: {
    Metric: {
      Value: 0,
      Unit: 'mm',
      UnitType: 3,
    },
    Imperial: {
      Value: 0,
      Unit: 'in',
      UnitType: 1,
    },
  },
  PrecipitationSummary: {
    Precipitation: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PastHour: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past3Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past6Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past9Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past12Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past18Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past24Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
  },
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: {
        Metric: {
          Value: 25.2,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 77,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
    Past12HourRange: {
      Minimum: {
        Metric: {
          Value: 23.9,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
    Past24HourRange: {
      Minimum: {
        Metric: {
          Value: 23.9,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 31.6,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 89,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
  },
  MobileLink:
    'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  key: '',
};
