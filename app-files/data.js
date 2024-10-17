var APP_DATA = {
  "scenes": [
    {
      "id": "0-university-entrance",
      "name": "University Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.127608230515321,
        "pitch": 0.031129174346292032,
        "fov": 1.4223357039143165
      },
      "linkHotspots": [
        {
          "yaw": 1.5075536115722077,
          "pitch": 0.231160823997687,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": -3.124239864188606,
          "pitch": 0.14444499123765553,
          "rotation": 0,
          "target": "4-driveway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23753537918725343,
          "pitch": 0.10603936284239524,
          "title": "Sidewalk",
          "text": "<div>Paved path for pedestrians alongside roads, ensuring safe walking space.</div>"
        },
        {
          "yaw": -1.2372596539577962,
          "pitch": -0.05302818906013229,
          "title": "University TODA",
          "text": "<div>Encourages sustainable transport, reducing congestion and improving campus accessibility.</div>"
        },
        {
          "yaw": -2.640390513568269,
          "pitch": 0.08629545994774546,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        },
        {
          "yaw": 1.5466341639300403,
          "pitch": 0.05352986431951834,
          "title": "Open Field",
          "text": "<div>Outdoor space for sports and recreation, promoting fitness and community.</div>"
        }
      ]
    },
    {
      "id": "1-sidewalk-1",
      "name": "Sidewalk 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0575452601720006,
        "pitch": 0.2330310785047942,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6432197999730302,
          "pitch": 0.2091022458305698,
          "rotation": 0,
          "target": "2-field-1"
        },
        {
          "yaw": -1.7575840490202417,
          "pitch": 0.3512987623466941,
          "rotation": 0,
          "target": "0-university-entrance"
        },
        {
          "yaw": 3.1114145796727364,
          "pitch": 0.13712267762126018,
          "rotation": 0,
          "target": "5-sidewalk-2"
        },
        {
          "yaw": -2.604533232380657,
          "pitch": 0.18195409501733373,
          "rotation": 0,
          "target": "4-driveway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8369928535879634,
          "pitch": 0.36519811104326116,
          "title": "Gate",
          "text": "<div>Entrance to campus, providing access and enhancing security and identity.</div>"
        },
        {
          "yaw": -1.636538514448647,
          "pitch": 0.09952597953840936,
          "title": "University TODA",
          "text": "<div>Encourages sustainable transport, reducing congestion and improving campus accessibility.</div>"
        }
      ]
    },
    {
      "id": "2-field-1",
      "name": "Field 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.7234979520873352,
        "pitch": 0.21081750376079,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6668185032379519,
          "pitch": 0.11502981753762143,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": -3.06537035801467,
          "pitch": 0.05671597744342449,
          "rotation": 0,
          "target": "3-field-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4204316953135212,
          "pitch": 0.06673450982860452,
          "title": "Murals",
          "text": "<div>Large wall artworks that enhance spaces and convey meaningful messages.</div>"
        },
        {
          "yaw": 2.6419870816481286,
          "pitch": 0.14150330447455772,
          "title": "University Open Field",
          "text": "<div>Grassy area for recreation, events, and community gatherings on campus.</div>"
        },
        {
          "yaw": -0.28054717930698203,
          "pitch": 0.10081702796518499,
          "title": "Soccer Goal",
          "text": "<div>Structure with posts and crossbar where players score in soccer.</div>"
        }
      ]
    },
    {
      "id": "3-field-2",
      "name": "Field 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.820420262690284,
        "pitch": -0.0026228642610384156,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11522925421682473,
          "pitch": 0.14430480367823328,
          "rotation": 0,
          "target": "2-field-1"
        },
        {
          "yaw": -1.3166549003045098,
          "pitch": 0.13291991757435895,
          "rotation": 0,
          "target": "5-sidewalk-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9922963858970117,
          "pitch": 0.16356223460013553,
          "title": "Soccer Goal",
          "text": "<div>Structure with posts and crossbar where players score in soccer.</div>"
        },
        {
          "yaw": -2.8577224224944278,
          "pitch": 0.006523498034209041,
          "title": "Canopy Huts",
          "text": "<div>Shaded structures for gathering, studying, and outdoor activities on campus.</div>"
        },
        {
          "yaw": 1.7767418943390876,
          "pitch": -0.19329791632967463,
          "title": "Gymnasium",
          "text": "<div>Facility for sports, fitness, and recreational activities on campus.</div>"
        },
        {
          "yaw": 2.256735925230977,
          "pitch": -0.02853549575693748,
          "title": "Stage",
          "text": "<div>Raised platform for performances, presentations, and engaging audiences effectively.</div>"
        },
        {
          "yaw": 0.847398974908744,
          "pitch": 0.02844907819395992,
          "title": "Murals",
          "text": "<div>Large artworks on campus walls, reflecting culture and inspiring community.</div>"
        }
      ]
    },
    {
      "id": "4-driveway-1",
      "name": "Driveway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8110386879187033,
          "pitch": 0.05461957950469554,
          "rotation": 0,
          "target": "0-university-entrance"
        },
        {
          "yaw": -3.0950614187732697,
          "pitch": 0.06041461974695572,
          "rotation": 0,
          "target": "5-sidewalk-2"
        },
        {
          "yaw": 0.6363798919039372,
          "pitch": 0.18779214844531467,
          "rotation": 0,
          "target": "6-parking-driveway-1"
        },
        {
          "yaw": -0.6199926196756529,
          "pitch": 0.11352785800838205,
          "rotation": 0,
          "target": "9-driveway-2"
        },
        {
          "yaw": -2.3612078979066293,
          "pitch": -0.012831965682897462,
          "rotation": 0,
          "target": "3-field-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7878973109520597,
          "pitch": -0.07967474445861811,
          "title": "Canopy Huts",
          "text": "<div>Shaded structures for gathering, studying, and outdoor activities on campus.</div>"
        },
        {
          "yaw": -0.12701034576973314,
          "pitch": 0.05529582129729249,
          "title": "University Fountain Roundabout",
          "text": "Circular feature with fountain, enhancing aesthetics and traffic flow."
        },
        {
          "yaw": 1.9414425193370883,
          "pitch": 0.14868120048184608,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        }
      ]
    },
    {
      "id": "5-sidewalk-2",
      "name": "Sidewalk 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4713140583882094,
          "pitch": 0.14832788362026506,
          "rotation": 0,
          "target": "3-field-2"
        },
        {
          "yaw": 3.116598172139895,
          "pitch": 0.12944619891581866,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": 0.41976700021956503,
          "pitch": 0.18884980658774175,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": 2.731387587694895,
          "pitch": 0.12788636361289107,
          "rotation": 0,
          "target": "0-university-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3326255045640814,
          "pitch": 0.14547963570568712,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        },
        {
          "yaw": -2.44891820010238,
          "pitch": 0.7061890677546998,
          "title": "Concrete Plant Boxes",
          "text": "<div>Durable concrete containers for planting flowers and enhancing landscapes.</div>"
        }
      ]
    },
    {
      "id": "6-parking-driveway-1",
      "name": "Parking Driveway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.3768186118740786,
        "pitch": 0.13518019658058833,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9912457770836873,
          "pitch": 0.17207212423531182,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": 1.3609972485366768,
          "pitch": 0.20747359891872996,
          "rotation": 0,
          "target": "7-parking-driveway-2"
        },
        {
          "yaw": -2.128048931328019,
          "pitch": 0.03480361774115792,
          "rotation": 0,
          "target": "3-field-2"
        },
        {
          "yaw": -0.25234116246799587,
          "pitch": 0.15448692094233785,
          "rotation": 0,
          "target": "9-driveway-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.361830684855976,
          "pitch": 0.1626218369023409,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        },
        {
          "yaw": -1.5217986329110538,
          "pitch": -0.0006850182173181452,
          "title": "<div>Canopy Huts<br></div>",
          "text": "<div>Shaded structures for gathering, studying, and outdoor activities on campus.</div>"
        },
        {
          "yaw": 0.5349532219046989,
          "pitch": 0.0512842399140645,
          "title": "University Fountain Roundabout",
          "text": "Decorative roundabout featuring a fountain and festive Christmas tree."
        }
      ]
    },
    {
      "id": "7-parking-driveway-2",
      "name": "Parking Driveway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2353903818810501,
          "pitch": 0.19924798948011713,
          "rotation": 0,
          "target": "8-parking-driveway-3"
        },
        {
          "yaw": -3.064516088901474,
          "pitch": 0.13690601832977123,
          "rotation": 0,
          "target": "6-parking-driveway-1"
        },
        {
          "yaw": 2.4323104679541565,
          "pitch": 0.08624375968642362,
          "rotation": 0,
          "target": "4-driveway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.34589877090639476,
          "pitch": 0.2921486963511537,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        },
        {
          "yaw": -2.1843017852553963,
          "pitch": 0.06968487522894762,
          "title": "University Utility Van",
          "text": "<div>Vehicle for transporting staff and equipment for campus maintenance tasks.</div>"
        },
        {
          "yaw": -1.3039593152047875,
          "pitch": 0.0022304474243917127,
          "title": "University Fountain Roundabout",
          "text": "Circular feature with fountain, enhancing aesthetics and traffic flow."
        },
        {
          "yaw": 2.0654972643514835,
          "pitch": 0.04132057813461998,
          "title": "University Parking Lot",
          "text": "<div>Designated area for vehicles on campus, ensuring access and safety.</div>"
        }
      ]
    },
    {
      "id": "8-parking-driveway-3",
      "name": "Parking Driveway 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08418345140028372,
          "pitch": 0.1569012866720385,
          "rotation": 0,
          "target": "11-parking-driveway-4"
        },
        {
          "yaw": 2.943327337449084,
          "pitch": 0.14771529261747673,
          "rotation": 0,
          "target": "7-parking-driveway-2"
        },
        {
          "yaw": -1.611558505224302,
          "pitch": 0.11394509451523582,
          "rotation": 0,
          "target": "10-driveway-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.09408326355364949,
          "pitch": -0.09907228584333794,
          "title": "University East Wing Parking Area",
          "text": "Designated parking space near east campus, enhancing accessibility and convenience."
        },
        {
          "yaw": 0.743534424872454,
          "pitch": 0.24548302048037307,
          "title": "Canteen",
          "text": "<div>Campus dining facility offering meals and snacks for everyone.</div>"
        }
      ]
    },
    {
      "id": "9-driveway-2",
      "name": "Driveway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1960579767993984,
          "pitch": 0.13530505468341403,
          "rotation": 0,
          "target": "6-parking-driveway-1"
        },
        {
          "yaw": -1.8283961377104774,
          "pitch": 0.10344474933271286,
          "rotation": 0,
          "target": "8-parking-driveway-3"
        },
        {
          "yaw": 3.0176808380283013,
          "pitch": 0.03715244814861762,
          "rotation": 0,
          "target": "13-main-building-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-driveway-3",
      "name": "Driveway 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5727663633635487,
          "pitch": 0.08449123507360312,
          "rotation": 0,
          "target": "9-driveway-2"
        },
        {
          "yaw": -2.7055782053622544,
          "pitch": 0.19944365821130638,
          "rotation": 0,
          "target": "8-parking-driveway-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parking-driveway-4",
      "name": "Parking Driveway 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24624963196816552,
          "pitch": 0.18674653031131783,
          "rotation": 0,
          "target": "12-parking-lot"
        },
        {
          "yaw": 2.9969424436866214,
          "pitch": 0.04032208847429075,
          "rotation": 0,
          "target": "8-parking-driveway-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-parking-lot",
      "name": "Parking Lot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9994702537767877,
          "pitch": 0.09981468805580107,
          "rotation": 0,
          "target": "11-parking-driveway-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-main-building-entrance",
      "name": "Main Building Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.029412383750927,
          "pitch": 0.2142036800347178,
          "rotation": 0,
          "target": "9-driveway-2"
        },
        {
          "yaw": -1.5334131752752107,
          "pitch": -0.11522120845673456,
          "rotation": 0,
          "target": "14-hallway-sps"
        },
        {
          "yaw": 0.04755991718262642,
          "pitch": 0.07157633751022274,
          "rotation": 0,
          "target": "26-main-front-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-hallway-sps",
      "name": "Hallway SPS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21305372414597024,
          "pitch": 0.19435729779393007,
          "rotation": 0,
          "target": "13-main-building-entrance"
        },
        {
          "yaw": -1.7292268670559139,
          "pitch": 0.3879775774501262,
          "rotation": 0,
          "target": "15-hallway-2nd-floor"
        },
        {
          "yaw": 2.999139963489725,
          "pitch": 0.23458577586280427,
          "rotation": 0,
          "target": "22-hallway-its-and-comlab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-hallway-2nd-floor",
      "name": "Hallway 2nd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.113747906924644,
          "pitch": 0.09765944013056327,
          "rotation": 0,
          "target": "14-hallway-sps"
        },
        {
          "yaw": 2.6745439292811692,
          "pitch": 0.17174616202404636,
          "rotation": 0,
          "target": "16-room-202"
        },
        {
          "yaw": -0.11923425016267153,
          "pitch": 0.11713022253634797,
          "rotation": 0,
          "target": "17-hallway-gazette-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-room-202",
      "name": "Room 202",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "17-hallway-gazette-1",
      "name": "Hallway Gazette 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1773281899713428,
          "pitch": 0.19116355456052325,
          "rotation": 0,
          "target": "15-hallway-2nd-floor"
        },
        {
          "yaw": 2.071531533787353,
          "pitch": 0.20611083865639301,
          "rotation": 0,
          "target": "18-hallway-gazette-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-hallway-gazette-2",
      "name": "Hallway Gazette 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6917566099146857,
          "pitch": 0.27365334192545276,
          "rotation": 0,
          "target": "17-hallway-gazette-1"
        },
        {
          "yaw": -0.00048299840574728137,
          "pitch": 0.26216133586045487,
          "rotation": 0,
          "target": "19-hallway-physics-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-hallway-physics-lab",
      "name": "Hallway Physics Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0385354469089165,
          "pitch": 0.11051381620978873,
          "rotation": 0,
          "target": "18-hallway-gazette-2"
        },
        {
          "yaw": 0.3469164923671677,
          "pitch": 0.07669634956403115,
          "rotation": 0,
          "target": "21-pharmacy-simulation-lab"
        },
        {
          "yaw": -2.1845860162652553,
          "pitch": 0.13202958560474087,
          "rotation": 0,
          "target": "20-general-chemistry-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-general-chemistry-lab",
      "name": "General Chemistry Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "21-pharmacy-simulation-lab",
      "name": "Pharmacy Simulation Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.237619400624446,
        "pitch": 0.2636140554173032,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "22-hallway-its-and-comlab",
      "name": "Hallway ITS and ComLab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 2.7140878477639845,
        "pitch": 0.2749248836345295,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": -0.31916704332327406,
          "pitch": 0.10452275390318988,
          "rotation": 0,
          "target": "14-hallway-sps"
        },
        {
          "yaw": 2.203096695808367,
          "pitch": 0.10231631829020316,
          "rotation": 0,
          "target": "24-room-comlab-1"
        },
        {
          "yaw": 2.723830970043249,
          "pitch": 0.24407410091623305,
          "rotation": 0,
          "target": "23-hallway-comlab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-hallway-comlab",
      "name": "Hallway ComLab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5248457551440779,
          "pitch": 0.27738616811051564,
          "rotation": 0,
          "target": "22-hallway-its-and-comlab"
        },
        {
          "yaw": -0.0688316565887952,
          "pitch": 0.1751236819351174,
          "rotation": 0,
          "target": "24-room-comlab-1"
        },
        {
          "yaw": 2.6071954216740547,
          "pitch": 0.1303632636675811,
          "rotation": 0,
          "target": "56-hallway-nursing-arts-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-room-comlab-1",
      "name": "Room ComLab 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21400703383564235,
          "pitch": 0.06564134682953693,
          "rotation": 0,
          "target": "25-room-comlab-2"
        },
        {
          "yaw": 0.8796476927695736,
          "pitch": 0.14148672746734725,
          "rotation": 0,
          "target": "56-hallway-nursing-arts-lab"
        },
        {
          "yaw": 2.815217532051234,
          "pitch": 0.2956696433584245,
          "rotation": 0,
          "target": "22-hallway-its-and-comlab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-room-comlab-2",
      "name": "Room ComLab 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8896558512190538,
          "pitch": 0.05953183123739336,
          "rotation": 0,
          "target": "24-room-comlab-1"
        },
        {
          "yaw": 1.358378907249902,
          "pitch": 0.0977735662469108,
          "rotation": 0,
          "target": "56-hallway-nursing-arts-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-main-front-hallway",
      "name": "Main Front Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.209742595169967,
          "pitch": 0.43273440952047615,
          "rotation": 0,
          "target": "13-main-building-entrance"
        },
        {
          "yaw": -0.056638861303664356,
          "pitch": 0.17023543771535188,
          "rotation": 0,
          "target": "27-hallway-maintenance-east-wing"
        },
        {
          "yaw": 1.0068967034744034,
          "pitch": 0.3166700378518783,
          "rotation": 0,
          "target": "61-main-building-exit"
        },
        {
          "yaw": -0.5043219926544289,
          "pitch": 0.3796017588946654,
          "rotation": 0,
          "target": "30-basement-stairway"
        },
        {
          "yaw": 3.0723085839826467,
          "pitch": 0.15596829365726705,
          "rotation": 0,
          "target": "34-hotel-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-hallway-maintenance-east-wing",
      "name": "Hallway Maintenance East Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05920847495809234,
          "pitch": 0.19653235681564318,
          "rotation": 0,
          "target": "26-main-front-hallway"
        },
        {
          "yaw": 1.640179322013334,
          "pitch": 0.21637477453321807,
          "rotation": 0,
          "target": "28-hallway-1st-floor-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-hallway-1st-floor-east-wing",
      "name": "Hallway 1st Floor East Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06497629229864543,
          "pitch": 0.15381649158708122,
          "rotation": 0,
          "target": "27-hallway-maintenance-east-wing"
        },
        {
          "yaw": -3.05052643605322,
          "pitch": 0.16635491768562716,
          "rotation": 0,
          "target": "29-hallway-1st-floor-comfort-room-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-hallway-1st-floor-comfort-room-east-wing",
      "name": "Hallway 1st Floor Comfort Room East Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03289756685971845,
          "pitch": 0.19496347705818984,
          "rotation": 0,
          "target": "28-hallway-1st-floor-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-basement-stairway",
      "name": "Basement Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.08575153345652531,
        "pitch": -0.17315458781438586,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 1.5006329066869926,
          "pitch": 0.18355746499165804,
          "rotation": 0,
          "target": "26-main-front-hallway"
        },
        {
          "yaw": -0.06798280970371451,
          "pitch": 0.3397214319021593,
          "rotation": 0,
          "target": "31-basement-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-basement-lobby",
      "name": "Basement Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09025593452102854,
          "pitch": 0.4273453053773508,
          "rotation": 0,
          "target": "30-basement-stairway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.503589443128341,
          "pitch": 0.1787966899699711,
          "title": "College of Business and Accountancy",
          "text": "<div>Dynamic programs in business and accounting for future leaders.</div>"
        },
        {
          "yaw": -1.5061545577995403,
          "pitch": -0.020756487396273116,
          "title": "College of Information technology and Engineering",
          "text": "<div>Innovative programs in IT and engineering for tech-savvy professionals.</div>"
        }
      ]
    },
    {
      "id": "32-basement-hallway",
      "name": "Basement Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0613823319317977,
          "pitch": 0.23521021714386947,
          "rotation": 0,
          "target": "31-basement-lobby"
        },
        {
          "yaw": -2.5936862787480113,
          "pitch": 0.5113990298296667,
          "rotation": 0,
          "target": "33-consultation-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9398343689651796,
          "pitch": 0.10129791644574127,
          "title": "College of Arts and Education",
          "text": "<div>Creative programs in arts and education for inspiring educators and artists.</div>"
        }
      ]
    },
    {
      "id": "33-consultation-room",
      "name": "Consultation Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "34-hotel-entrance",
      "name": "Hotel Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23623748484171259,
          "pitch": 0.15903516773500215,
          "rotation": 6.283185307179586,
          "target": "26-main-front-hallway"
        },
        {
          "yaw": 3.0351859613095167,
          "pitch": 0.1296741146358471,
          "rotation": 0,
          "target": "35-hotel-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0721926139345666,
          "pitch": 0.05721320205010194,
          "title": "University Clinic",
          "text": "<div>Comprehensive healthcare services providing student care and wellness support.</div>"
        },
        {
          "yaw": -2.8871834084574566,
          "pitch": -0.015297937289219021,
          "title": "University Supply Center",
          "text": "<div>Specialized uniforms and departmental clothing for PE, sports, and activities.</div>"
        },
        {
          "yaw": -2.3111837321159,
          "pitch": 0.041535953535049686,
          "title": "University Finance Office",
          "text": "<div>Financial management and support for students, budgeting, and billing services.</div>"
        },
        {
          "yaw": 0.10226696246391498,
          "pitch": 0.009632184804573285,
          "title": "University Registrar",
          "text": "<div>Enrollment, records management, and academic services for students and faculty.</div>"
        },
        {
          "yaw": -0.5829639166278628,
          "pitch": -0.12157941631484803,
          "title": "Business Office Unit",
          "text": "<div>Administrative support for financial operations, budgeting, and procurement services.</div>"
        }
      ]
    },
    {
      "id": "35-hotel-lobby",
      "name": "Hotel Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5299838447981298,
          "pitch": 0.09930718558061713,
          "rotation": 0,
          "target": "34-hotel-entrance"
        },
        {
          "yaw": 2.5391370461596976,
          "pitch": 0.09854851826606392,
          "rotation": 0,
          "target": "43-hallway-tindalo-1"
        },
        {
          "yaw": 0.2188711976304223,
          "pitch": 0.11473957733233142,
          "rotation": 0,
          "target": "36-hallway-cihm"
        },
        {
          "yaw": 0.23174382888234746,
          "pitch": -0.2642980510860049,
          "rotation": 0,
          "target": "40-mezzanine-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.985150084038379,
          "pitch": 0.040124592634736445,
          "title": "Administrative Office",
          "text": "<div>Central hub for university operations, support services, and communication.</div>"
        }
      ]
    },
    {
      "id": "36-hallway-cihm",
      "name": "Hallway CIHM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6474753693861288,
          "pitch": 0.5964720148238136,
          "rotation": 0,
          "target": "38-hallway-room-h-and-medtech"
        },
        {
          "yaw": 3.136270084403904,
          "pitch": 0.12591783513018662,
          "rotation": 0,
          "target": "35-hotel-lobby"
        },
        {
          "yaw": 2.238453638682799,
          "pitch": 0.25205768855517263,
          "rotation": 0,
          "target": "37-room-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-room-b",
      "name": "Room B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4238646850329655,
          "pitch": 0.13146379082365378,
          "rotation": 0,
          "target": "36-hallway-cihm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-hallway-room-h-and-medtech",
      "name": "Hallway Room H and MedTech",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.406576372466219,
          "pitch": 0.31288780350505085,
          "rotation": 0,
          "target": "39-room-h"
        },
        {
          "yaw": 3.1275206240044904,
          "pitch": 0.5962069421264928,
          "rotation": 0,
          "target": "36-hallway-cihm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-room-h",
      "name": "Room H",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "40-mezzanine-entrance",
      "name": "Mezzanine Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "41-hallway-bapa-1",
      "name": "Hallway BAPA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "42-hallway-suites",
      "name": "Hallway Suites",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "43-hallway-tindalo-1",
      "name": "Hallway Tindalo 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7306809492183017,
          "pitch": 0.3595789252164696,
          "rotation": 0,
          "target": "45-hallway-tindalo-2"
        },
        {
          "yaw": -0.104019359990005,
          "pitch": 0.22233351725991923,
          "rotation": 0,
          "target": "35-hotel-lobby"
        },
        {
          "yaw": 2.480981097495275,
          "pitch": 0.2759059581810259,
          "rotation": 4.71238898038469,
          "target": "44-brickground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-brickground",
      "name": "Brickground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07302911544464052,
        "pitch": 0.33126447136037385,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.645661988030617,
          "pitch": 0.036217845366838475,
          "rotation": 5.497787143782138,
          "target": "43-hallway-tindalo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-hallway-tindalo-2",
      "name": "Hallway Tindalo 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21955249729795412,
          "pitch": 0.2591235452276912,
          "rotation": 0,
          "target": "46-room-106"
        },
        {
          "yaw": -1.6972318050226285,
          "pitch": 0.32690689976296383,
          "rotation": 0,
          "target": "43-hallway-tindalo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-room-106",
      "name": "Room 106",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3209975046890934,
          "pitch": 0.14383350855340282,
          "rotation": 0,
          "target": "45-hallway-tindalo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-tindalo-hall-entrance",
      "name": "Tindalo Hall Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.126684148173271,
          "pitch": 0.24552742910182523,
          "rotation": 0,
          "target": "45-hallway-tindalo-2"
        },
        {
          "yaw": 0.6170556613772149,
          "pitch": 0.16244019584280167,
          "rotation": 1.5707963267948966,
          "target": "48-tindalo-hall"
        },
        {
          "yaw": -1.0596776818340707,
          "pitch": 0.21022190610798042,
          "rotation": 21.991148575128566,
          "target": "49-preschool-basement-entrance"
        },
        {
          "yaw": -0.5090856870099749,
          "pitch": 0.07186858943170193,
          "rotation": 11.780972450961727,
          "target": "54-stairway-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-tindalo-hall",
      "name": "Tindalo Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "49-preschool-basement-entrance",
      "name": "Preschool Basement Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2288335937925687,
          "pitch": 0.06673203398527328,
          "rotation": 0,
          "target": "47-tindalo-hall-entrance"
        },
        {
          "yaw": 0.8502467218221135,
          "pitch": 0.20529446183013889,
          "rotation": 0,
          "target": "50-preschool-basement-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5210938265489986,
          "pitch": 0.20014186558917402,
          "title": "TESDA R2 UPHSL-IC",
          "text": "<div>Technical Education and Skills Development Authority Region 2 University of Perpetual Help System Laguna, Inc. Isabela Campus - Technical education provider enhancing skills for employability and workforce development.</div>"
        }
      ]
    },
    {
      "id": "50-preschool-basement-hallway",
      "name": "Preschool Basement Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2572788978028857,
          "pitch": 0.06253001254334656,
          "rotation": 0,
          "target": "52-preschool-basement-exit"
        },
        {
          "yaw": -2.219856204128053,
          "pitch": 0.05683411520195136,
          "rotation": 0,
          "target": "51-preschool-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-preschool-room",
      "name": "Preschool Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.307187218631979,
          "pitch": 0.0170107442306211,
          "rotation": 0,
          "target": "52-preschool-basement-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-preschool-basement-exit",
      "name": "Preschool Basement Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9841200074352265,
          "pitch": -0.00765057084470655,
          "rotation": 1.5707963267948966,
          "target": "53-room-gr1-b7"
        },
        {
          "yaw": 2.79227364040651,
          "pitch": 0.15620352035648644,
          "rotation": 0,
          "target": "50-preschool-basement-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-room-gr1-b7",
      "name": "Room GR1 B7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.638486365617089,
          "pitch": -0.020103374843849053,
          "rotation": 0,
          "target": "52-preschool-basement-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-stairway-2nd-floor",
      "name": "Stairway 2nd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.9437389310228976,
        "pitch": 0.14570596064593566,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.11624260209887,
          "pitch": 0.6177473408294567,
          "rotation": 25.918139392115812,
          "target": "47-tindalo-hall-entrance"
        },
        {
          "yaw": 1.903534911525428,
          "pitch": -0.023843797250801657,
          "rotation": 0,
          "target": "55-nursing-arts-laboratory-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.243566291683333,
          "pitch": 0.2579550789579024,
          "title": "Fire Hydrant",
          "text": "<div>Essential for firefighting, ensuring campus safety and emergency response.</div>"
        }
      ]
    },
    {
      "id": "55-nursing-arts-laboratory-1",
      "name": "Nursing Arts Laboratory 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0270630652345556,
          "pitch": 0.6746508844107595,
          "rotation": 0,
          "target": "54-stairway-2nd-floor"
        },
        {
          "yaw": -0.1837606509614993,
          "pitch": 0.23951055581258096,
          "rotation": 0,
          "target": "56-hallway-nursing-arts-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-hallway-nursing-arts-lab",
      "name": "Hallway Nursing Arts Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.5751225060804792,
        "pitch": 0.07555879184661407,
        "fov": 1.3779530878697497
      },
      "linkHotspots": [
        {
          "yaw": 1.5954509903127656,
          "pitch": 0.19546988407886445,
          "rotation": 0,
          "target": "55-nursing-arts-laboratory-1"
        },
        {
          "yaw": 0.06594366506265992,
          "pitch": 0.23491417883020027,
          "rotation": 0,
          "target": "23-hallway-comlab"
        },
        {
          "yaw": -2.9738485652873266,
          "pitch": 0.11098924261893828,
          "rotation": 0,
          "target": "57-library-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-library-hallway",
      "name": "Library Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07486073974292928,
          "pitch": 0.30351045747139693,
          "rotation": 0,
          "target": "56-hallway-nursing-arts-lab"
        },
        {
          "yaw": -3.0858379157468647,
          "pitch": 0.1265532459558969,
          "rotation": 0,
          "target": "60-nursing-arts-laboratory-2"
        },
        {
          "yaw": -0.8527837156616798,
          "pitch": 0.7053517445952444,
          "rotation": 7.0685834705770345,
          "target": "58-hallway-elab-and-ssc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.133651951969661,
          "pitch": 0.07814455671461218,
          "title": "University Library&nbsp;",
          "text": "<div>A university library supports research, study, and academic resources access.</div>"
        }
      ]
    },
    {
      "id": "58-hallway-elab-and-ssc",
      "name": "Hallway ELab and SSC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4281400174891026,
          "pitch": 0.29984219035564763,
          "rotation": 1.5707963267948966,
          "target": "59-engineering-lab"
        },
        {
          "yaw": -0.07542958209834438,
          "pitch": 0.2585538446738216,
          "rotation": 0,
          "target": "57-library-hallway"
        },
        {
          "yaw": -3.042741886465665,
          "pitch": 0.26520418415023883,
          "rotation": 0,
          "target": "14-hallway-sps"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4299710221968951,
          "pitch": -0.17671345763660007,
          "title": "Engineering Laboratory",
          "text": "<div>An engineering laboratory facilitates hands-on learning, experimentation, and innovation in engineering disciplines.</div>"
        },
        {
          "yaw": 2.3044198320526785,
          "pitch": 0.0667480327051706,
          "title": "SSC Office",
          "text": "<div>The Supreme Student Council represents student interests, promotes leadership, and organizes activities.</div>"
        }
      ]
    },
    {
      "id": "59-engineering-lab",
      "name": "Engineering Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6003828679865295,
          "pitch": 0.09754432693011594,
          "rotation": 1.5707963267948966,
          "target": "58-hallway-elab-and-ssc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-nursing-arts-laboratory-2",
      "name": "Nursing Arts Laboratory 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.565546908761693,
          "pitch": 0.3168380502062327,
          "rotation": 0,
          "target": "57-library-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-main-building-exit",
      "name": "Main Building Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0980691443310775,
          "pitch": 0.2911144375531052,
          "rotation": 0,
          "target": "9-driveway-2"
        },
        {
          "yaw": -0.08242943248808743,
          "pitch": 0.23653407556697026,
          "rotation": 0,
          "target": "26-main-front-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3114005092295393,
          "pitch": 0.12338575649848238,
          "title": "University Chapel",
          "text": "<div>The university chapel offers a space for worship, reflection, and community gatherings.</div>"
        }
      ]
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
