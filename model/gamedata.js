const mongoose = require('mongoose');

const GameData = mongoose.model('GameData', new mongoose.Schema({
    playerInfo : {
        locale: String,
        location: String,
        ips: String,
        platform: String,
        playerID: String
    },
    hardware: [
        {
            cpu: String,   
            gpu: String,
            memory: String
        }
    ],
    hmds: [String],

    playSessionDuration: [
        {
            start: {
                h: Number,
                m: Number
            },
            end: {
                h: Number,
                m: Number
            }
        }

    ],
    perPlaythrough: [
        {
            playthroughUUID: String,
            userGameplaySettings: {
                playerStance: String,
                playerHeight: String,
                vignettePower: String,
                skipClimbing: String,
                skipFalling: String,
                rotationMode: String,
                movementType: String,
                teleportationType: String,
                teleportationMode: String,
                freeMovementType: String,
                uILanguage: String,
                subtitlesLanguage: String
            },
            events: {
                level1: {
                    sector0: {
                        metersWalked: Number,
                        teleportationCount: Number,
                        playTime: Number,
                        fireballSummon: {
                            left: Number,
                            right: Number
                        },
                        fireballHit: {
                            left: {monsterX: Number, monsterY: Number},
                            right: {monsterX: Number, monsterY: Number}
                        },
                        shieldSummon: {
                            left: Number,
                            right: Number
                        },
                        shieldSummon: {
                            left: Number,
                            right: Number
                        },
                        shieldHit: {
                            left: {
                                monsterX: Number,
                                monsterY: Number
                            },
                            right: {
                                monsterX: Number,
                                monsterY: Number
                            }
                        },
                        frostBowSummon: {
                            left: Number,
                            right: Number
                        },
                        frostBowHit: {
                            monsterX: Number, 
                            monsterY: Number
                        },
                        iceSabersSummon: Number,
                        iceSabersHit: {
                            left: {monsterX: Number, monsterY: Number},
                            right: {monsterX: Number, monsterY: Number}
                        },
                        pulseSummon: {
                            left: Number,
                            right: Number
                        },
                        pulseHit: {
                            left: {monsterX: Number, monsterY: Number},
                            right: {monsterX: Number, monsterY: Number}
                        }
                    },
                    location: [
                        {x: Number, y: Number, z: Number},
                        {x: Number, y: Number, z: Number}
                    ]
                }
            }
        }
    ]

}));


module.exports = GameData; 