[
    {
        "id": "548f3aef.d82e84",
        "type": "tab",
        "label": "Holiday Lights",
        "disabled": false,
        "info": ""
    },
    {
        "id": "25e160e4.b2e5b8",
        "type": "mqtt in",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/commands1",
        "qos": "2",
        "broker": "bdd2968.6302068",
        "x": 174,
        "y": 630.0000114440918,
        "wires": [
            [
                "5fbebae5.316bb4",
                "df49bf0b.baae2"
            ]
        ]
    },
    {
        "id": "15b5d6d5.487ad1",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Green",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.g",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 540,
        "wires": [
            [
                "6f74691e.bd935"
            ]
        ]
    },
    {
        "id": "5fbebae5.316bb4",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/state1",
        "qos": "",
        "retain": "true",
        "broker": "bdd2968.6302068",
        "x": 580,
        "y": 660,
        "wires": []
    },
    {
        "id": "df49bf0b.baae2",
        "type": "json",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 368.4000015258789,
        "y": 574.000011920929,
        "wires": [
            [
                "15b5d6d5.487ad1",
                "abec3689.c2ea28",
                "e936904.39d54f"
            ]
        ]
    },
    {
        "id": "e936904.39d54f",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Blue",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.b",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 580,
        "wires": [
            [
                "bad008ff.72495"
            ]
        ]
    },
    {
        "id": "abec3689.c2ea28",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Red",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.r",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 500,
        "wires": [
            [
                "5af6012f.5f0d8"
            ]
        ]
    },
    {
        "id": "1c9f64b1.4b2cb3",
        "type": "mqtt in",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/commands2",
        "qos": "2",
        "broker": "bdd2968.6302068",
        "x": 178.39993286132812,
        "y": 934.9999852180481,
        "wires": [
            [
                "6186ec73.e3d184",
                "280e41b.30f14be"
            ]
        ]
    },
    {
        "id": "35ba2edd.14376a",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Green",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.g",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 840,
        "wires": [
            [
                "a2a0aab8.2a72f8"
            ]
        ]
    },
    {
        "id": "6186ec73.e3d184",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/state2",
        "qos": "",
        "retain": "true",
        "broker": "bdd2968.6302068",
        "x": 580,
        "y": 980,
        "wires": []
    },
    {
        "id": "280e41b.30f14be",
        "type": "json",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 372.79993438720703,
        "y": 878.9999856948853,
        "wires": [
            [
                "35ba2edd.14376a",
                "8d27db80.cd9d",
                "68b93fe9.c94f4"
            ]
        ]
    },
    {
        "id": "68b93fe9.c94f4",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Blue",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.b",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 880,
        "wires": [
            [
                "b72434d1.d9f65"
            ]
        ]
    },
    {
        "id": "8d27db80.cd9d",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Red",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.r",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 800,
        "wires": [
            [
                "db9e73a5.7a5248"
            ]
        ]
    },
    {
        "id": "18b32d69.7bebeb",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 910,
        "y": 500,
        "wires": []
    },
    {
        "id": "4a6ddeca.5a493",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 920,
        "y": 540,
        "wires": []
    },
    {
        "id": "66e5c27c.c32ee4",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 910,
        "y": 580,
        "wires": []
    },
    {
        "id": "871bcbd7.98932",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 950,
        "y": 800,
        "wires": []
    },
    {
        "id": "e2503c2c.e4785",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 956.999921798706,
        "y": 841.9999904632568,
        "wires": []
    },
    {
        "id": "2630de15.5ec17a",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 948.0000228881836,
        "y": 881.0000138282776,
        "wires": []
    },
    {
        "id": "5af6012f.5f0d8",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 500,
        "wires": [
            [
                "18b32d69.7bebeb"
            ]
        ]
    },
    {
        "id": "6f74691e.bd935",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 540,
        "wires": [
            [
                "4a6ddeca.5a493"
            ]
        ]
    },
    {
        "id": "bad008ff.72495",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 580,
        "wires": [
            [
                "66e5c27c.c32ee4"
            ]
        ]
    },
    {
        "id": "db9e73a5.7a5248",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 800,
        "wires": [
            [
                "871bcbd7.98932"
            ]
        ]
    },
    {
        "id": "a2a0aab8.2a72f8",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 840,
        "wires": [
            [
                "e2503c2c.e4785"
            ]
        ]
    },
    {
        "id": "b72434d1.d9f65",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 710,
        "y": 880,
        "wires": [
            [
                "2630de15.5ec17a"
            ]
        ]
    },
    {
        "id": "4f9f996f.9dc2e8",
        "type": "mqtt in",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/commands3",
        "qos": "2",
        "broker": "bdd2968.6302068",
        "x": 192.4000244140625,
        "y": 1300.0000171661377,
        "wires": [
            [
                "ade64fa7.62fdf8",
                "93b8eca.95ddb1"
            ]
        ]
    },
    {
        "id": "ade64fa7.62fdf8",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/state3",
        "qos": "",
        "retain": "true",
        "broker": "bdd2968.6302068",
        "x": 596.9999961853027,
        "y": 1332.0000367164612,
        "wires": []
    },
    {
        "id": "93b8eca.95ddb1",
        "type": "json",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 386.8000259399414,
        "y": 1244.0000176429749,
        "wires": [
            [
                "b39b3a3c.03f7e8",
                "8ef5f9.7604ea08",
                "2ce3060e.0903f2"
            ]
        ]
    },
    {
        "id": "b39b3a3c.03f7e8",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Green",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.g",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 566.9999961853027,
        "y": 1192.0000367164612,
        "wires": [
            [
                "2fd3bf07.bebfb"
            ]
        ]
    },
    {
        "id": "8ef5f9.7604ea08",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Red",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.r",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 556.9999961853027,
        "y": 1152.0000367164612,
        "wires": [
            [
                "fbb08ca2.eba16"
            ]
        ]
    },
    {
        "id": "2ce3060e.0903f2",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Blue",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.color.b",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 566.9999961853027,
        "y": 1232.0000367164612,
        "wires": [
            [
                "4a54bfc4.e5211"
            ]
        ]
    },
    {
        "id": "2fd3bf07.bebfb",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 726.9999961853027,
        "y": 1192.0000367164612,
        "wires": [
            [
                "6081c902.be902"
            ]
        ]
    },
    {
        "id": "fbb08ca2.eba16",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 706.9999961853027,
        "y": 1152.0000367164612,
        "wires": [
            [
                "71513fb5.9d99d"
            ]
        ]
    },
    {
        "id": "4a54bfc4.e5211",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 726.9999961853027,
        "y": 1232.0000367164612,
        "wires": [
            [
                "8b4799da.51b36"
            ]
        ]
    },
    {
        "id": "6081c902.be902",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 936.9999961853027,
        "y": 1192.0000367164612,
        "wires": []
    },
    {
        "id": "71513fb5.9d99d",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 926.9999961853027,
        "y": 1152.0000367164612,
        "wires": []
    },
    {
        "id": "8b4799da.51b36",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 926.9999961853027,
        "y": 1232.0000367164612,
        "wires": []
    },
    {
        "id": "f6778063.d36228",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/state",
        "qos": "",
        "retain": "true",
        "broker": "bdd2968.6302068",
        "x": 513.0002593994141,
        "y": 255.99999809265137,
        "wires": []
    },
    {
        "id": "7fc6355e.cc655c",
        "type": "json",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 418.4000015258789,
        "y": 129.00000047683716,
        "wires": [
            [
                "5862d3ed.2ccc2c",
                "87ff7018.ae02f",
                "e42cd1bb.d83db"
            ]
        ]
    },
    {
        "id": "5862d3ed.2ccc2c",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Effect",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.effect",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 578.4000549316406,
        "y": 128.0000228881836,
        "wires": [
            [
                "c0b5e5eb.7255b8"
            ]
        ]
    },
    {
        "id": "87ff7018.ae02f",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send State",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.state",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 579.4000244140625,
        "y": 75,
        "wires": [
            [
                "45ed32b2.b126f4"
            ]
        ]
    },
    {
        "id": "45ed32b2.b126f4",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/power",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 994.4999313354492,
        "y": 75.00002241134644,
        "wires": []
    },
    {
        "id": "c0b5e5eb.7255b8",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/effect",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 985.3999309539795,
        "y": 128.00002336502075,
        "wires": []
    },
    {
        "id": "b33af2e6.51745",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/brightness",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1007.8000469207764,
        "y": 187.00000047683716,
        "wires": []
    },
    {
        "id": "e42cd1bb.d83db",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "Send Brightness",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.brightness",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 597.3002262115479,
        "y": 186.9999942779541,
        "wires": [
            [
                "c4c9024a.0d88"
            ]
        ]
    },
    {
        "id": "c4c9024a.0d88",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "0-255",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "0",
                "vt": "num",
                "v2": "255",
                "v2t": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 787.3999328613281,
        "y": 188.0000238418579,
        "wires": [
            [
                "b33af2e6.51745"
            ]
        ]
    },
    {
        "id": "829e39f7.c98908",
        "type": "server-state-changed",
        "z": "548f3aef.d82e84",
        "name": "LED Locator",
        "server": "dd7ec308.610a7",
        "entityidfilter": "input_number.led_identification",
        "entityidfiltertype": "substring",
        "haltifstate": "",
        "x": 129,
        "y": 372.00000762939453,
        "wires": [
            [
                "9ac9833e.a9a11"
            ]
        ]
    },
    {
        "id": "9ac9833e.a9a11",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "remove decimal",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": ".0",
                "fromt": "str",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 369.00000381469727,
        "y": 371.9999656677246,
        "wires": [
            [
                "2e66d4ac.359f14"
            ]
        ]
    },
    {
        "id": "2e66d4ac.359f14",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "Configure LED",
        "topic": "holidayLights/configure",
        "qos": "0",
        "retain": "false",
        "broker": "bdd2968.6302068",
        "x": 648,
        "y": 371.999960899353,
        "wires": []
    },
    {
        "id": "33c88c41.e85b04",
        "type": "mqtt in",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "holidayLights/commands",
        "qos": "2",
        "broker": "bdd2968.6302068",
        "x": 166,
        "y": 148.00002479553223,
        "wires": [
            [
                "f6778063.d36228",
                "7fc6355e.cc655c"
            ]
        ]
    },
    {
        "id": "217cd0c9.f1f37",
        "type": "light-scheduler",
        "z": "548f3aef.d82e84",
        "settings": "ef78efab.66be08",
        "events": "[{\"start\":{\"dow\":2,\"mod\":1080},\"end\":{\"dow\":2,\"mod\":1110}},{\"start\":{\"dow\":1,\"mod\":1080},\"end\":{\"dow\":1,\"mod\":1110}},{\"start\":{\"dow\":3,\"mod\":1080},\"end\":{\"dow\":3,\"mod\":1110}},{\"start\":{\"dow\":4,\"mod\":1080},\"end\":{\"dow\":4,\"mod\":1110}},{\"start\":{\"dow\":5,\"mod\":1080},\"end\":{\"dow\":5,\"mod\":1110}},{\"start\":{\"dow\":6,\"mod\":1080},\"end\":{\"dow\":6,\"mod\":1110}},{\"start\":{\"dow\":0,\"mod\":1080},\"end\":{\"dow\":0,\"mod\":1110}},{\"start\":{\"dow\":1,\"mod\":1200},\"end\":{\"dow\":1,\"mod\":1230}},{\"start\":{\"dow\":2,\"mod\":1200},\"end\":{\"dow\":2,\"mod\":1230}},{\"start\":{\"dow\":3,\"mod\":1200},\"end\":{\"dow\":3,\"mod\":1230}},{\"start\":{\"dow\":4,\"mod\":1200},\"end\":{\"dow\":4,\"mod\":1230}},{\"start\":{\"dow\":5,\"mod\":1200},\"end\":{\"dow\":5,\"mod\":1230}},{\"start\":{\"dow\":6,\"mod\":1200},\"end\":{\"dow\":6,\"mod\":1230}},{\"start\":{\"dow\":0,\"mod\":1200},\"end\":{\"dow\":0,\"mod\":1230}},{\"start\":{\"dow\":1,\"mod\":1320},\"end\":{\"dow\":1,\"mod\":1350}},{\"start\":{\"dow\":2,\"mod\":1320},\"end\":{\"dow\":2,\"mod\":1350}},{\"start\":{\"dow\":3,\"mod\":1320},\"end\":{\"dow\":3,\"mod\":1350}},{\"start\":{\"dow\":4,\"mod\":1320},\"end\":{\"dow\":4,\"mod\":1350}},{\"start\":{\"dow\":5,\"mod\":1320},\"end\":{\"dow\":5,\"mod\":1350}},{\"start\":{\"dow\":6,\"mod\":1320},\"end\":{\"dow\":6,\"mod\":1350}},{\"start\":{\"dow\":0,\"mod\":1320},\"end\":{\"dow\":0,\"mod\":1350}},{\"start\":{\"dow\":1,\"mod\":0},\"end\":{\"dow\":1,\"mod\":30}},{\"start\":{\"dow\":2,\"mod\":0},\"end\":{\"dow\":2,\"mod\":30}},{\"start\":{\"dow\":3,\"mod\":0},\"end\":{\"dow\":3,\"mod\":30}},{\"start\":{\"dow\":4,\"mod\":0},\"end\":{\"dow\":4,\"mod\":30}},{\"start\":{\"dow\":5,\"mod\":0},\"end\":{\"dow\":5,\"mod\":30}},{\"start\":{\"dow\":6,\"mod\":0},\"end\":{\"dow\":6,\"mod\":30}},{\"start\":{\"dow\":0,\"mod\":0},\"end\":{\"dow\":0,\"mod\":30}}]",
        "topic": "effect",
        "name": "(6:00-6:30) (8:00-8:30) (10:00-10:30) (12:00-12:30)",
        "onPayload": "ON",
        "onPayloadType": "str",
        "offPayload": "OFF",
        "offPayloadType": "str",
        "onlyWhenDark": true,
        "sunElevationThreshold": 6,
        "sunShowElevationInStatus": false,
        "outputfreq": "output.statechange.startup",
        "x": 208.5,
        "y": 1498,
        "wires": [
            [
                "16b52bab.207b6c"
            ]
        ]
    },
    {
        "id": "53255cbd.64a0e4",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "Christmas White Twinkle",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Christmas_White_Twinkle\" }",
        "mergecontext": "",
        "x": 866.5,
        "y": 1492,
        "wires": [
            []
        ]
    },
    {
        "id": "d9e1922.1655df",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "Christmas Blue Twinkle",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Christmas_Blue_Twinkle\" }",
        "mergecontext": "",
        "x": 871,
        "y": 1603,
        "wires": [
            []
        ]
    },
    {
        "id": "4c9f080.6ec5af8",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "Christmas Chase",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Christmas_Chase\" }",
        "mergecontext": "",
        "x": 849,
        "y": 1548,
        "wires": [
            []
        ]
    },
    {
        "id": "a21e98b9.e09c6",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "Christmas Blocks",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Christmas_Blocks\" }",
        "mergecontext": "",
        "x": 851,
        "y": 1655,
        "wires": [
            []
        ]
    },
    {
        "id": "16b52bab.207b6c",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "ON/OFF",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ON",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "OFF",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 503.5,
        "y": 1498,
        "wires": [
            [
                "d8f3e60c.6ad618"
            ],
            []
        ],
        "outputLabels": [
            "ON",
            "OFF"
        ]
    },
    {
        "id": "1fd1c906.1972a7",
        "type": "light-scheduler",
        "z": "548f3aef.d82e84",
        "settings": "ef78efab.66be08",
        "events": "[{\"start\":{\"dow\":1,\"mod\":1110},\"end\":{\"dow\":1,\"mod\":1140}},{\"start\":{\"dow\":2,\"mod\":1110},\"end\":{\"dow\":2,\"mod\":1140}},{\"start\":{\"dow\":3,\"mod\":1110},\"end\":{\"dow\":3,\"mod\":1140}},{\"start\":{\"dow\":4,\"mod\":1110},\"end\":{\"dow\":4,\"mod\":1140}},{\"start\":{\"dow\":5,\"mod\":1110},\"end\":{\"dow\":5,\"mod\":1140}},{\"start\":{\"dow\":6,\"mod\":1110},\"end\":{\"dow\":6,\"mod\":1140}},{\"start\":{\"dow\":0,\"mod\":1110},\"end\":{\"dow\":0,\"mod\":1140}},{\"start\":{\"dow\":1,\"mod\":1230},\"end\":{\"dow\":1,\"mod\":1260}},{\"start\":{\"dow\":2,\"mod\":1230},\"end\":{\"dow\":2,\"mod\":1260}},{\"start\":{\"dow\":3,\"mod\":1230},\"end\":{\"dow\":3,\"mod\":1260}},{\"start\":{\"dow\":4,\"mod\":1230},\"end\":{\"dow\":4,\"mod\":1260}},{\"start\":{\"dow\":5,\"mod\":1230},\"end\":{\"dow\":5,\"mod\":1260}},{\"start\":{\"dow\":6,\"mod\":1230},\"end\":{\"dow\":6,\"mod\":1260}},{\"start\":{\"dow\":0,\"mod\":1230},\"end\":{\"dow\":0,\"mod\":1260}},{\"start\":{\"dow\":1,\"mod\":1350},\"end\":{\"dow\":1,\"mod\":1380}},{\"start\":{\"dow\":2,\"mod\":1350},\"end\":{\"dow\":2,\"mod\":1380}},{\"start\":{\"dow\":3,\"mod\":1350},\"end\":{\"dow\":3,\"mod\":1380}},{\"start\":{\"dow\":4,\"mod\":1350},\"end\":{\"dow\":4,\"mod\":1380}},{\"start\":{\"dow\":5,\"mod\":1350},\"end\":{\"dow\":5,\"mod\":1380}},{\"start\":{\"dow\":6,\"mod\":1350},\"end\":{\"dow\":6,\"mod\":1380}},{\"start\":{\"dow\":0,\"mod\":1350},\"end\":{\"dow\":0,\"mod\":1380}},{\"start\":{\"dow\":1,\"mod\":30},\"end\":{\"dow\":1,\"mod\":60}},{\"start\":{\"dow\":2,\"mod\":30},\"end\":{\"dow\":2,\"mod\":60}},{\"start\":{\"dow\":3,\"mod\":30},\"end\":{\"dow\":3,\"mod\":60}},{\"start\":{\"dow\":4,\"mod\":30},\"end\":{\"dow\":4,\"mod\":60}},{\"start\":{\"dow\":5,\"mod\":30},\"end\":{\"dow\":5,\"mod\":60}},{\"start\":{\"dow\":6,\"mod\":30},\"end\":{\"dow\":6,\"mod\":60}},{\"start\":{\"dow\":0,\"mod\":30},\"end\":{\"dow\":0,\"mod\":60}}]",
        "topic": "effect",
        "name": "(6:30-7:00) (8:30-9:00) (10:30-11:00) (12:30-1:00)",
        "onPayload": "ON",
        "onPayloadType": "str",
        "offPayload": "OFF",
        "offPayloadType": "str",
        "onlyWhenDark": true,
        "sunElevationThreshold": 6,
        "sunShowElevationInStatus": false,
        "outputfreq": "output.statechange.startup",
        "x": 201,
        "y": 1555,
        "wires": [
            [
                "8f6c20a0.79032"
            ]
        ]
    },
    {
        "id": "8f6c20a0.79032",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "ON/OFF",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ON",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "OFF",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 502,
        "y": 1555,
        "wires": [
            [
                "d5b73ff.1b1e14"
            ],
            []
        ],
        "outputLabels": [
            "ON",
            "OFF"
        ]
    },
    {
        "id": "cba767e.42e6418",
        "type": "light-scheduler",
        "z": "548f3aef.d82e84",
        "settings": "ef78efab.66be08",
        "events": "[{\"start\":{\"dow\":1,\"mod\":1140},\"end\":{\"dow\":1,\"mod\":1170}},{\"start\":{\"dow\":2,\"mod\":1140},\"end\":{\"dow\":2,\"mod\":1170}},{\"start\":{\"dow\":3,\"mod\":1140},\"end\":{\"dow\":3,\"mod\":1170}},{\"start\":{\"dow\":4,\"mod\":1140},\"end\":{\"dow\":4,\"mod\":1170}},{\"start\":{\"dow\":5,\"mod\":1140},\"end\":{\"dow\":5,\"mod\":1170}},{\"start\":{\"dow\":6,\"mod\":1140},\"end\":{\"dow\":6,\"mod\":1170}},{\"start\":{\"dow\":0,\"mod\":1140},\"end\":{\"dow\":0,\"mod\":1170}},{\"start\":{\"dow\":1,\"mod\":1260},\"end\":{\"dow\":1,\"mod\":1290}},{\"start\":{\"dow\":2,\"mod\":1260},\"end\":{\"dow\":2,\"mod\":1290}},{\"start\":{\"dow\":3,\"mod\":1260},\"end\":{\"dow\":3,\"mod\":1290}},{\"start\":{\"dow\":4,\"mod\":1260},\"end\":{\"dow\":4,\"mod\":1290}},{\"start\":{\"dow\":5,\"mod\":1260},\"end\":{\"dow\":5,\"mod\":1290}},{\"start\":{\"dow\":6,\"mod\":1260},\"end\":{\"dow\":6,\"mod\":1290}},{\"start\":{\"dow\":0,\"mod\":1260},\"end\":{\"dow\":0,\"mod\":1290}},{\"start\":{\"dow\":1,\"mod\":1380},\"end\":{\"dow\":1,\"mod\":1410}},{\"start\":{\"dow\":2,\"mod\":1380},\"end\":{\"dow\":2,\"mod\":1410}},{\"start\":{\"dow\":3,\"mod\":1380},\"end\":{\"dow\":3,\"mod\":1410}},{\"start\":{\"dow\":4,\"mod\":1380},\"end\":{\"dow\":4,\"mod\":1410}},{\"start\":{\"dow\":5,\"mod\":1380},\"end\":{\"dow\":5,\"mod\":1410}},{\"start\":{\"dow\":6,\"mod\":1380},\"end\":{\"dow\":6,\"mod\":1410}},{\"start\":{\"dow\":0,\"mod\":1380},\"end\":{\"dow\":0,\"mod\":1410}},{\"start\":{\"dow\":1,\"mod\":60},\"end\":{\"dow\":1,\"mod\":90}},{\"start\":{\"dow\":2,\"mod\":60},\"end\":{\"dow\":2,\"mod\":90}},{\"start\":{\"dow\":3,\"mod\":60},\"end\":{\"dow\":3,\"mod\":90}},{\"start\":{\"dow\":4,\"mod\":60},\"end\":{\"dow\":4,\"mod\":90}},{\"start\":{\"dow\":5,\"mod\":60},\"end\":{\"dow\":5,\"mod\":90}},{\"start\":{\"dow\":6,\"mod\":60},\"end\":{\"dow\":6,\"mod\":90}},{\"start\":{\"dow\":0,\"mod\":60},\"end\":{\"dow\":0,\"mod\":90}}]",
        "topic": "effect",
        "name": "(7:00-7:30) (9:00-9:30) (11:00-11:30) (1:00-1:30)",
        "onPayload": "ON",
        "onPayloadType": "str",
        "offPayload": "OFF",
        "offPayloadType": "str",
        "onlyWhenDark": true,
        "sunElevationThreshold": 6,
        "sunShowElevationInStatus": false,
        "outputfreq": "output.statechange.startup",
        "x": 200,
        "y": 1611,
        "wires": [
            [
                "2b512097.055e58"
            ]
        ]
    },
    {
        "id": "2b512097.055e58",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "ON/OFF",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ON",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "OFF",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 499,
        "y": 1611,
        "wires": [
            [
                "8ce25d5f.855dc8"
            ],
            []
        ],
        "outputLabels": [
            "ON",
            "OFF"
        ]
    },
    {
        "id": "d8f2da42.3bf07",
        "type": "light-scheduler",
        "z": "548f3aef.d82e84",
        "settings": "ef78efab.66be08",
        "events": "[{\"start\":{\"dow\":1,\"mod\":1170},\"end\":{\"dow\":1,\"mod\":1200}},{\"start\":{\"dow\":2,\"mod\":1170},\"end\":{\"dow\":2,\"mod\":1200}},{\"start\":{\"dow\":3,\"mod\":1170},\"end\":{\"dow\":3,\"mod\":1200}},{\"start\":{\"dow\":4,\"mod\":1170},\"end\":{\"dow\":4,\"mod\":1200}},{\"start\":{\"dow\":5,\"mod\":1170},\"end\":{\"dow\":5,\"mod\":1200}},{\"start\":{\"dow\":6,\"mod\":1170},\"end\":{\"dow\":6,\"mod\":1200}},{\"start\":{\"dow\":0,\"mod\":1170},\"end\":{\"dow\":0,\"mod\":1200}},{\"start\":{\"dow\":1,\"mod\":1290},\"end\":{\"dow\":1,\"mod\":1320}},{\"start\":{\"dow\":2,\"mod\":1290},\"end\":{\"dow\":2,\"mod\":1320}},{\"start\":{\"dow\":3,\"mod\":1290},\"end\":{\"dow\":3,\"mod\":1320}},{\"start\":{\"dow\":4,\"mod\":1290},\"end\":{\"dow\":4,\"mod\":1320}},{\"start\":{\"dow\":5,\"mod\":1290},\"end\":{\"dow\":5,\"mod\":1320}},{\"start\":{\"dow\":6,\"mod\":1290},\"end\":{\"dow\":6,\"mod\":1320}},{\"start\":{\"dow\":0,\"mod\":1290},\"end\":{\"dow\":0,\"mod\":1320}},{\"start\":{\"dow\":1,\"mod\":1410},\"end\":{\"dow\":2,\"mod\":0}},{\"start\":{\"dow\":2,\"mod\":1410},\"end\":{\"dow\":3,\"mod\":0}},{\"start\":{\"dow\":3,\"mod\":1410},\"end\":{\"dow\":4,\"mod\":0}},{\"start\":{\"dow\":4,\"mod\":1410},\"end\":{\"dow\":5,\"mod\":0}},{\"start\":{\"dow\":5,\"mod\":1410},\"end\":{\"dow\":6,\"mod\":0}},{\"start\":{\"dow\":6,\"mod\":1410},\"end\":{\"dow\":0,\"mod\":0}},{\"start\":{\"dow\":0,\"mod\":1410},\"end\":{\"dow\":1,\"mod\":0}},{\"start\":{\"dow\":1,\"mod\":90},\"end\":{\"dow\":1,\"mod\":120}},{\"start\":{\"dow\":2,\"mod\":90},\"end\":{\"dow\":2,\"mod\":120}},{\"start\":{\"dow\":3,\"mod\":90},\"end\":{\"dow\":3,\"mod\":120}},{\"start\":{\"dow\":4,\"mod\":90},\"end\":{\"dow\":4,\"mod\":120}},{\"start\":{\"dow\":5,\"mod\":90},\"end\":{\"dow\":5,\"mod\":120}},{\"start\":{\"dow\":6,\"mod\":90},\"end\":{\"dow\":6,\"mod\":120}},{\"start\":{\"dow\":0,\"mod\":90},\"end\":{\"dow\":0,\"mod\":120}}]",
        "topic": "effect",
        "name": "(7:30-8:00) (9:30-10:00) (11:30-12:00) (1:30-2:00)",
        "onPayload": "ON",
        "onPayloadType": "str",
        "offPayload": "OFF",
        "offPayloadType": "str",
        "onlyWhenDark": true,
        "sunElevationThreshold": 6,
        "sunShowElevationInStatus": false,
        "outputfreq": "output.statechange.startup",
        "x": 200,
        "y": 1662,
        "wires": [
            [
                "20610269.0510e6"
            ]
        ]
    },
    {
        "id": "20610269.0510e6",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "ON/OFF",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ON",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "OFF",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 501,
        "y": 1662,
        "wires": [
            [
                "82090144.cb773"
            ],
            []
        ],
        "outputLabels": [
            "ON",
            "OFF"
        ]
    },
    {
        "id": "d8f3e60c.6ad618",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "christmas",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.christmas",
        "x": 652.5,
        "y": 1492,
        "wires": [
            [
                "53255cbd.64a0e4"
            ]
        ]
    },
    {
        "id": "d5b73ff.1b1e14",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "christmas",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.christmas",
        "x": 652,
        "y": 1548,
        "wires": [
            [
                "4c9f080.6ec5af8"
            ]
        ]
    },
    {
        "id": "8ce25d5f.855dc8",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "christmas",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.christmas",
        "x": 650,
        "y": 1604,
        "wires": [
            [
                "d9e1922.1655df"
            ]
        ]
    },
    {
        "id": "82090144.cb773",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "christmas",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.christmas",
        "x": 651,
        "y": 1655,
        "wires": [
            [
                "a21e98b9.e09c6"
            ]
        ]
    },
    {
        "id": "35174be4.dc606c",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks on",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Solid_Blocks\" }",
        "mergecontext": "",
        "x": 679,
        "y": 1829,
        "wires": [
            [
                "5debf5fe.8afe44",
                "a5c1e004.fe7e5"
            ]
        ]
    },
    {
        "id": "ffb68703.41d0a",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 537.5,
        "y": 1847,
        "wires": [
            [
                "35174be4.dc606c"
            ],
            [
                "1b95d088.cae707"
            ]
        ]
    },
    {
        "id": "1b95d088.cae707",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks off",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_off",
        "data": "{   \"entity_id\": \"light.holiday_lights\"}",
        "mergecontext": "",
        "x": 678,
        "y": 1867,
        "wires": [
            []
        ]
    },
    {
        "id": "a7162e6b.3cd898",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1350,
        "y": 1898,
        "wires": []
    },
    {
        "id": "1c234e60.d49262",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1360,
        "y": 1952,
        "wires": []
    },
    {
        "id": "3f79e8c4.9b5238",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue1",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1352,
        "y": 1995,
        "wires": []
    },
    {
        "id": "73a8b6d2.44b7e",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1352,
        "y": 2059,
        "wires": []
    },
    {
        "id": "12218ee7.70d891",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1359.9998779296875,
        "y": 2107,
        "wires": []
    },
    {
        "id": "5889c3e2.e350cc",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue2",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1352,
        "y": 2155,
        "wires": []
    },
    {
        "id": "c3508994.ecfaa8",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/red3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1348,
        "y": 2252,
        "wires": []
    },
    {
        "id": "7633c383.fb3be4",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/green3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1357,
        "y": 2301,
        "wires": []
    },
    {
        "id": "feaf267d.ffe738",
        "type": "mqtt out",
        "z": "548f3aef.d82e84",
        "name": "",
        "topic": "hoildayLights/blue3",
        "qos": "",
        "retain": "",
        "broker": "bdd2968.6302068",
        "x": 1347,
        "y": 2341,
        "wires": []
    },
    {
        "id": "5debf5fe.8afe44",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "180",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "180",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858.5,
        "y": 1810,
        "wires": [
            [
                "73a8b6d2.44b7e",
                "12218ee7.70d891",
                "a7162e6b.3cd898",
                "feaf267d.ffe738",
                "5889c3e2.e350cc"
            ]
        ]
    },
    {
        "id": "a5c1e004.fe7e5",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 1850,
        "wires": [
            [
                "1c234e60.d49262",
                "3f79e8c4.9b5238",
                "c3508994.ecfaa8",
                "7633c383.fb3be4"
            ]
        ]
    },
    {
        "id": "f7ea8e8.0820ff",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks on",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Solid_Blocks\" }",
        "mergecontext": "",
        "x": 679,
        "y": 1919,
        "wires": [
            [
                "8f377db6.156d88",
                "d75ded98.ac10c"
            ]
        ]
    },
    {
        "id": "7733e902.e8e45",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 537.5,
        "y": 1937,
        "wires": [
            [
                "f7ea8e8.0820ff"
            ],
            [
                "c47159a.ec75ca8"
            ]
        ]
    },
    {
        "id": "c47159a.ec75ca8",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks off",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_off",
        "data": "{   \"entity_id\": \"light.holiday_lights\"}",
        "mergecontext": "",
        "x": 678,
        "y": 1957,
        "wires": [
            []
        ]
    },
    {
        "id": "8f377db6.156d88",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "180",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "180",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858.5,
        "y": 1900,
        "wires": [
            [
                "1c234e60.d49262",
                "73a8b6d2.44b7e",
                "5889c3e2.e350cc",
                "c3508994.ecfaa8",
                "7633c383.fb3be4"
            ]
        ]
    },
    {
        "id": "d75ded98.ac10c",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 1940,
        "wires": [
            [
                "a7162e6b.3cd898",
                "3f79e8c4.9b5238",
                "12218ee7.70d891",
                "feaf267d.ffe738"
            ]
        ]
    },
    {
        "id": "b50fb032.2d8808",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 537.5,
        "y": 2026,
        "wires": [
            [
                "d1e6fac4.4606f8"
            ],
            [
                "6a8f13c.da50f6c"
            ]
        ]
    },
    {
        "id": "d1e6fac4.4606f8",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks on",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Solid_Blocks\" }",
        "mergecontext": "",
        "x": 679,
        "y": 2008,
        "wires": [
            [
                "d5463961.192b48",
                "6d2f10e0.e99ee"
            ]
        ]
    },
    {
        "id": "6a8f13c.da50f6c",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks off",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_off",
        "data": "{   \"entity_id\": \"light.holiday_lights\"}",
        "mergecontext": "",
        "x": 678,
        "y": 2046,
        "wires": [
            []
        ]
    },
    {
        "id": "d5463961.192b48",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "180",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "180",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858.5,
        "y": 1989,
        "wires": [
            [
                "a7162e6b.3cd898",
                "73a8b6d2.44b7e",
                "12218ee7.70d891",
                "5889c3e2.e350cc",
                "c3508994.ecfaa8"
            ]
        ]
    },
    {
        "id": "6d2f10e0.e99ee",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 2029,
        "wires": [
            [
                "1c234e60.d49262",
                "3f79e8c4.9b5238",
                "7633c383.fb3be4",
                "feaf267d.ffe738"
            ]
        ]
    },
    {
        "id": "a80bbc71.12e1c",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 537.5,
        "y": 2111,
        "wires": [
            [
                "6cc215f.262a06c"
            ],
            [
                "1a1e867f.af8c92"
            ]
        ]
    },
    {
        "id": "6cc215f.262a06c",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks on",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Solid_Blocks\" }",
        "mergecontext": "",
        "x": 679,
        "y": 2093,
        "wires": [
            [
                "d597ccdd.0315e",
                "79615f84.643a9"
            ]
        ]
    },
    {
        "id": "1a1e867f.af8c92",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks off",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_off",
        "data": "{   \"entity_id\": \"light.holiday_lights\"}",
        "mergecontext": "",
        "x": 678,
        "y": 2131,
        "wires": [
            []
        ]
    },
    {
        "id": "d597ccdd.0315e",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "180",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "180",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858.5,
        "y": 2074,
        "wires": [
            [
                "1c234e60.d49262",
                "7633c383.fb3be4",
                "73a8b6d2.44b7e",
                "12218ee7.70d891",
                "5889c3e2.e350cc"
            ]
        ]
    },
    {
        "id": "79615f84.643a9",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 2114,
        "wires": [
            [
                "feaf267d.ffe738",
                "c3508994.ecfaa8",
                "3f79e8c4.9b5238",
                "a7162e6b.3cd898"
            ]
        ]
    },
    {
        "id": "6a131c2f.c14234",
        "type": "switch",
        "z": "548f3aef.d82e84",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 537.5,
        "y": 2198,
        "wires": [
            [
                "22cc5160.86950e"
            ],
            [
                "a0089b0b.c59eb8"
            ]
        ]
    },
    {
        "id": "22cc5160.86950e",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks on",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{   \"entity_id\": \"light.holiday_lights\",\"effect\":\"Solid_Blocks\" }",
        "mergecontext": "",
        "x": 679,
        "y": 2180,
        "wires": [
            [
                "debc623.fca122",
                "f409c11d.a0416",
                "3e91837.c61aefc",
                "c8f9833.31ac6",
                "e3f05144.c937b",
                "fa6c1680.48ce38",
                "f7651290.d8791",
                "be8a998f.b5fcb"
            ]
        ]
    },
    {
        "id": "a0089b0b.c59eb8",
        "type": "api-call-service",
        "z": "548f3aef.d82e84",
        "name": "blocks off",
        "server": "dd7ec308.610a7",
        "service_domain": "homeassistant",
        "service": "turn_off",
        "data": "{   \"entity_id\": \"light.holiday_lights\"}",
        "mergecontext": "",
        "x": 678,
        "y": 2218,
        "wires": [
            []
        ]
    },
    {
        "id": "debc623.fca122",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "180",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "180",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858.5,
        "y": 2161,
        "wires": [
            [
                "a7162e6b.3cd898",
                "73a8b6d2.44b7e",
                "12218ee7.70d891",
                "5889c3e2.e350cc"
            ]
        ]
    },
    {
        "id": "f409c11d.a0416",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858,
        "y": 2197,
        "wires": [
            [
                "3f79e8c4.9b5238"
            ]
        ]
    },
    {
        "id": "d89dcd15.8ce848",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "Valentines",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.valentines",
        "x": 358,
        "y": 2026,
        "wires": [
            [
                "b50fb032.2d8808"
            ]
        ]
    },
    {
        "id": "af4de735.ffe718",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "St Patricks",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.st_patrics",
        "x": 358.5,
        "y": 2112,
        "wires": [
            [
                "a80bbc71.12e1c"
            ]
        ]
    },
    {
        "id": "7b2baa52.e3425c",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "Easter",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.easter",
        "x": 339.5,
        "y": 1938,
        "wires": [
            [
                "7733e902.e8e45"
            ]
        ]
    },
    {
        "id": "1e847ef5.fa3381",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "July 4th",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.july_4th",
        "x": 350,
        "y": 1847,
        "wires": [
            [
                "ffb68703.41d0a"
            ]
        ]
    },
    {
        "id": "919fc159.7bfce",
        "type": "api-current-state",
        "z": "548f3aef.d82e84",
        "name": "Thanksgiving",
        "server": "dd7ec308.610a7",
        "halt_if": "off",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.valentines",
        "x": 367.5,
        "y": 2198,
        "wires": [
            [
                "6a131c2f.c14234"
            ]
        ]
    },
    {
        "id": "5a0c001f.d50248",
        "type": "light-scheduler",
        "z": "548f3aef.d82e84",
        "settings": "57ad142a.dd7c54",
        "events": "[{\"start\":{\"dow\":1,\"mod\":1020},\"end\":{\"dow\":2,\"mod\":0}},{\"start\":{\"dow\":2,\"mod\":1020},\"end\":{\"dow\":3,\"mod\":0}},{\"start\":{\"dow\":3,\"mod\":1020},\"end\":{\"dow\":4,\"mod\":0}},{\"start\":{\"dow\":4,\"mod\":1020},\"end\":{\"dow\":5,\"mod\":0}},{\"start\":{\"dow\":5,\"mod\":1020},\"end\":{\"dow\":6,\"mod\":0}},{\"start\":{\"dow\":6,\"mod\":1020},\"end\":{\"dow\":0,\"mod\":0}},{\"start\":{\"dow\":0,\"mod\":1020},\"end\":{\"dow\":1,\"mod\":0}},{\"start\":{\"dow\":6,\"mod\":0},\"end\":{\"dow\":6,\"mod\":120}},{\"start\":{\"dow\":0,\"mod\":0},\"end\":{\"dow\":0,\"mod\":120}}]",
        "topic": "",
        "name": "Holiday Lights",
        "onPayload": "ON",
        "onPayloadType": "str",
        "offPayload": "OFF",
        "offPayloadType": "str",
        "onlyWhenDark": true,
        "sunElevationThreshold": 6,
        "sunShowElevationInStatus": false,
        "outputfreq": "output.statechange.startup",
        "x": 85,
        "y": 2018,
        "wires": [
            [
                "d89dcd15.8ce848",
                "af4de735.ffe718",
                "7b2baa52.e3425c",
                "1e847ef5.fa3381",
                "919fc159.7bfce"
            ]
        ]
    },
    {
        "id": "3e91837.c61aefc",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "112",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "112",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 858,
        "y": 2237,
        "wires": [
            [
                "c3508994.ecfaa8"
            ]
        ]
    },
    {
        "id": "c8f9833.31ac6",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "52",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "52",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 859.5,
        "y": 2277,
        "wires": [
            [
                "7633c383.fb3be4"
            ]
        ]
    },
    {
        "id": "e3f05144.c937b",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "3",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "3",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 859.5,
        "y": 2315,
        "wires": [
            [
                "feaf267d.ffe738"
            ]
        ]
    },
    {
        "id": "fa6c1680.48ce38",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "255",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "255",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 859,
        "y": 2354,
        "wires": [
            [
                "a7162e6b.3cd898"
            ]
        ]
    },
    {
        "id": "f7651290.d8791",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "187",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "187",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860.5,
        "y": 2394,
        "wires": [
            [
                "1c234e60.d49262"
            ]
        ]
    },
    {
        "id": "be8a998f.b5fcb",
        "type": "change",
        "z": "548f3aef.d82e84",
        "name": "43",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "43",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860.5,
        "y": 2432,
        "wires": [
            [
                "3f79e8c4.9b5238"
            ]
        ]
    },
    {
        "id": "bdd2968.6302068",
        "type": "mqtt-broker",
        "z": "",
        "name": "mosquitto",
        "broker": "192.168.1.11",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "MQTTinfo/mosquitto",
        "birthQos": "2",
        "birthPayload": "Mosquitto is up and runnig!!!",
        "closeTopic": "",
        "closePayload": "",
        "willTopic": "MQTTinfo/mosquitto",
        "willQos": "0",
        "willPayload": "Mosquitto is down!!!!"
    },
    {
        "id": "dd7ec308.610a7",
        "type": "server",
        "z": "",
        "name": "Current Home Assistant",
        "url": "http://192.168.1.151:8123",
        "pass": "aabbmj005"
    },
    {
        "id": "ef78efab.66be08",
        "type": "light-scheduler-settings",
        "z": "",
        "name": "Christmas",
        "latitude": "40.501030",
        "longitude": "-75.969152"
    },
    {
        "id": "57ad142a.dd7c54",
        "type": "light-scheduler-settings",
        "z": "",
        "name": "Year Round Holiday Lights",
        "latitude": "40.501030",
        "longitude": "-75.969152"
    }
]