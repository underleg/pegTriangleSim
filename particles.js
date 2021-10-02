function createBallEmitter(stage) {
   
    pc = new PIXI.ParticleContainer();
    pc.setProperties({
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
    });
    
    stage.addChild(pc);
    

    var emitter = new PIXI.particles.Emitter(

        // The PIXI.Container to put the emitter in
        // if using blend modes, it's important to put this
        // on top of a bitmap, and not use the root stage Container
        pc,
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
            "lifetime": {
                "min": 0.1,
                "max": 0.2
            },
            "blendMode": "multiply", // add, normal, multiply, screen
            "frequency": 0.005,
            "emitterLifetime": 0,
            "maxParticles": 25,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.7
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 170,
                        "max": 170
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.5
                                },
                                {
                                    "time": 0.5,
                                    "value": 0.1
                                },
                                {
                                    "time": 1,
                                    "value": 0.0
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "FFFFFF" // "fff191"
                                },
                                {
                                    "time": 0.6,
                                    "value": "83cdff"
                                },
                                {
                                    "time": 1.0,
                                    "value": "000000"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 10,
                        "maxSpeed": 50,
                        "minStart": 250,
                        "maxStart": 290
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        "textures": [
                            "particle.png",
                            //"Fire.png"
                        ]
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 10,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        }
    );

    return emitter;
}


function createPrizeEmitter1(stage) {
   
    pc = new PIXI.ParticleContainer();
    pc.setProperties({
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
    });
    
    stage.addChild(pc);
    

    var emitter = new PIXI.particles.Emitter(

        // The PIXI.Container to put the emitter in
        // if using blend modes, it's important to put this
        // on top of a bitmap, and not use the root stage Container
        pc,
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
            "lifetime": {
                "min": 0.2,
                "max": 0.2
            },
            "blendMode": "multiply", // add, normal, multiply, screen
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 70,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1.0
                                },
                                {
                                    "time": 1,
                                    "value": 0.5
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 2700,
                        "max": 2700
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.5
                                },
                                
                                {
                                    "time": 1,
                                    "value": 0.0
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "FFFFFF" //"0000FF"
                                },
                                {
                                    "time": 1,
                                    "value": "00FFFF"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 1,
                        "minStart": 260,
                        "maxStart": 280
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        "textures": [
                            "star2.png"
                            
                        ]
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 20,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        }
    );

    return emitter;
}



function createPrizeEmitter2(stage) {
   
    pc = new PIXI.ParticleContainer();
    pc.setProperties({
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
    });
    
    stage.addChild(pc);
    

    var emitter = new PIXI.particles.Emitter(

        // The PIXI.Container to put the emitter in
        // if using blend modes, it's important to put this
        // on top of a bitmap, and not use the root stage Container
        pc,
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
            "lifetime": {
                "min": 0.2,
                "max": 0.2
            },
            "blendMode": "normal", // add, normal, multiply, screen
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 10,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.9
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 1500,
                        "max": 1500
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.5
                                },
                                
                                {
                                    "time": 1,
                                    "value": 0.0
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "F842F2"
                                },
                                {
                                    "time": 1,
                                    "value": "F842F1"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 1,
                        "minStart": 250,
                        "maxStart": 290
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        "textures": [
                            "star.png"
                            
                        ]
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 20,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        }
    );

    return emitter;
}

function createPrizeEmitter3(stage) {
   
    pc = new PIXI.ParticleContainer();
    pc.setProperties({
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
    });
    
    stage.addChild(pc);
    

    var emitter = new PIXI.particles.Emitter(

        // The PIXI.Container to put the emitter in
        // if using blend modes, it's important to put this
        // on top of a bitmap, and not use the root stage Container
        pc,
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
            "lifetime": {
                "min": 0.2,
                "max": 0.2
            },
            "blendMode": "normal", // add, normal, multiply, screen
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 30,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.9
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 800,
                        "max": 1600
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.3
                                },
                                
                                {
                                    "time": 1,
                                    "value": 0.0
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "FF0000"
                                },
                                {
                                    "time": 1,
                                    "value": "FF00FF"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 1,
                        "minStart": 250 - 40,
                        "maxStart": 290 + 40
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        "textures": [
                            "star.png"
                            
                        ]
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 20,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        }
    );

    return emitter;
}
