//import React from 'react';
//import data from "../json/Data.json";

/*var data = [
    {
        "faceId": "5249bf48-eafe-4c1a-8b0d-9206ef2b2070",
        "faceRectangle": {
            "top": 1863,
            "left": 2879,
            "width": 190,
            "height": 190
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.987,
                "sadness": 0.0,
                "surprise": 0.012
            }
        }
    },
    {
        "faceId": "9844a943-9702-44cd-9ad1-22d0abef536a",
        "faceRectangle": {
            "top": 1709,
            "left": 96,
            "width": 179,
            "height": 179
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.995,
                "sadness": 0.004,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "8d592ec5-7306-48d1-8abd-c63c74152411",
        "faceRectangle": {
            "top": 1922,
            "left": 2073,
            "width": 166,
            "height": 166
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.983,
                "sadness": 0.017,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "fa281f97-af82-422c-bcc1-a174173c3b37",
        "faceRectangle": {
            "top": 1318,
            "left": 3124,
            "width": 139,
            "height": 139
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.014,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.911,
                "sadness": 0.074,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "0f6df6a3-7898-47ef-b5ac-28dabec5b43d",
        "faceRectangle": {
            "top": 1226,
            "left": 220,
            "width": 135,
            "height": 135
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.969,
                "neutral": 0.031,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "0ca39627-613e-47ea-b31c-85725c53821e",
        "faceRectangle": {
            "top": 1252,
            "left": 2636,
            "width": 135,
            "height": 135
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "895302b3-071c-4f5c-a896-53a301762d98",
        "faceRectangle": {
            "top": 1266,
            "left": 2101,
            "width": 130,
            "height": 130
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "d577cea5-0c6c-4055-b1d8-4b429942eb9d",
        "faceRectangle": {
            "top": 1349,
            "left": 1046,
            "width": 118,
            "height": 118
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.891,
                "sadness": 0.108,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "01179d91-099c-4563-9dbb-19833fc1e09b",
        "faceRectangle": {
            "top": 1243,
            "left": 1608,
            "width": 117,
            "height": 117
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "773fdc32-0a6b-4795-a940-abc14e827c91",
        "faceRectangle": {
            "top": 970,
            "left": 3134,
            "width": 115,
            "height": 115
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.987,
                "sadness": 0.001,
                "surprise": 0.012
            }
        }
    },
    {
        "faceId": "3d870422-7eca-4499-9e7d-81c2cb1dcabc",
        "faceRectangle": {
            "top": 898,
            "left": 1902,
            "width": 109,
            "height": 109
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.002,
                "contempt": 0.011,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.984,
                "sadness": 0.003,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "619e693a-679b-4bd2-87f7-0e2f6e19aa77",
        "faceRectangle": {
            "top": 936,
            "left": 2224,
            "width": 108,
            "height": 108
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.001,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.999,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "f0f54d00-7241-4cd9-a4ef-925d111f180b",
        "faceRectangle": {
            "top": 971,
            "left": 88,
            "width": 105,
            "height": 105
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.002,
                "neutral": 0.997,
                "sadness": 0.0,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "96067f10-8425-4e87-b6f4-5e7a877ed84d",
        "faceRectangle": {
            "top": 996,
            "left": 2700,
            "width": 101,
            "height": 101
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.96,
                "sadness": 0.04,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "23446656-47b0-4698-b75e-800acd84e4de",
        "faceRectangle": {
            "top": 982,
            "left": 1511,
            "width": 97,
            "height": 97
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.977,
                "sadness": 0.023,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "671600af-dbe5-44af-8b91-689a75c73321",
        "faceRectangle": {
            "top": 743,
            "left": 86,
            "width": 95,
            "height": 95
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.999,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "28455d14-6f35-41a7-9a8c-cc2404a174c0",
        "faceRectangle": {
            "top": 974,
            "left": 318,
            "width": 93,
            "height": 93
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.001,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.584,
                "neutral": 0.411,
                "sadness": 0.003,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "e18503c7-a2d4-46c4-b2f1-50e8b39b7d6e",
        "faceRectangle": {
            "top": 800,
            "left": 1351,
            "width": 90,
            "height": 90
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.999,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "3069b5e7-47f1-424e-8c95-ef715af0476c",
        "faceRectangle": {
            "top": 742,
            "left": 2373,
            "width": 85,
            "height": 85
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.005,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.769,
                "neutral": 0.225,
                "sadness": 0.001,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "a2fa1309-647b-4630-8034-c4ee2b549702",
        "faceRectangle": {
            "top": 786,
            "left": 2750,
            "width": 81,
            "height": 81
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.001,
                "neutral": 0.995,
                "sadness": 0.004,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "220539aa-b20a-4aa9-8644-5c385164f254",
        "faceRectangle": {
            "top": 607,
            "left": 22,
            "width": 79,
            "height": 79
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.001,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.999,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "a8d1c08f-74de-4281-98cf-08ab85deb2aa",
        "faceRectangle": {
            "top": 774,
            "left": 2047,
            "width": 78,
            "height": 78
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.002,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.961,
                "sadness": 0.037,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "45ab2277-badb-4996-9a07-041cc62e3fb6",
        "faceRectangle": {
            "top": 603,
            "left": 1954,
            "width": 76,
            "height": 76
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.001,
                "happiness": 0.0,
                "neutral": 0.967,
                "sadness": 0.004,
                "surprise": 0.027
            }
        }
    },
    {
        "faceId": "c070c15d-8b84-4ac0-b176-6b8036c2381e",
        "faceRectangle": {
            "top": 793,
            "left": 683,
            "width": 76,
            "height": 76
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.001,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.001,
                "neutral": 0.998,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "2cb44f92-850c-452e-884d-5a79f8ce43b6",
        "faceRectangle": {
            "top": 495,
            "left": 1792,
            "width": 74,
            "height": 74
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.007,
                "neutral": 0.992,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "0aae69c8-c405-4b36-87f9-74385c609179",
        "faceRectangle": {
            "top": 366,
            "left": 2531,
            "width": 73,
            "height": 73
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.998,
                "sadness": 0.001,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "99998a71-a512-4a66-9d0b-a3f7340d4f49",
        "faceRectangle": {
            "top": 587,
            "left": 2993,
            "width": 73,
            "height": 73
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 1.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "a87a9d90-9d45-4f9d-abfc-51d8fd24138d",
        "faceRectangle": {
            "top": 786,
            "left": 1047,
            "width": 73,
            "height": 73
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.99,
                "sadness": 0.0,
                "surprise": 0.009
            }
        }
    },
    {
        "faceId": "771b7bb6-706e-4ef8-bdc5-b5dd39b213a0",
        "faceRectangle": {
            "top": 586,
            "left": 1383,
            "width": 72,
            "height": 72
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.002,
                "neutral": 0.995,
                "sadness": 0.0,
                "surprise": 0.002
            }
        }
    },
    {
        "faceId": "185ad78d-c8bf-4a7b-86c0-e6aa3ad6024c",
        "faceRectangle": {
            "top": 478,
            "left": 2771,
            "width": 71,
            "height": 71
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.994,
                "sadness": 0.0,
                "surprise": 0.005
            }
        }
    },
    {
        "faceId": "2811a336-5b18-4697-81cd-07ed3d0e5ca2",
        "faceRectangle": {
            "top": 786,
            "left": 1616,
            "width": 71,
            "height": 71
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.354,
                "neutral": 0.642,
                "sadness": 0.001,
                "surprise": 0.003
            }
        }
    },
    {
        "faceId": "1ded82f0-ef67-4d55-a364-74abf8843c42",
        "faceRectangle": {
            "top": 630,
            "left": 586,
            "width": 70,
            "height": 70
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.998,
                "sadness": 0.002,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "50ad5347-9469-4270-8789-d0542a13fdda",
        "faceRectangle": {
            "top": 624,
            "left": 1084,
            "width": 69,
            "height": 69
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.98,
                "sadness": 0.02,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "c3c03dc9-09b7-4033-928d-5e9e6a83c71b",
        "faceRectangle": {
            "top": 735,
            "left": 3174,
            "width": 68,
            "height": 68
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "237f1354-a412-493f-ba5b-0ad19525cf56",
        "faceRectangle": {
            "top": 635,
            "left": 316,
            "width": 67,
            "height": 67
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.001,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.01,
                "neutral": 0.981,
                "sadness": 0.008,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "31c17ded-8b99-4558-a27f-f3628752483b",
        "faceRectangle": {
            "top": 476,
            "left": 2513,
            "width": 64,
            "height": 64
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.995,
                "sadness": 0.005,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "01371868-f6d0-4840-93df-1a03bf8dc227",
        "faceRectangle": {
            "top": 515,
            "left": 1507,
            "width": 63,
            "height": 63
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "3cfa01d1-c964-4046-a831-d50d0ce26070",
        "faceRectangle": {
            "top": 515,
            "left": 0,
            "width": 59,
            "height": 67
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.998,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "35fff6e8-be2d-4d91-9c33-df5f1225d670",
        "faceRectangle": {
            "top": 491,
            "left": 2214,
            "width": 62,
            "height": 62
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.949,
                "sadness": 0.001,
                "surprise": 0.049
            }
        }
    },
    {
        "faceId": "68e08edc-02c6-45bc-99f6-a9b255ccb278",
        "faceRectangle": {
            "top": 383,
            "left": 2948,
            "width": 62,
            "height": 62
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.474,
                "neutral": 0.512,
                "sadness": 0.0,
                "surprise": 0.014
            }
        }
    },
    {
        "faceId": "190d03d4-1027-46f2-a712-d41b1a12f0f3",
        "faceRectangle": {
            "top": 486,
            "left": 2014,
            "width": 62,
            "height": 62
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.001,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.099,
                "neutral": 0.895,
                "sadness": 0.003,
                "surprise": 0.002
            }
        }
    },
    {
        "faceId": "d8139ba0-30d6-4ba7-920e-eec4f0d17ada",
        "faceRectangle": {
            "top": 361,
            "left": 3174,
            "width": 61,
            "height": 61
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "3cb99205-8614-4079-a4b1-3e4e6b0b1f97",
        "faceRectangle": {
            "top": 426,
            "left": 859,
            "width": 61,
            "height": 61
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.001,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.001,
                "neutral": 0.997,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "ba2dcef5-ab8f-4f8d-9c91-9da8760db74e",
        "faceRectangle": {
            "top": 534,
            "left": 1319,
            "width": 61,
            "height": 61
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.002,
                "disgust": 0.001,
                "fear": 0.0,
                "happiness": 0.316,
                "neutral": 0.676,
                "sadness": 0.001,
                "surprise": 0.003
            }
        }
    },
    {
        "faceId": "67015496-7502-4486-9967-bb23569580fe",
        "faceRectangle": {
            "top": 514,
            "left": 842,
            "width": 60,
            "height": 60
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 1.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "8b216f91-5113-4dc0-83d9-fe83a0f0e0a7",
        "faceRectangle": {
            "top": 376,
            "left": 1924,
            "width": 60,
            "height": 60
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 1.0,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "2680d178-bb6b-447d-bd0f-0c0ea7529ef2",
        "faceRectangle": {
            "top": 537,
            "left": 420,
            "width": 60,
            "height": 60
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.004,
                "neutral": 0.995,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "0e95d3d2-371c-4856-bdc9-2de2c948e9a6",
        "faceRectangle": {
            "top": 284,
            "left": 3079,
            "width": 59,
            "height": 59
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.998,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "c3a6854a-c584-4ff4-a580-8860dab48b2b",
        "faceRectangle": {
            "top": 440,
            "left": 1057,
            "width": 57,
            "height": 57
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.067,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.194,
                "neutral": 0.737,
                "sadness": 0.002,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "3c5cf355-075b-4463-86c1-e357af8298e7",
        "faceRectangle": {
            "top": 523,
            "left": 229,
            "width": 57,
            "height": 57
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.007,
                "neutral": 0.992,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "f6db8ab9-85d6-4fba-8a5b-a25f88459135",
        "faceRectangle": {
            "top": 425,
            "left": 1306,
            "width": 57,
            "height": 57
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.001,
                "contempt": 0.002,
                "disgust": 0.0,
                "fear": 0.001,
                "happiness": 0.925,
                "neutral": 0.066,
                "sadness": 0.002,
                "surprise": 0.005
            }
        }
    },
    {
        "faceId": "89ab9a41-4b97-48b2-b370-491d77c0951e",
        "faceRectangle": {
            "top": 312,
            "left": 2357,
            "width": 57,
            "height": 57
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.003,
                "neutral": 0.995,
                "sadness": 0.0,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "0d58ab7b-f2b0-432d-b746-d71a8380a771",
        "faceRectangle": {
            "top": 426,
            "left": 1481,
            "width": 56,
            "height": 56
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.998,
                "neutral": 0.001,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "209ebce7-29cf-48db-bdfb-d8e4fde9ec04",
        "faceRectangle": {
            "top": 312,
            "left": 2622,
            "width": 56,
            "height": 56
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.546,
                "neutral": 0.453,
                "sadness": 0.0,
                "surprise": 0.001
            }
        }
    },
    {
        "faceId": "2392eecc-7505-4b0a-9119-25e6e08b8582",
        "faceRectangle": {
            "top": 361,
            "left": 1386,
            "width": 56,
            "height": 56
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.004,
                "neutral": 0.994,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "b76a18e0-7eb9-430b-8f7a-f46058dd0e33",
        "faceRectangle": {
            "top": 382,
            "left": 2762,
            "width": 54,
            "height": 54
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.996,
                "sadness": 0.003,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "05f54eab-65cc-4c8b-ad66-f83d3211e3f9",
        "faceRectangle": {
            "top": 330,
            "left": 2817,
            "width": 54,
            "height": 54
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.293,
                "neutral": 0.7,
                "sadness": 0.006,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "bda8c5ff-d266-4715-96da-2f6028ba94bc",
        "faceRectangle": {
            "top": 383,
            "left": 2085,
            "width": 54,
            "height": 54
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.001,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.999,
                "neutral": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "7601582d-2b13-4045-86ac-8674f3cfcfc3",
        "faceRectangle": {
            "top": 461,
            "left": 451,
            "width": 54,
            "height": 54
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.002,
                "happiness": 0.0,
                "neutral": 0.965,
                "sadness": 0.003,
                "surprise": 0.029
            }
        }
    },
    {
        "faceId": "be961b3b-2ee8-462f-aa6d-b9fda59151d6",
        "faceRectangle": {
            "top": 265,
            "left": 1004,
            "width": 53,
            "height": 53
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.001,
                "neutral": 0.998,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "40f0fd10-4ac5-4c62-94a0-520c27edb205",
        "faceRectangle": {
            "top": 260,
            "left": 2575,
            "width": 52,
            "height": 52
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.001,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.266,
                "neutral": 0.731,
                "sadness": 0.001,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "d5e82e90-0ff1-41b5-a9ed-b9d957240cf3",
        "faceRectangle": {
            "top": 342,
            "left": 2231,
            "width": 51,
            "height": 51
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.973,
                "neutral": 0.027,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "74a06f72-35f5-4f05-b9c1-b73eca394a10",
        "faceRectangle": {
            "top": 383,
            "left": 414,
            "width": 51,
            "height": 51
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.025,
                "neutral": 0.975,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    },
    {
        "faceId": "5570bd24-bb7e-4359-85ad-1f13ab2f399f",
        "faceRectangle": {
            "top": 343,
            "left": 861,
            "width": 51,
            "height": 51
        },
        "faceAttributes": {
            "emotion": {
                "anger": 0.0,
                "contempt": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "happiness": 0.0,
                "neutral": 0.999,
                "sadness": 0.0,
                "surprise": 0.0
            }
        }
    }
];*/

