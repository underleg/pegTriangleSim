
////////////////////////////////////////////////////////////
// gravity = 0.08
// x_dampener = 0.6
// y_dampener = 0.5
// dxLim = 0.04
////////////////////////////////////////////////////////////

//Counts: (0)33 (1)49 (2)114 (3)107 (4)59 (5)20  = 382

let ballRecords = [
    // [0]
    {
        prize: 4,
        numPegs: 4,
        startX: 271.972,
        bounceRecord: [1, 3, 5, 4],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [1]
    {
        prize: 4,
        numPegs: 4,
        startX: 271.972,
        bounceRecord: [1, 3, 5, 4],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [2]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.03,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [3]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.238,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [4]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.766,
        bounceRecord: [1, 2, 4, 5],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [5]
    {
        prize: 5,
        numPegs: 3,
        startX: 268.984,
        bounceRecord: [1, 2, 5],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [6]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.128,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [1, 1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [7]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.89,
        bounceRecord: [1, 3, 8, 5, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [8]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.878,
        bounceRecord: [1, 3, 8, 5, 8, 9],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [9]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.42,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [10]
    {
        prize: 2,
        numPegs: 3,
        startX: 271.798,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [11]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.404,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [12]
    {
        prize: 3,
        numPegs: 3,
        startX: 269.18,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [13]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.272,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [14]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.264,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [15]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.138,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [16]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.208,
        bounceRecord: [1, 2, 9, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [17]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.922,
        bounceRecord: [1, 3, 5, 4, 8],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [18]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.216,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [19]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.23,
        bounceRecord: [1, 3, 6, 5, 14, 10],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [20]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.416,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [21]
    {
        prize: 4,
        numPegs: 3,
        startX: 271.756,
        bounceRecord: [1, 6, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [22]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.53,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [23]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.928,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [24]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.53,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [25]
    {
        prize: 4,
        numPegs: 4,
        startX: 271.962,
        bounceRecord: [1, 3, 5, 4],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [26]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.754,
        bounceRecord: [1, 2, 4, 5],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [27]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.934,
        bounceRecord: [1, 2, 5, 8, 9],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [28]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.936,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [29]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.65,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [30]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.986,
        bounceRecord: [1, 2, 5, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [31]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.474,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [32]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.348,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [33]
    {
        prize: 4,
        numPegs: 3,
        startX: 268.706,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [34]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.128,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [35]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.284,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [36]
    {
        prize: 3,
        numPegs: 7,
        startX: 268.548,
        bounceRecord: [1, 2, 7, 4, 7, 12, 13],
        randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [37]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.888,
        bounceRecord: [1, 3, 8, 5, 8, 9],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [38]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.216,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [39]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.786,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [40]
    {
        prize: 5,
        numPegs: 6,
        startX: 271.764,
        bounceRecord: [1, 3, 2, 14, 10, 14],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [41]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.582,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [42]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.184,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [43]
    {
        prize: 2,
        numPegs: 3,
        startX: 271.796,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [44]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.538,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [45]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.462,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [46]
    {
        prize: 4,
        numPegs: 3,
        startX: 268.862,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [47]
    {
        prize: 2,
        numPegs: 4,
        startX: 271.994,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [48]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.272,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [49]
    {
        prize: 1,
        numPegs: 5,
        startX: 269.258,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [50]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.734,
        bounceRecord: [1, 6, 5, 14, 15],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [51]
    {
        prize: 2,
        numPegs: 5,
        startX: 269.266,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [52]
    {
        prize: 1,
        numPegs: 5,
        startX: 269.262,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [53]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.146,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [54]
    {
        prize: 6,
        numPegs: 5,
        startX: 271.74,
        bounceRecord: [1, 6, 5, 14, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [55]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.208,
        bounceRecord: [1, 2, 9, 10],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [56]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.208,
        bounceRecord: [1, 2, 9, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [57]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.894,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [58]
    {
        prize: 3,
        numPegs: 6,
        startX: 272.25,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [59]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.078,
        bounceRecord: [1, 2, 5, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [60]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.23,
        bounceRecord: [1, 3, 6, 5, 14, 10],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [61]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.924,
        bounceRecord: [1, 2, 5, 8, 7, 12],
        randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [62]
    {
        prize: 1,
        numPegs: 5,
        startX: 268.78,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [63]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.202,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [64]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.254,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [65]
    {
        prize: 5,
        numPegs: 3,
        startX: 269.246,
        bounceRecord: [1, 4, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [66]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.056,
        bounceRecord: [1, 3, 5, 9, 14],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [67]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.616,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [68]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.972,
        bounceRecord: [1, 2, 5, 9, 13],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [69]
    {
        prize: 3,
        numPegs: 5,
        startX: 272.024,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [70]
    {
        prize: 3,
        numPegs: 5,
        startX: 272.024,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [71]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.864,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [72]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.874,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [73]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.136,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [74]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.738,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [75]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.928,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [76]
    {
        prize: 2,
        numPegs: 4,
        startX: 272.022,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [77]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.65,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [78]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.066,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [79]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.386,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [80]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.15,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [81]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.464,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [82]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.278,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [83]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.64,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [84]
    {
        prize: 3,
        numPegs: 7,
        startX: 268.548,
        bounceRecord: [1, 2, 7, 4, 7, 12, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [85]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.492,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [86]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.508,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [87]
    {
        prize: 6,
        numPegs: 4,
        startX: 272.344,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [88]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.73,
        bounceRecord: [1, 2, 4, 8, 9, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [89]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.096,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [90]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.098,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [91]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.802,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [92]
    {
        prize: 4,
        numPegs: 7,
        startX: 272.242,
        bounceRecord: [1, 3, 6, 5, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [93]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.426,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [94]
    {
        prize: 3,
        numPegs: 5,
        startX: 271.946,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [95]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.88,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [96]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.466,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [97]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.484,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [98]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.516,
        bounceRecord: [1, 3, 5, 9, 10],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [99]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.674,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [100]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.7,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [101]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.228,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [102]
    {
        prize: 1,
        numPegs: 5,
        startX: 268.938,
        bounceRecord: [1, 2, 5, 12, 11],
        randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [103]
    {
        prize: 1,
        numPegs: 5,
        startX: 269.26,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [104]
    {
        prize: 1,
        numPegs: 5,
        startX: 268.938,
        bounceRecord: [1, 2, 5, 12, 11],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [105]
    {
        prize: 3,
        numPegs: 5,
        startX: 272.024,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [106]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.858,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [107]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.276,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [108]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.85,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [109]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.866,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [110]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.638,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [111]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.84,
        bounceRecord: [1, 3, 8, 5, 8, 13],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [112]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.118,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [113]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.918,
        bounceRecord: [1, 3, 5, 4, 8, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [114]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.7,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [115]
    {
        prize: 2,
        numPegs: 6,
        startX: 271.854,
        bounceRecord: [1, 3, 8, 5, 8, 12],
        randomDirections: [1, 1, -1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [116]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.364,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [117]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.322,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [118]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.362,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [119]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.638,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [120]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.688,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [121]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.398,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [122]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.406,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [123]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.396,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [124]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.38,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [125]
    {
        prize: 4,
        numPegs: 4,
        startX: 271.964,
        bounceRecord: [1, 3, 5, 4],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [126]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.038,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [127]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.246,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [128]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.89,
        bounceRecord: [1, 3, 8, 5, 8, 9],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [129]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.212,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [130]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.03,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [131]
    {
        prize: 4,
        numPegs: 3,
        startX: 271.822,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, -1, -1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [132]
    {
        prize: 4,
        numPegs: 3,
        startX: 271.82,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [133]
    {
        prize: 2,
        numPegs: 4,
        startX: 271.994,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [134]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.264,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [135]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.812,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [136]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.81,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [137]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.19,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [138]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.828,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [139]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.172,
        bounceRecord: [1, 2, 9, 8],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [140]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.208,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [141]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.792,
        bounceRecord: [1, 3, 8, 7],
        randomDirections: [1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [142]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.174,
        bounceRecord: [1, 2, 9, 8],
        randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [143]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.164,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [144]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.078,
        bounceRecord: [1, 2, 5, 6, 9],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [145]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.76,
        bounceRecord: [1, 2, 4, 5],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [146]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.232,
        bounceRecord: [1, 3, 6, 5, 14, 10],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [147]
    {
        prize: 3,
        numPegs: 3,
        startX: 269.244,
        bounceRecord: [1, 4, 13],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [148]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.53,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [149]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.47,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [150]
    {
        prize: 6,
        numPegs: 4,
        startX: 271.614,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [151]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.74,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [152]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.64,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [153]
    {
        prize: 2,
        numPegs: 4,
        startX: 272.022,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [154]
    {
        prize: 6,
        numPegs: 4,
        startX: 272.344,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [155]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.73,
        bounceRecord: [1, 2, 4, 8, 9, 8],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [156]
    {
        prize: 6,
        numPegs: 3,
        startX: 272.21,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [157]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.184,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [158]
    {
        prize: 4,
        numPegs: 3,
        startX: 271.756,
        bounceRecord: [1, 6, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [159]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.598,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [160]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.412,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [161]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.05,
        bounceRecord: [1, 3, 5, 9, 10],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [162]
    {
        prize: 2,
        numPegs: 3,
        startX: 271.752,
        bounceRecord: [1, 6, 13],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [163]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.492,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [164]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.88,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [165]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.864,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [166]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.812,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [167]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.732,
        bounceRecord: [1, 6, 5, 14, 15],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [168]
    {
        prize: 1,
        numPegs: 5,
        startX: 269.256,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [169]
    {
        prize: 3,
        numPegs: 7,
        startX: 271.942,
        bounceRecord: [1, 3, 5, 4, 13, 8, 13],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [170]
    {
        prize: 6,
        numPegs: 5,
        startX: 271.74,
        bounceRecord: [1, 6, 5, 14, 15],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [171]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.824,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [172]
    {
        prize: 3,
        numPegs: 6,
        startX: 272.25,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [173]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.392,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [174]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.616,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [175]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.104,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [176]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.896,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [177]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.104,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [178]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.1,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [179]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.652,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [180]
    {
        prize: 1,
        numPegs: 4,
        startX: 268.838,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [181]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.53,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [182]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.386,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [183]
    {
        prize: 4,
        numPegs: 3,
        startX: 268.706,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [184]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.85,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [185]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.128,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [186]
    {
        prize: 4,
        numPegs: 7,
        startX: 271.924,
        bounceRecord: [1, 3, 5, 4, 8, 13, 14],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [187]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.116,
        bounceRecord: [1, 2, 9, 5, 9, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [188]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.234,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [189]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.84,
        bounceRecord: [1, 3, 8, 5, 8, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [190]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.934,
        bounceRecord: [1, 2, 5, 8, 9],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [191]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.864,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [192]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.902,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [193]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.098,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [194]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.038,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [195]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.72,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [196]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.586,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [197]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.586,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [198]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.142,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [199]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.698,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [200]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.824,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [201]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.868,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [202]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.868,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [203]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.984,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [204]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.7,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [205]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.258,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [206]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.35,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [207]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.504,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [208]
    {
        prize: 5,
        numPegs: 4,
        startX: 269.006,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [209]
    {
        prize: 2,
        numPegs: 4,
        startX: 269.39,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [210]
    {
        prize: 2,
        numPegs: 3,
        startX: 272.016,
        bounceRecord: [1, 3, 5],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [211]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.55,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [212]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.292,
        bounceRecord: [1, 3, 6, 9, 10],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [213]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.864,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [214]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.47,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [215]
    {
        prize: 2,
        numPegs: 4,
        startX: 271.976,
        bounceRecord: [1, 3, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [216]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.684,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [217]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.012,
        bounceRecord: [1, 2, 5, 9, 10, 14],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [218]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.93,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [219]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.688,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [220]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.886,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [221]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.228,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [222]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.89,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [223]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.94,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [224]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.798,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [225]
    {
        prize: 4,
        numPegs: 3,
        startX: 268.704,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [226]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.74,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [227]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.654,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [228]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.844,
        bounceRecord: [1, 3, 8, 5, 8, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [229]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.976,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [230]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.87,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [231]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.108,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [232]
    {
        prize: 3,
        numPegs: 5,
        startX: 271.906,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [233]
    {
        prize: 3,
        numPegs: 5,
        startX: 271.944,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [234]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.004,
        bounceRecord: [1, 2, 5, 9, 14, 15],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [235]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.094,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [236]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.442,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [237]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.196,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [238]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.06,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [239]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.358,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [240]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.774,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [241]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.602,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
    },
    // [242]
    {
        prize: 1,
        numPegs: 4,
        startX: 268.904,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [243]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.998,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [244]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.464,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [245]
    {
        prize: 2,
        numPegs: 6,
        startX: 271.77,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [246]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.076,
        bounceRecord: [1, 3, 5, 9, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [247]
    {
        prize: 2,
        numPegs: 5,
        startX: 268.944,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [248]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.128,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [249]
    {
        prize: 2,
        numPegs: 3,
        startX: 271.798,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [250]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.582,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [251]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.88,
        bounceRecord: [1, 3, 8, 5, 8, 9],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [252]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.066,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [253]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.772,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [254]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.6,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [255]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.246,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [256]
    {
        prize: 1,
        numPegs: 5,
        startX: 269.256,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [257]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.728,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [258]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.802,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [259]
    {
        prize: 3,
        numPegs: 6,
        startX: 272.27,
        bounceRecord: [1, 3, 6, 9, 8, 9],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [260]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.068,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [261]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.066,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [262]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.828,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [263]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.35,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [264]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.21,
        bounceRecord: [1, 2, 9, 14, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [265]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.864,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [266]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.122,
        bounceRecord: [1, 2, 9, 5, 9, 8],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [267]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.058,
        bounceRecord: [1, 3, 5, 14, 9, 14],
        randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [268]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.79,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [269]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.746,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [270]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.036,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [271]
    {
        prize: 6,
        numPegs: 5,
        startX: 272.37,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [272]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.872,
        bounceRecord: [1, 3, 8, 5, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [273]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.736,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [274]
    {
        prize: 1,
        numPegs: 4,
        startX: 268.842,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [275]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.784,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [276]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.402,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [277]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.284,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [278]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.55,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [279]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.148,
        bounceRecord: [1, 2, 9, 5, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [280]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.934,
        bounceRecord: [1, 2, 5, 8, 9],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [281]
    {
        prize: 5,
        numPegs: 4,
        startX: 269.026,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [282]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.824,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [283]
    {
        prize: 4,
        numPegs: 4,
        startX: 271.588,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [284]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.368,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [285]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.696,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [286]
    {
        prize: 3,
        numPegs: 7,
        startX: 269.05,
        bounceRecord: [1, 2, 5, 6, 13, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [287]
    {
        prize: 3,
        numPegs: 7,
        startX: 268.548,
        bounceRecord: [1, 2, 7, 4, 7, 12, 13],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [288]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.066,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [289]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.774,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [290]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.158,
        bounceRecord: [1, 2, 9, 5, 9, 13],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [291]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.238,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [292]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.096,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [293]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.326,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [294]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.874,
        bounceRecord: [1, 3, 8, 5, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [295]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.35,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [296]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.128,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [297]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.89,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [298]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.202,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [299]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.802,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [300]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.916,
        bounceRecord: [1, 3, 5, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [301]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.492,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [302]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.16,
        bounceRecord: [1, 2, 9, 5, 9, 13],
        randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [303]
    {
        prize: 6,
        numPegs: 4,
        startX: 271.596,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [304]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.17,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [305]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.434,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [306]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.434,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [307]
    {
        prize: 6,
        numPegs: 4,
        startX: 272.158,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [308]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.146,
        bounceRecord: [1, 2, 9, 5, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [309]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.516,
        bounceRecord: [1, 3, 5, 9, 10],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [310]
    {
        prize: 3,
        numPegs: 4,
        startX: 271.782,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [311]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.602,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [312]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.36,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [313]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.122,
        bounceRecord: [1, 2, 9, 5, 9, 8],
        randomDirections: [1, -1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [314]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.684,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [315]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.138,
        bounceRecord: [1, 2, 9, 5, 9],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [316]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.108,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [317]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.762,
        bounceRecord: [1, 2, 4, 5],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [318]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.122,
        bounceRecord: [1, 2, 9, 5, 9, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [319]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.042,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [320]
    {
        prize: 6,
        numPegs: 4,
        startX: 271.596,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [321]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.01,
        bounceRecord: [1, 2, 5, 9, 10, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [322]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.248,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [323]
    {
        prize: 4,
        numPegs: 7,
        startX: 271.95,
        bounceRecord: [1, 3, 5, 4, 13, 9, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [324]
    {
        prize: 3,
        numPegs: 3,
        startX: 269.242,
        bounceRecord: [1, 4, 13],
        randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [325]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.034,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [326]
    {
        prize: 3,
        numPegs: 7,
        startX: 269.102,
        bounceRecord: [1, 2, 5, 6, 13, 8, 13],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [327]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.086,
        bounceRecord: [1, 2, 5, 6, 9, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [328]
    {
        prize: 3,
        numPegs: 3,
        startX: 272.296,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [329]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.56,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [330]
    {
        prize: 1,
        numPegs: 5,
        startX: 268.662,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [331]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.914,
        bounceRecord: [1, 3, 5, 4, 8, 13],
        randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [332]
    {
        prize: 2,
        numPegs: 5,
        startX: 269.274,
        bounceRecord: [1, 4, 5, 12, 11],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [333]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.096,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [334]
    {
        prize: 6,
        numPegs: 4,
        startX: 272.162,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [335]
    {
        prize: 5,
        numPegs: 4,
        startX: 269.026,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [336]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.98,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [337]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.098,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [338]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.006,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [339]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.2,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [340]
    {
        prize: 2,
        numPegs: 6,
        startX: 271.852,
        bounceRecord: [1, 3, 8, 5, 8, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [341]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.394,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [342]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.368,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [343]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.07,
        bounceRecord: [1, 3, 5, 9, 10, 9],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [344]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.93,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [345]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.922,
        bounceRecord: [1, 3, 5, 4, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [346]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.244,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [347]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.738,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [348]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.86,
        bounceRecord: [1, 3, 8, 5, 8, 13],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [349]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.726,
        bounceRecord: [1, 2, 4, 8, 13, 14],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [350]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.934,
        bounceRecord: [1, 2, 5, 8, 9],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [351]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.248,
        bounceRecord: [1, 3, 6, 5],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [352]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.104,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [353]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.746,
        bounceRecord: [1, 6, 5, 14, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [354]
    {
        prize: 2,
        numPegs: 4,
        startX: 269.39,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [355]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.384,
        bounceRecord: [1, 3, 6, 15, 10, 15],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [356]
    {
        prize: 3,
        numPegs: 4,
        startX: 272.142,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [357]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.222,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [358]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.598,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [359]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.118,
        bounceRecord: [1, 2, 9, 5, 9, 8],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [360]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.368,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [361]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.57,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [362]
    {
        prize: 1,
        numPegs: 4,
        startX: 268.91,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [363]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.394,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [364]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.99,
        bounceRecord: [1, 3, 5, 8, 7, 12],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [365]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.258,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [366]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.006,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [367]
    {
        prize: 5,
        numPegs: 4,
        startX: 269.026,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [368]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.79,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [369]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.076,
        bounceRecord: [1, 3, 5, 9, 10, 14],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [370]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.38,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [371]
    {
        prize: 5,
        numPegs: 5,
        startX: 272.134,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [372]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.426,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [373]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.726,
        bounceRecord: [1, 6, 5, 14, 15],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [374]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.904,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [375]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.756,
        bounceRecord: [1, 2, 4, 5],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [376]
    {
        prize: 3,
        numPegs: 5,
        startX: 271.79,
        bounceRecord: [1, 3, 8, 12, 13],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [377]
    {
        prize: 3,
        numPegs: 4,
        startX: 269.036,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [378]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.868,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [379]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.8,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [380]
    {
        prize: 5,
        numPegs: 6,
        startX: 271.606,
        bounceRecord: [1, 3, 6, 15, 10, 15],
        randomDirections: [-1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [381]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.7,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    }
];