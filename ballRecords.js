
////////////////////////////////////////////////////////////
// gravity = 0.04
// x_dampener = 0.5
// y_dampener = 0.5
// dxLim = 0.02
////////////////////////////////////////////////////////////

//Counts: (0)141 (1)154 (2)217 (3)219 (4)133 (5)136 (6)0  = 1000

let ballRecords = [
    // [0]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.832,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [1]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.658,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [2]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.342,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [3]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.836,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [4]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.844,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [5]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.152,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [6]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.154,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [7]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.182,
        bounceRecord: [1, 3, 10, 6],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [8]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.34,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [9]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.852,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [10]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.85,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [11]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.67,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [12]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.672,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [13]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.67,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [14]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.324,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [15]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.68,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [16]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.698,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [17]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.696,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [18]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.704,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [19]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.722,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [20]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.564,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [21]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.518,
        bounceRecord: [1, 4, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [22]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.428,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [23]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.486,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [24]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.488,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [25]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.484,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [26]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.5,
        bounceRecord: [1, 2, 3, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [27]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.5,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [28]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.2,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [29]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.888,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [30]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.454,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [31]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [32]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.618,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [33]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.618,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [34]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.246,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [35]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.64,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [36]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.408,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [37]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.694,
        bounceRecord: [1, 3, 5, 8, 7],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [38]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.306,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [39]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.13,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [40]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.274,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [41]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.558,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [42]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.736,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [43]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.254,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [44]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.296,
        bounceRecord: [1, 2, 5, 14, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [45]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.438,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [46]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.5,
        bounceRecord: [1, 4, 8, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [47]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.438,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [48]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.65,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [49]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.568,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [50]
    {
        prize: 5,
        numPegs: 6,
        startX: 263.004,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [51]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.596,
        bounceRecord: [1, 2, 11, 12],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [52]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.312,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [53]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.648,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [54]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.36,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [55]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.356,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [56]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.022,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [57]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.338,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [58]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.98,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [59]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.98,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [60]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.008,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [61]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.052,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [62]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.948,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [63]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.508,
        bounceRecord: [1, 4, 8, 13, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [64]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.964,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [65]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.204,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [66]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.428,
        bounceRecord: [1, 2, 9, 14, 13],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [67]
    {
        prize: 3,
        numPegs: 6,
        startX: 266.45,
        bounceRecord: [1, 6, 3, 6, 9, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [68]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.01,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [69]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.21,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [70]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.758,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [71]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.414,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [72]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.586,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [73]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.414,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [74]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.118,
        bounceRecord: [1, 3, 6, 15, 10, 15],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [75]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [76]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.414,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [77]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.52,
        bounceRecord: [1, 3, 8, 4, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [78]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.712,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [79]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.764,
        bounceRecord: [1, 3, 5, 8, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [80]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.786,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [81]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [82]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.878,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [83]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.86,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [84]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.154,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [85]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.934,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [86]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.934,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [87]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.11,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [88]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.01,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [89]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.89,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [90]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.372,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [91]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.92,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [92]
    {
        prize: 1,
        numPegs: 4,
        startX: 265.51,
        bounceRecord: [1, 3, 8, 7],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [93]
    {
        prize: 6,
        numPegs: 4,
        startX: 263.49,
        bounceRecord: [1, 2, 9, 10],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [94]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.946,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [95]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.482,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [96]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.94,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [97]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.94,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [98]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.624,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [99]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.716,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [100]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.962,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [101]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.466,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [102]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.604,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [103]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.196,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [104]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.128,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [105]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.72,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [106]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.432,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [107]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.406,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [108]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.584,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [109]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.142,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [110]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.392,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [111]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.258,
        bounceRecord: [1, 2, 5, 8, 9],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [112]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.704,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [113]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.644,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [114]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.01,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [115]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.77,
        bounceRecord: [1, 3, 12, 8, 12],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [116]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.108,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [117]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.522,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [118]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.576,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [119]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.582,
        bounceRecord: [1, 3, 8, 12, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [120]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.654,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [121]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.298,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [122]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.928,
        bounceRecord: [1, 3, 6, 15, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [123]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.486,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [124]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.354,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [125]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.048,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [126]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.038,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [127]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.59,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [128]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.99,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [129]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.998,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [130]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.96,
        bounceRecord: [1, 2, 4, 8, 7],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [131]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.534,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [132]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.522,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [133]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.986,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [134]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.386,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [135]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.456,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [136]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.444,
        bounceRecord: [1, 6, 3, 6, 9, 13],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [137]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [138]
    {
        prize: 5,
        numPegs: 6,
        startX: 265.994,
        bounceRecord: [1, 3, 6, 5, 14, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [139]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [140]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [141]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [142]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.25,
        bounceRecord: [1, 3, 10, 15, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [143]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.558,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [144]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.524,
        bounceRecord: [1, 3, 8, 4, 12, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [145]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.658,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [146]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.008,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [147]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.14,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [148]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.568,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [149]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.106,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [150]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.65,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [151]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.438,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [152]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.826,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [153]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.038,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [154]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.506,
        bounceRecord: [1, 4, 8, 13, 14],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [155]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.094,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [156]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.104,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [157]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.768,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [158]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.032,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [159]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.612,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [160]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.572,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [161]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.976,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [162]
    {
        prize: 2,
        numPegs: 3,
        startX: 265.806,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [163]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.924,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [164]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.964,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [165]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.76,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [166]
    {
        prize: 4,
        numPegs: 7,
        startX: 263.304,
        bounceRecord: [1, 2, 5, 9, 10, 14, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [167]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.504,
        bounceRecord: [1, 4, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [168]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.976,
        bounceRecord: [1, 3, 6, 5, 14, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [169]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.936,
        bounceRecord: [1, 2, 4, 11, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [170]
    {
        prize: 4,
        numPegs: 7,
        startX: 265.82,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [171]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.654,
        bounceRecord: [1, 3, 5, 4, 13, 8, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [172]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.842,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [173]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.574,
        bounceRecord: [1, 3, 8, 12, 13],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [174]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.764,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [175]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.978,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [176]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.778,
        bounceRecord: [1, 2, 7, 12, 11],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [177]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.056,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [178]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.894,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [179]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.912,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [180]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.044,
        bounceRecord: [1, 3, 6, 13, 12],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [181]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.59,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [182]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.966,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [183]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.4,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [184]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.488,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [185]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.766,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [186]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.248,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [187]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.1,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [188]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.592,
        bounceRecord: [1, 3, 8, 12, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [189]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.004,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [190]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.012,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [191]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.294,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [192]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.924,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [193]
    {
        prize: 4,
        numPegs: 7,
        startX: 265.82,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [194]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [195]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.708,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [196]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.498,
        bounceRecord: [1, 2, 3, 8],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [197]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.808,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [198]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.654,
        bounceRecord: [1, 3, 5, 4, 13, 8, 13],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [199]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.302,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [200]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.324,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [201]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.172,
        bounceRecord: [1, 3, 10, 6, 14, 15],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [202]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [203]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.836,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [204]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.69,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [205]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.844,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [206]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.29,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [207]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.518,
        bounceRecord: [1, 4, 8],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [208]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.838,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [209]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.31,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [210]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.798,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [211]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.532,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [212]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.134,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [213]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.618,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [214]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.598,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [215]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.564,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [216]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.314,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [217]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.278,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [218]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.75,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [219]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.002,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [220]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.892,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [221]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.728,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [222]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.458,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [223]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.744,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [224]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.312,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [225]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.076,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [226]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.128,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [227]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.352,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [228]
    {
        prize: 3,
        numPegs: 6,
        startX: 266,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [229]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.002,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [230]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.846,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [231]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.85,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [232]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.936,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [233]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.958,
        bounceRecord: [1, 2, 4, 8, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [234]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.476,
        bounceRecord: [1, 2, 9, 6, 14, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [235]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.692,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [236]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.644,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [237]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.994,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [238]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.944,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [239]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.786,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [240]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.79,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [241]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.824,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [242]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.864,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [243]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.166,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [244]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.978,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [245]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.964,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [246]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.54,
        bounceRecord: [1, 4, 8, 9, 13, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [247]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.206,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [248]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.712,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [249]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.35,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [250]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.946,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [251]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.33,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [252]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.38,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [253]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.522,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [254]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.548,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [255]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.104,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [256]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.076,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [257]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.536,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [258]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.852,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [259]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.926,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [260]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [261]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.442,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [262]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.768,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [263]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.46,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [264]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.018,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [265]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.708,
        bounceRecord: [1, 3, 5, 12],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [266]
    {
        prize: 3,
        numPegs: 7,
        startX: 266.446,
        bounceRecord: [1, 6, 3, 6, 9, 13, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [267]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.272,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [268]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.818,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [269]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.288,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [270]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.064,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [271]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.098,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [272]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.602,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [273]
    {
        prize: 6,
        numPegs: 4,
        startX: 263.49,
        bounceRecord: [1, 2, 9, 10],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [274]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.404,
        bounceRecord: [1, 3, 15, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [275]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.124,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [276]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.16,
        bounceRecord: [1, 2, 4, 8, 13, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [277]
    {
        prize: 1,
        numPegs: 5,
        startX: 265.722,
        bounceRecord: [1, 3, 5, 12, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [278]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.63,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [279]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.372,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [280]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.428,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [281]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.932,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [282]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.832,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [283]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.878,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [284]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.132,
        bounceRecord: [1, 2, 4, 8, 13, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [285]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.398,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [286]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.94,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [287]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.584,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [288]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.894,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [289]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.926,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [290]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.294,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [291]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.954,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [292]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.048,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [293]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.002,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [294]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.586,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [295]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.698,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [296]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.34,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [297]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.418,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [298]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.444,
        bounceRecord: [1, 6, 3, 6, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [299]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.834,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [300]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.976,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [301]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [302]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.082,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [303]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.212,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [304]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [305]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.85,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [306]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.46,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [307]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.76,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [308]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.624,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [309]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.336,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [310]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.282,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [311]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.53,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [312]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.248,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [313]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.366,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [314]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.54,
        bounceRecord: [1, 4, 8, 9, 13, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [315]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.556,
        bounceRecord: [1, 4, 2, 4, 8, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [316]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [317]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.148,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [318]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.57,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [319]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.768,
        bounceRecord: [1, 3, 12, 8],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [320]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [321]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.622,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [322]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.792,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [323]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.886,
        bounceRecord: [1, 2, 4, 11, 7],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [324]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.822,
        bounceRecord: [1, 2, 7, 4],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [325]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.678,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [326]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.61,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [327]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.54,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [328]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.552,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [329]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.272,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [330]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.188,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [331]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.614,
        bounceRecord: [1, 3, 8, 13, 12],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [332]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.362,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [333]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.74,
        bounceRecord: [1, 3, 5, 14, 9, 14],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [334]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.698,
        bounceRecord: [1, 3, 8, 5, 13, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [335]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.394,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [336]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.088,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [337]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.222,
        bounceRecord: [1, 3, 10, 14, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [338]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.884,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [339]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.778,
        bounceRecord: [1, 2, 7, 12, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [340]
    {
        prize: 5,
        numPegs: 7,
        startX: 263.346,
        bounceRecord: [1, 2, 5, 6, 13, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [341]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.958,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [342]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.194,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [343]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.664,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [344]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.406,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [345]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.074,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [346]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.89,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [347]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.704,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [348]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.024,
        bounceRecord: [1, 2, 4, 5, 12, 8],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [349]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.128,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [350]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.23,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [351]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.92,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [352]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.918,
        bounceRecord: [1, 3, 6, 9, 14, 13],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [353]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.754,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [354]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.68,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [355]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.4,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [356]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.062,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [357]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.224,
        bounceRecord: [1, 3, 10, 14, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [358]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.482,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [359]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.168,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [360]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.064,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [361]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.828,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [362]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.796,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [363]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.962,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [364]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.202,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [365]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.316,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [366]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.384,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [367]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.134,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [368]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.748,
        bounceRecord: [1, 2, 7, 11, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [369]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.126,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [370]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.916,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [371]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.27,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [372]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.566,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [373]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.38,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [374]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.252,
        bounceRecord: [1, 2, 5, 8, 13, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [375]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.488,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [376]
    {
        prize: 5,
        numPegs: 7,
        startX: 263.458,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [377]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.246,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [378]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.32,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [379]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.226,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [380]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.778,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [381]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.23,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [382]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.7,
        bounceRecord: [1, 3, 8, 5],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [383]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.844,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [384]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.166,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [385]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.072,
        bounceRecord: [1, 2, 4, 11, 7],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [386]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.776,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [387]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.322,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [388]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.404,
        bounceRecord: [1, 3, 15, 14],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [389]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.926,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [390]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.52,
        bounceRecord: [1, 3, 8, 4, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [391]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.114,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [392]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.898,
        bounceRecord: [1, 3, 6, 13, 8],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [393]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [394]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.246,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [395]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.516,
        bounceRecord: [1, 3, 8, 7, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [396]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.022,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [397]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.78,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [398]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.976,
        bounceRecord: [1, 3, 6, 5, 14, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [399]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.868,
        bounceRecord: [1, 3, 6, 9, 13, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [400]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.536,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [401]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.442,
        bounceRecord: [1, 6, 13, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [402]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.816,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [403]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.474,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [404]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.222,
        bounceRecord: [1, 3, 10, 14, 15],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [405]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.158,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [406]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.976,
        bounceRecord: [1, 3, 6, 5, 14, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [407]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.472,
        bounceRecord: [1, 2, 9, 6],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [408]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.062,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [409]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.7,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [410]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.916,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [411]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.504,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [412]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.11,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [413]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.174,
        bounceRecord: [1, 3, 10, 6, 14, 15],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [414]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.956,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [415]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.128,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [416]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.034,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [417]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.258,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [418]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.112,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [419]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.972,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [420]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.112,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [421]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.752,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [422]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.39,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [423]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.96,
        bounceRecord: [1, 2, 4, 8, 7],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [424]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [425]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.408,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [426]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.608,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [427]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.876,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [428]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.276,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [429]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.31,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [430]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.342,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [431]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.434,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [432]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.314,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [433]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.436,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [434]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.328,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [435]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.22,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [436]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.668,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [437]
    {
        prize: 5,
        numPegs: 7,
        startX: 263.456,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [438]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.036,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [439]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.13,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [440]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.484,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [441]
    {
        prize: 3,
        numPegs: 6,
        startX: 266.448,
        bounceRecord: [1, 6, 3, 6, 9, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [442]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.932,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [443]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.106,
        bounceRecord: [1, 2, 4, 7, 12, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [444]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.662,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [445]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.428,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [446]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.538,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [447]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.984,
        bounceRecord: [1, 2, 4, 13, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [448]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.422,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [449]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.582,
        bounceRecord: [1, 3, 8, 12, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [450]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.022,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [451]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.058,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [452]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.19,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [453]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.316,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [454]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.07,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [455]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.944,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [456]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.43,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [457]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.052,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [458]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.726,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [459]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.982,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [460]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.684,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [461]
    {
        prize: 1,
        numPegs: 5,
        startX: 265.702,
        bounceRecord: [1, 3, 5, 12, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [462]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.464,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [463]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.182,
        bounceRecord: [1, 3, 10, 6],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [464]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.434,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [465]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.07,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [466]
    {
        prize: 3,
        numPegs: 7,
        startX: 262.982,
        bounceRecord: [1, 2, 4, 8, 9, 13, 12],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [467]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.104,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [468]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.248,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [469]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.482,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [470]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.554,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [471]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.368,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [472]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.904,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [473]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.28,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [474]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [475]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.778,
        bounceRecord: [1, 3, 8, 9],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [476]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.672,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [477]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.472,
        bounceRecord: [1, 2, 9, 6],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [478]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.278,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [479]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.224,
        bounceRecord: [1, 3, 10, 14, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [480]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.404,
        bounceRecord: [1, 3, 15, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [481]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.626,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [482]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.766,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [483]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.154,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [484]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.654,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [485]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.044,
        bounceRecord: [1, 3, 6, 13, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [486]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.38,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [487]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [488]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.232,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [489]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [490]
    {
        prize: 1,
        numPegs: 4,
        startX: 265.51,
        bounceRecord: [1, 3, 8, 7],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [491]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.854,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [492]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.194,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [493]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.018,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [494]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.344,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [495]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.706,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [496]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.332,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [497]
    {
        prize: 4,
        numPegs: 7,
        startX: 266.02,
        bounceRecord: [1, 3, 6, 9, 8, 13, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [498]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.336,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [499]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.846,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [500]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.17,
        bounceRecord: [1, 3, 10, 6, 14, 15],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [501]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.732,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [502]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.544,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [503]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.484,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [504]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [505]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.946,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [506]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.818,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [507]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.092,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [508]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.166,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [509]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.328,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [510]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.604,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [511]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.364,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [512]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.286,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [513]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.974,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [514]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [515]
    {
        prize: 4,
        numPegs: 6,
        startX: 262.552,
        bounceRecord: [1, 4, 2, 4, 8, 13],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [516]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.822,
        bounceRecord: [1, 3, 5, 14, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [517]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.42,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [518]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.528,
        bounceRecord: [1, 3, 8, 4],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [519]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.816,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [520]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.44,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [521]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.516,
        bounceRecord: [1, 3, 8, 7, 12],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [522]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.98,
        bounceRecord: [1, 3, 6, 5, 14],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [523]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.132,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [524]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [525]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.926,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [526]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.22,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [527]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.11,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [528]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.902,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [529]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.258,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [530]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.83,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [531]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.61,
        bounceRecord: [1, 3, 8, 13, 12],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [532]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.99,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [533]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.242,
        bounceRecord: [1, 2, 5, 4, 13],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [534]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.492,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [535]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.008,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [536]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.784,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [537]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.594,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [538]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.5,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [539]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.234,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [540]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.01,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [541]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.96,
        bounceRecord: [1, 2, 4, 8, 7],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [542]
    {
        prize: 5,
        numPegs: 7,
        startX: 263.346,
        bounceRecord: [1, 2, 5, 6, 13, 9, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [543]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.44,
        bounceRecord: [1, 6, 13, 9],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [544]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.44,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [545]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.44,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [546]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.644,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [547]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.75,
        bounceRecord: [1, 2, 7, 11, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [548]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.998,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [549]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.338,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [550]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.632,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [551]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.32,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [552]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.12,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [553]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.406,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [554]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [555]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.326,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [556]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.538,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [557]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [558]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.628,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [559]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.534,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [560]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.17,
        bounceRecord: [1, 3, 10, 6, 14, 15],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [561]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.12,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [562]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.59,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [563]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.608,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [564]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [565]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.956,
        bounceRecord: [1, 2, 4, 13, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [566]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.034,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [567]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [568]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.986,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [569]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.56,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [570]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.36,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [571]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.78,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [572]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.376,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [573]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.116,
        bounceRecord: [1, 3, 6, 15, 10, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [574]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.086,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [575]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.05,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [576]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.578,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [577]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.812,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [578]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.466,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [579]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.928,
        bounceRecord: [1, 3, 6, 15, 10],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [580]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.422,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [581]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.066,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [582]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.04,
        bounceRecord: [1, 3, 6, 9, 10],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [583]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.148,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [584]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.376,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [585]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.208,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [586]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.586,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [587]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.586,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [588]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.546,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [589]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.438,
        bounceRecord: [1, 6, 13, 9],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [590]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.824,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [591]
    {
        prize: 4,
        numPegs: 7,
        startX: 263.304,
        bounceRecord: [1, 2, 5, 9, 10, 14, 13],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [592]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.18,
        bounceRecord: [1, 3, 10, 6],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [593]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.22,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [594]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.07,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [595]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.902,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [596]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [597]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.83,
        bounceRecord: [1, 2, 7, 4, 12, 11],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [598]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.1,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [599]
    {
        prize: 4,
        numPegs: 3,
        startX: 262.514,
        bounceRecord: [1, 4, 8],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [600]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.488,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [601]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.95,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [602]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.23,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [603]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.056,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [604]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.48,
        bounceRecord: [1, 2, 9, 6, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [605]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.058,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [606]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.436,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [607]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [608]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.616,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [609]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.832,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [610]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.894,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [611]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.092,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [612]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.464,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [613]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [614]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.082,
        bounceRecord: [1, 2, 4, 8, 12, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [615]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.794,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [616]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.632,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [617]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.428,
        bounceRecord: [1, 2, 9, 14, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [618]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.828,
        bounceRecord: [1, 3, 10, 14, 13],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [619]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.276,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [620]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.488,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [621]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.288,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [622]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.428,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [623]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.554,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [624]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.886,
        bounceRecord: [1, 2, 4, 11, 7],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [625]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.122,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [626]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.63,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [627]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.04,
        bounceRecord: [1, 3, 6, 9, 10],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [628]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.716,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [629]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.27,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [630]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.852,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [631]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.084,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [632]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.652,
        bounceRecord: [1, 3, 5, 4, 13, 12],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [633]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.714,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [634]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.326,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [635]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.544,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [636]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.256,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [637]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.876,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [638]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.544,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [639]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.722,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [640]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.378,
        bounceRecord: [1, 3, 15, 10],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [641]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.606,
        bounceRecord: [1, 3, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [642]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.688,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [643]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.458,
        bounceRecord: [1, 6, 3, 6, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [644]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.668,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [645]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.788,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [646]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.082,
        bounceRecord: [1, 2, 4, 8, 12, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [647]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.89,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [648]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.012,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [649]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [650]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.872,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [651]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.292,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [652]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.106,
        bounceRecord: [1, 2, 4, 7, 12, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [653]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.37,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [654]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.96,
        bounceRecord: [1, 2, 4, 8, 7],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [655]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.824,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [656]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [657]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.32,
        bounceRecord: [1, 2, 5, 6, 13, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [658]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.918,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [659]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.48,
        bounceRecord: [1, 2, 9, 6, 14],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [660]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.88,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [661]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.796,
        bounceRecord: [1, 3, 5, 14, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [662]
    {
        prize: 3,
        numPegs: 4,
        startX: 266.064,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [663]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.804,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [664]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.254,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [665]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.752,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [666]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.43,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [667]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.796,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [668]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.84,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [669]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.626,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [670]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.264,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [671]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [672]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.99,
        bounceRecord: [1, 2, 4, 13, 8, 13],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [673]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.66,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [674]
    {
        prize: 3,
        numPegs: 6,
        startX: 262.908,
        bounceRecord: [1, 2, 4, 7, 12, 13],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [675]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.108,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [676]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.31,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [677]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.074,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [678]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.58,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [679]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.35,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [680]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.804,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [681]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.022,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [682]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.77,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [683]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.062,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [684]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.202,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [685]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.536,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [686]
    {
        prize: 3,
        numPegs: 7,
        startX: 263.18,
        bounceRecord: [1, 2, 5, 8, 7, 12, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [687]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.702,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [688]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.328,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [689]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.894,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [690]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.048,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [691]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.504,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [692]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.324,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [693]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.476,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [694]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.674,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [695]
    {
        prize: 2,
        numPegs: 3,
        startX: 265.576,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [696]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.09,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [697]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.63,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [698]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.792,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [699]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.386,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [700]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.43,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [701]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.36,
        bounceRecord: [1, 2, 5, 6, 9, 8],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [702]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.796,
        bounceRecord: [1, 3, 5, 14, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [703]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.42,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [704]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.366,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [705]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.412,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [706]
    {
        prize: 4,
        numPegs: 7,
        startX: 265.82,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [707]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.486,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [708]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.538,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [709]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.18,
        bounceRecord: [1, 3, 10, 6],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [710]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.798,
        bounceRecord: [1, 3, 5, 14],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [711]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.468,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [712]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.776,
        bounceRecord: [1, 2, 7, 12, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [713]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.576,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [714]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.738,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [715]
    {
        prize: 3,
        numPegs: 7,
        startX: 262.982,
        bounceRecord: [1, 2, 4, 8, 9, 13, 12],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [716]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.814,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [717]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.86,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [718]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.332,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [719]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.836,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [720]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.916,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [721]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.712,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [722]
    {
        prize: 5,
        numPegs: 6,
        startX: 266.208,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [723]
    {
        prize: 2,
        numPegs: 3,
        startX: 265.578,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [724]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.194,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [725]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.528,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [726]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.764,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [727]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.236,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [728]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [729]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.308,
        bounceRecord: [1, 2, 5, 14, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [730]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.368,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [731]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.634,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [732]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.338,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [733]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.152,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [734]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.092,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [735]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.374,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [736]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.112,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [737]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.926,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [738]
    {
        prize: 1,
        numPegs: 4,
        startX: 265.51,
        bounceRecord: [1, 3, 8, 7],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [739]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.828,
        bounceRecord: [1, 3, 10, 14, 13],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [740]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.854,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [741]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.308,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [742]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [743]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.074,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [744]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [745]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.562,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [746]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.22,
        bounceRecord: [1, 2, 5, 6, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [747]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.764,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [748]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.59,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [749]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.572,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [750]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.926,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [751]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.054,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [752]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.142,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [753]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.376,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [754]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.566,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [755]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.182,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [756]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.786,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [757]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.592,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [758]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.69,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [759]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.712,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [760]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.782,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [761]
    {
        prize: 4,
        numPegs: 6,
        startX: 263,
        bounceRecord: [1, 2, 4, 13, 9, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [762]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.254,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [763]
    {
        prize: 3,
        numPegs: 6,
        startX: 263.106,
        bounceRecord: [1, 2, 4, 7, 12, 13],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [764]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.104,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [765]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.612,
        bounceRecord: [1, 3, 8, 13, 12],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [766]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.564,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [767]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.262,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [768]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.29,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [769]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.762,
        bounceRecord: [1, 2, 7, 11, 12],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [770]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.332,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [771]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.276,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [772]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.686,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [773]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.94,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [774]
    {
        prize: 4,
        numPegs: 3,
        startX: 266.228,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [775]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.008,
        bounceRecord: [1, 2, 4, 5, 12],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [776]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.476,
        bounceRecord: [1, 2, 9, 6, 14, 13],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [777]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.792,
        bounceRecord: [1, 3, 5, 9, 14],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [778]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.732,
        bounceRecord: [1, 3, 5, 14, 13],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [779]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.102,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [780]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.288,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [781]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.872,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [782]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.716,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [783]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.936,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [784]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.962,
        bounceRecord: [1, 3, 10, 14, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [785]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.498,
        bounceRecord: [1, 2, 3, 8],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [786]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.672,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [787]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.36,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [788]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.414,
        bounceRecord: [1, 2, 9, 14],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [789]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.13,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [790]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.318,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [791]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.906,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [792]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.7,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [793]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.048,
        bounceRecord: [1, 3, 6, 13, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [794]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.962,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [795]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.694,
        bounceRecord: [1, 3, 5, 8, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [796]
    {
        prize: 6,
        numPegs: 3,
        startX: 265.888,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [797]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.984,
        bounceRecord: [1, 2, 4, 13, 8],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [798]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.124,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [799]
    {
        prize: 2,
        numPegs: 6,
        startX: 262.882,
        bounceRecord: [1, 2, 4, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [800]
    {
        prize: 4,
        numPegs: 3,
        startX: 265.608,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [801]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.872,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [802]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.392,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [803]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.836,
        bounceRecord: [1, 3, 6, 13, 9, 13],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [804]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.008,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [805]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.28,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [806]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.174,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [807]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.744,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [808]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.232,
        bounceRecord: [1, 2, 14, 9],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [809]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.306,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [810]
    {
        prize: 3,
        numPegs: 7,
        startX: 266.446,
        bounceRecord: [1, 6, 3, 6, 9, 13, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [811]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.88,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [812]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.056,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [813]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.708,
        bounceRecord: [1, 3, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [814]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.218,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [815]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.896,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [816]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.07,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [817]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.316,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [818]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.392,
        bounceRecord: [1, 2, 9],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [819]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.252,
        bounceRecord: [1, 2, 5, 8, 13, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [820]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.384,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [821]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.604,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [822]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.714,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [823]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.394,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [824]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.632,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [825]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.07,
        bounceRecord: [1, 2, 4, 7, 12],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [826]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.978,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [827]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.498,
        bounceRecord: [1, 6, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [828]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.078,
        bounceRecord: [1, 2, 4, 13, 9],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [829]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.62,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [830]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.314,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [831]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.848,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [832]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.71,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [833]
    {
        prize: 2,
        numPegs: 4,
        startX: 263.206,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [834]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.062,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [835]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.596,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [836]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.662,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [837]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.258,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [838]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.472,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [839]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.24,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [840]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.774,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [841]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.392,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [842]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.594,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [843]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.304,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [844]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.418,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [845]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.466,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [846]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.95,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [847]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.2,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [848]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.5,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [849]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.436,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [850]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.386,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [851]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.75,
        bounceRecord: [1, 2, 7, 11, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [852]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.326,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [853]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.556,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [854]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.142,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [855]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.68,
        bounceRecord: [1, 3, 5, 4, 13, 14],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [856]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.426,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [857]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.092,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [858]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.33,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [859]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.486,
        bounceRecord: [1, 2, 9, 10, 14],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [860]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.722,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [861]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.244,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [862]
    {
        prize: 2,
        numPegs: 6,
        startX: 263.006,
        bounceRecord: [1, 2, 4, 5, 12, 11],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [863]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.336,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [864]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.926,
        bounceRecord: [1, 2, 4, 7, 11],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [865]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.424,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [866]
    {
        prize: 5,
        numPegs: 7,
        startX: 263.454,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [867]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.996,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [868]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.488,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [869]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.706,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [870]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.772,
        bounceRecord: [1, 3, 8, 12, 11],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [871]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.764,
        bounceRecord: [1, 3, 5, 8, 9],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [872]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.546,
        bounceRecord: [1, 3, 8, 4, 8, 12, 11],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [873]
    {
        prize: 6,
        numPegs: 4,
        startX: 265.856,
        bounceRecord: [1, 3, 6, 15],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [874]
    {
        prize: 6,
        numPegs: 4,
        startX: 266.082,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [875]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.58,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [876]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.626,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [877]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.868,
        bounceRecord: [1, 3, 6, 9, 13, 12],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [878]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.836,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [879]
    {
        prize: 4,
        numPegs: 6,
        startX: 266.46,
        bounceRecord: [1, 6, 9, 8, 13, 14],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [880]
    {
        prize: 5,
        numPegs: 5,
        startX: 265.892,
        bounceRecord: [1, 3, 6, 10, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [881]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.026,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [882]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.478,
        bounceRecord: [1, 2, 9, 6, 14, 13],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [883]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.198,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [884]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.676,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [885]
    {
        prize: 4,
        numPegs: 6,
        startX: 263.288,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [886]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.416,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [887]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.672,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [888]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.58,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [889]
    {
        prize: 2,
        numPegs: 5,
        startX: 263.06,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [890]
    {
        prize: 4,
        numPegs: 5,
        startX: 262.548,
        bounceRecord: [1, 4, 2, 4, 8],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [891]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.298,
        bounceRecord: [1, 3, 10],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [892]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.804,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [893]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.626,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [894]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.248,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [895]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.292,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [896]
    {
        prize: 3,
        numPegs: 6,
        startX: 266,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [897]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.684,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [898]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.692,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [899]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.234,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [900]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.638,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [901]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.73,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [902]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.904,
        bounceRecord: [1, 3, 6, 13],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [903]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.488,
        bounceRecord: [1, 6, 9],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [904]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.486,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [905]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.304,
        bounceRecord: [1, 3, 10],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [906]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.47,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [907]
    {
        prize: 3,
        numPegs: 3,
        startX: 266.484,
        bounceRecord: [1, 6, 9],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [908]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.068,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [909]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.386,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [910]
    {
        prize: 1,
        numPegs: 4,
        startX: 263.144,
        bounceRecord: [1, 2, 4, 11],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [911]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.578,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [912]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.422,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [913]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.886,
        bounceRecord: [1, 2, 4, 11, 7],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [914]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.528,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [915]
    {
        prize: 4,
        numPegs: 4,
        startX: 262.996,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [916]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.664,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [917]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.248,
        bounceRecord: [1, 2, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [918]
    {
        prize: 4,
        numPegs: 6,
        startX: 262.552,
        bounceRecord: [1, 4, 2, 4, 8, 13],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [919]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.846,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [920]
    {
        prize: 2,
        numPegs: 3,
        startX: 265.578,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [921]
    {
        prize: 4,
        numPegs: 6,
        startX: 265.84,
        bounceRecord: [1, 3, 6, 9, 13, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [922]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.494,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [923]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.4,
        bounceRecord: [1, 2, 9, 13],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [924]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.254,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [925]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.122,
        bounceRecord: [1, 2, 7, 4, 7],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [926]
    {
        prize: 5,
        numPegs: 4,
        startX: 263.188,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [927]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.088,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [928]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.72,
        bounceRecord: [1, 3, 5, 8, 12],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [929]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.758,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [930]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.65,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [931]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.07,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [932]
    {
        prize: 1,
        numPegs: 3,
        startX: 263.112,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [933]
    {
        prize: 2,
        numPegs: 7,
        startX: 265.654,
        bounceRecord: [1, 3, 5, 4, 13, 8, 13],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [934]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.398,
        bounceRecord: [1, 3, 15],
        randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [935]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.882,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [936]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.738,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [937]
    {
        prize: 1,
        numPegs: 5,
        startX: 262.616,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [938]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.264,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [939]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.614,
        bounceRecord: [1, 3, 8, 13, 12],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [940]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.66,
        bounceRecord: [1, 3, 5, 4, 13],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [941]
    {
        prize: 4,
        numPegs: 4,
        startX: 263.09,
        bounceRecord: [1, 2, 4, 8],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [942]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.204,
        bounceRecord: [1, 2, 5, 12, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [943]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.078,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [944]
    {
        prize: 2,
        numPegs: 5,
        startX: 265.538,
        bounceRecord: [1, 3, 8, 4, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [945]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.782,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [946]
    {
        prize: 3,
        numPegs: 4,
        startX: 263.036,
        bounceRecord: [1, 2, 7, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [947]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.756,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [948]
    {
        prize: 5,
        numPegs: 3,
        startX: 263.42,
        bounceRecord: [1, 2, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [949]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.852,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [950]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.624,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [951]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.912,
        bounceRecord: [1, 2, 4, 7, 8],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [952]
    {
        prize: 3,
        numPegs: 5,
        startX: 265.69,
        bounceRecord: [1, 3, 5, 12, 13],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [953]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.994,
        bounceRecord: [1, 2, 4, 13],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [954]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.09,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [955]
    {
        prize: 5,
        numPegs: 6,
        startX: 263.45,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [956]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.864,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [957]
    {
        prize: 5,
        numPegs: 5,
        startX: 266.094,
        bounceRecord: [1, 3, 6, 10, 14],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [958]
    {
        prize: 6,
        numPegs: 5,
        startX: 263.278,
        bounceRecord: [1, 2, 5, 14, 15],
        randomDirections: [1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [959]
    {
        prize: 2,
        numPegs: 3,
        startX: 265.58,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [960]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.68,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [961]
    {
        prize: 4,
        numPegs: 5,
        startX: 265.742,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [962]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.842,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, 1]
    },
    // [963]
    {
        prize: 2,
        numPegs: 3,
        startX: 262.594,
        bounceRecord: [1, 2, 11],
        randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [964]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.574,
        bounceRecord: [1, 2, 11],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [965]
    {
        prize: 3,
        numPegs: 3,
        startX: 263.04,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [966]
    {
        prize: 3,
        numPegs: 6,
        startX: 265.76,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [967]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.646,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [968]
    {
        prize: 4,
        numPegs: 4,
        startX: 266.472,
        bounceRecord: [1, 6, 9, 8],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [969]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.522,
        bounceRecord: [1, 4, 8, 9],
        randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [970]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.262,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [971]
    {
        prize: 2,
        numPegs: 4,
        startX: 265.564,
        bounceRecord: [1, 3, 8, 12],
        randomDirections: [-1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [972]
    {
        prize: 3,
        numPegs: 5,
        startX: 262.97,
        bounceRecord: [1, 2, 4, 8, 12],
        randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [973]
    {
        prize: 5,
        numPegs: 4,
        startX: 265.502,
        bounceRecord: [1, 3, 2, 9],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [974]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.706,
        bounceRecord: [1, 3, 5, 12, 7, 12],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [975]
    {
        prize: 6,
        numPegs: 3,
        startX: 266.158,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [976]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.552,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, -1, 1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [977]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.2,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [978]
    {
        prize: 4,
        numPegs: 5,
        startX: 266.202,
        bounceRecord: [1, 3, 10, 6, 10],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [979]
    {
        prize: 5,
        numPegs: 3,
        startX: 266.402,
        bounceRecord: [1, 3, 15],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [980]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.466,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [981]
    {
        prize: 2,
        numPegs: 6,
        startX: 265.552,
        bounceRecord: [1, 3, 8, 4, 8, 12],
        randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [982]
    {
        prize: 2,
        numPegs: 4,
        startX: 262.734,
        bounceRecord: [1, 2, 7, 11],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [983]
    {
        prize: 5,
        numPegs: 5,
        startX: 263.468,
        bounceRecord: [1, 2, 9, 6, 9],
        randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [984]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.914,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [985]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.39,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [986]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.1,
        bounceRecord: [1, 3, 6, 10, 15],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [987]
    {
        prize: 3,
        numPegs: 5,
        startX: 263.14,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [988]
    {
        prize: 5,
        numPegs: 4,
        startX: 266.404,
        bounceRecord: [1, 3, 15, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [989]
    {
        prize: 3,
        numPegs: 4,
        startX: 265.914,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [990]
    {
        prize: 3,
        numPegs: 6,
        startX: 266,
        bounceRecord: [1, 3, 6, 13, 8, 13],
        randomDirections: [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [991]
    {
        prize: 3,
        numPegs: 5,
        startX: 266.492,
        bounceRecord: [1, 6, 9, 13, 12],
        randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [992]
    {
        prize: 6,
        numPegs: 5,
        startX: 266.384,
        bounceRecord: [1, 3, 15, 10, 15],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [993]
    {
        prize: 4,
        numPegs: 4,
        startX: 265.626,
        bounceRecord: [1, 3, 8, 13],
        randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [994]
    {
        prize: 3,
        numPegs: 4,
        startX: 262.562,
        bounceRecord: [1, 4, 13, 8],
        randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [995]
    {
        prize: 4,
        numPegs: 5,
        startX: 263.39,
        bounceRecord: [1, 2, 9, 13, 14],
        randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [996]
    {
        prize: 1,
        numPegs: 4,
        startX: 262.608,
        bounceRecord: [1, 2, 11, 7],
        randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, -1, -1]
    },
    // [997]
    {
        prize: 2,
        numPegs: 5,
        startX: 262.642,
        bounceRecord: [1, 2, 11, 7, 11],
        randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [998]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.836,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [999]
    {
        prize: 1,
        numPegs: 3,
        startX: 262.858,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    }
];