class Form extends React.Component {
    render() {
        return (
            <form style={{ margin: '1em', marginLeft: '3em', float: 'left' }}>
                <input type="text" placeholder="" style={{ marginTop: '2.5em' }} />
                <button type="submit"> Search </button>
            </form>
        );
    }
}

const Card = (props) => {
    const widthDiv = 180;
    return (
        <div style={{ margin: '1em' }}>
            <div style={{ display: 'inline-flex' }}>
                <div style={{ overflow: 'hidden', position: 'relative', width: widthDiv, height: widthDiv, float: 'right', marginLeft: '2em' }} >
                    {(() => {
                        if (props.faceRectangle.width > widthDiv || props.faceRectangle.height > widthDiv) {
                            return <img src="./images/test.jpg" style={{ zoom: '50%', position: 'absolute', left: props.faceRectangle.left * -1 + props.faceRectangle.width / 3, top: props.faceRectangle.top * -1 + props.faceRectangle.height / 3 }} />;
                        }
                        if (props.faceRectangle.width == widthDiv || props.faceRectangle.height == widthDiv) {
                            return <img src="./images/test.jpg" style={{ zoom: '60%', position: 'absolute', left: props.faceRectangle.left * -1 + props.faceRectangle.width / 3, top: props.faceRectangle.top * -1 + props.faceRectangle.height / 3 }} />;
                        }
                        if (widthDiv - props.faceRectangle.width <= 20 || widthDiv - props.faceRectangle.height <= 20) {
                            return <img src="./images/test.jpg" style={{ zoom: '70%', position: 'absolute', left: props.faceRectangle.left * -1 + props.faceRectangle.width / 3, top: props.faceRectangle.top * -1 + props.faceRectangle.height / 3 }} />;
                        }
                        if (widthDiv - props.faceRectangle.width >= 50 || widthDiv - props.faceRectangle.height >= 50)
                        {
                            return <img src="./images/test.jpg" style={{ zoom: '110%', position: 'absolute', left: props.faceRectangle.left * -1 + props.faceRectangle.width / 3, top: props.faceRectangle.top * -1 + props.faceRectangle.height / 3 }} />;
                        }
                        else {
                            return <img src="./images/test.jpg" style={{ position: 'absolute', left: props.faceRectangle.left * -1 + props.faceRectangle.width / 4, top: props.faceRectangle.top * -1 + props.faceRectangle.height / 4 }} />;
                        }
                    })()}
                    <h1> {HTMLDivElement.width} </h1>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '1em' }}>
                    <div>ID:{props.faceId}</div>
                    <div>Anger: {props.faceAttributes.emotion.anger}</div>
                    <div>Contempt: {props.faceAttributes.emotion.contempt}</div>
                    <div>Disgust: {props.faceAttributes.emotion.disgust}</div>
                    <div>Fear: {props.faceAttributes.emotion.fear}</div>
                    <div>Happiness: {props.faceAttributes.emotion.happiness}</div>
                    <div>Neutral: {props.faceAttributes.emotion.neutral}</div>
                    <div>Sadness: {props.faceAttributes.emotion.sadness}</div>
                    <div>Surprise: {props.faceAttributes.emotion.surprise}</div>
                </div>
            </div>

        </div>
    );
};


const CardList = (props) => {
    return (
        <div style={{ display: 'inline-block' }}>
            {props.cards.map(card => <Card key={card.faceId} {...card} />)}
        </div>
    );
};


class App extends React.Component {
    state = {
        data: [],
    }

    render() {
        axios.get("/json/Data.json")
            .then(response => {
                this.setState({ data: response.data })
            })
            .catch(error => {
                dispatch({ type: Actions.FETCH_DATA_ERROR, payload: err })
            });
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <h2> Example: </h2>
                    <img src="./images/test.jpg" style={{ width: '40em', height: '25em' }} />
                </div>
                <Form />
                <CardList cards={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
//export default App

/*ReactDOM.render(
    <App info={data}/>,
    document.getElementById('content')
);*/
//export default App;
