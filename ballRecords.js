
////////////////////////////////////////////////////////////
// gravity = 0.08
// x_dampener = 0.6
// y_dampener = 0.5
// dxLim = 0.04
////////////////////////////////////////////////////////////

//Counts: (0)35 (1)19 (2)41 (3)45 (4)32 (5)50  = 222

let ballRecords = [
    // [0]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [1]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [2]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.028,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [3]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [4]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.032,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [5]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [6]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [7]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.894,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [8]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.028,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [9]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.894,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [10]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.032,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [11]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.894,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [12]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [13]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [14]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [15]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.028,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [16]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [17]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [18]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [19]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [20]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [21]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [22]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [23]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [24]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [25]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [26]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [27]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [28]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [29]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [30]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [31]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [32]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [33]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [34]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [35]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [36]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [37]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [38]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [39]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [40]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [41]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [42]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [43]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [44]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [45]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [46]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [47]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [48]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [49]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [50]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [51]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [52]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [53]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [54]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [55]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [56]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [57]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [58]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [59]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.316,
        bounceRecord: [1, 2, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [60]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.614,
        bounceRecord: [1, 2, 5, 12, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [61]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.2,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [62]
    {
        prize: 5,
        numPegs: 7,
        startX: 268.72,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [63]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [64]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.214,
        bounceRecord: [1, 3, 5, 9, 14],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [65]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [66]
    {
        prize: 2,
        numPegs: 7,
        startX: 268.816,
        bounceRecord: [1, 4, 2, 4, 8, 12, 11],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, 1, 1]
    },
    // [67]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.352,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [68]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.322,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [69]
    {
        prize: 5,
        numPegs: 6,
        startX: 268.532,
        bounceRecord: [1, 2, 5, 6, 5, 14],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [70]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.316,
        bounceRecord: [1, 2, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [71]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.738,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [72]
    {
        prize: 5,
        numPegs: 7,
        startX: 268.72,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [73]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [74]
    {
        prize: 3,
        numPegs: 3,
        startX: 268.92,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [75]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.768,
        bounceRecord: [1, 2, 5, 8, 7, 12],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, 1, -1]
    },
    // [76]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.152,
        bounceRecord: [1, 6, 3, 6, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [77]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.328,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [78]
    {
        prize: 3,
        numPegs: 3,
        startX: 268.92,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [79]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.2,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [80]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.604,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [81]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.924,
        bounceRecord: [1, 2, 7, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [82]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.214,
        bounceRecord: [1, 3, 5, 9, 14],
        randomDirections: [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1]
    },
    // [83]
    {
        prize: 3,
        numPegs: 6,
        startX: 272.436,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [84]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.896,
        bounceRecord: [1, 3, 6, 9, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [85]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.316,
        bounceRecord: [1, 2, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [86]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.934,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, 1, -1]
    },
    // [87]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.084,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [88]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.548,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [89]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.604,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [90]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.176,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [91]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.186,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [92]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.316,
        bounceRecord: [1, 2, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [93]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.896,
        bounceRecord: [1, 3, 6, 9, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [94]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.098,
        bounceRecord: [1, 3, 10, 15],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [95]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.2,
        bounceRecord: [1, 3, 5, 9, 8],
        randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, -1]
    },
    // [96]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, 1, 1, 1, -1, 1, -1, -1, 1]
    },
    // [97]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [98]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.186,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [99]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.086,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [100]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.03,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [101]
    {
        prize: 3,
        numPegs: 3,
        startX: 268.92,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [102]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.604,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [103]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.934,
        bounceRecord: [1, 2, 7, 4, 7, 12],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [104]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.47,
        bounceRecord: [1, 3, 5, 4],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [105]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.614,
        bounceRecord: [1, 2, 5, 12, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [106]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [107]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.404,
        bounceRecord: [1, 3, 5, 9, 14, 15],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, 1]
    },
    // [108]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.792,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [109]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.36,
        bounceRecord: [1, 2, 5, 9, 10, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [110]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.376,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [111]
    {
        prize: 3,
        numPegs: 5,
        startX: 272.376,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [112]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.032,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [113]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.792,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [114]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.186,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [115]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.254,
        bounceRecord: [1, 3, 5, 6, 5, 14],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [116]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.818,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [117]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.924,
        bounceRecord: [1, 2, 7, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [118]
    {
        prize: 5,
        numPegs: 7,
        startX: 268.72,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [119]
    {
        prize: 3,
        numPegs: 3,
        startX: 268.92,
        bounceRecord: [1, 2, 7],
        randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [120]
    {
        prize: 2,
        numPegs: 4,
        startX: 268.924,
        bounceRecord: [1, 2, 7, 8],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [121]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.596,
        bounceRecord: [1, 2, 5, 8, 12, 11],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [122]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.152,
        bounceRecord: [1, 6, 3, 6, 13],
        randomDirections: [1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [123]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.896,
        bounceRecord: [1, 3, 6, 9, 8, 9],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [124]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.36,
        bounceRecord: [1, 2, 5, 9, 10, 9],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [125]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.792,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [126]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.548,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, 1, -1, 1, 1, -1, 1, -1, 1, 1]
    },
    // [127]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.28,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [128]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.76,
        bounceRecord: [1, 2, 5, 12, 8, 12],
        randomDirections: [1, 1, -1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [129]
    {
        prize: 4,
        numPegs: 4,
        startX: 272.084,
        bounceRecord: [1, 3, 10, 14],
        randomDirections: [-1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [130]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.194,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [131]
    {
        prize: 3,
        numPegs: 3,
        startX: 268.92,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
    },
    // [132]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.032,
        bounceRecord: [1, 2, 4],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [133]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]
    },
    // [134]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.194,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [135]
    {
        prize: 3,
        numPegs: 6,
        startX: 268.614,
        bounceRecord: [1, 2, 5, 12, 8, 12],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [136]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.984,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, -1, -1, 1, 1, -1, -1, 1]
    },
    // [137]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.988,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
    },
    // [138]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, 1, 1, -1, -1, 1, 1, -1, -1]
    },
    // [139]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.978,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, 1, -1]
    },
    // [140]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, -1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [141]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.738,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
    },
    // [142]
    {
        prize: 1,
        numPegs: 3,
        startX: 268.896,
        bounceRecord: [1, 2, 7],
        randomDirections: [1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [143]
    {
        prize: 5,
        numPegs: 4,
        startX: 269.358,
        bounceRecord: [1, 2, 5, 9],
        randomDirections: [1, -1, -1, 1, 1, -1, 1, 1, -1, 1]
    },
    // [144]
    {
        prize: 4,
        numPegs: 4,
        startX: 268.61,
        bounceRecord: [1, 2, 5, 8],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [145]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.868,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [146]
    {
        prize: 2,
        numPegs: 3,
        startX: 272.406,
        bounceRecord: [1, 3, 8],
        randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, -1]
    },
    // [147]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.054,
        bounceRecord: [1, 3, 10, 6, 10, 15],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, -1]
    },
    // [148]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.728,
        bounceRecord: [1, 2, 3, 8, 12],
        randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
    },
    // [149]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.36,
        bounceRecord: [1, 2, 5, 9, 10, 9],
        randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, 1]
    },
    // [150]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.306,
        bounceRecord: [1, 3, 5, 4, 13, 14],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [151]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.22,
        bounceRecord: [1, 3, 5, 9, 14, 15],
        randomDirections: [-1, -1, 1, 1, -1, 1, -1, -1, 1, 1]
    },
    // [152]
    {
        prize: 5,
        numPegs: 7,
        startX: 268.72,
        bounceRecord: [1, 2, 9, 6, 9, 14, 15],
        randomDirections: [-1, 1, -1, 1, 1, -1, 1, 1, -1, -1]
    },
    // [153]
    {
        prize: 3,
        numPegs: 5,
        startX: 271.658,
        bounceRecord: [1, 3, 5, 8, 9],
        randomDirections: [-1, 1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [154]
    {
        prize: 6,
        numPegs: 4,
        startX: 271.85,
        bounceRecord: [1, 3, 6, 10],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [155]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.28,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [156]
    {
        prize: 3,
        numPegs: 7,
        startX: 268.738,
        bounceRecord: [1, 2, 3, 8, 4, 8, 12],
        randomDirections: [-1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
    },
    // [157]
    {
        prize: 3,
        numPegs: 7,
        startX: 268.74,
        bounceRecord: [1, 2, 3, 8, 4, 8, 12],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [158]
    {
        prize: 2,
        numPegs: 6,
        startX: 272.344,
        bounceRecord: [1, 3, 5, 12, 7, 12],
        randomDirections: [1, 1, -1, 1, 1, -1, -1, -1, -1, 1]
    },
    // [159]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [-1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [160]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.314,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [161]
    {
        prize: 5,
        numPegs: 7,
        startX: 272.166,
        bounceRecord: [1, 6, 3, 6, 9, 14, 15],
        randomDirections: [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1]
    },
    // [162]
    {
        prize: 2,
        numPegs: 7,
        startX: 268.816,
        bounceRecord: [1, 4, 2, 4, 8, 12, 11],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [163]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.372,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [164]
    {
        prize: 4,
        numPegs: 7,
        startX: 268.852,
        bounceRecord: [1, 4, 2, 4, 13, 9, 13],
        randomDirections: [1, -1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [165]
    {
        prize: 5,
        numPegs: 6,
        startX: 269.356,
        bounceRecord: [1, 2, 5, 9, 14, 15],
        randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [166]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.792,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [167]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.596,
        bounceRecord: [1, 2, 5, 8, 12, 11],
        randomDirections: [1, -1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [168]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.938,
        bounceRecord: [1, 2, 7, 4, 7, 11],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, -1, 1]
    },
    // [169]
    {
        prize: 5,
        numPegs: 6,
        startX: 268.532,
        bounceRecord: [1, 2, 5, 6, 5, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    // [170]
    {
        prize: 5,
        numPegs: 6,
        startX: 268.532,
        bounceRecord: [1, 2, 5, 6, 5, 14],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [171]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.058,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, -1, -1]
    },
    // [172]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.896,
        bounceRecord: [1, 3, 6, 9, 8, 9],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [173]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.682,
        bounceRecord: [1, 3, 5, 8, 13],
        randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [174]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.928,
        bounceRecord: [1, 3, 6, 9, 13],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [175]
    {
        prize: 4,
        numPegs: 5,
        startX: 272.476,
        bounceRecord: [1, 3, 5, 8, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [176]
    {
        prize: 4,
        numPegs: 5,
        startX: 268.796,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
    },
    // [177]
    {
        prize: 4,
        numPegs: 7,
        startX: 272.428,
        bounceRecord: [1, 3, 5, 9, 10, 14, 13],
        randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, -1]
    },
    // [178]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.194,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [179]
    {
        prize: 4,
        numPegs: 4,
        startX: 269.328,
        bounceRecord: [1, 2, 5, 14],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, -1, 1]
    },
    // [180]
    {
        prize: 1,
        numPegs: 3,
        startX: 269.02,
        bounceRecord: [1, 2, 4],
        randomDirections: [1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [181]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.764,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, -1, -1, -1]
    },
    // [182]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.916,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, -1, -1, -1, -1, -1, 1, 1, -1, -1]
    },
    // [183]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.186,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [184]
    {
        prize: 3,
        numPegs: 6,
        startX: 272.326,
        bounceRecord: [1, 3, 5, 4, 8, 9],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [185]
    {
        prize: 5,
        numPegs: 4,
        startX: 271.936,
        bounceRecord: [1, 3, 6, 9],
        randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [186]
    {
        prize: 2,
        numPegs: 4,
        startX: 271.642,
        bounceRecord: [1, 3, 5, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [187]
    {
        prize: 3,
        numPegs: 6,
        startX: 271.628,
        bounceRecord: [1, 3, 5, 12, 8, 12],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [188]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.564,
        bounceRecord: [1, 3, 6, 10, 14, 13],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, 1, -1]
    },
    // [189]
    {
        prize: 5,
        numPegs: 5,
        startX: 271.89,
        bounceRecord: [1, 3, 6, 9, 14],
        randomDirections: [1, -1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [190]
    {
        prize: 2,
        numPegs: 6,
        startX: 272.336,
        bounceRecord: [1, 3, 5, 4, 5, 12],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [191]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.182,
        bounceRecord: [1, 2, 4, 8, 9],
        randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, 1]
    },
    // [192]
    {
        prize: 4,
        numPegs: 5,
        startX: 271.94,
        bounceRecord: [1, 3, 6, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, 1, -1]
    },
    // [193]
    {
        prize: 4,
        numPegs: 7,
        startX: 272.264,
        bounceRecord: [1, 3, 2, 9, 6, 9, 14],
        randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1]
    },
    // [194]
    {
        prize: 5,
        numPegs: 6,
        startX: 271.852,
        bounceRecord: [1, 3, 6, 9, 14, 15],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, 1]
    },
    // [195]
    {
        prize: 4,
        numPegs: 6,
        startX: 269.362,
        bounceRecord: [1, 2, 5, 9, 10, 14],
        randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [196]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.604,
        bounceRecord: [1, 2, 5, 8, 13],
        randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
    },
    // [197]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.28,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [198]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.194,
        bounceRecord: [1, 6, 3, 6, 9, 14],
        randomDirections: [1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
    },
    // [199]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.766,
        bounceRecord: [1, 2, 5, 8, 7],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, 1]
    },
    // [200]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.98,
        bounceRecord: [1, 3, 6],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [201]
    {
        prize: 2,
        numPegs: 6,
        startX: 268.596,
        bounceRecord: [1, 2, 5, 8, 12, 11],
        randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, 1]
    },
    // [202]
    {
        prize: 3,
        numPegs: 5,
        startX: 269.058,
        bounceRecord: [1, 2, 4, 8, 13],
        randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [203]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.706,
        bounceRecord: [1, 2, 9, 6, 9, 14],
        randomDirections: [1, -1, 1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [204]
    {
        prize: 5,
        numPegs: 6,
        startX: 272.404,
        bounceRecord: [1, 3, 5, 9, 14, 15],
        randomDirections: [1, 1, 1, 1, 1, 1, -1, -1, -1, -1]
    },
    // [205]
    {
        prize: 3,
        numPegs: 4,
        startX: 268.658,
        bounceRecord: [1, 2, 5, 6],
        randomDirections: [-1, 1, -1, 1, -1, -1, -1, -1, 1, 1]
    },
    // [206]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.62,
        bounceRecord: [1, 3, 5, 4, 9, 8],
        randomDirections: [-1, 1, -1, 1, -1, 1, -1, 1, 1, -1]
    },
    // [207]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.744,
        bounceRecord: [1, 3, 5, 8, 13, 14],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [208]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.322,
        bounceRecord: [1, 2, 5, 9, 10],
        randomDirections: [-1, 1, -1, 1, 1, -1, -1, -1, 1, -1]
    },
    // [209]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [210]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    },
    // [211]
    {
        prize: 4,
        numPegs: 6,
        startX: 271.744,
        bounceRecord: [1, 3, 5, 8, 13, 14],
        randomDirections: [1, -1, 1, 1, 1, -1, -1, -1, -1, -1]
    },
    // [212]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.382,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1]
    },
    // [213]
    {
        prize: 5,
        numPegs: 4,
        startX: 272.382,
        bounceRecord: [1, 3, 5, 9],
        randomDirections: [1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
    },
    // [214]
    {
        prize: 1,
        numPegs: 4,
        startX: 269.138,
        bounceRecord: [1, 2, 4, 7],
        randomDirections: [1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [215]
    {
        prize: 4,
        numPegs: 5,
        startX: 269.352,
        bounceRecord: [1, 2, 5, 9, 14],
        randomDirections: [1, 1, 1, -1, 1, 1, 1, -1, 1, -1]
    },
    // [216]
    {
        prize: 3,
        numPegs: 5,
        startX: 272.376,
        bounceRecord: [1, 3, 5, 9, 13],
        randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
    },
    // [217]
    {
        prize: 4,
        numPegs: 6,
        startX: 272.068,
        bounceRecord: [1, 3, 10, 6, 10, 14],
        randomDirections: [-1, 1, -1, -1, 1, -1, 1, 1, 1, 1]
    },
    // [218]
    {
        prize: 4,
        numPegs: 6,
        startX: 268.548,
        bounceRecord: [1, 2, 5, 14, 9, 14],
        randomDirections: [1, -1, -1, 1, -1, 1, -1, -1, -1, -1]
    },
    // [219]
    {
        prize: 3,
        numPegs: 5,
        startX: 268.792,
        bounceRecord: [1, 2, 5, 8, 12],
        randomDirections: [-1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
    },
    // [220]
    {
        prize: 2,
        numPegs: 6,
        startX: 269.28,
        bounceRecord: [1, 2, 5, 8, 7, 8],
        randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
    },
    // [221]
    {
        prize: 6,
        numPegs: 3,
        startX: 271.562,
        bounceRecord: [1, 3, 6],
        randomDirections: [1, 1, -1, -1, 1, -1, -1, 1, 1, 1]
    }
];