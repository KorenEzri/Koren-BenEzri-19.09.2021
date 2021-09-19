export const mock = {
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
