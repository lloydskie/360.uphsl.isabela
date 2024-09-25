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
        "yaw": 3.058803173082559,
        "pitch": 0.27301301879627005,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5048366334863506,
          "pitch": 0.27162018542184185,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": -3.0789747716364246,
          "pitch": 0.07275380151658695,
          "rotation": 0,
          "target": "4-driveway-1"
        }
      ],
      "infoHotspots": []
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6130629234310092,
          "pitch": 0.07951204164424297,
          "rotation": 0,
          "target": "3-field-2"
        },
        {
          "yaw": -3.1104416647894197,
          "pitch": 0.09013483216505946,
          "rotation": 0,
          "target": "5-sidewalk-2"
        },
        {
          "yaw": -2.874492880116696,
          "pitch": 0.04879305731443395,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": -1.6414653325664315,
          "pitch": 0.33417285616927295,
          "rotation": 0,
          "target": "0-university-entrance"
        }
      ],
      "infoHotspots": []
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
        "yaw": 0.6782455098736566,
        "pitch": 0.04763777764140187,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08921041835150945,
          "pitch": 0.10573993385623481,
          "rotation": 0,
          "target": "3-field-2"
        },
        {
          "yaw": -1.328458732052109,
          "pitch": 0.16870049052170444,
          "rotation": 0,
          "target": "5-sidewalk-2"
        }
      ],
      "infoHotspots": []
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
        "yaw": -1.1070645540210684,
        "pitch": 0.193595096043774,
        "fov": 1.6154651276708172
      },
      "linkHotspots": [
        {
          "yaw": -1.6526168011719875,
          "pitch": 0.12440293294874039,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": -3.1290079425785926,
          "pitch": 0.07172668653500125,
          "rotation": 0,
          "target": "2-field-1"
        }
      ],
      "infoHotspots": []
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
          "yaw": 3.1173470094570277,
          "pitch": 0.03754649454977255,
          "rotation": 0,
          "target": "5-sidewalk-2"
        },
        {
          "yaw": 2.7552830802960395,
          "pitch": 0.06694742635395556,
          "rotation": 0,
          "target": "0-university-entrance"
        },
        {
          "yaw": 0.6847362552562526,
          "pitch": 0.22037773107421188,
          "rotation": 0,
          "target": "6-parking-driveway-1"
        },
        {
          "yaw": -0.7116769936804985,
          "pitch": 0.15552995315446694,
          "rotation": 0,
          "target": "9-driveway-2"
        },
        {
          "yaw": -2.3328100282094724,
          "pitch": -0.009351205162062115,
          "rotation": 0,
          "target": "2-field-1"
        }
      ],
      "infoHotspots": []
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
        "yaw": 0.40147625006191134,
        "pitch": 0.10847830139848824,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3287594359526356,
          "pitch": 0.08499220943419772,
          "rotation": 0,
          "target": "2-field-1"
        },
        {
          "yaw": 3.1273938453162335,
          "pitch": 0.10183615068298124,
          "rotation": 0,
          "target": "1-sidewalk-1"
        },
        {
          "yaw": 0.30210925666098554,
          "pitch": 0.1430722584977886,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": 2.7240881472392076,
          "pitch": 0.12190700316634562,
          "rotation": 0,
          "target": "0-university-entrance"
        }
      ],
      "infoHotspots": []
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.42290601375122,
          "pitch": 0.19844834739770256,
          "rotation": 0,
          "target": "7-parking-driveway-2"
        },
        {
          "yaw": -0.1902580538033103,
          "pitch": 0.1472164483985896,
          "rotation": 0,
          "target": "9-driveway-2"
        }
      ],
      "infoHotspots": []
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
          "yaw": 3.0592933423771953,
          "pitch": 0.18811324180255085,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": -0.20740919134932234,
          "pitch": 0.21843164952139915,
          "rotation": 0,
          "target": "8-parking-driveway-3"
        }
      ],
      "infoHotspots": []
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
      "linkHotspots": [],
      "infoHotspots": []
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
        "yaw": -3.060326846445424,
        "pitch": 0.04349661061479004,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13310378796863986,
          "pitch": 0.12036545033846835,
          "rotation": 0,
          "target": "4-driveway-1"
        },
        {
          "yaw": -1.849418152917984,
          "pitch": 0.1020419926693652,
          "rotation": 0,
          "target": "10-driveway-3"
        },
        {
          "yaw": 3.0282896152126657,
          "pitch": 0.029231451933121377,
          "rotation": 0,
          "target": "13-main-building-entrance"
        },
        {
          "yaw": -2.9294574833927687,
          "pitch": 0.0240154931409009,
          "rotation": 0,
          "target": "24-main-building-exit"
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
          "yaw": -2.7266104621713563,
          "pitch": 0.19603465484900617,
          "rotation": 0,
          "target": "7-parking-driveway-2"
        },
        {
          "yaw": -0.49993564284303815,
          "pitch": 0.12015229507538905,
          "rotation": 0,
          "target": "9-driveway-2"
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
          "yaw": -0.23815275571801742,
          "pitch": 0.2070825216055745,
          "rotation": 0,
          "target": "12-parking-lot"
        },
        {
          "yaw": 3.02170356780411,
          "pitch": 0.05123647590949787,
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
          "yaw": 2.9938564064793187,
          "pitch": 0.1756799748981308,
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
          "yaw": 0.04268216472337194,
          "pitch": 0.17365126205068648,
          "rotation": 0,
          "target": "14-main-front-hallway"
        },
        {
          "yaw": 3.025849058635094,
          "pitch": 0.33115125480423835,
          "rotation": 0,
          "target": "9-driveway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-main-front-hallway",
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
        "yaw": 2.7426562192186266,
        "pitch": 0.2348509576656106,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 2.1849839977736742,
          "pitch": 0.37149368935468097,
          "rotation": 0,
          "target": "13-main-building-entrance"
        },
        {
          "yaw": 0.9163788646026507,
          "pitch": 0.44819783869546725,
          "rotation": 0,
          "target": "24-main-building-exit"
        },
        {
          "yaw": 3.0896586804139323,
          "pitch": 0.19251541722432108,
          "rotation": 0,
          "target": "18-clinic"
        },
        {
          "yaw": -0.5462262707395329,
          "pitch": 0.40918870294209775,
          "rotation": 0,
          "target": "15-basement-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-basement-hallway",
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
        "yaw": 0.19830960604330095,
        "pitch": 0.0537615620017835,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 1.498114232911492,
          "pitch": 0.19887396752689313,
          "rotation": 0,
          "target": "14-main-front-hallway"
        },
        {
          "yaw": -0.11501755885663201,
          "pitch": 0.33389722866336413,
          "rotation": 0,
          "target": "16-basement-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-basement-lobby",
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
        "yaw": -0.8188793526612095,
        "pitch": 0.4439371697811687,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": -1.553040737696879,
          "pitch": 0.285707460554379,
          "rotation": 0,
          "target": "17-cite-department-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cite-department-",
      "name": "CITE Department ",
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
          "yaw": -2.762028373476239,
          "pitch": 0.5168522073816124,
          "rotation": 0,
          "target": "16-basement-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-clinic",
      "name": "Clinic",
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
        "yaw": 2.5328426247719644,
        "pitch": 0.05280389478636849,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24136248455744536,
          "pitch": 0.1660407752115738,
          "rotation": 0,
          "target": "14-main-front-hallway"
        },
        {
          "yaw": 3.0344189111864956,
          "pitch": 0.11837180950524306,
          "rotation": 0,
          "target": "19-hotel-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-hotel-lobby",
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
        "yaw": 0.6490410039939256,
        "pitch": 0.09620138926666932,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.536917800905659,
          "pitch": 0.1636469510382259,
          "rotation": 0,
          "target": "18-clinic"
        },
        {
          "yaw": 2.5788550516126243,
          "pitch": 0.1524266974599744,
          "rotation": 0,
          "target": "20-hallway-tindalo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-hallway-tindalo",
      "name": "Hallway Tindalo",
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
        "yaw": 3.1207899828178913,
        "pitch": 0.12017497012017664,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11456473043396365,
          "pitch": 0.20136589385303338,
          "rotation": 0,
          "target": "19-hotel-lobby"
        },
        {
          "yaw": 2.4597944556523803,
          "pitch": 0.3455650856004784,
          "rotation": 0,
          "target": "21-brickground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-brickground",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5836528955195623,
          "pitch": 0.015643829895061856,
          "rotation": 0,
          "target": "22-tindalo-hall-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-tindalo-hall-entrance",
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
          "yaw": 3.1353980173615312,
          "pitch": 0.056165388050267495,
          "rotation": 0,
          "target": "20-hallway-tindalo"
        },
        {
          "yaw": -2.6666243531716525,
          "pitch": 0.22733838795912398,
          "rotation": 0,
          "target": "21-brickground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-tindalo",
      "name": "Tindalo",
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
          "yaw": 2.243250974476691,
          "pitch": 0.07267221417838066,
          "rotation": 0,
          "target": "22-tindalo-hall-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-main-building-exit",
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
          "yaw": -0.055197192067304,
          "pitch": 0.14622100462545262,
          "rotation": 0,
          "target": "14-main-front-hallway"
        },
        {
          "yaw": -3.074331970636713,
          "pitch": 0.20508778280420614,
          "rotation": 0,
          "target": "9-driveway-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360.uphsl.isabela",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
