
////////////////////////////////////////////////////////////
// gravity = 0.19
// x_dampener = 0.6
// y_dampener = 0.5
// dxLim = 0.1
////////////////////////////////////////////////////////////

//Counts: (0)104 (1)83 (2)201 (3)215 (4)232 (5)63 (6)102  = 1000

let ballRecords = [
    // [0]
    {  prize:1,
       numPegs:3,
       startX:348.168,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [1]
    {  prize:1,
       numPegs:3,
       startX:348.152,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [2]
    {  prize:1,
       numPegs:3,
       startX:351.378,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [3]
    {  prize:7,
       numPegs:3,
       startX:348.84,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [4]
    {  prize:7,
       numPegs:4,
       startX:351.786,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [5]
    {  prize:7,
       numPegs:4,
       startX:351.824,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [6]
    {  prize:7,
       numPegs:4,
       startX:351.744,
       bounceRecord: [1, 3, 6, 15],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [7]
    {  prize:7,
       numPegs:4,
       startX:351.742,
       bounceRecord: [1, 3, 6, 15],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [8]
    {  prize:5,
       numPegs:6,
       startX:348.132,
       bounceRecord: [1, 4, 2, 4, 8, 13],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [9]
    {  prize:4,
       numPegs:6,
       startX:351.962,
       bounceRecord: [1, 6, 3, 6, 9, 14],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [10]
    {  prize:5,
       numPegs:7,
       startX:348.682,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [11]
    {  prize:2,
       numPegs:6,
       startX:348.51,
       bounceRecord: [1, 2, 5, 12, 7, 12],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [12]
    {  prize:3,
       numPegs:8,
       startX:348.328,
       bounceRecord: [1, 2, 4, 5, 12, 7, 12, 11],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [13]
    {  prize:4,
       numPegs:4,
       startX:351.176,
       bounceRecord: [1, 3, 8, 12],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [14]
    {  prize:4,
       numPegs:5,
       startX:348.478,
       bounceRecord: [1, 2, 5, 8, 7],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [15]
    {  prize:5,
       numPegs:7,
       startX:351.884,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [16]
    {  prize:3,
       numPegs:6,
       startX:348.578,
       bounceRecord: [1, 2, 9, 5, 9, 13],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [17]
    {  prize:5,
       numPegs:6,
       startX:351.754,
       bounceRecord: [1, 3, 6, 10, 14, 13],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [18]
    {  prize:5,
       numPegs:6,
       startX:351.754,
       bounceRecord: [1, 3, 6, 10, 14, 13],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [19]
    {  prize:3,
       numPegs:7,
       startX:351.168,
       bounceRecord: [1, 3, 8, 4, 8, 12, 11],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [20]
    {  prize:3,
       numPegs:7,
       startX:351.408,
       bounceRecord: [1, 3, 8, 9, 18, 12, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [21]
    {  prize:5,
       numPegs:6,
       startX:348.124,
       bounceRecord: [1, 4, 2, 4, 8, 19],
       randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [22]
    {  prize:4,
       numPegs:6,
       startX:351.362,
       bounceRecord: [1, 3, 5, 14, 19, 18],
       randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [23]
    {  prize:5,
       numPegs:5,
       startX:348.556,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [24]
    {  prize:4,
       numPegs:8,
       startX:351.488,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [25]
    {  prize:4,
       numPegs:8,
       startX:351.488,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [26]
    {  prize:6,
       numPegs:9,
       startX:351.37,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20, 21, 20],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [27]
    {  prize:2,
       numPegs:9,
       startX:348.63,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17, 16, 17],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [28]
    {  prize:6,
       numPegs:9,
       startX:351.14,
       bounceRecord: [1, 3, 5, 9, 10, 9, 20, 15, 20],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [29]
    {  prize:5,
       numPegs:6,
       startX:348.314,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [30]
    {  prize:4,
       numPegs:8,
       startX:348.648,
       bounceRecord: [1, 2, 5, 8, 7, 12, 18, 19],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [31]
    {  prize:7,
       numPegs:5,
       startX:351.766,
       bounceRecord: [1, 3, 6, 10, 15],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [32]
    {  prize:4,
       numPegs:7,
       startX:348.598,
       bounceRecord: [1, 2, 9, 13, 12, 18, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [33]
    {  prize:2,
       numPegs:6,
       startX:348.276,
       bounceRecord: [1, 2, 4, 7, 11, 12],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [34]
    {  prize:3,
       numPegs:7,
       startX:348.896,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [35]
    {  prize:7,
       numPegs:6,
       startX:351.524,
       bounceRecord: [1, 3, 5, 14, 15, 21],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [36]
    {  prize:5,
       numPegs:6,
       startX:351.128,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [37]
    {  prize:5,
       numPegs:6,
       startX:351.256,
       bounceRecord: [1, 3, 5, 8, 13, 19],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [38]
    {  prize:3,
       numPegs:6,
       startX:348.744,
       bounceRecord: [1, 2, 5, 9, 13, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [39]
    {  prize:5,
       numPegs:8,
       startX:351.05,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [40]
    {  prize:5,
       numPegs:7,
       startX:351.656,
       bounceRecord: [1, 3, 6, 9, 20, 14, 20],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [41]
    {  prize:4,
       numPegs:9,
       startX:348.32,
       bounceRecord: [1, 2, 4, 8, 9, 13, 12, 18, 19],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [42]
    {  prize:4,
       numPegs:9,
       startX:351.68,
       bounceRecord: [1, 3, 6, 9, 8, 13, 14, 19, 18],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [43]
    {  prize:5,
       numPegs:6,
       startX:351.54,
       bounceRecord: [1, 3, 5, 9, 10, 19],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [44]
    {  prize:3,
       numPegs:6,
       startX:351.462,
       bounceRecord: [1, 3, 5, 8, 9, 18],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [45]
    {  prize:3,
       numPegs:7,
       startX:351.06,
       bounceRecord: [1, 3, 5, 8, 17, 12, 17],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [46]
    {  prize:5,
       numPegs:7,
       startX:351.886,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [47]
    {  prize:5,
       numPegs:7,
       startX:351.886,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [48]
    {  prize:5,
       numPegs:7,
       startX:351.482,
       bounceRecord: [1, 3, 5, 9, 13, 19, 20],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [49]
    {  prize:5,
       numPegs:8,
       startX:348.534,
       bounceRecord: [1, 2, 5, 9, 14, 15, 20, 19],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [50]
    {  prize:7,
       numPegs:3,
       startX:351.856,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [51]
    {  prize:7,
       numPegs:3,
       startX:351.852,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [52]
    {  prize:1,
       numPegs:5,
       startX:348.224,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [53]
    {  prize:3,
       numPegs:6,
       startX:351.914,
       bounceRecord: [1, 6, 9, 13, 18, 17],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [54]
    {  prize:7,
       numPegs:3,
       startX:351.844,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [55]
    {  prize:7,
       numPegs:5,
       startX:351.81,
       bounceRecord: [1, 3, 10, 15, 21],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [56]
    {  prize:1,
       numPegs:3,
       startX:348.156,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [57]
    {  prize:7,
       numPegs:3,
       startX:348.618,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [58]
    {  prize:7,
       numPegs:4,
       startX:348.616,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [59]
    {  prize:6,
       numPegs:5,
       startX:351.816,
       bounceRecord: [1, 3, 10, 21, 20],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [60]
    {  prize:4,
       numPegs:5,
       startX:351.912,
       bounceRecord: [1, 6, 9, 13, 12],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [61]
    {  prize:1,
       numPegs:3,
       startX:348.148,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [62]
    {  prize:1,
       numPegs:3,
       startX:348.142,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [63]
    {  prize:4,
       numPegs:7,
       startX:348.282,
       bounceRecord: [1, 2, 4, 7, 12, 18, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [64]
    {  prize:5,
       numPegs:7,
       startX:348.504,
       bounceRecord: [1, 2, 5, 8, 19, 14, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [65]
    {  prize:4,
       numPegs:6,
       startX:348.952,
       bounceRecord: [1, 2, 5, 9, 18, 19],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [66]
    {  prize:6,
       numPegs:8,
       startX:351.758,
       bounceRecord: [1, 3, 6, 10, 9, 20, 15, 20],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [67]
    {  prize:7,
       numPegs:4,
       startX:351.824,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [68]
    {  prize:7,
       numPegs:4,
       startX:351.808,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [69]
    {  prize:2,
       numPegs:5,
       startX:348.184,
       bounceRecord: [1, 2, 7, 16, 17],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [70]
    {  prize:3,
       numPegs:7,
       startX:348.092,
       bounceRecord: [1, 4, 8, 9, 18, 12, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [71]
    {  prize:3,
       numPegs:6,
       startX:348.24,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [72]
    {  prize:3,
       numPegs:6,
       startX:348.31,
       bounceRecord: [1, 2, 4, 8, 12, 17],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [73]
    {  prize:2,
       numPegs:8,
       startX:348.042,
       bounceRecord: [1, 4, 2, 4, 8, 17, 11, 17],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [74]
    {  prize:1,
       numPegs:4,
       startX:348.182,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [75]
    {  prize:5,
       numPegs:6,
       startX:348.882,
       bounceRecord: [1, 2, 5, 8, 13, 19],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [76]
    {  prize:2,
       numPegs:8,
       startX:348.706,
       bounceRecord: [1, 2, 5, 12, 7, 12, 17, 16],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [77]
    {  prize:4,
       numPegs:6,
       startX:348.638,
       bounceRecord: [1, 2, 5, 12, 18, 19],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [78]
    {  prize:4,
       numPegs:7,
       startX:348.064,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [79]
    {  prize:5,
       numPegs:7,
       startX:348.55,
       bounceRecord: [1, 2, 5, 9, 13, 19, 20],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [80]
    {  prize:1,
       numPegs:3,
       startX:348.146,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [81]
    {  prize:5,
       numPegs:6,
       startX:351.69,
       bounceRecord: [1, 3, 6, 9, 14, 20],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [82]
    {  prize:3,
       numPegs:6,
       startX:348.238,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [83]
    {  prize:4,
       numPegs:6,
       startX:351.264,
       bounceRecord: [1, 3, 5, 8, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [84]
    {  prize:4,
       numPegs:9,
       startX:351.748,
       bounceRecord: [1, 3, 6, 10, 9, 10, 19, 13, 19],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [85]
    {  prize:6,
       numPegs:7,
       startX:351.662,
       bounceRecord: [1, 3, 6, 9, 14, 15, 14],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [86]
    {  prize:2,
       numPegs:9,
       startX:348.626,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [87]
    {  prize:3,
       numPegs:7,
       startX:348.632,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [88]
    {  prize:2,
       numPegs:5,
       startX:348.184,
       bounceRecord: [1, 2, 7, 16, 17],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [89]
    {  prize:5,
       numPegs:6,
       startX:351.422,
       bounceRecord: [1, 3, 8, 5, 8, 13],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [90]
    {  prize:3,
       numPegs:7,
       startX:348.032,
       bounceRecord: [1, 4, 2, 4, 8, 9, 18],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [91]
    {  prize:5,
       numPegs:5,
       startX:351.106,
       bounceRecord: [1, 3, 5, 14, 13],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [92]
    {  prize:4,
       numPegs:7,
       startX:351.494,
       bounceRecord: [1, 3, 5, 9, 13, 18, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [93]
    {  prize:5,
       numPegs:7,
       startX:351.044,
       bounceRecord: [1, 3, 5, 8, 13, 19, 20],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [94]
    {  prize:2,
       numPegs:7,
       startX:348.48,
       bounceRecord: [1, 2, 5, 8, 17, 11, 17],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [95]
    {  prize:4,
       numPegs:7,
       startX:351.414,
       bounceRecord: [1, 3, 8, 5, 8, 13, 18],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [96]
    {  prize:5,
       numPegs:7,
       startX:351.358,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [97]
    {  prize:1,
       numPegs:4,
       startX:348.218,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [98]
    {  prize:4,
       numPegs:8,
       startX:348.848,
       bounceRecord: [1, 2, 5, 8, 7, 12, 18, 19],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [99]
    {  prize:3,
       numPegs:6,
       startX:348.238,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [100]
    {  prize:4,
       numPegs:7,
       startX:348.064,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [101]
    {  prize:4,
       numPegs:5,
       startX:351.692,
       bounceRecord: [1, 3, 6, 13, 12],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [102]
    {  prize:1,
       numPegs:3,
       startX:348.168,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [103]
    {  prize:7,
       numPegs:3,
       startX:351.838,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [104]
    {  prize:6,
       numPegs:7,
       startX:351.31,
       bounceRecord: [1, 3, 5, 14, 10, 14, 20],
       randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, -1]
    },
    // [105]
    {  prize:3,
       numPegs:7,
       startX:348.344,
       bounceRecord: [1, 2, 4, 8, 17, 12, 17],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [106]
    {  prize:3,
       numPegs:7,
       startX:351.052,
       bounceRecord: [1, 3, 5, 12, 17, 12, 17],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [107]
    {  prize:3,
       numPegs:7,
       startX:351.318,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [108]
    {  prize:3,
       numPegs:7,
       startX:348.114,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [109]
    {  prize:5,
       numPegs:9,
       startX:351.954,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15, 20, 19],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [110]
    {  prize:5,
       numPegs:5,
       startX:348.316,
       bounceRecord: [1, 2, 4, 8, 19],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [111]
    {  prize:5,
       numPegs:6,
       startX:348.746,
       bounceRecord: [1, 2, 5, 9, 14, 15],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [112]
    {  prize:4,
       numPegs:6,
       startX:351.528,
       bounceRecord: [1, 3, 5, 8, 13, 14],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [113]
    {  prize:4,
       numPegs:5,
       startX:351.132,
       bounceRecord: [1, 3, 5, 9, 14],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [114]
    {  prize:3,
       numPegs:7,
       startX:351.06,
       bounceRecord: [1, 3, 5, 8, 17, 12, 17],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [115]
    {  prize:3,
       numPegs:7,
       startX:351.318,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [116]
    {  prize:1,
       numPegs:4,
       startX:348.212,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [117]
    {  prize:1,
       numPegs:3,
       startX:351.16,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [118]
    {  prize:3,
       numPegs:5,
       startX:348.894,
       bounceRecord: [1, 2, 5, 12, 13],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [119]
    {  prize:4,
       numPegs:6,
       startX:348.736,
       bounceRecord: [1, 2, 5, 9, 13, 18],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [120]
    {  prize:4,
       numPegs:8,
       startX:348.512,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [121]
    {  prize:2,
       numPegs:9,
       startX:348.626,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [122]
    {  prize:2,
       numPegs:5,
       startX:348.206,
       bounceRecord: [1, 2, 7, 11, 12],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [123]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [124]
    {  prize:6,
       numPegs:5,
       startX:348.842,
       bounceRecord: [1, 2, 14, 9, 14],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [125]
    {  prize:4,
       numPegs:6,
       startX:348.36,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [126]
    {  prize:4,
       numPegs:4,
       startX:348.824,
       bounceRecord: [1, 2, 9, 14],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [127]
    {  prize:1,
       numPegs:5,
       startX:348.22,
       bounceRecord: [1, 2, 4, 7, 16],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [128]
    {  prize:3,
       numPegs:6,
       startX:348.758,
       bounceRecord: [1, 2, 4, 8, 13, 18],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [129]
    {  prize:5,
       numPegs:8,
       startX:351.644,
       bounceRecord: [1, 3, 6, 9, 8, 19, 14, 19],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [130]
    {  prize:5,
       numPegs:7,
       startX:351.368,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [131]
    {  prize:5,
       numPegs:5,
       startX:348.5,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [132]
    {  prize:1,
       numPegs:5,
       startX:351.392,
       bounceRecord: [1, 3, 8, 7, 11],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [133]
    {  prize:3,
       numPegs:8,
       startX:351.874,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [134]
    {  prize:3,
       numPegs:6,
       startX:348.246,
       bounceRecord: [1, 2, 4, 7, 12, 13],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [135]
    {  prize:4,
       numPegs:5,
       startX:351.912,
       bounceRecord: [1, 6, 9, 13, 12],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [136]
    {  prize:3,
       numPegs:6,
       startX:348.872,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [137]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [138]
    {  prize:5,
       numPegs:7,
       startX:348.696,
       bounceRecord: [1, 2, 5, 8, 7, 18, 19],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [139]
    {  prize:3,
       numPegs:6,
       startX:348.658,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [140]
    {  prize:7,
       numPegs:3,
       startX:351.842,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [141]
    {  prize:3,
       numPegs:6,
       startX:351.686,
       bounceRecord: [1, 3, 6, 9, 13, 18],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [142]
    {  prize:3,
       numPegs:6,
       startX:351.406,
       bounceRecord: [1, 3, 8, 9, 18, 12],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [143]
    {  prize:6,
       numPegs:6,
       startX:348.83,
       bounceRecord: [1, 2, 9, 6, 9, 14],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [144]
    {  prize:6,
       numPegs:7,
       startX:348.74,
       bounceRecord: [1, 2, 5, 9, 14, 20, 21],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [145]
    {  prize:2,
       numPegs:6,
       startX:351.17,
       bounceRecord: [1, 3, 8, 4, 8, 12],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [146]
    {  prize:4,
       numPegs:8,
       startX:351.972,
       bounceRecord: [1, 6, 3, 6, 9, 13, 12, 18],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [147]
    {  prize:4,
       numPegs:9,
       startX:348.106,
       bounceRecord: [1, 4, 2, 4, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [148]
    {  prize:3,
       numPegs:8,
       startX:351.112,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13, 18],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [149]
    {  prize:1,
       numPegs:4,
       startX:348.218,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [150]
    {  prize:4,
       numPegs:8,
       startX:348.844,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18, 19],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [151]
    {  prize:3,
       numPegs:7,
       startX:348.954,
       bounceRecord: [1, 2, 5, 9, 13, 12, 18],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [152]
    {  prize:3,
       numPegs:8,
       startX:351.466,
       bounceRecord: [1, 3, 5, 8, 12, 11, 17, 18],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [153]
    {  prize:4,
       numPegs:9,
       startX:348.252,
       bounceRecord: [1, 2, 4, 7, 8, 7, 18, 13, 18],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [154]
    {  prize:1,
       numPegs:5,
       startX:348.224,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [155]
    {  prize:3,
       numPegs:6,
       startX:348.744,
       bounceRecord: [1, 2, 5, 9, 13, 18],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [156]
    {  prize:5,
       numPegs:5,
       startX:348.906,
       bounceRecord: [1, 2, 5, 8, 13],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [157]
    {  prize:7,
       numPegs:4,
       startX:351.806,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [158]
    {  prize:1,
       numPegs:4,
       startX:348.218,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [159]
    {  prize:5,
       numPegs:6,
       startX:351.728,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [160]
    {  prize:6,
       numPegs:8,
       startX:351.95,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15, 14],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [161]
    {  prize:5,
       numPegs:8,
       startX:348.542,
       bounceRecord: [1, 2, 5, 9, 10, 19, 14, 19],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [162]
    {  prize:5,
       numPegs:7,
       startX:348.682,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [163]
    {  prize:7,
       numPegs:3,
       startX:351.86,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [164]
    {  prize:1,
       numPegs:4,
       startX:348.218,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [165]
    {  prize:3,
       numPegs:8,
       startX:348.328,
       bounceRecord: [1, 2, 4, 5, 12, 7, 12, 11],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [166]
    {  prize:2,
       numPegs:5,
       startX:351.158,
       bounceRecord: [1, 3, 12, 8, 12],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [167]
    {  prize:5,
       numPegs:7,
       startX:351.306,
       bounceRecord: [1, 3, 5, 9, 10, 14, 13],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [168]
    {  prize:7,
       numPegs:4,
       startX:351.822,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [169]
    {  prize:1,
       numPegs:3,
       startX:348.154,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [170]
    {  prize:1,
       numPegs:3,
       startX:348.164,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [171]
    {  prize:1,
       numPegs:3,
       startX:348.168,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [172]
    {  prize:7,
       numPegs:3,
       startX:351.838,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [173]
    {  prize:1,
       numPegs:3,
       startX:348.154,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [174]
    {  prize:7,
       numPegs:3,
       startX:351.848,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [175]
    {  prize:5,
       numPegs:6,
       startX:351.756,
       bounceRecord: [1, 3, 6, 10, 14, 20],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [176]
    {  prize:5,
       numPegs:6,
       startX:348.97,
       bounceRecord: [1, 2, 5, 9, 14, 19],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [177]
    {  prize:1,
       numPegs:3,
       startX:351.164,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [178]
    {  prize:6,
       numPegs:4,
       startX:348.818,
       bounceRecord: [1, 2, 9, 20],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [179]
    {  prize:3,
       numPegs:6,
       startX:351.876,
       bounceRecord: [1, 6, 3, 6, 9, 18],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [180]
    {  prize:7,
       numPegs:3,
       startX:348.62,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [181]
    {  prize:7,
       numPegs:3,
       startX:348.618,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [182]
    {  prize:7,
       numPegs:3,
       startX:348.62,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [183]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [184]
    {  prize:7,
       numPegs:3,
       startX:348.836,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [185]
    {  prize:4,
       numPegs:6,
       startX:348.472,
       bounceRecord: [1, 2, 5, 9, 13, 12],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [186]
    {  prize:3,
       numPegs:7,
       startX:348.114,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [187]
    {  prize:5,
       numPegs:7,
       startX:348.932,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [188]
    {  prize:1,
       numPegs:4,
       startX:348.214,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [189]
    {  prize:7,
       numPegs:3,
       startX:348.836,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [190]
    {  prize:6,
       numPegs:7,
       startX:351.666,
       bounceRecord: [1, 3, 6, 9, 10, 9, 20],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [191]
    {  prize:5,
       numPegs:5,
       startX:351.302,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [192]
    {  prize:1,
       numPegs:4,
       startX:348.192,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [193]
    {  prize:7,
       numPegs:4,
       startX:351.802,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [194]
    {  prize:2,
       numPegs:5,
       startX:348.702,
       bounceRecord: [1, 2, 5, 8, 17],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [195]
    {  prize:1,
       numPegs:4,
       startX:348.216,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [196]
    {  prize:5,
       numPegs:7,
       startX:351.886,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [197]
    {  prize:5,
       numPegs:7,
       startX:351.368,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [198]
    {  prize:1,
       numPegs:5,
       startX:348.19,
       bounceRecord: [1, 2, 7, 11, 16],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [199]
    {  prize:6,
       numPegs:4,
       startX:351.994,
       bounceRecord: [1, 6, 15, 14],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [200]
    {  prize:6,
       numPegs:4,
       startX:351.994,
       bounceRecord: [1, 6, 15, 14],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [201]
    {  prize:1,
       numPegs:5,
       startX:348.19,
       bounceRecord: [1, 2, 7, 11, 16],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [202]
    {  prize:3,
       numPegs:6,
       startX:348.21,
       bounceRecord: [1, 2, 7, 11, 7, 11],
       randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [203]
    {  prize:7,
       numPegs:5,
       startX:351.81,
       bounceRecord: [1, 3, 10, 15, 21],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [204]
    {  prize:7,
       numPegs:4,
       startX:351.828,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [205]
    {  prize:1,
       numPegs:4,
       startX:348.202,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [206]
    {  prize:4,
       numPegs:8,
       startX:348.57,
       bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [207]
    {  prize:3,
       numPegs:6,
       startX:351.91,
       bounceRecord: [1, 6, 9, 18, 12, 18],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [208]
    {  prize:7,
       numPegs:5,
       startX:348.608,
       bounceRecord: [1, 2, 9, 10, 15],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [209]
    {  prize:3,
       numPegs:7,
       startX:351.312,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [210]
    {  prize:5,
       numPegs:8,
       startX:351.892,
       bounceRecord: [1, 6, 3, 6, 9, 20, 14, 20],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [211]
    {  prize:3,
       numPegs:8,
       startX:348.812,
       bounceRecord: [1, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [212]
    {  prize:2,
       numPegs:5,
       startX:351.404,
       bounceRecord: [1, 3, 8, 9, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [213]
    {  prize:5,
       numPegs:8,
       startX:348.1,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [214]
    {  prize:4,
       numPegs:5,
       startX:351.522,
       bounceRecord: [1, 3, 5, 9, 10],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [215]
    {  prize:3,
       numPegs:7,
       startX:348.092,
       bounceRecord: [1, 4, 8, 9, 18, 12, 18],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [216]
    {  prize:4,
       numPegs:8,
       startX:348.89,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13, 14],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [217]
    {  prize:7,
       numPegs:6,
       startX:351.774,
       bounceRecord: [1, 3, 6, 10, 15, 21],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [218]
    {  prize:2,
       numPegs:8,
       startX:348.052,
       bounceRecord: [1, 4, 2, 4, 8, 12, 17, 16],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [219]
    {  prize:3,
       numPegs:8,
       startX:348.342,
       bounceRecord: [1, 2, 4, 8, 12, 8, 12, 13],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [220]
    {  prize:2,
       numPegs:7,
       startX:348.338,
       bounceRecord: [1, 2, 4, 8, 12, 11, 12],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [221]
    {  prize:2,
       numPegs:5,
       startX:348.87,
       bounceRecord: [1, 2, 5, 8, 12],
       randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [222]
    {  prize:3,
       numPegs:6,
       startX:348.578,
       bounceRecord: [1, 2, 9, 5, 9, 13],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [223]
    {  prize:5,
       numPegs:7,
       startX:348.832,
       bounceRecord: [1, 2, 9, 6, 9, 14, 15],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [224]
    {  prize:4,
       numPegs:7,
       startX:348.576,
       bounceRecord: [1, 2, 9, 5, 9, 13, 12],
       randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [225]
    {  prize:5,
       numPegs:6,
       startX:351.756,
       bounceRecord: [1, 3, 6, 10, 14, 20],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [226]
    {  prize:6,
       numPegs:9,
       startX:351.374,
       bounceRecord: [1, 3, 5, 6, 5, 14, 10, 14, 20],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [227]
    {  prize:2,
       numPegs:5,
       startX:348.34,
       bounceRecord: [1, 2, 4, 8, 12],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [228]
    {  prize:6,
       numPegs:5,
       startX:351.66,
       bounceRecord: [1, 3, 6, 9, 14],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [229]
    {  prize:3,
       numPegs:6,
       startX:351.876,
       bounceRecord: [1, 6, 3, 6, 9, 18],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [230]
    {  prize:4,
       numPegs:9,
       startX:348.106,
       bounceRecord: [1, 4, 2, 4, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [231]
    {  prize:4,
       numPegs:9,
       startX:348.106,
       bounceRecord: [1, 4, 2, 4, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [232]
    {  prize:5,
       numPegs:10,
       startX:348.128,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19, 14, 19],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [233]
    {  prize:2,
       numPegs:9,
       startX:348.332,
       bounceRecord: [1, 2, 4, 8, 7, 8, 17, 11, 17],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [234]
    {  prize:4,
       numPegs:8,
       startX:351.44,
       bounceRecord: [1, 3, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [235]
    {  prize:2,
       numPegs:8,
       startX:348.042,
       bounceRecord: [1, 4, 2, 4, 8, 17, 11, 17],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [236]
    {  prize:5,
       numPegs:7,
       startX:351.952,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [237]
    {  prize:6,
       numPegs:6,
       startX:348.942,
       bounceRecord: [1, 2, 5, 9, 14, 20],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [238]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [239]
    {  prize:6,
       numPegs:8,
       startX:351.294,
       bounceRecord: [1, 3, 5, 14, 10, 14, 20, 21],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [240]
    {  prize:5,
       numPegs:7,
       startX:348.878,
       bounceRecord: [1, 2, 5, 8, 19, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [241]
    {  prize:5,
       numPegs:6,
       startX:348.314,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [242]
    {  prize:4,
       numPegs:8,
       startX:351.156,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19, 18],
       randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [243]
    {  prize:5,
       numPegs:7,
       startX:348.558,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [244]
    {  prize:3,
       numPegs:6,
       startX:348.666,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [245]
    {  prize:3,
       numPegs:5,
       startX:348.27,
       bounceRecord: [1, 2, 4, 7, 18],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [246]
    {  prize:3,
       numPegs:5,
       startX:348.892,
       bounceRecord: [1, 2, 5, 12, 17],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [247]
    {  prize:3,
       numPegs:7,
       startX:351.694,
       bounceRecord: [1, 3, 6, 9, 13, 12, 13],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [248]
    {  prize:5,
       numPegs:7,
       startX:351.044,
       bounceRecord: [1, 3, 5, 8, 13, 19, 20],
       randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [249]
    {  prize:4,
       numPegs:8,
       startX:348.844,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [250]
    {  prize:3,
       numPegs:9,
       startX:351.376,
       bounceRecord: [1, 3, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [251]
    {  prize:2,
       numPegs:7,
       startX:348.908,
       bounceRecord: [1, 2, 5, 8, 12, 11, 12],
       randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [252]
    {  prize:4,
       numPegs:6,
       startX:351.528,
       bounceRecord: [1, 3, 5, 8, 13, 14],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [253]
    {  prize:2,
       numPegs:7,
       startX:351.032,
       bounceRecord: [1, 3, 5, 8, 17, 11, 17],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [254]
    {  prize:5,
       numPegs:8,
       startX:351.188,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [255]
    {  prize:5,
       numPegs:6,
       startX:351.76,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [256]
    {  prize:1,
       numPegs:3,
       startX:348.138,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [257]
    {  prize:3,
       numPegs:8,
       startX:348.812,
       bounceRecord: [1, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [258]
    {  prize:5,
       numPegs:5,
       startX:351.106,
       bounceRecord: [1, 3, 5, 14, 13],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [259]
    {  prize:2,
       numPegs:5,
       startX:348.87,
       bounceRecord: [1, 2, 5, 8, 12],
       randomDirections: [-1, -1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [260]
    {  prize:2,
       numPegs:6,
       startX:348.7,
       bounceRecord: [1, 2, 5, 8, 12, 17],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [261]
    {  prize:1,
       numPegs:4,
       startX:348.194,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [262]
    {  prize:4,
       numPegs:7,
       startX:351.718,
       bounceRecord: [1, 3, 6, 10, 14, 19, 18],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [263]
    {  prize:5,
       numPegs:6,
       startX:351.754,
       bounceRecord: [1, 3, 6, 10, 14, 13],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [264]
    {  prize:5,
       numPegs:7,
       startX:351.482,
       bounceRecord: [1, 3, 5, 9, 13, 19, 20],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [265]
    {  prize:1,
       numPegs:5,
       startX:351.392,
       bounceRecord: [1, 3, 8, 7, 11],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [266]
    {  prize:4,
       numPegs:7,
       startX:348.506,
       bounceRecord: [1, 2, 5, 8, 13, 19, 18],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [267]
    {  prize:1,
       numPegs:4,
       startX:348.176,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [268]
    {  prize:2,
       numPegs:7,
       startX:348.908,
       bounceRecord: [1, 2, 5, 8, 12, 11, 12],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [269]
    {  prize:2,
       numPegs:7,
       startX:348.908,
       bounceRecord: [1, 2, 5, 8, 12, 11, 12],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [270]
    {  prize:2,
       numPegs:6,
       startX:348.188,
       bounceRecord: [1, 2, 7, 16, 11, 16],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [271]
    {  prize:4,
       numPegs:8,
       startX:351.152,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19, 18],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [272]
    {  prize:6,
       numPegs:7,
       startX:351.666,
       bounceRecord: [1, 3, 6, 9, 10, 9, 20],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [273]
    {  prize:5,
       numPegs:7,
       startX:348.558,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [274]
    {  prize:5,
       numPegs:7,
       startX:348.566,
       bounceRecord: [1, 2, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [275]
    {  prize:4,
       numPegs:6,
       startX:351.174,
       bounceRecord: [1, 3, 8, 4, 8, 12],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [276]
    {  prize:5,
       numPegs:5,
       startX:348.304,
       bounceRecord: [1, 2, 4, 8, 13],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [277]
    {  prize:6,
       numPegs:5,
       startX:351.726,
       bounceRecord: [1, 3, 6, 15, 21],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [278]
    {  prize:5,
       numPegs:6,
       startX:348.97,
       bounceRecord: [1, 2, 5, 9, 14, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [279]
    {  prize:4,
       numPegs:8,
       startX:348.692,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [280]
    {  prize:7,
       numPegs:3,
       startX:351.854,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [281]
    {  prize:2,
       numPegs:9,
       startX:348.858,
       bounceRecord: [1, 2, 5, 8, 7, 8, 17, 11, 17],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [282]
    {  prize:5,
       numPegs:7,
       startX:351.368,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [283]
    {  prize:1,
       numPegs:3,
       startX:348.138,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [284]
    {  prize:5,
       numPegs:6,
       startX:348.314,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [285]
    {  prize:7,
       numPegs:4,
       startX:351.742,
       bounceRecord: [1, 3, 6, 15],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [286]
    {  prize:2,
       numPegs:5,
       startX:351.158,
       bounceRecord: [1, 3, 12, 8, 12],
       randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [287]
    {  prize:7,
       numPegs:4,
       startX:351.788,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [288]
    {  prize:4,
       numPegs:8,
       startX:348.828,
       bounceRecord: [1, 2, 9, 6, 9, 14, 19, 18],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [289]
    {  prize:6,
       numPegs:7,
       startX:351.092,
       bounceRecord: [1, 3, 5, 9, 14, 15, 14],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [290]
    {  prize:1,
       numPegs:3,
       startX:348.148,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [291]
    {  prize:7,
       numPegs:4,
       startX:351.824,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [292]
    {  prize:4,
       numPegs:5,
       startX:351.132,
       bounceRecord: [1, 3, 5, 9, 14],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [293]
    {  prize:3,
       numPegs:9,
       startX:351.376,
       bounceRecord: [1, 3, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [294]
    {  prize:3,
       numPegs:9,
       startX:351.984,
       bounceRecord: [1, 6, 3, 6, 13, 8, 13, 18, 17],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [295]
    {  prize:5,
       numPegs:6,
       startX:351.136,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [296]
    {  prize:6,
       numPegs:4,
       startX:352,
       bounceRecord: [1, 6, 15, 20],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [297]
    {  prize:5,
       numPegs:8,
       startX:348.888,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [298]
    {  prize:1,
       numPegs:3,
       startX:351.16,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [299]
    {  prize:7,
       numPegs:4,
       startX:351.784,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [300]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [301]
    {  prize:7,
       numPegs:3,
       startX:348.838,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [302]
    {  prize:4,
       numPegs:5,
       startX:351.912,
       bounceRecord: [1, 6, 9, 13, 12],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [303]
    {  prize:5,
       numPegs:7,
       startX:348.572,
       bounceRecord: [1, 2, 5, 6, 5, 14, 20],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [304]
    {  prize:7,
       numPegs:4,
       startX:348.616,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [305]
    {  prize:2,
       numPegs:5,
       startX:351.158,
       bounceRecord: [1, 3, 12, 8, 12],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [306]
    {  prize:3,
       numPegs:7,
       startX:351.312,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [307]
    {  prize:5,
       numPegs:5,
       startX:351.73,
       bounceRecord: [1, 3, 6, 10, 19],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [308]
    {  prize:5,
       numPegs:8,
       startX:348.814,
       bounceRecord: [1, 2, 5, 6, 13, 9, 13, 19],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [309]
    {  prize:4,
       numPegs:6,
       startX:351.324,
       bounceRecord: [1, 3, 5, 9, 13, 12],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [310]
    {  prize:6,
       numPegs:8,
       startX:351.958,
       bounceRecord: [1, 6, 3, 6, 9, 20, 15, 20],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [311]
    {  prize:3,
       numPegs:6,
       startX:348.21,
       bounceRecord: [1, 2, 7, 11, 7, 11],
       randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [312]
    {  prize:5,
       numPegs:6,
       startX:348.132,
       bounceRecord: [1, 4, 2, 4, 8, 13],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [313]
    {  prize:7,
       numPegs:4,
       startX:351.826,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [314]
    {  prize:4,
       numPegs:8,
       startX:348.57,
       bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [315]
    {  prize:7,
       numPegs:4,
       startX:351.828,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [316]
    {  prize:7,
       numPegs:3,
       startX:351.844,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [317]
    {  prize:5,
       numPegs:6,
       startX:348.604,
       bounceRecord: [1, 2, 9, 13, 19, 20],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [318]
    {  prize:3,
       numPegs:7,
       startX:348.096,
       bounceRecord: [1, 4, 2, 4, 8, 9, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [319]
    {  prize:4,
       numPegs:6,
       startX:348.676,
       bounceRecord: [1, 2, 5, 8, 13, 14],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [320]
    {  prize:4,
       numPegs:7,
       startX:351.414,
       bounceRecord: [1, 3, 8, 5, 8, 13, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [321]
    {  prize:3,
       numPegs:7,
       startX:351.312,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [322]
    {  prize:4,
       numPegs:5,
       startX:348.868,
       bounceRecord: [1, 2, 5, 8, 12],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [323]
    {  prize:1,
       numPegs:4,
       startX:348.258,
       bounceRecord: [1, 2, 4, 11],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [324]
    {  prize:3,
       numPegs:7,
       startX:351.408,
       bounceRecord: [1, 3, 8, 9, 18, 12, 18],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [325]
    {  prize:7,
       numPegs:4,
       startX:351.738,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [326]
    {  prize:1,
       numPegs:5,
       startX:348.266,
       bounceRecord: [1, 2, 4, 7, 16],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [327]
    {  prize:7,
       numPegs:5,
       startX:351.734,
       bounceRecord: [1, 3, 6, 10, 21],
       randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [328]
    {  prize:4,
       numPegs:6,
       startX:351.178,
       bounceRecord: [1, 3, 8, 12, 8, 12],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [329]
    {  prize:4,
       numPegs:6,
       startX:348.822,
       bounceRecord: [1, 2, 9, 14, 9, 14],
       randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [330]
    {  prize:3,
       numPegs:7,
       startX:348.67,
       bounceRecord: [1, 2, 5, 8, 9, 18, 12],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [331]
    {  prize:4,
       numPegs:8,
       startX:351.354,
       bounceRecord: [1, 3, 5, 9, 10, 14, 13, 14],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [332]
    {  prize:5,
       numPegs:7,
       startX:351.77,
       bounceRecord: [1, 3, 6, 10, 15, 14, 15],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [333]
    {  prize:3,
       numPegs:7,
       startX:351.052,
       bounceRecord: [1, 3, 5, 12, 17, 12, 17],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [334]
    {  prize:3,
       numPegs:6,
       startX:348.094,
       bounceRecord: [1, 4, 8, 13, 12, 13],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [335]
    {  prize:3,
       numPegs:7,
       startX:351.676,
       bounceRecord: [1, 3, 6, 13, 8, 13, 18],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [336]
    {  prize:5,
       numPegs:6,
       startX:351.756,
       bounceRecord: [1, 3, 6, 10, 14, 20],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [337]
    {  prize:6,
       numPegs:5,
       startX:351.66,
       bounceRecord: [1, 3, 6, 9, 14],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [338]
    {  prize:3,
       numPegs:7,
       startX:351.87,
       bounceRecord: [1, 6, 3, 6, 9, 13, 18],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [339]
    {  prize:2,
       numPegs:9,
       startX:348.332,
       bounceRecord: [1, 2, 4, 8, 7, 8, 17, 11, 17],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [340]
    {  prize:3,
       numPegs:6,
       startX:351.462,
       bounceRecord: [1, 3, 5, 8, 9, 18],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [341]
    {  prize:7,
       numPegs:3,
       startX:351.852,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [342]
    {  prize:3,
       numPegs:7,
       startX:351.496,
       bounceRecord: [1, 3, 5, 9, 18, 12, 18],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [343]
    {  prize:3,
       numPegs:7,
       startX:351.496,
       bounceRecord: [1, 3, 5, 9, 18, 12, 18],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [344]
    {  prize:7,
       numPegs:4,
       startX:348.616,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [345]
    {  prize:4,
       numPegs:8,
       startX:348.678,
       bounceRecord: [1, 2, 5, 8, 9, 12, 19, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [346]
    {  prize:6,
       numPegs:5,
       startX:351.794,
       bounceRecord: [1, 3, 10, 15, 14],
       randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [347]
    {  prize:5,
       numPegs:5,
       startX:348.556,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [348]
    {  prize:4,
       numPegs:8,
       startX:351.152,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19, 18],
       randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [349]
    {  prize:3,
       numPegs:5,
       startX:351.444,
       bounceRecord: [1, 3, 5, 8, 17],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [350]
    {  prize:4,
       numPegs:6,
       startX:348.638,
       bounceRecord: [1, 2, 5, 12, 18, 19],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [351]
    {  prize:5,
       numPegs:7,
       startX:348.832,
       bounceRecord: [1, 2, 9, 6, 9, 14, 15],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [352]
    {  prize:4,
       numPegs:6,
       startX:348.88,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [353]
    {  prize:2,
       numPegs:8,
       startX:348.242,
       bounceRecord: [1, 2, 4, 7, 8, 17, 11, 17],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [354]
    {  prize:2,
       numPegs:7,
       startX:351.166,
       bounceRecord: [1, 3, 8, 4, 8, 12, 17],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [355]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [356]
    {  prize:6,
       numPegs:8,
       startX:351.758,
       bounceRecord: [1, 3, 6, 10, 9, 20, 15, 20],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [357]
    {  prize:2,
       numPegs:7,
       startX:351.166,
       bounceRecord: [1, 3, 8, 4, 8, 12, 17],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [358]
    {  prize:2,
       numPegs:4,
       startX:348.004,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [-1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [359]
    {  prize:3,
       numPegs:5,
       startX:351.094,
       bounceRecord: [1, 3, 5, 9, 13],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [360]
    {  prize:3,
       numPegs:7,
       startX:348.96,
       bounceRecord: [1, 2, 5, 9, 18, 12, 18],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [361]
    {  prize:5,
       numPegs:5,
       startX:348.912,
       bounceRecord: [1, 2, 5, 8, 13],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [362]
    {  prize:4,
       numPegs:6,
       startX:351.648,
       bounceRecord: [1, 3, 6, 9, 13, 12],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [363]
    {  prize:5,
       numPegs:6,
       startX:351.654,
       bounceRecord: [1, 3, 6, 9, 14, 13],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [364]
    {  prize:3,
       numPegs:6,
       startX:351.254,
       bounceRecord: [1, 3, 5, 8, 12, 11],
       randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [365]
    {  prize:4,
       numPegs:10,
       startX:351.896,
       bounceRecord: [1, 6, 3, 6, 9, 14, 13, 14, 19, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [366]
    {  prize:4,
       numPegs:7,
       startX:351.346,
       bounceRecord: [1, 3, 5, 9, 10, 19, 18],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [367]
    {  prize:2,
       numPegs:6,
       startX:351.248,
       bounceRecord: [1, 3, 6, 13, 17, 11],
       randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [368]
    {  prize:5,
       numPegs:7,
       startX:351.358,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [369]
    {  prize:2,
       numPegs:4,
       startX:351.182,
       bounceRecord: [1, 3, 8, 17],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [370]
    {  prize:3,
       numPegs:6,
       startX:351.326,
       bounceRecord: [1, 3, 5, 9, 13, 18],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [371]
    {  prize:3,
       numPegs:5,
       startX:348.27,
       bounceRecord: [1, 2, 4, 7, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [372]
    {  prize:7,
       numPegs:3,
       startX:348.836,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [373]
    {  prize:4,
       numPegs:6,
       startX:351.102,
       bounceRecord: [1, 3, 5, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [374]
    {  prize:2,
       numPegs:9,
       startX:348.628,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [375]
    {  prize:5,
       numPegs:6,
       startX:351.136,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [376]
    {  prize:5,
       numPegs:5,
       startX:351.34,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [377]
    {  prize:3,
       numPegs:5,
       startX:348.66,
       bounceRecord: [1, 2, 5, 8, 17],
       randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [378]
    {  prize:5,
       numPegs:7,
       startX:351.154,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [379]
    {  prize:4,
       numPegs:8,
       startX:348.028,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14, 19],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [380]
    {  prize:5,
       numPegs:8,
       startX:351.144,
       bounceRecord: [1, 3, 5, 9, 10, 19, 14, 19],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [381]
    {  prize:4,
       numPegs:8,
       startX:348.028,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14, 19],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [382]
    {  prize:6,
       numPegs:4,
       startX:348.818,
       bounceRecord: [1, 2, 9, 20],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [383]
    {  prize:3,
       numPegs:10,
       startX:351.898,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18, 12, 18],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [384]
    {  prize:4,
       numPegs:7,
       startX:348.586,
       bounceRecord: [1, 2, 9, 5, 9, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [385]
    {  prize:5,
       numPegs:8,
       startX:351.188,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [386]
    {  prize:4,
       numPegs:6,
       startX:348.672,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [387]
    {  prize:5,
       numPegs:6,
       startX:351.76,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [388]
    {  prize:5,
       numPegs:3,
       startX:351.998,
       bounceRecord: [1, 6, 15],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [389]
    {  prize:4,
       numPegs:8,
       startX:348.018,
       bounceRecord: [1, 4, 2, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [390]
    {  prize:5,
       numPegs:6,
       startX:351.79,
       bounceRecord: [1, 3, 10, 15, 10, 15],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [391]
    {  prize:3,
       numPegs:8,
       startX:351.902,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [392]
    {  prize:4,
       numPegs:8,
       startX:348.12,
       bounceRecord: [1, 4, 2, 4, 8, 12, 13, 12],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [393]
    {  prize:3,
       numPegs:7,
       startX:348.302,
       bounceRecord: [1, 2, 4, 8, 12, 17, 18],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [394]
    {  prize:2,
       numPegs:6,
       startX:351.502,
       bounceRecord: [1, 3, 5, 8, 12, 17],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [395]
    {  prize:1,
       numPegs:6,
       startX:348.476,
       bounceRecord: [1, 2, 5, 12, 11, 16],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [396]
    {  prize:1,
       numPegs:6,
       startX:348.476,
       bounceRecord: [1, 2, 5, 12, 11, 16],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [397]
    {  prize:3,
       numPegs:7,
       startX:351.06,
       bounceRecord: [1, 3, 5, 8, 17, 12, 17],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [398]
    {  prize:5,
       numPegs:8,
       startX:348.542,
       bounceRecord: [1, 2, 5, 9, 10, 19, 14, 19],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [399]
    {  prize:5,
       numPegs:7,
       startX:351.656,
       bounceRecord: [1, 3, 6, 9, 20, 14, 20],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [400]
    {  prize:4,
       numPegs:7,
       startX:351.456,
       bounceRecord: [1, 3, 5, 12, 8, 12, 18],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [401]
    {  prize:3,
       numPegs:7,
       startX:348.954,
       bounceRecord: [1, 2, 5, 9, 13, 12, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [402]
    {  prize:4,
       numPegs:8,
       startX:348.716,
       bounceRecord: [1, 2, 5, 8, 13, 18, 13, 18],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [403]
    {  prize:3,
       numPegs:6,
       startX:348.866,
       bounceRecord: [1, 2, 5, 8, 12, 17],
       randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [404]
    {  prize:4,
       numPegs:7,
       startX:351.148,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [405]
    {  prize:3,
       numPegs:7,
       startX:348.518,
       bounceRecord: [1, 2, 5, 8, 13, 18, 17],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [406]
    {  prize:7,
       numPegs:4,
       startX:351.738,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [407]
    {  prize:6,
       numPegs:8,
       startX:351.958,
       bounceRecord: [1, 6, 3, 6, 9, 20, 15, 20],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [408]
    {  prize:6,
       numPegs:7,
       startX:351.31,
       bounceRecord: [1, 3, 5, 14, 10, 14, 20],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [409]
    {  prize:4,
       numPegs:7,
       startX:348.654,
       bounceRecord: [1, 2, 5, 8, 7, 18, 19],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [410]
    {  prize:7,
       numPegs:4,
       startX:351.806,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [411]
    {  prize:2,
       numPegs:7,
       startX:351.166,
       bounceRecord: [1, 3, 8, 4, 8, 12, 17],
       randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [412]
    {  prize:4,
       numPegs:6,
       startX:348.898,
       bounceRecord: [1, 2, 5, 8, 12, 18],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [413]
    {  prize:4,
       numPegs:7,
       startX:348.586,
       bounceRecord: [1, 2, 9, 5, 9, 13, 19],
       randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [414]
    {  prize:1,
       numPegs:5,
       startX:348.2,
       bounceRecord: [1, 2, 7, 11, 16],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [415]
    {  prize:5,
       numPegs:7,
       startX:348.572,
       bounceRecord: [1, 2, 5, 6, 5, 14, 20],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [416]
    {  prize:2,
       numPegs:6,
       startX:351.058,
       bounceRecord: [1, 3, 5, 8, 12, 17],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [417]
    {  prize:5,
       numPegs:8,
       startX:348.888,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13, 19],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [418]
    {  prize:3,
       numPegs:6,
       startX:351.406,
       bounceRecord: [1, 3, 8, 9, 18, 12],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [419]
    {  prize:7,
       numPegs:4,
       startX:348.614,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [420]
    {  prize:1,
       numPegs:5,
       startX:351.392,
       bounceRecord: [1, 3, 8, 7, 11],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [421]
    {  prize:4,
       numPegs:6,
       startX:351.264,
       bounceRecord: [1, 3, 5, 8, 13, 19],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [422]
    {  prize:5,
       numPegs:7,
       startX:348.94,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [423]
    {  prize:3,
       numPegs:6,
       startX:348.46,
       bounceRecord: [1, 2, 5, 8, 7, 18],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [424]
    {  prize:5,
       numPegs:7,
       startX:348.682,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [425]
    {  prize:5,
       numPegs:6,
       startX:348.734,
       bounceRecord: [1, 2, 5, 9, 8, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [426]
    {  prize:3,
       numPegs:5,
       startX:351.038,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [427]
    {  prize:7,
       numPegs:6,
       startX:351.774,
       bounceRecord: [1, 3, 6, 10, 15, 21],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [428]
    {  prize:5,
       numPegs:6,
       startX:348.882,
       bounceRecord: [1, 2, 5, 8, 13, 19],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [429]
    {  prize:7,
       numPegs:4,
       startX:351.784,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [430]
    {  prize:3,
       numPegs:7,
       startX:351.168,
       bounceRecord: [1, 3, 8, 4, 8, 12, 11],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [431]
    {  prize:5,
       numPegs:6,
       startX:351.342,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [432]
    {  prize:4,
       numPegs:6,
       startX:348.36,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [433]
    {  prize:3,
       numPegs:7,
       startX:348.036,
       bounceRecord: [1, 4, 2, 4, 8, 12, 17],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [434]
    {  prize:5,
       numPegs:6,
       startX:351.48,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [435]
    {  prize:3,
       numPegs:8,
       startX:348.766,
       bounceRecord: [1, 2, 4, 7, 12, 13, 18, 17],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [436]
    {  prize:4,
       numPegs:7,
       startX:348.064,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [437]
    {  prize:4,
       numPegs:6,
       startX:348.736,
       bounceRecord: [1, 2, 5, 9, 13, 18],
       randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [438]
    {  prize:5,
       numPegs:6,
       startX:348.086,
       bounceRecord: [1, 4, 8, 13, 19, 20],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [439]
    {  prize:1,
       numPegs:3,
       startX:348.166,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [440]
    {  prize:4,
       numPegs:5,
       startX:351.364,
       bounceRecord: [1, 3, 5, 14, 19],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [441]
    {  prize:5,
       numPegs:5,
       startX:351.108,
       bounceRecord: [1, 3, 5, 14, 20],
       randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [442]
    {  prize:4,
       numPegs:8,
       startX:351.308,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [443]
    {  prize:4,
       numPegs:8,
       startX:348.118,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18, 19],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [444]
    {  prize:3,
       numPegs:6,
       startX:348.238,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [445]
    {  prize:5,
       numPegs:6,
       startX:351.728,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [446]
    {  prize:4,
       numPegs:6,
       startX:351.178,
       bounceRecord: [1, 3, 8, 12, 8, 12],
       randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
    },
    // [447]
    {  prize:3,
       numPegs:6,
       startX:348.24,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [448]
    {  prize:5,
       numPegs:8,
       startX:351.678,
       bounceRecord: [1, 3, 6, 9, 8, 19, 14, 19],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [449]
    {  prize:5,
       numPegs:5,
       startX:351.34,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [450]
    {  prize:2,
       numPegs:5,
       startX:348.34,
       bounceRecord: [1, 2, 4, 8, 12],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [451]
    {  prize:7,
       numPegs:4,
       startX:351.822,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [452]
    {  prize:3,
       numPegs:7,
       startX:348.67,
       bounceRecord: [1, 2, 5, 8, 9, 18, 12],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [453]
    {  prize:3,
       numPegs:5,
       startX:351.5,
       bounceRecord: [1, 3, 5, 8, 17],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [454]
    {  prize:5,
       numPegs:6,
       startX:351.79,
       bounceRecord: [1, 3, 10, 15, 10, 15],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [455]
    {  prize:4,
       numPegs:7,
       startX:348.644,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [456]
    {  prize:4,
       numPegs:9,
       startX:351.748,
       bounceRecord: [1, 3, 6, 10, 9, 10, 19, 13, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [457]
    {  prize:7,
       numPegs:5,
       startX:351.746,
       bounceRecord: [1, 3, 6, 15, 21],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [458]
    {  prize:4,
       numPegs:9,
       startX:351.894,
       bounceRecord: [1, 6, 3, 6, 9, 10, 19, 13, 19],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [459]
    {  prize:6,
       numPegs:5,
       startX:348.842,
       bounceRecord: [1, 2, 14, 9, 14],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [460]
    {  prize:3,
       numPegs:6,
       startX:351.266,
       bounceRecord: [1, 3, 5, 8, 9, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [461]
    {  prize:6,
       numPegs:9,
       startX:351.372,
       bounceRecord: [1, 3, 5, 6, 5, 14, 10, 14, 20],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [462]
    {  prize:3,
       numPegs:8,
       startX:348.322,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [463]
    {  prize:5,
       numPegs:8,
       startX:348.1,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [464]
    {  prize:5,
       numPegs:6,
       startX:351.76,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [465]
    {  prize:5,
       numPegs:8,
       startX:351.188,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [466]
    {  prize:1,
       numPegs:3,
       startX:348.17,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [467]
    {  prize:4,
       numPegs:6,
       startX:351.174,
       bounceRecord: [1, 3, 8, 4, 8, 12],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [468]
    {  prize:7,
       numPegs:3,
       startX:348.618,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [469]
    {  prize:5,
       numPegs:6,
       startX:351.244,
       bounceRecord: [1, 3, 6, 9, 14, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [470]
    {  prize:7,
       numPegs:4,
       startX:348.61,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [471]
    {  prize:5,
       numPegs:6,
       startX:351.99,
       bounceRecord: [1, 6, 9, 14, 20, 19],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [472]
    {  prize:1,
       numPegs:6,
       startX:348.476,
       bounceRecord: [1, 2, 5, 12, 11, 16],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [473]
    {  prize:5,
       numPegs:7,
       startX:348.504,
       bounceRecord: [1, 2, 5, 8, 19, 14, 19],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [474]
    {  prize:2,
       numPegs:6,
       startX:351.17,
       bounceRecord: [1, 3, 8, 4, 8, 12],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [475]
    {  prize:5,
       numPegs:8,
       startX:348.126,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [476]
    {  prize:1,
       numPegs:3,
       startX:348.148,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [477]
    {  prize:3,
       numPegs:7,
       startX:348.632,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [478]
    {  prize:4,
       numPegs:8,
       startX:351.172,
       bounceRecord: [1, 3, 8, 4, 8, 12, 18, 19],
       randomDirections: [1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [479]
    {  prize:4,
       numPegs:5,
       startX:348.316,
       bounceRecord: [1, 2, 4, 8, 19],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [480]
    {  prize:5,
       numPegs:9,
       startX:348.68,
       bounceRecord: [1, 2, 5, 8, 9, 8, 19, 14, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [481]
    {  prize:7,
       numPegs:4,
       startX:351.822,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [482]
    {  prize:4,
       numPegs:6,
       startX:351.646,
       bounceRecord: [1, 3, 6, 9, 13, 12],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [483]
    {  prize:1,
       numPegs:3,
       startX:348.162,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [484]
    {  prize:3,
       numPegs:6,
       startX:348.094,
       bounceRecord: [1, 4, 8, 13, 12, 13],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [485]
    {  prize:7,
       numPegs:4,
       startX:351.786,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [486]
    {  prize:7,
       numPegs:4,
       startX:351.818,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [487]
    {  prize:1,
       numPegs:4,
       startX:348.202,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [488]
    {  prize:6,
       numPegs:4,
       startX:351.994,
       bounceRecord: [1, 6, 15, 14],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [489]
    {  prize:3,
       numPegs:5,
       startX:351.038,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [490]
    {  prize:5,
       numPegs:7,
       startX:348.688,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [491]
    {  prize:5,
       numPegs:7,
       startX:351.964,
       bounceRecord: [1, 6, 3, 6, 9, 14, 20],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [492]
    {  prize:7,
       numPegs:3,
       startX:348.838,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [493]
    {  prize:4,
       numPegs:6,
       startX:348.672,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [494]
    {  prize:3,
       numPegs:6,
       startX:351.462,
       bounceRecord: [1, 3, 5, 8, 9, 18],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [495]
    {  prize:6,
       numPegs:6,
       startX:351.812,
       bounceRecord: [1, 3, 10, 21, 15, 21],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [496]
    {  prize:5,
       numPegs:5,
       startX:348.912,
       bounceRecord: [1, 2, 5, 8, 13],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [497]
    {  prize:5,
       numPegs:6,
       startX:348.086,
       bounceRecord: [1, 4, 8, 13, 19, 20],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [498]
    {  prize:1,
       numPegs:4,
       startX:348.216,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [499]
    {  prize:6,
       numPegs:6,
       startX:348.752,
       bounceRecord: [1, 2, 4, 13, 20, 15],
       randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [500]
    {  prize:4,
       numPegs:9,
       startX:348.04,
       bounceRecord: [1, 4, 2, 4, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [501]
    {  prize:5,
       numPegs:8,
       startX:351.144,
       bounceRecord: [1, 3, 5, 9, 10, 19, 14, 19],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [502]
    {  prize:1,
       numPegs:5,
       startX:348.224,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [503]
    {  prize:2,
       numPegs:5,
       startX:348.206,
       bounceRecord: [1, 2, 7, 11, 12],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [504]
    {  prize:1,
       numPegs:5,
       startX:351.392,
       bounceRecord: [1, 3, 8, 7, 11],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [505]
    {  prize:4,
       numPegs:5,
       startX:351.522,
       bounceRecord: [1, 3, 5, 9, 10],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [506]
    {  prize:5,
       numPegs:8,
       startX:351.188,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [507]
    {  prize:4,
       numPegs:5,
       startX:351.912,
       bounceRecord: [1, 6, 9, 13, 12],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [508]
    {  prize:4,
       numPegs:8,
       startX:351.688,
       bounceRecord: [1, 3, 6, 9, 13, 12, 18, 19],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [509]
    {  prize:5,
       numPegs:8,
       startX:351.672,
       bounceRecord: [1, 3, 6, 5, 14, 10, 14, 15],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [510]
    {  prize:5,
       numPegs:6,
       startX:351.79,
       bounceRecord: [1, 3, 10, 15, 10, 15],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [511]
    {  prize:6,
       numPegs:9,
       startX:351.372,
       bounceRecord: [1, 3, 5, 6, 5, 14, 10, 14, 20],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [512]
    {  prize:3,
       numPegs:6,
       startX:348.578,
       bounceRecord: [1, 2, 9, 5, 9, 13],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [513]
    {  prize:4,
       numPegs:7,
       startX:348.886,
       bounceRecord: [1, 2, 5, 8, 19, 13, 19],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [514]
    {  prize:2,
       numPegs:4,
       startX:348.006,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [515]
    {  prize:3,
       numPegs:7,
       startX:348.302,
       bounceRecord: [1, 2, 4, 8, 12, 17, 18],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [516]
    {  prize:3,
       numPegs:8,
       startX:351.458,
       bounceRecord: [1, 3, 5, 8, 7, 18, 12, 18],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [517]
    {  prize:5,
       numPegs:7,
       startX:351.358,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [518]
    {  prize:1,
       numPegs:3,
       startX:348.158,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [519]
    {  prize:5,
       numPegs:3,
       startX:351.998,
       bounceRecord: [1, 6, 15],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [520]
    {  prize:4,
       numPegs:6,
       startX:351.328,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [521]
    {  prize:7,
       numPegs:4,
       startX:351.822,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [522]
    {  prize:7,
       numPegs:3,
       startX:348.62,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [523]
    {  prize:5,
       numPegs:7,
       startX:351.952,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [524]
    {  prize:1,
       numPegs:5,
       startX:351.392,
       bounceRecord: [1, 3, 8, 7, 11],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [525]
    {  prize:3,
       numPegs:8,
       startX:351.9,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [526]
    {  prize:3,
       numPegs:9,
       startX:351.32,
       bounceRecord: [1, 3, 5, 9, 8, 9, 18, 12, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [527]
    {  prize:7,
       numPegs:5,
       startX:351.732,
       bounceRecord: [1, 3, 6, 10, 15],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [528]
    {  prize:5,
       numPegs:7,
       startX:351.04,
       bounceRecord: [1, 3, 5, 8, 19, 14, 19],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [529]
    {  prize:4,
       numPegs:8,
       startX:351.44,
       bounceRecord: [1, 3, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [530]
    {  prize:4,
       numPegs:9,
       startX:351.878,
       bounceRecord: [1, 6, 3, 6, 9, 10, 19, 13, 19],
       randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [531]
    {  prize:3,
       numPegs:8,
       startX:351.9,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [532]
    {  prize:5,
       numPegs:6,
       startX:348.674,
       bounceRecord: [1, 2, 5, 8, 13, 19],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [533]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [534]
    {  prize:1,
       numPegs:4,
       startX:348.182,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [535]
    {  prize:2,
       numPegs:4,
       startX:348.004,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [536]
    {  prize:7,
       numPegs:3,
       startX:351.838,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [537]
    {  prize:2,
       numPegs:7,
       startX:348.334,
       bounceRecord: [1, 2, 4, 8, 7, 8, 17],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [538]
    {  prize:2,
       numPegs:4,
       startX:351.182,
       bounceRecord: [1, 3, 8, 17],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, 1, 1]
    },
    // [539]
    {  prize:2,
       numPegs:5,
       startX:348.274,
       bounceRecord: [1, 2, 4, 11, 16],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [540]
    {  prize:7,
       numPegs:5,
       startX:351.746,
       bounceRecord: [1, 3, 6, 15, 21],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [541]
    {  prize:4,
       numPegs:5,
       startX:348.946,
       bounceRecord: [1, 2, 5, 14, 19],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [542]
    {  prize:5,
       numPegs:7,
       startX:348.324,
       bounceRecord: [1, 2, 4, 13, 9, 13, 19],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [543]
    {  prize:6,
       numPegs:8,
       startX:351.67,
       bounceRecord: [1, 3, 6, 5, 14, 10, 14, 20],
       randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [544]
    {  prize:2,
       numPegs:5,
       startX:348.184,
       bounceRecord: [1, 2, 7, 16, 17],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [545]
    {  prize:5,
       numPegs:9,
       startX:351.348,
       bounceRecord: [1, 3, 5, 9, 10, 14, 13, 19, 20],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [546]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [547]
    {  prize:6,
       numPegs:6,
       startX:348.83,
       bounceRecord: [1, 2, 9, 6, 9, 14],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [548]
    {  prize:4,
       numPegs:5,
       startX:348.088,
       bounceRecord: [1, 4, 8, 13, 14],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [549]
    {  prize:4,
       numPegs:6,
       startX:348.826,
       bounceRecord: [1, 2, 9, 6, 9, 14],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [550]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [551]
    {  prize:4,
       numPegs:8,
       startX:351.354,
       bounceRecord: [1, 3, 5, 9, 10, 14, 13, 14],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [552]
    {  prize:3,
       numPegs:5,
       startX:351.038,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [553]
    {  prize:3,
       numPegs:7,
       startX:351.314,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [554]
    {  prize:4,
       numPegs:7,
       startX:348.654,
       bounceRecord: [1, 2, 5, 8, 7, 18, 19],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [555]
    {  prize:4,
       numPegs:7,
       startX:348.644,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [556]
    {  prize:5,
       numPegs:5,
       startX:351.34,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [557]
    {  prize:3,
       numPegs:7,
       startX:348.302,
       bounceRecord: [1, 2, 4, 8, 12, 17, 18],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [558]
    {  prize:5,
       numPegs:6,
       startX:351.54,
       bounceRecord: [1, 3, 5, 9, 10, 19],
       randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [559]
    {  prize:7,
       numPegs:3,
       startX:348.618,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [560]
    {  prize:5,
       numPegs:7,
       startX:348.94,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [561]
    {  prize:4,
       numPegs:6,
       startX:351.102,
       bounceRecord: [1, 3, 5, 9, 14, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [562]
    {  prize:3,
       numPegs:7,
       startX:348.96,
       bounceRecord: [1, 2, 5, 9, 18, 12, 18],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [563]
    {  prize:5,
       numPegs:7,
       startX:351.966,
       bounceRecord: [1, 6, 3, 6, 9, 8, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [564]
    {  prize:4,
       numPegs:9,
       startX:351.748,
       bounceRecord: [1, 3, 6, 10, 9, 10, 19, 13, 19],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [565]
    {  prize:2,
       numPegs:8,
       startX:348.706,
       bounceRecord: [1, 2, 5, 12, 7, 12, 17, 16],
       randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [566]
    {  prize:1,
       numPegs:4,
       startX:351.39,
       bounceRecord: [1, 3, 8, 16],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [567]
    {  prize:3,
       numPegs:8,
       startX:348.95,
       bounceRecord: [1, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [568]
    {  prize:5,
       numPegs:8,
       startX:348.814,
       bounceRecord: [1, 2, 5, 6, 13, 9, 13, 19],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [569]
    {  prize:3,
       numPegs:7,
       startX:348.85,
       bounceRecord: [1, 2, 5, 8, 7, 12, 18],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [570]
    {  prize:4,
       numPegs:5,
       startX:351.692,
       bounceRecord: [1, 3, 6, 13, 12],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [571]
    {  prize:6,
       numPegs:8,
       startX:351.95,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15, 14],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [572]
    {  prize:6,
       numPegs:8,
       startX:351.948,
       bounceRecord: [1, 6, 3, 6, 9, 14, 20, 21],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [573]
    {  prize:6,
       numPegs:7,
       startX:351.092,
       bounceRecord: [1, 3, 5, 9, 14, 15, 14],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [574]
    {  prize:5,
       numPegs:7,
       startX:351.656,
       bounceRecord: [1, 3, 6, 9, 20, 14, 20],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [575]
    {  prize:3,
       numPegs:6,
       startX:348.46,
       bounceRecord: [1, 2, 5, 8, 7, 18],
       randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [576]
    {  prize:3,
       numPegs:6,
       startX:351.462,
       bounceRecord: [1, 3, 5, 8, 9, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [577]
    {  prize:4,
       numPegs:8,
       startX:351.308,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [578]
    {  prize:4,
       numPegs:6,
       startX:351.102,
       bounceRecord: [1, 3, 5, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, 1, -1]
    },
    // [579]
    {  prize:5,
       numPegs:9,
       startX:351.348,
       bounceRecord: [1, 3, 5, 9, 10, 14, 13, 19, 20],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [580]
    {  prize:3,
       numPegs:8,
       startX:351.466,
       bounceRecord: [1, 3, 5, 8, 12, 11, 17, 18],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [581]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [582]
    {  prize:7,
       numPegs:4,
       startX:348.612,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [583]
    {  prize:2,
       numPegs:8,
       startX:348.706,
       bounceRecord: [1, 2, 5, 12, 7, 12, 17, 16],
       randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [584]
    {  prize:5,
       numPegs:7,
       startX:348.324,
       bounceRecord: [1, 2, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [585]
    {  prize:4,
       numPegs:7,
       startX:351.35,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [586]
    {  prize:2,
       numPegs:7,
       startX:348.908,
       bounceRecord: [1, 2, 5, 8, 12, 11, 12],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [587]
    {  prize:3,
       numPegs:5,
       startX:351.444,
       bounceRecord: [1, 3, 5, 8, 17],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [588]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [589]
    {  prize:4,
       numPegs:7,
       startX:348.598,
       bounceRecord: [1, 2, 9, 13, 12, 18, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [590]
    {  prize:1,
       numPegs:5,
       startX:348.266,
       bounceRecord: [1, 2, 4, 7, 16],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [591]
    {  prize:5,
       numPegs:6,
       startX:351.134,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [592]
    {  prize:3,
       numPegs:8,
       startX:348.108,
       bounceRecord: [1, 4, 2, 4, 8, 17, 12, 17],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [593]
    {  prize:4,
       numPegs:6,
       startX:351.652,
       bounceRecord: [1, 3, 6, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [594]
    {  prize:2,
       numPegs:9,
       startX:348.626,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [595]
    {  prize:3,
       numPegs:8,
       startX:348.318,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [596]
    {  prize:2,
       numPegs:8,
       startX:348.33,
       bounceRecord: [1, 2, 4, 5, 12, 7, 12, 17],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [597]
    {  prize:1,
       numPegs:3,
       startX:348.136,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [598]
    {  prize:5,
       numPegs:6,
       startX:351.256,
       bounceRecord: [1, 3, 5, 8, 13, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, 1, 1, 1]
    },
    // [599]
    {  prize:2,
       numPegs:9,
       startX:348.63,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17, 16, 17],
       randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [600]
    {  prize:4,
       numPegs:5,
       startX:351.692,
       bounceRecord: [1, 3, 6, 13, 12],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [601]
    {  prize:5,
       numPegs:6,
       startX:351.69,
       bounceRecord: [1, 3, 6, 9, 14, 20],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [602]
    {  prize:3,
       numPegs:6,
       startX:348.864,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [603]
    {  prize:2,
       numPegs:5,
       startX:348.184,
       bounceRecord: [1, 2, 7, 16, 17],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
    },
    // [604]
    {  prize:3,
       numPegs:6,
       startX:348.864,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [605]
    {  prize:5,
       numPegs:5,
       startX:351.302,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [606]
    {  prize:4,
       numPegs:6,
       startX:351.048,
       bounceRecord: [1, 3, 5, 8, 19, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [607]
    {  prize:2,
       numPegs:5,
       startX:348.702,
       bounceRecord: [1, 2, 5, 8, 17],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [608]
    {  prize:3,
       numPegs:6,
       startX:348.744,
       bounceRecord: [1, 2, 5, 9, 13, 18],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [609]
    {  prize:3,
       numPegs:7,
       startX:348.26,
       bounceRecord: [1, 2, 4, 11, 7, 11, 17],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [610]
    {  prize:3,
       numPegs:6,
       startX:348.46,
       bounceRecord: [1, 2, 5, 8, 7, 18],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [611]
    {  prize:5,
       numPegs:7,
       startX:348.504,
       bounceRecord: [1, 2, 5, 8, 19, 14, 19],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [612]
    {  prize:5,
       numPegs:7,
       startX:351.482,
       bounceRecord: [1, 3, 5, 9, 13, 19, 20],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [613]
    {  prize:4,
       numPegs:5,
       startX:351.912,
       bounceRecord: [1, 6, 9, 13, 12],
       randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [614]
    {  prize:3,
       numPegs:6,
       startX:348.658,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [615]
    {  prize:5,
       numPegs:6,
       startX:351.128,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [616]
    {  prize:5,
       numPegs:5,
       startX:348.5,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [617]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [618]
    {  prize:5,
       numPegs:5,
       startX:351.73,
       bounceRecord: [1, 3, 6, 10, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [619]
    {  prize:4,
       numPegs:6,
       startX:351.652,
       bounceRecord: [1, 3, 6, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [620]
    {  prize:1,
       numPegs:4,
       startX:348.182,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [621]
    {  prize:4,
       numPegs:5,
       startX:351.364,
       bounceRecord: [1, 3, 5, 14, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [622]
    {  prize:3,
       numPegs:8,
       startX:348.044,
       bounceRecord: [1, 4, 2, 4, 8, 17, 12, 17],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [623]
    {  prize:3,
       numPegs:7,
       startX:351.052,
       bounceRecord: [1, 3, 5, 12, 17, 12, 17],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [624]
    {  prize:4,
       numPegs:6,
       startX:348.668,
       bounceRecord: [1, 2, 5, 8, 13, 14],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [625]
    {  prize:6,
       numPegs:5,
       startX:351.298,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [626]
    {  prize:7,
       numPegs:4,
       startX:351.788,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [627]
    {  prize:3,
       numPegs:8,
       startX:348.322,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [628]
    {  prize:7,
       numPegs:4,
       startX:348.614,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [629]
    {  prize:6,
       numPegs:9,
       startX:351.37,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20, 21, 20],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [630]
    {  prize:3,
       numPegs:6,
       startX:348.864,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [631]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [632]
    {  prize:7,
       numPegs:3,
       startX:351.85,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [633]
    {  prize:4,
       numPegs:8,
       startX:351.308,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [634]
    {  prize:3,
       numPegs:8,
       startX:351.874,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [635]
    {  prize:5,
       numPegs:6,
       startX:351.244,
       bounceRecord: [1, 3, 6, 9, 14, 19],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [636]
    {  prize:3,
       numPegs:9,
       startX:348.046,
       bounceRecord: [1, 4, 2, 4, 8, 12, 11, 17, 18],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [637]
    {  prize:2,
       numPegs:7,
       startX:348.48,
       bounceRecord: [1, 2, 5, 8, 17, 11, 17],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [638]
    {  prize:1,
       numPegs:4,
       startX:348.264,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [639]
    {  prize:5,
       numPegs:7,
       startX:348.688,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [640]
    {  prize:5,
       numPegs:7,
       startX:351.452,
       bounceRecord: [1, 3, 5, 8, 13, 14, 13],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [641]
    {  prize:1,
       numPegs:4,
       startX:348.264,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [642]
    {  prize:1,
       numPegs:3,
       startX:348.156,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [643]
    {  prize:4,
       numPegs:6,
       startX:348.826,
       bounceRecord: [1, 2, 9, 6, 9, 14],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [644]
    {  prize:3,
       numPegs:8,
       startX:348.812,
       bounceRecord: [1, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [645]
    {  prize:5,
       numPegs:7,
       startX:348.932,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [646]
    {  prize:1,
       numPegs:3,
       startX:348.144,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [647]
    {  prize:1,
       numPegs:3,
       startX:348.158,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [648]
    {  prize:3,
       numPegs:5,
       startX:348.698,
       bounceRecord: [1, 2, 5, 8, 17],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [649]
    {  prize:1,
       numPegs:3,
       startX:348.136,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [650]
    {  prize:6,
       numPegs:6,
       startX:351.812,
       bounceRecord: [1, 3, 10, 21, 15, 21],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [651]
    {  prize:1,
       numPegs:4,
       startX:348.198,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [652]
    {  prize:5,
       numPegs:8,
       startX:351.892,
       bounceRecord: [1, 6, 3, 6, 9, 20, 14, 20],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [653]
    {  prize:7,
       numPegs:3,
       startX:351.864,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [654]
    {  prize:7,
       numPegs:4,
       startX:351.784,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [655]
    {  prize:3,
       numPegs:8,
       startX:348.856,
       bounceRecord: [1, 2, 5, 8, 7, 18, 12, 18],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [656]
    {  prize:3,
       numPegs:5,
       startX:348.894,
       bounceRecord: [1, 2, 5, 12, 13],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [657]
    {  prize:3,
       numPegs:5,
       startX:348.208,
       bounceRecord: [1, 2, 7, 11, 17],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [658]
    {  prize:1,
       numPegs:4,
       startX:348.198,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [659]
    {  prize:5,
       numPegs:6,
       startX:351.79,
       bounceRecord: [1, 3, 10, 15, 10, 15],
       randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [660]
    {  prize:2,
       numPegs:8,
       startX:348.05,
       bounceRecord: [1, 4, 2, 4, 8, 12, 11, 12],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [661]
    {  prize:1,
       numPegs:3,
       startX:351.382,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, 1]
    },
    // [662]
    {  prize:2,
       numPegs:4,
       startX:348.004,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [663]
    {  prize:5,
       numPegs:7,
       startX:351.15,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [664]
    {  prize:6,
       numPegs:6,
       startX:351.772,
       bounceRecord: [1, 3, 6, 10, 15, 20],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [665]
    {  prize:3,
       numPegs:7,
       startX:348.67,
       bounceRecord: [1, 2, 5, 8, 9, 18, 12],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [666]
    {  prize:3,
       numPegs:3,
       startX:348.002,
       bounceRecord: [1, 4, 11],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [667]
    {  prize:5,
       numPegs:3,
       startX:351.998,
       bounceRecord: [1, 6, 15],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [668]
    {  prize:4,
       numPegs:7,
       startX:348.064,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [669]
    {  prize:3,
       numPegs:7,
       startX:351.45,
       bounceRecord: [1, 3, 5, 8, 13, 18, 17],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [670]
    {  prize:3,
       numPegs:7,
       startX:351.408,
       bounceRecord: [1, 3, 8, 9, 18, 12, 18],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [671]
    {  prize:4,
       numPegs:8,
       startX:351.44,
       bounceRecord: [1, 3, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [672]
    {  prize:1,
       numPegs:3,
       startX:348.148,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [673]
    {  prize:7,
       numPegs:3,
       startX:351.842,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [674]
    {  prize:5,
       numPegs:6,
       startX:348.59,
       bounceRecord: [1, 2, 9, 13, 9, 13],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [675]
    {  prize:3,
       numPegs:7,
       startX:351.45,
       bounceRecord: [1, 3, 5, 8, 13, 18, 17],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [676]
    {  prize:2,
       numPegs:5,
       startX:351.158,
       bounceRecord: [1, 3, 12, 8, 12],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [677]
    {  prize:4,
       numPegs:6,
       startX:348.672,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [678]
    {  prize:2,
       numPegs:6,
       startX:348.7,
       bounceRecord: [1, 2, 5, 8, 12, 17],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [679]
    {  prize:4,
       numPegs:6,
       startX:348.676,
       bounceRecord: [1, 2, 5, 8, 13, 14],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [680]
    {  prize:7,
       numPegs:3,
       startX:351.84,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [681]
    {  prize:5,
       numPegs:9,
       startX:348.016,
       bounceRecord: [1, 4, 2, 4, 13, 9, 13, 19, 20],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [682]
    {  prize:4,
       numPegs:8,
       startX:351.438,
       bounceRecord: [1, 3, 5, 8, 7, 12, 13, 12],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [683]
    {  prize:3,
       numPegs:7,
       startX:351.052,
       bounceRecord: [1, 3, 5, 12, 17, 12, 17],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [684]
    {  prize:7,
       numPegs:4,
       startX:351.826,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [685]
    {  prize:4,
       numPegs:5,
       startX:351.692,
       bounceRecord: [1, 3, 6, 13, 12],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [686]
    {  prize:3,
       numPegs:8,
       startX:351.902,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [687]
    {  prize:3,
       numPegs:8,
       startX:351.112,
       bounceRecord: [1, 3, 5, 6, 13, 8, 13, 18],
       randomDirections: [1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [688]
    {  prize:4,
       numPegs:8,
       startX:351.43,
       bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [689]
    {  prize:4,
       numPegs:6,
       startX:351.648,
       bounceRecord: [1, 3, 6, 9, 13, 12],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [690]
    {  prize:7,
       numPegs:3,
       startX:351.848,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [691]
    {  prize:5,
       numPegs:7,
       startX:348.682,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [692]
    {  prize:1,
       numPegs:4,
       startX:348.198,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [693]
    {  prize:5,
       numPegs:6,
       startX:348.746,
       bounceRecord: [1, 2, 5, 9, 14, 15],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [694]
    {  prize:4,
       numPegs:6,
       startX:348.352,
       bounceRecord: [1, 2, 4, 8, 13, 14],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [695]
    {  prize:3,
       numPegs:8,
       startX:351.418,
       bounceRecord: [1, 3, 8, 5, 8, 13, 18, 17],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [696]
    {  prize:3,
       numPegs:7,
       startX:348.632,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [697]
    {  prize:6,
       numPegs:4,
       startX:352,
       bounceRecord: [1, 6, 15, 20],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [698]
    {  prize:7,
       numPegs:3,
       startX:348.84,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [699]
    {  prize:2,
       numPegs:7,
       startX:348.338,
       bounceRecord: [1, 2, 4, 8, 12, 11, 12],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [700]
    {  prize:3,
       numPegs:6,
       startX:348.756,
       bounceRecord: [1, 2, 4, 8, 12, 18],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [701]
    {  prize:6,
       numPegs:6,
       startX:351.3,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [702]
    {  prize:5,
       numPegs:8,
       startX:351.674,
       bounceRecord: [1, 3, 6, 5, 14, 10, 14, 15],
       randomDirections: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [703]
    {  prize:4,
       numPegs:8,
       startX:348.656,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [704]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [705]
    {  prize:5,
       numPegs:7,
       startX:351.358,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [706]
    {  prize:3,
       numPegs:9,
       startX:351.366,
       bounceRecord: [1, 3, 5, 6, 8, 9, 18, 12, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [707]
    {  prize:5,
       numPegs:7,
       startX:351.964,
       bounceRecord: [1, 6, 3, 6, 9, 14, 20],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [708]
    {  prize:3,
       numPegs:6,
       startX:351.118,
       bounceRecord: [1, 3, 5, 9, 13, 18],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [709]
    {  prize:2,
       numPegs:4,
       startX:348.004,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [710]
    {  prize:3,
       numPegs:8,
       startX:348.356,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [711]
    {  prize:5,
       numPegs:5,
       startX:348.912,
       bounceRecord: [1, 2, 5, 8, 13],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [712]
    {  prize:5,
       numPegs:5,
       startX:348.556,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [713]
    {  prize:1,
       numPegs:4,
       startX:351.384,
       bounceRecord: [1, 3, 8, 16],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [714]
    {  prize:4,
       numPegs:8,
       startX:351.972,
       bounceRecord: [1, 6, 3, 6, 9, 13, 12, 18],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [715]
    {  prize:6,
       numPegs:6,
       startX:348.942,
       bounceRecord: [1, 2, 5, 9, 14, 20],
       randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [716]
    {  prize:7,
       numPegs:4,
       startX:351.822,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [717]
    {  prize:5,
       numPegs:8,
       startX:351.05,
       bounceRecord: [1, 3, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [718]
    {  prize:3,
       numPegs:6,
       startX:348.272,
       bounceRecord: [1, 2, 4, 7, 12, 18],
       randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [719]
    {  prize:4,
       numPegs:8,
       startX:348.118,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18, 19],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [720]
    {  prize:6,
       numPegs:6,
       startX:348.942,
       bounceRecord: [1, 2, 5, 9, 14, 20],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [721]
    {  prize:4,
       numPegs:6,
       startX:351.962,
       bounceRecord: [1, 6, 3, 6, 9, 14],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [722]
    {  prize:3,
       numPegs:6,
       startX:351.118,
       bounceRecord: [1, 3, 5, 9, 13, 18],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [723]
    {  prize:4,
       numPegs:5,
       startX:351.132,
       bounceRecord: [1, 3, 5, 9, 14],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [724]
    {  prize:6,
       numPegs:8,
       startX:351.948,
       bounceRecord: [1, 6, 3, 6, 9, 14, 20, 21],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [725]
    {  prize:3,
       numPegs:7,
       startX:348.896,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [726]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [727]
    {  prize:4,
       numPegs:8,
       startX:351.152,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [728]
    {  prize:3,
       numPegs:7,
       startX:348.67,
       bounceRecord: [1, 2, 5, 8, 9, 18, 12],
       randomDirections: [-1, 1, 1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [729]
    {  prize:7,
       numPegs:3,
       startX:348.62,
       bounceRecord: [1, 2, 9],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [730]
    {  prize:5,
       numPegs:6,
       startX:348.086,
       bounceRecord: [1, 4, 8, 13, 19, 20],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [731]
    {  prize:3,
       numPegs:8,
       startX:351.874,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [732]
    {  prize:7,
       numPegs:4,
       startX:351.798,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [733]
    {  prize:6,
       numPegs:8,
       startX:351.67,
       bounceRecord: [1, 3, 6, 5, 14, 10, 14, 20],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [734]
    {  prize:4,
       numPegs:8,
       startX:348.848,
       bounceRecord: [1, 2, 5, 8, 7, 12, 18, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [735]
    {  prize:3,
       numPegs:7,
       startX:351.052,
       bounceRecord: [1, 3, 5, 12, 17, 12, 17],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [736]
    {  prize:4,
       numPegs:8,
       startX:348.646,
       bounceRecord: [1, 2, 5, 8, 7, 12, 13, 12],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [737]
    {  prize:7,
       numPegs:3,
       startX:351.844,
       bounceRecord: [1, 3, 10],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [738]
    {  prize:6,
       numPegs:7,
       startX:351.092,
       bounceRecord: [1, 3, 5, 9, 14, 15, 14],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [739]
    {  prize:3,
       numPegs:7,
       startX:351.122,
       bounceRecord: [1, 3, 5, 9, 18, 12, 18],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [740]
    {  prize:5,
       numPegs:6,
       startX:351.79,
       bounceRecord: [1, 3, 10, 15, 10, 15],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [741]
    {  prize:5,
       numPegs:7,
       startX:351.044,
       bounceRecord: [1, 3, 5, 8, 13, 19, 20],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [742]
    {  prize:5,
       numPegs:7,
       startX:348.324,
       bounceRecord: [1, 2, 4, 13, 9, 13, 19],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [743]
    {  prize:4,
       numPegs:8,
       startX:351.688,
       bounceRecord: [1, 3, 6, 9, 13, 12, 18, 19],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [744]
    {  prize:4,
       numPegs:6,
       startX:351.64,
       bounceRecord: [1, 3, 6, 9, 13, 18],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [745]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [-1, 1, 1, 1, -1, -1, -1, 1, 1, -1]
    },
    // [746]
    {  prize:4,
       numPegs:8,
       startX:348.12,
       bounceRecord: [1, 4, 2, 4, 8, 12, 13, 12],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [747]
    {  prize:4,
       numPegs:6,
       startX:348.348,
       bounceRecord: [1, 2, 4, 8, 12, 18],
       randomDirections: [-1, -1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [748]
    {  prize:5,
       numPegs:6,
       startX:351.334,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [-1, -1, 1, 1, -1, 1, 1, -1, -1, -1]
    },
    // [749]
    {  prize:4,
       numPegs:6,
       startX:351.962,
       bounceRecord: [1, 6, 3, 6, 9, 14],
       randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [750]
    {  prize:4,
       numPegs:8,
       startX:351.486,
       bounceRecord: [1, 3, 5, 9, 10, 19, 13, 19],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [751]
    {  prize:7,
       numPegs:4,
       startX:351.804,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [752]
    {  prize:4,
       numPegs:8,
       startX:348.828,
       bounceRecord: [1, 2, 9, 6, 9, 14, 19, 18],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [753]
    {  prize:5,
       numPegs:7,
       startX:348.696,
       bounceRecord: [1, 2, 5, 8, 7, 18, 19],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [754]
    {  prize:4,
       numPegs:8,
       startX:351.284,
       bounceRecord: [1, 3, 5, 9, 13, 19, 13, 19],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [755]
    {  prize:6,
       numPegs:7,
       startX:351.092,
       bounceRecord: [1, 3, 5, 9, 14, 15, 14],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [756]
    {  prize:5,
       numPegs:6,
       startX:351.654,
       bounceRecord: [1, 3, 6, 9, 14, 13],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [757]
    {  prize:5,
       numPegs:7,
       startX:351.908,
       bounceRecord: [1, 6, 9, 8, 19, 14, 19],
       randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [758]
    {  prize:4,
       numPegs:8,
       startX:348.828,
       bounceRecord: [1, 2, 9, 6, 9, 14, 19, 18],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [759]
    {  prize:3,
       numPegs:3,
       startX:348.002,
       bounceRecord: [1, 4, 11],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [760]
    {  prize:5,
       numPegs:5,
       startX:351.792,
       bounceRecord: [1, 3, 10, 15, 20],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [761]
    {  prize:4,
       numPegs:9,
       startX:348.32,
       bounceRecord: [1, 2, 4, 8, 9, 13, 12, 18, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [762]
    {  prize:6,
       numPegs:5,
       startX:348.842,
       bounceRecord: [1, 2, 14, 9, 14],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [763]
    {  prize:7,
       numPegs:4,
       startX:351.82,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [764]
    {  prize:5,
       numPegs:7,
       startX:351.33,
       bounceRecord: [1, 3, 5, 9, 8, 19, 14],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [765]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [766]
    {  prize:1,
       numPegs:5,
       startX:348.234,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [767]
    {  prize:5,
       numPegs:7,
       startX:351.482,
       bounceRecord: [1, 3, 5, 9, 13, 19, 20],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [768]
    {  prize:7,
       numPegs:5,
       startX:351.78,
       bounceRecord: [1, 3, 6, 10, 21],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [769]
    {  prize:4,
       numPegs:7,
       startX:348.54,
       bounceRecord: [1, 2, 5, 9, 14, 19, 18],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [770]
    {  prize:2,
       numPegs:7,
       startX:348.232,
       bounceRecord: [1, 2, 4, 7, 16, 11, 16],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [771]
    {  prize:5,
       numPegs:7,
       startX:351.33,
       bounceRecord: [1, 3, 5, 9, 8, 19, 14],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [772]
    {  prize:1,
       numPegs:4,
       startX:348.214,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [773]
    {  prize:5,
       numPegs:6,
       startX:351.134,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [774]
    {  prize:4,
       numPegs:7,
       startX:348.54,
       bounceRecord: [1, 2, 5, 9, 14, 19, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [775]
    {  prize:5,
       numPegs:5,
       startX:348.5,
       bounceRecord: [1, 2, 5, 9, 20],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [776]
    {  prize:4,
       numPegs:8,
       startX:348.646,
       bounceRecord: [1, 2, 5, 8, 7, 12, 13, 12],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [777]
    {  prize:1,
       numPegs:5,
       startX:348.224,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [778]
    {  prize:3,
       numPegs:7,
       startX:348.096,
       bounceRecord: [1, 4, 2, 4, 8, 9, 18],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [779]
    {  prize:4,
       numPegs:5,
       startX:351.522,
       bounceRecord: [1, 3, 5, 9, 10],
       randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [780]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [781]
    {  prize:5,
       numPegs:8,
       startX:351.144,
       bounceRecord: [1, 3, 5, 9, 10, 19, 14, 19],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [782]
    {  prize:2,
       numPegs:5,
       startX:348.274,
       bounceRecord: [1, 2, 4, 11, 16],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [783]
    {  prize:3,
       numPegs:6,
       startX:351.326,
       bounceRecord: [1, 3, 5, 9, 13, 18],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [784]
    {  prize:4,
       numPegs:5,
       startX:351.918,
       bounceRecord: [1, 6, 9, 13, 19],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [785]
    {  prize:5,
       numPegs:7,
       startX:351.104,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [786]
    {  prize:4,
       numPegs:8,
       startX:351.882,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19, 18],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, -1]
    },
    // [787]
    {  prize:6,
       numPegs:6,
       startX:351.49,
       bounceRecord: [1, 3, 5, 14, 10, 14],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [788]
    {  prize:3,
       numPegs:6,
       startX:351.254,
       bounceRecord: [1, 3, 5, 8, 12, 11],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [789]
    {  prize:3,
       numPegs:5,
       startX:351.088,
       bounceRecord: [1, 3, 5, 9, 13],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [790]
    {  prize:4,
       numPegs:9,
       startX:348.252,
       bounceRecord: [1, 2, 4, 7, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [791]
    {  prize:4,
       numPegs:8,
       startX:348.692,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, 1]
    },
    // [792]
    {  prize:4,
       numPegs:5,
       startX:351.692,
       bounceRecord: [1, 3, 6, 13, 12],
       randomDirections: [1, -1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [793]
    {  prize:3,
       numPegs:7,
       startX:351.496,
       bounceRecord: [1, 3, 5, 9, 18, 12, 18],
       randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [794]
    {  prize:5,
       numPegs:6,
       startX:351.134,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [795]
    {  prize:3,
       numPegs:8,
       startX:351.466,
       bounceRecord: [1, 3, 5, 8, 12, 11, 17, 18],
       randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [796]
    {  prize:7,
       numPegs:4,
       startX:351.782,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [797]
    {  prize:3,
       numPegs:5,
       startX:351.038,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [-1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [798]
    {  prize:1,
       numPegs:4,
       startX:348.212,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [799]
    {  prize:7,
       numPegs:4,
       startX:351.784,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, -1, 1]
    },
    // [800]
    {  prize:7,
       numPegs:4,
       startX:351.798,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [801]
    {  prize:4,
       numPegs:5,
       startX:348.946,
       bounceRecord: [1, 2, 5, 14, 19],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [802]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [803]
    {  prize:5,
       numPegs:6,
       startX:351.242,
       bounceRecord: [1, 3, 6, 9, 13, 19],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, -1]
    },
    // [804]
    {  prize:4,
       numPegs:6,
       startX:351.12,
       bounceRecord: [1, 3, 5, 9, 13, 19],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, -1]
    },
    // [805]
    {  prize:1,
       numPegs:4,
       startX:348.202,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [806]
    {  prize:7,
       numPegs:6,
       startX:351.774,
       bounceRecord: [1, 3, 6, 10, 15, 21],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [807]
    {  prize:2,
       numPegs:4,
       startX:348.006,
       bounceRecord: [1, 4, 11, 12],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [808]
    {  prize:7,
       numPegs:4,
       startX:351.828,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [809]
    {  prize:4,
       numPegs:8,
       startX:351.44,
       bounceRecord: [1, 3, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [810]
    {  prize:2,
       numPegs:6,
       startX:348.7,
       bounceRecord: [1, 2, 5, 8, 12, 17],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [811]
    {  prize:3,
       numPegs:8,
       startX:348.856,
       bounceRecord: [1, 2, 5, 8, 7, 18, 12, 18],
       randomDirections: [-1, -1, 1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [812]
    {  prize:5,
       numPegs:5,
       startX:351.73,
       bounceRecord: [1, 3, 6, 10, 19],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [813]
    {  prize:4,
       numPegs:7,
       startX:348.544,
       bounceRecord: [1, 2, 5, 14, 9, 14, 19],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [814]
    {  prize:3,
       numPegs:7,
       startX:351.87,
       bounceRecord: [1, 6, 3, 6, 9, 13, 18],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [815]
    {  prize:5,
       numPegs:7,
       startX:351.104,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [816]
    {  prize:1,
       numPegs:5,
       startX:348.19,
       bounceRecord: [1, 2, 7, 11, 16],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [817]
    {  prize:4,
       numPegs:8,
       startX:351.438,
       bounceRecord: [1, 3, 5, 8, 7, 12, 13, 12],
       randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [818]
    {  prize:2,
       numPegs:5,
       startX:348.184,
       bounceRecord: [1, 2, 7, 16, 17],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [819]
    {  prize:4,
       numPegs:6,
       startX:348.898,
       bounceRecord: [1, 2, 5, 8, 12, 18],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [820]
    {  prize:1,
       numPegs:3,
       startX:348.156,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [821]
    {  prize:3,
       numPegs:6,
       startX:348.244,
       bounceRecord: [1, 2, 4, 7, 12, 17],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [822]
    {  prize:1,
       numPegs:5,
       startX:348.224,
       bounceRecord: [1, 2, 4, 7, 11],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [823]
    {  prize:5,
       numPegs:6,
       startX:351.754,
       bounceRecord: [1, 3, 6, 10, 14, 13],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [824]
    {  prize:7,
       numPegs:4,
       startX:351.784,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [825]
    {  prize:3,
       numPegs:8,
       startX:348.044,
       bounceRecord: [1, 4, 2, 4, 8, 17, 12, 17],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [826]
    {  prize:4,
       numPegs:8,
       startX:351.44,
       bounceRecord: [1, 3, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [827]
    {  prize:7,
       numPegs:5,
       startX:351.776,
       bounceRecord: [1, 3, 6, 10, 15],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [828]
    {  prize:1,
       numPegs:3,
       startX:348.166,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [829]
    {  prize:5,
       numPegs:9,
       startX:348.684,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13, 19, 20],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [830]
    {  prize:7,
       numPegs:3,
       startX:351.842,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [831]
    {  prize:1,
       numPegs:4,
       startX:348.134,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [832]
    {  prize:4,
       numPegs:7,
       startX:348.282,
       bounceRecord: [1, 2, 4, 7, 12, 18, 19],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [833]
    {  prize:3,
       numPegs:6,
       startX:348.658,
       bounceRecord: [1, 2, 5, 8, 12, 11],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [834]
    {  prize:6,
       numPegs:9,
       startX:351.374,
       bounceRecord: [1, 3, 5, 6, 5, 14, 10, 14, 20],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [835]
    {  prize:1,
       numPegs:3,
       startX:348.16,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [836]
    {  prize:4,
       numPegs:5,
       startX:348.946,
       bounceRecord: [1, 2, 5, 14, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [837]
    {  prize:4,
       numPegs:5,
       startX:351.522,
       bounceRecord: [1, 3, 5, 9, 10],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
    },
    // [838]
    {  prize:3,
       numPegs:8,
       startX:348.108,
       bounceRecord: [1, 4, 2, 4, 8, 17, 12, 17],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [839]
    {  prize:3,
       numPegs:8,
       startX:351.458,
       bounceRecord: [1, 3, 5, 8, 7, 18, 12, 18],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [840]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, 1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [841]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [842]
    {  prize:1,
       numPegs:5,
       startX:348.266,
       bounceRecord: [1, 2, 4, 7, 16],
       randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [843]
    {  prize:1,
       numPegs:4,
       startX:348.178,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [844]
    {  prize:5,
       numPegs:8,
       startX:348.098,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [845]
    {  prize:4,
       numPegs:8,
       startX:348.514,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [846]
    {  prize:4,
       numPegs:7,
       startX:351.346,
       bounceRecord: [1, 3, 5, 9, 10, 19, 18],
       randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [847]
    {  prize:4,
       numPegs:7,
       startX:351.18,
       bounceRecord: [1, 3, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [848]
    {  prize:2,
       numPegs:8,
       startX:348.052,
       bounceRecord: [1, 4, 2, 4, 8, 12, 17, 16],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
    },
    // [849]
    {  prize:6,
       numPegs:8,
       startX:351.948,
       bounceRecord: [1, 6, 3, 6, 9, 14, 20, 21],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [850]
    {  prize:4,
       numPegs:8,
       startX:348.57,
       bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [851]
    {  prize:5,
       numPegs:6,
       startX:351.762,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [852]
    {  prize:4,
       numPegs:8,
       startX:348.118,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18, 19],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
    },
    // [853]
    {  prize:3,
       numPegs:6,
       startX:348.666,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1]
    },
    // [854]
    {  prize:3,
       numPegs:5,
       startX:351.444,
       bounceRecord: [1, 3, 5, 8, 17],
       randomDirections: [-1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [855]
    {  prize:3,
       numPegs:6,
       startX:348.666,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [856]
    {  prize:3,
       numPegs:10,
       startX:351.872,
       bounceRecord: [1, 6, 3, 6, 9, 8, 9, 18, 12, 18],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
    },
    // [857]
    {  prize:7,
       numPegs:3,
       startX:348.838,
       bounceRecord: [1, 2, 9],
       randomDirections: [-1, -1, -1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [858]
    {  prize:6,
       numPegs:6,
       startX:348.83,
       bounceRecord: [1, 2, 9, 6, 9, 14],
       randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [859]
    {  prize:4,
       numPegs:7,
       startX:351.494,
       bounceRecord: [1, 3, 5, 9, 13, 18, 19],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, -1, -1, 1]
    },
    // [860]
    {  prize:2,
       numPegs:9,
       startX:348.626,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [861]
    {  prize:4,
       numPegs:7,
       startX:351.414,
       bounceRecord: [1, 3, 8, 5, 8, 13, 18],
       randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [862]
    {  prize:4,
       numPegs:7,
       startX:351.492,
       bounceRecord: [1, 3, 5, 9, 18, 13, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [863]
    {  prize:4,
       numPegs:6,
       startX:351.4,
       bounceRecord: [1, 3, 8, 13, 19, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, 1, -1]
    },
    // [864]
    {  prize:5,
       numPegs:8,
       startX:348.1,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, 1]
    },
    // [865]
    {  prize:4,
       numPegs:7,
       startX:348.064,
       bounceRecord: [1, 4, 2, 4, 8, 13, 14],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [866]
    {  prize:4,
       numPegs:5,
       startX:351.918,
       bounceRecord: [1, 6, 9, 13, 19],
       randomDirections: [1, 1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [867]
    {  prize:7,
       numPegs:4,
       startX:351.786,
       bounceRecord: [1, 3, 6, 10],
       randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [868]
    {  prize:1,
       numPegs:3,
       startX:348.156,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, -1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [869]
    {  prize:7,
       numPegs:5,
       startX:348.608,
       bounceRecord: [1, 2, 9, 10, 15],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [870]
    {  prize:3,
       numPegs:6,
       startX:348.578,
       bounceRecord: [1, 2, 9, 5, 9, 13],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [871]
    {  prize:5,
       numPegs:7,
       startX:348.572,
       bounceRecord: [1, 2, 5, 6, 5, 14, 20],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [872]
    {  prize:7,
       numPegs:4,
       startX:351.824,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, -1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [873]
    {  prize:4,
       numPegs:8,
       startX:348.118,
       bounceRecord: [1, 4, 2, 4, 8, 12, 18, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
    },
    // [874]
    {  prize:4,
       numPegs:8,
       startX:351.322,
       bounceRecord: [1, 3, 5, 9, 8, 14, 18, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [875]
    {  prize:3,
       numPegs:9,
       startX:351.376,
       bounceRecord: [1, 3, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [876]
    {  prize:5,
       numPegs:5,
       startX:348.316,
       bounceRecord: [1, 2, 4, 8, 19],
       randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [877]
    {  prize:4,
       numPegs:8,
       startX:348.656,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [878]
    {  prize:5,
       numPegs:7,
       startX:348.572,
       bounceRecord: [1, 2, 5, 6, 5, 14, 20],
       randomDirections: [1, -1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [879]
    {  prize:5,
       numPegs:5,
       startX:351.106,
       bounceRecord: [1, 3, 5, 14, 13],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [880]
    {  prize:4,
       numPegs:7,
       startX:348.544,
       bounceRecord: [1, 2, 5, 14, 9, 14, 19],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [881]
    {  prize:4,
       numPegs:7,
       startX:348.586,
       bounceRecord: [1, 2, 9, 5, 9, 13, 19],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [882]
    {  prize:6,
       numPegs:4,
       startX:351.996,
       bounceRecord: [1, 6, 15, 14],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [883]
    {  prize:6,
       numPegs:9,
       startX:351.14,
       bounceRecord: [1, 3, 5, 9, 10, 9, 20, 15, 20],
       randomDirections: [-1, 1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [884]
    {  prize:3,
       numPegs:8,
       startX:348.318,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [885]
    {  prize:7,
       numPegs:4,
       startX:351.82,
       bounceRecord: [1, 3, 10, 21],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [886]
    {  prize:5,
       numPegs:5,
       startX:348.742,
       bounceRecord: [1, 2, 5, 14, 15],
       randomDirections: [-1, 1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [887]
    {  prize:7,
       numPegs:4,
       startX:348.614,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [888]
    {  prize:5,
       numPegs:7,
       startX:348.558,
       bounceRecord: [1, 2, 5, 9, 20, 14, 20],
       randomDirections: [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [889]
    {  prize:2,
       numPegs:9,
       startX:348.86,
       bounceRecord: [1, 2, 5, 8, 7, 8, 17, 11, 17],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [890]
    {  prize:4,
       numPegs:6,
       startX:351.362,
       bounceRecord: [1, 3, 5, 14, 19, 18],
       randomDirections: [1, -1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [891]
    {  prize:3,
       numPegs:7,
       startX:351.442,
       bounceRecord: [1, 3, 5, 8, 17, 12, 17],
       randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [892]
    {  prize:5,
       numPegs:8,
       startX:351.144,
       bounceRecord: [1, 3, 5, 9, 10, 19, 14, 19],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [893]
    {  prize:5,
       numPegs:8,
       startX:348.582,
       bounceRecord: [1, 2, 9, 5, 9, 13, 19, 20],
       randomDirections: [-1, -1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [894]
    {  prize:5,
       numPegs:5,
       startX:348.906,
       bounceRecord: [1, 2, 5, 8, 13],
       randomDirections: [-1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [895]
    {  prize:3,
       numPegs:7,
       startX:348.642,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [896]
    {  prize:1,
       numPegs:3,
       startX:351.378,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, -1, -1]
    },
    // [897]
    {  prize:5,
       numPegs:7,
       startX:351.908,
       bounceRecord: [1, 6, 9, 8, 19, 14, 19],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [898]
    {  prize:4,
       numPegs:8,
       startX:351.882,
       bounceRecord: [1, 6, 3, 6, 9, 14, 19, 18],
       randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, -1, 1]
    },
    // [899]
    {  prize:4,
       numPegs:7,
       startX:351.492,
       bounceRecord: [1, 3, 5, 9, 18, 13, 18],
       randomDirections: [1, -1, -1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [900]
    {  prize:3,
       numPegs:8,
       startX:348.322,
       bounceRecord: [1, 2, 4, 8, 9, 18, 12, 18],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [901]
    {  prize:3,
       numPegs:6,
       startX:348.246,
       bounceRecord: [1, 2, 4, 7, 12, 13],
       randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [902]
    {  prize:3,
       numPegs:3,
       startX:348.002,
       bounceRecord: [1, 4, 11],
       randomDirections: [-1, -1, -1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [903]
    {  prize:1,
       numPegs:4,
       startX:348.174,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [904]
    {  prize:4,
       numPegs:4,
       startX:348.824,
       bounceRecord: [1, 2, 9, 14],
       randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [905]
    {  prize:4,
       numPegs:8,
       startX:348.692,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, 1, -1]
    },
    // [906]
    {  prize:5,
       numPegs:6,
       startX:351.136,
       bounceRecord: [1, 3, 5, 9, 14, 15],
       randomDirections: [-1, 1, 1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [907]
    {  prize:5,
       numPegs:5,
       startX:351.106,
       bounceRecord: [1, 3, 5, 14, 13],
       randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [908]
    {  prize:4,
       numPegs:5,
       startX:351.054,
       bounceRecord: [1, 3, 5, 12, 18],
       randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [909]
    {  prize:5,
       numPegs:7,
       startX:351.482,
       bounceRecord: [1, 3, 5, 9, 13, 19, 20],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [910]
    {  prize:4,
       numPegs:8,
       startX:351.284,
       bounceRecord: [1, 3, 5, 9, 13, 19, 13, 19],
       randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
    },
    // [911]
    {  prize:5,
       numPegs:9,
       startX:348.68,
       bounceRecord: [1, 2, 5, 8, 9, 8, 19, 14, 19],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [912]
    {  prize:2,
       numPegs:6,
       startX:351.17,
       bounceRecord: [1, 3, 8, 4, 8, 12],
       randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, -1]
    },
    // [913]
    {  prize:3,
       numPegs:8,
       startX:351.186,
       bounceRecord: [1, 3, 5, 4, 13, 8, 13, 18],
       randomDirections: [1, 1, -1, -1, 1, 1, -1, -1, -1, -1]
    },
    // [914]
    {  prize:4,
       numPegs:7,
       startX:348.54,
       bounceRecord: [1, 2, 5, 9, 14, 19, 18],
       randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, 1]
    },
    // [915]
    {  prize:5,
       numPegs:8,
       startX:348.098,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [916]
    {  prize:5,
       numPegs:6,
       startX:348.746,
       bounceRecord: [1, 2, 5, 9, 14, 15],
       randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [917]
    {  prize:3,
       numPegs:6,
       startX:348.666,
       bounceRecord: [1, 2, 5, 8, 13, 18],
       randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
    },
    // [918]
    {  prize:4,
       numPegs:8,
       startX:348.844,
       bounceRecord: [1, 2, 5, 12, 8, 12, 18, 19],
       randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [919]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [920]
    {  prize:5,
       numPegs:6,
       startX:348.314,
       bounceRecord: [1, 2, 4, 8, 13, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [921]
    {  prize:1,
       numPegs:4,
       startX:348.214,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
    },
    // [922]
    {  prize:5,
       numPegs:6,
       startX:348.746,
       bounceRecord: [1, 2, 5, 9, 14, 15],
       randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [923]
    {  prize:5,
       numPegs:8,
       startX:348.888,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13, 19],
       randomDirections: [1, 1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [924]
    {  prize:2,
       numPegs:7,
       startX:348.48,
       bounceRecord: [1, 2, 5, 8, 17, 11, 17],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [925]
    {  prize:5,
       numPegs:7,
       startX:351.74,
       bounceRecord: [1, 3, 6, 15, 10, 15, 20],
       randomDirections: [-1, 1, -1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [926]
    {  prize:2,
       numPegs:4,
       startX:351.182,
       bounceRecord: [1, 3, 8, 17],
       randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [927]
    {  prize:3,
       numPegs:6,
       startX:348.21,
       bounceRecord: [1, 2, 7, 11, 7, 11],
       randomDirections: [1, 1, -1, 1, 1, -1, -1, 1, -1, 1]
    },
    // [928]
    {  prize:7,
       numPegs:4,
       startX:348.614,
       bounceRecord: [1, 2, 9, 21],
       randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [929]
    {  prize:3,
       numPegs:7,
       startX:348.23,
       bounceRecord: [1, 2, 4, 7, 11, 12, 11],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [930]
    {  prize:5,
       numPegs:7,
       startX:351.74,
       bounceRecord: [1, 3, 6, 15, 10, 15, 20],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [931]
    {  prize:1,
       numPegs:3,
       startX:351.382,
       bounceRecord: [1, 3, 8],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, -1]
    },
    // [932]
    {  prize:4,
       numPegs:4,
       startX:348.824,
       bounceRecord: [1, 2, 9, 14],
       randomDirections: [-1, -1, 1, -1, 1, 1, -1, 1, -1, -1]
    },
    // [933]
    {  prize:4,
       numPegs:8,
       startX:348.514,
       bounceRecord: [1, 2, 5, 8, 7, 18, 13, 18],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [934]
    {  prize:2,
       numPegs:9,
       startX:348.63,
       bounceRecord: [1, 2, 5, 4, 5, 12, 17, 16, 17],
       randomDirections: [-1, -1, 1, -1, -1, 1, -1, 1, -1, 1]
    },
    // [935]
    {  prize:7,
       numPegs:3,
       startX:351.856,
       bounceRecord: [1, 3, 10],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, 1]
    },
    // [936]
    {  prize:5,
       numPegs:7,
       startX:351.966,
       bounceRecord: [1, 6, 3, 6, 9, 8, 19],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [937]
    {  prize:3,
       numPegs:7,
       startX:348.85,
       bounceRecord: [1, 2, 5, 8, 7, 12, 18],
       randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [938]
    {  prize:3,
       numPegs:8,
       startX:348.95,
       bounceRecord: [1, 2, 5, 6, 13, 8, 13, 18],
       randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
    },
    // [939]
    {  prize:1,
       numPegs:3,
       startX:348.154,
       bounceRecord: [1, 2, 7],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [940]
    {  prize:1,
       numPegs:4,
       startX:348.196,
       bounceRecord: [1, 2, 7, 11],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [941]
    {  prize:2,
       numPegs:9,
       startX:348.86,
       bounceRecord: [1, 2, 5, 8, 7, 8, 17, 11, 17],
       randomDirections: [1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [942]
    {  prize:1,
       numPegs:4,
       startX:348.214,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1]
    },
    // [943]
    {  prize:4,
       numPegs:7,
       startX:351.356,
       bounceRecord: [1, 3, 5, 14, 9, 14, 19],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, 1, 1]
    },
    // [944]
    {  prize:4,
       numPegs:8,
       startX:348.018,
       bounceRecord: [1, 4, 2, 4, 13, 9, 13, 19],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, 1]
    },
    // [945]
    {  prize:4,
       numPegs:5,
       startX:351.684,
       bounceRecord: [1, 3, 6, 9, 18],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, -1, 1]
    },
    // [946]
    {  prize:4,
       numPegs:9,
       startX:351.96,
       bounceRecord: [1, 6, 3, 6, 9, 10, 19, 13, 19],
       randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [947]
    {  prize:3,
       numPegs:5,
       startX:351.038,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, -1, -1, 1]
    },
    // [948]
    {  prize:3,
       numPegs:7,
       startX:348.096,
       bounceRecord: [1, 4, 2, 4, 8, 9, 18],
       randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [949]
    {  prize:6,
       numPegs:9,
       startX:351.668,
       bounceRecord: [1, 3, 6, 9, 10, 9, 20, 15, 20],
       randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [950]
    {  prize:3,
       numPegs:5,
       startX:348.208,
       bounceRecord: [1, 2, 7, 11, 17],
       randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [951]
    {  prize:3,
       numPegs:7,
       startX:348.954,
       bounceRecord: [1, 2, 5, 9, 13, 12, 18],
       randomDirections: [1, 1, -1, -1, -1, -1, -1, 1, -1, 1]
    },
    // [952]
    {  prize:3,
       numPegs:7,
       startX:348.11,
       bounceRecord: [1, 4, 2, 4, 8, 12, 11],
       randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [953]
    {  prize:5,
       numPegs:5,
       startX:351.302,
       bounceRecord: [1, 3, 5, 9, 20],
       randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, 1, -1]
    },
    // [954]
    {  prize:6,
       numPegs:6,
       startX:351.3,
       bounceRecord: [1, 3, 5, 9, 14, 20],
       randomDirections: [-1, -1, -1, 1, 1, -1, -1, 1, 1, -1]
    },
    // [955]
    {  prize:2,
       numPegs:7,
       startX:348.338,
       bounceRecord: [1, 2, 4, 8, 12, 11, 12],
       randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
    },
    // [956]
    {  prize:1,
       numPegs:4,
       startX:348.216,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, 1, -1]
    },
    // [957]
    {  prize:3,
       numPegs:6,
       startX:348.578,
       bounceRecord: [1, 2, 9, 5, 9, 13],
       randomDirections: [-1, 1, -1, -1, -1, 1, 1, 1, 1, -1]
    },
    // [958]
    {  prize:3,
       numPegs:6,
       startX:348.094,
       bounceRecord: [1, 4, 8, 13, 12, 13],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [959]
    {  prize:5,
       numPegs:9,
       startX:351.954,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15, 20, 19],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [960]
    {  prize:5,
       numPegs:6,
       startX:348.594,
       bounceRecord: [1, 2, 9, 8, 19, 14],
       randomDirections: [1, 1, 1, 1, 1, 1, 1, -1, 1, 1]
    },
    // [961]
    {  prize:5,
       numPegs:7,
       startX:348.682,
       bounceRecord: [1, 2, 5, 4, 13, 9, 13],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
    },
    // [962]
    {  prize:4,
       numPegs:8,
       startX:351.352,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19, 18],
       randomDirections: [-1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [963]
    {  prize:2,
       numPegs:6,
       startX:348.188,
       bounceRecord: [1, 2, 7, 16, 11, 16],
       randomDirections: [1, -1, 1, -1, 1, 1, -1, -1, 1, 1]
    },
    // [964]
    {  prize:4,
       numPegs:7,
       startX:351.35,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [965]
    {  prize:7,
       numPegs:5,
       startX:351.746,
       bounceRecord: [1, 3, 6, 15, 21],
       randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [966]
    {  prize:6,
       numPegs:9,
       startX:351.668,
       bounceRecord: [1, 3, 6, 9, 10, 9, 20, 15, 20],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
    },
    // [967]
    {  prize:1,
       numPegs:4,
       startX:348.262,
       bounceRecord: [1, 2, 4, 7],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [968]
    {  prize:4,
       numPegs:7,
       startX:351.46,
       bounceRecord: [1, 3, 5, 8, 12, 18, 19],
       randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [969]
    {  prize:3,
       numPegs:9,
       startX:348.652,
       bounceRecord: [1, 2, 5, 8, 7, 12, 13, 18, 17],
       randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    },
    // [970]
    {  prize:3,
       numPegs:6,
       startX:348.52,
       bounceRecord: [1, 2, 5, 8, 12, 17],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [971]
    {  prize:5,
       numPegs:9,
       startX:351.954,
       bounceRecord: [1, 6, 3, 6, 9, 14, 15, 20, 19],
       randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, -1]
    },
    // [972]
    {  prize:5,
       numPegs:8,
       startX:351.682,
       bounceRecord: [1, 3, 6, 9, 8, 19, 14, 19],
       randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [973]
    {  prize:5,
       numPegs:5,
       startX:351.066,
       bounceRecord: [1, 3, 5, 8, 13],
       randomDirections: [-1, -1, 1, -1, -1, -1, 1, 1, -1, 1]
    },
    // [974]
    {  prize:5,
       numPegs:6,
       startX:351.728,
       bounceRecord: [1, 3, 6, 10, 14, 19],
       randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [975]
    {  prize:1,
       numPegs:4,
       startX:351.384,
       bounceRecord: [1, 3, 8, 16],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, 1, 1, 1]
    },
    // [976]
    {  prize:3,
       numPegs:6,
       startX:348.758,
       bounceRecord: [1, 2, 4, 8, 13, 18],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
    },
    // [977]
    {  prize:6,
       numPegs:9,
       startX:351.14,
       bounceRecord: [1, 3, 5, 9, 10, 9, 20, 15, 20],
       randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [978]
    {  prize:5,
       numPegs:7,
       startX:351.368,
       bounceRecord: [1, 3, 5, 6, 5, 14, 20],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1]
    },
    // [979]
    {  prize:3,
       numPegs:6,
       startX:348.358,
       bounceRecord: [1, 2, 4, 8, 13, 18],
       randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [980]
    {  prize:5,
       numPegs:7,
       startX:351.452,
       bounceRecord: [1, 3, 5, 8, 13, 14, 13],
       randomDirections: [-1, 1, 1, 1, 1, 1, -1, 1, 1, -1]
    },
    // [981]
    {  prize:3,
       numPegs:6,
       startX:351.91,
       bounceRecord: [1, 6, 9, 18, 12, 18],
       randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [982]
    {  prize:3,
       numPegs:7,
       startX:351.45,
       bounceRecord: [1, 3, 5, 8, 13, 18, 17],
       randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
    },
    // [983]
    {  prize:3,
       numPegs:5,
       startX:348.27,
       bounceRecord: [1, 2, 4, 7, 18],
       randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [984]
    {  prize:5,
       numPegs:7,
       startX:351.966,
       bounceRecord: [1, 6, 3, 6, 9, 8, 19],
       randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, -1, 1]
    },
    // [985]
    {  prize:4,
       numPegs:8,
       startX:348.716,
       bounceRecord: [1, 2, 5, 8, 13, 18, 13, 18],
       randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, -1]
    },
    // [986]
    {  prize:3,
       numPegs:7,
       startX:351.122,
       bounceRecord: [1, 3, 5, 9, 18, 12, 18],
       randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [987]
    {  prize:4,
       numPegs:8,
       startX:351.146,
       bounceRecord: [1, 3, 5, 9, 10, 14, 19, 18],
       randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [988]
    {  prize:2,
       numPegs:5,
       startX:348.012,
       bounceRecord: [1, 4, 8, 12, 17],
       randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [989]
    {  prize:5,
       numPegs:8,
       startX:348.126,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [1, 1, -1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [990]
    {  prize:2,
       numPegs:9,
       startX:348.628,
       bounceRecord: [1, 2, 5, 4, 5, 12, 7, 12, 17],
       randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [991]
    {  prize:1,
       numPegs:3,
       startX:348.15,
       bounceRecord: [1, 2, 7],
       randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, -1, -1]
    },
    // [992]
    {  prize:3,
       numPegs:7,
       startX:351.434,
       bounceRecord: [1, 3, 5, 12, 8, 12, 18],
       randomDirections: [1, 1, 1, -1, 1, -1, -1, -1, 1, 1]
    },
    // [993]
    {  prize:7,
       numPegs:4,
       startX:351.804,
       bounceRecord: [1, 3, 10, 15],
       randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [994]
    {  prize:1,
       numPegs:3,
       startX:351.162,
       bounceRecord: [1, 3, 8],
       randomDirections: [1, -1, 1, 1, 1, -1, -1, 1, -1, -1]
    },
    // [995]
    {  prize:1,
       numPegs:3,
       startX:351.164,
       bounceRecord: [1, 3, 8],
       randomDirections: [-1, 1, 1, -1, 1, 1, -1, -1, -1, 1]
    },
    // [996]
    {  prize:5,
       numPegs:8,
       startX:348.1,
       bounceRecord: [1, 4, 2, 4, 8, 9, 8, 19],
       randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
    },
    // [997]
    {  prize:1,
       numPegs:4,
       startX:348.178,
       bounceRecord: [1, 2, 7, 16],
       randomDirections: [1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    },
    // [998]
    {  prize:4,
       numPegs:6,
       startX:348.038,
       bounceRecord: [1, 4, 2, 4, 8, 12],
       randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [999]
    {  prize:4,
       numPegs:6,
       startX:348.6,
       bounceRecord: [1, 2, 9, 13, 18, 19],
       randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    }
    ];